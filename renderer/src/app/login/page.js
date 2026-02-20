"use client"; // 1. OBRIGATÓRIO: indica que este componente roda no navegador/janela

import Link from "next/link";
import { useRouter } from "next/navigation"; // Para redirecionar após o login

export default function LoginPage() {
  const router = useRouter();

const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const senhaDigitada = formData.get("senha");

    // Chama o "servidor" interno do Electron
    const resposta = await window.ipc.invoke('executar-login', { email, senhaDigitada });

    if (resposta.success) {
      // Em vez de cookies, você pode salvar no localStorage se precisar persistir
      localStorage.setItem("usuario_id", resposta.usuarioId);
      
      router.push("/home"); // Redirecionamento via Front-end
    } else {
      // Simula o redirecionamento de erro que você tinha
      router.push(`/error-page?msg=${resposta.message}&cod=${resposta.code}`);
    }
  };


  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Acesse sua conta (App Mac)
        </h1>

        {/* 5. MUDANÇA: Usamos onSubmit em vez de action POST */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              name="email"
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black"
              placeholder="exemplo@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              name="senha"
              type="password"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 text-black"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Entrar no Sistema
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Dica: Use o Prisma Studio para criar seu usuário.
        </p>

        <p className="mt-4 text-center text-sm text-gray-600">
          Não tem uma conta?
          <Link
            href="/cadastro"
            className="text-blue-600 font-bold hover:underline ml-1"
          >
            Cadastre-se aqui
          </Link>
        </p>
      </div>
    </main>
  );
}
