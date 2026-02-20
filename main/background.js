const dotenv = require('dotenv');
const { app, ipcMain } = require('electron');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const isProd = process.env.NODE_ENV === 'production';

// CARREGA O .ENV MANUALMENTE NA RAIZ
dotenv.config({ path: path.join(process.cwd(), '.env') });

// ADICIONE ESTA LINHA AQUI:
app.disableHardwareAcceleration();

// Se estiver em produção (instalado no Mac), salva na pasta de dados do usuário
// Se estiver em desenvolvimento, usa o arquivo local da pasta prisma
const dbPath = isProd 
  ? path.join(app.getPath('userData'), 'database.db') 
  : path.join(process.cwd(), 'prisma', 'dev.db');

// 2. FORÇAR O PRISMA A USAR ESSE CAMINHO
// Isso substitui o que estiver no seu arquivo .env
process.env.DATABASE_URL = `file:${dbPath}`;

// Agora o Prisma será iniciado com o caminho correto
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath}`,
    },
  },
});



(async () => {
  await app.whenReady();

  // Carrega o electron-serve se estiver em produção
  if (isProd) {
    const serve = (await import('electron-serve')).default;
    serve({ directory: 'app' });
  }

  // CRIANDO A JANELA DIRETAMENTE (Sem depender do helpers.js)
  const { BrowserWindow } = require('electron');
  
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home');
  } else {
    // Pega a porta do argumento (Nextron passa no índice 2)
    const port = process.argv[2] || 8888;
    await mainWindow.loadURL(`http://localhost:${port}/login`);
  }
})();


// --- HANDLERS DO PRISMA (LOGIN) ---
ipcMain.handle('executar-login', async (event, { email, senhaDigitada }) => {
  try {
    const usuario = await prisma.user.findUnique({
      where: { email: email }
    });

    if (usuario) {
      const senhaBate = await bcrypt.compare(senhaDigitada, usuario.senha);
      if (senhaBate) {
        return { success: true, usuarioId: usuario.id };
      }
    }
    return { success: false, message: "Usuário ou senha inválidos", code: 401 };
  } catch (error) {
    console.error("Erro no Login:", error);
    return { success: false, message: "Erro técnico no banco", code: 500 };
  }
});

// --- HANDLERS DO PRISMA (CADASTRO) ---
ipcMain.handle('executar-cadastro', async (event, { nome, email, senha }) => {
  try {
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senha, saltRounds);

    const novoUsuario = await prisma.user.create({
      data: { nome, email, senha: senhaHash }
    });

    return { success: true, usuarioId: novoUsuario.id };
  } catch (error) {
    console.error("Erro no sistema:", error);
    if (error.code === 'P2002') {
      return { success: false, message: "Este email já está em uso", code: 403 };
    }
    return { success: false, message: "Erro ao conectar com o banco SQLite", code: 500 };
  }
});

// main/background.js

// ... outros handlers (login, cadastro) ...

ipcMain.handle('buscar-usuario', async (event, { id }) => {
  console.log("Recebi pedido para buscar ID:", id); // Isso vai aparecer no terminal do VS Code
  try {
    const usuario = await prisma.user.findUnique({
      where: { id: Number(id) }, // Garante que o ID seja um número
      select: { id: true, nome: true, email: true } // Não envia a senha
    });
    return usuario;
  } catch (error) {
    console.error("Erro ao buscar no Prisma:", error);
    return null;
  }
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
