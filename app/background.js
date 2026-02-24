(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("dotenv"), require("@prisma/client"), require("bcrypt"), require("electron-serve"));
	else if(typeof define === 'function' && define.amd)
		define(["dotenv", "@prisma/client", "bcrypt", "electron-serve"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("dotenv"), require("@prisma/client"), require("bcrypt"), require("electron-serve")) : factory(root["dotenv"], root["@prisma/client"], root["bcrypt"], root["electron-serve"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, (__WEBPACK_EXTERNAL_MODULE_dotenv__, __WEBPACK_EXTERNAL_MODULE__prisma_client__, __WEBPACK_EXTERNAL_MODULE_bcrypt__, __WEBPACK_EXTERNAL_MODULE_electron_serve__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__prisma_client__;

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_bcrypt__;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_dotenv__;

/***/ }),

/***/ "electron-serve":
/*!*********************************!*\
  !*** external "electron-serve" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_electron_serve__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./main/background.js ***!
  \****************************/
const dotenv = __webpack_require__(/*! dotenv */ "dotenv");
const {
  app,
  ipcMain
} = __webpack_require__(/*! electron */ "electron");
const path = __webpack_require__(/*! path */ "path");
const {
  PrismaClient
} = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const isProd = "development" === 'production';

// CARREGA O .ENV MANUALMENTE NA RAIZ
dotenv.config({
  path: path.join(process.cwd(), '.env')
});

// ADICIONE ESTA LINHA AQUI:
app.disableHardwareAcceleration();

// Se estiver em produção (instalado no Mac), salva na pasta de dados do usuário
// Se estiver em desenvolvimento, usa o arquivo local da pasta prisma
const dbPath = isProd ? path.join(app.getPath('userData'), 'database.db') : path.join(process.cwd(), 'prisma', 'dev.db');

// 2. FORÇAR O PRISMA A USAR ESSE CAMINHO
// Isso substitui o que estiver no seu arquivo .env
process.env.DATABASE_URL = `file:${dbPath}`;

// Agora o Prisma será iniciado com o caminho correto
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath}`
    }
  }
});
(async () => {
  await app.whenReady();

  // Carrega o electron-serve se estiver em produção
  if (isProd) {
    const serve = (await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! electron-serve */ "electron-serve", 23))).default;
    serve({
      directory: 'app'
    });
  }

  // CRIANDO A JANELA DIRETAMENTE (Sem depender do helpers.js)
  const {
    BrowserWindow
  } = __webpack_require__(/*! electron */ "electron");
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
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
ipcMain.handle('executar-login', async (event, {
  email,
  senhaDigitada
}) => {
  try {
    const usuario = await prisma.user.findUnique({
      where: {
        email: email
      }
    });
    if (usuario) {
      const senhaBate = await bcrypt.compare(senhaDigitada, usuario.senha);
      if (senhaBate) {
        return {
          success: true,
          usuarioId: usuario.id
        };
      }
    }
    return {
      success: false,
      message: "Usuário ou senha inválidos",
      code: 401
    };
  } catch (error) {
    console.error("Erro no Login:", error);
    return {
      success: false,
      message: "Erro técnico no banco",
      code: 500
    };
  }
});

// --- HANDLERS DO PRISMA (CADASTRO) ---
ipcMain.handle('executar-cadastro', async (event, {
  nome,
  email,
  senha
}) => {
  try {
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senha, saltRounds);
    const novoUsuario = await prisma.user.create({
      data: {
        nome,
        email,
        senha: senhaHash
      }
    });
    return {
      success: true,
      usuarioId: novoUsuario.id
    };
  } catch (error) {
    console.error("Erro no sistema:", error);
    if (error.code === 'P2002') {
      return {
        success: false,
        message: "Este email já está em uso",
        code: 403
      };
    }
    return {
      success: false,
      message: "Erro ao conectar com o banco SQLite",
      code: 500
    };
  }
});

// main/background.js

// ... outros handlers (login, cadastro) ...

ipcMain.handle('buscar-usuario', async (event, {
  id
}) => {
  console.log("Recebi pedido para buscar ID:", id); // Isso vai aparecer no terminal do VS Code
  try {
    const usuario = await prisma.user.findUnique({
      where: {
        id: Number(id)
      },
      // Garante que o ID seja um número
      select: {
        id: true,
        nome: true,
        email: true
      } // Não envia a senha
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
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0RjtBQUNGLENBQUMsQ0FBQzs7QUFFRjs7QUFFQTs7QUFFQWxELE9BQU8sQ0FBQ21DLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPQyxLQUFLLEVBQUU7RUFBRVk7QUFBRyxDQUFDLEtBQUs7RUFDeERJLE9BQU8sQ0FBQ1EsR0FBRyxDQUFDLCtCQUErQixFQUFFWixFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2xELElBQUk7SUFDRixNQUFNVCxPQUFPLEdBQUcsTUFBTXhCLE1BQU0sQ0FBQ3lCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO01BQzNDQyxLQUFLLEVBQUU7UUFBRU0sRUFBRSxFQUFFYSxNQUFNLENBQUNiLEVBQUU7TUFBRSxDQUFDO01BQUU7TUFDM0JjLE1BQU0sRUFBRTtRQUFFZCxFQUFFLEVBQUUsSUFBSTtRQUFFSyxJQUFJLEVBQUUsSUFBSTtRQUFFaEIsS0FBSyxFQUFFO01BQUssQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQztJQUNGLE9BQU9FLE9BQU87RUFDaEIsQ0FBQyxDQUFDLE9BQU9ZLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQywyQkFBMkIsRUFBRUEsS0FBSyxDQUFDO0lBQ2pELE9BQU8sSUFBSTtFQUNiO0FBQ0YsQ0FBQyxDQUFDO0FBR0ZwRCxHQUFHLENBQUNnRSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsTUFBTTtFQUNoQyxJQUFJMUQsT0FBTyxDQUFDMkQsUUFBUSxLQUFLLFFBQVEsRUFBRTtJQUNqQ2pFLEdBQUcsQ0FBQ2tFLElBQUksQ0FBQyxDQUFDO0VBQ1o7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21ldS1zaXN0ZW1hLWRlLWxvZ2luL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9tZXUtc2lzdGVtYS1kZS1sb2dpbi9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly9tZXUtc2lzdGVtYS1kZS1sb2dpbi9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL21ldS1zaXN0ZW1hLWRlLWxvZ2luL2V4dGVybmFsIHVtZCBcIkBwcmlzbWEvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vbWV1LXNpc3RlbWEtZGUtbG9naW4vZXh0ZXJuYWwgdW1kIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vbWV1LXNpc3RlbWEtZGUtbG9naW4vZXh0ZXJuYWwgdW1kIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vbWV1LXNpc3RlbWEtZGUtbG9naW4vZXh0ZXJuYWwgdW1kIFwiZWxlY3Ryb24tc2VydmVcIiIsIndlYnBhY2s6Ly9tZXUtc2lzdGVtYS1kZS1sb2dpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXUtc2lzdGVtYS1kZS1sb2dpbi93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZXUtc2lzdGVtYS1kZS1sb2dpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWV1LXNpc3RlbWEtZGUtbG9naW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXUtc2lzdGVtYS1kZS1sb2dpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21ldS1zaXN0ZW1hLWRlLWxvZ2luLy4vbWFpbi9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImRvdGVudlwiKSwgcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpLCByZXF1aXJlKFwiYmNyeXB0XCIpLCByZXF1aXJlKFwiZWxlY3Ryb24tc2VydmVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZG90ZW52XCIsIFwiQHByaXNtYS9jbGllbnRcIiwgXCJiY3J5cHRcIiwgXCJlbGVjdHJvbi1zZXJ2ZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiZG90ZW52XCIpLCByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIiksIHJlcXVpcmUoXCJiY3J5cHRcIiksIHJlcXVpcmUoXCJlbGVjdHJvbi1zZXJ2ZVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJkb3RlbnZcIl0sIHJvb3RbXCJAcHJpc21hL2NsaWVudFwiXSwgcm9vdFtcImJjcnlwdFwiXSwgcm9vdFtcImVsZWN0cm9uLXNlcnZlXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKGdsb2JhbCwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZG90ZW52X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3ByaXNtYV9jbGllbnRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iY3J5cHRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lbGVjdHJvbl9zZXJ2ZV9fKSA9PiB7XG5yZXR1cm4gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3ByaXNtYV9jbGllbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmNyeXB0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2RvdGVudl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lbGVjdHJvbl9zZXJ2ZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XG5jb25zdCB7IGFwcCwgaXBjTWFpbiB9ID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCB7IFByaXNtYUNsaWVudCB9ID0gcmVxdWlyZSgnQHByaXNtYS9jbGllbnQnKTtcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdCcpO1xuXG5jb25zdCBpc1Byb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG4vLyBDQVJSRUdBIE8gLkVOViBNQU5VQUxNRU5URSBOQSBSQUlaXG5kb3RlbnYuY29uZmlnKHsgcGF0aDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcuZW52JykgfSk7XG5cbi8vIEFESUNJT05FIEVTVEEgTElOSEEgQVFVSTpcbmFwcC5kaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24oKTtcblxuLy8gU2UgZXN0aXZlciBlbSBwcm9kdcOnw6NvIChpbnN0YWxhZG8gbm8gTWFjKSwgc2FsdmEgbmEgcGFzdGEgZGUgZGFkb3MgZG8gdXN1w6FyaW9cbi8vIFNlIGVzdGl2ZXIgZW0gZGVzZW52b2x2aW1lbnRvLCB1c2EgbyBhcnF1aXZvIGxvY2FsIGRhIHBhc3RhIHByaXNtYVxuY29uc3QgZGJQYXRoID0gaXNQcm9kIFxuICA/IHBhdGguam9pbihhcHAuZ2V0UGF0aCgndXNlckRhdGEnKSwgJ2RhdGFiYXNlLmRiJykgXG4gIDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwcmlzbWEnLCAnZGV2LmRiJyk7XG5cbi8vIDIuIEZPUsOHQVIgTyBQUklTTUEgQSBVU0FSIEVTU0UgQ0FNSU5IT1xuLy8gSXNzbyBzdWJzdGl0dWkgbyBxdWUgZXN0aXZlciBubyBzZXUgYXJxdWl2byAuZW52XG5wcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgPSBgZmlsZToke2RiUGF0aH1gO1xuXG4vLyBBZ29yYSBvIFByaXNtYSBzZXLDoSBpbmljaWFkbyBjb20gbyBjYW1pbmhvIGNvcnJldG9cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoe1xuICBkYXRhc291cmNlczoge1xuICAgIGRiOiB7XG4gICAgICB1cmw6IGBmaWxlOiR7ZGJQYXRofWAsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5cblxuKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgYXBwLndoZW5SZWFkeSgpO1xuXG4gIC8vIENhcnJlZ2EgbyBlbGVjdHJvbi1zZXJ2ZSBzZSBlc3RpdmVyIGVtIHByb2R1w6fDo29cbiAgaWYgKGlzUHJvZCkge1xuICAgIGNvbnN0IHNlcnZlID0gKGF3YWl0IGltcG9ydCgnZWxlY3Ryb24tc2VydmUnKSkuZGVmYXVsdDtcbiAgICBzZXJ2ZSh7IGRpcmVjdG9yeTogJ2FwcCcgfSk7XG4gIH1cblxuICAvLyBDUklBTkRPIEEgSkFORUxBIERJUkVUQU1FTlRFIChTZW0gZGVwZW5kZXIgZG8gaGVscGVycy5qcylcbiAgY29uc3QgeyBCcm93c2VyV2luZG93IH0gPSByZXF1aXJlKCdlbGVjdHJvbicpO1xuICBcbiAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDgwMCxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgcHJlbG9hZDogcGF0aC5qb2luKF9fZGlybmFtZSwgJ3ByZWxvYWQuanMnKSxcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogZmFsc2UsXG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmIChpc1Byb2QpIHtcbiAgICBhd2FpdCBtYWluV2luZG93LmxvYWRVUkwoJ2FwcDovLy4vaG9tZScpO1xuICB9IGVsc2Uge1xuICAgIC8vIFBlZ2EgYSBwb3J0YSBkbyBhcmd1bWVudG8gKE5leHRyb24gcGFzc2Egbm8gw61uZGljZSAyKVxuICAgIGNvbnN0IHBvcnQgPSBwcm9jZXNzLmFyZ3ZbMl0gfHwgODg4ODtcbiAgICBhd2FpdCBtYWluV2luZG93LmxvYWRVUkwoYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fS9sb2dpbmApO1xuICB9XG59KSgpO1xuXG5cbi8vIC0tLSBIQU5ETEVSUyBETyBQUklTTUEgKExPR0lOKSAtLS1cbmlwY01haW4uaGFuZGxlKCdleGVjdXRhci1sb2dpbicsIGFzeW5jIChldmVudCwgeyBlbWFpbCwgc2VuaGFEaWdpdGFkYSB9KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXN1YXJpbyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgZW1haWw6IGVtYWlsIH1cbiAgICB9KTtcblxuICAgIGlmICh1c3VhcmlvKSB7XG4gICAgICBjb25zdCBzZW5oYUJhdGUgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShzZW5oYURpZ2l0YWRhLCB1c3VhcmlvLnNlbmhhKTtcbiAgICAgIGlmIChzZW5oYUJhdGUpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXN1YXJpb0lkOiB1c3VhcmlvLmlkIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlVzdcOhcmlvIG91IHNlbmhhIGludsOhbGlkb3NcIiwgY29kZTogNDAxIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gbm8gTG9naW46XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFcnJvIHTDqWNuaWNvIG5vIGJhbmNvXCIsIGNvZGU6IDUwMCB9O1xuICB9XG59KTtcblxuLy8gLS0tIEhBTkRMRVJTIERPIFBSSVNNQSAoQ0FEQVNUUk8pIC0tLVxuaXBjTWFpbi5oYW5kbGUoJ2V4ZWN1dGFyLWNhZGFzdHJvJywgYXN5bmMgKGV2ZW50LCB7IG5vbWUsIGVtYWlsLCBzZW5oYSB9KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xuICAgIGNvbnN0IHNlbmhhSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHNlbmhhLCBzYWx0Um91bmRzKTtcblxuICAgIGNvbnN0IG5vdm9Vc3VhcmlvID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHsgbm9tZSwgZW1haWwsIHNlbmhhOiBzZW5oYUhhc2ggfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXN1YXJpb0lkOiBub3ZvVXN1YXJpby5pZCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIG5vIHNpc3RlbWE6XCIsIGVycm9yKTtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ1AyMDAyJykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRXN0ZSBlbWFpbCBqw6EgZXN0w6EgZW0gdXNvXCIsIGNvZGU6IDQwMyB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFcnJvIGFvIGNvbmVjdGFyIGNvbSBvIGJhbmNvIFNRTGl0ZVwiLCBjb2RlOiA1MDAgfTtcbiAgfVxufSk7XG5cbi8vIG1haW4vYmFja2dyb3VuZC5qc1xuXG4vLyAuLi4gb3V0cm9zIGhhbmRsZXJzIChsb2dpbiwgY2FkYXN0cm8pIC4uLlxuXG5pcGNNYWluLmhhbmRsZSgnYnVzY2FyLXVzdWFyaW8nLCBhc3luYyAoZXZlbnQsIHsgaWQgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIlJlY2ViaSBwZWRpZG8gcGFyYSBidXNjYXIgSUQ6XCIsIGlkKTsgLy8gSXNzbyB2YWkgYXBhcmVjZXIgbm8gdGVybWluYWwgZG8gVlMgQ29kZVxuICB0cnkge1xuICAgIGNvbnN0IHVzdWFyaW8gPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWQpIH0sIC8vIEdhcmFudGUgcXVlIG8gSUQgc2VqYSB1bSBuw7ptZXJvXG4gICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5vbWU6IHRydWUsIGVtYWlsOiB0cnVlIH0gLy8gTsOjbyBlbnZpYSBhIHNlbmhhXG4gICAgfSk7XG4gICAgcmV0dXJuIHVzdWFyaW87XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYnVzY2FyIG5vIFByaXNtYTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59KTtcblxuXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICBhcHAucXVpdCgpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb3RlbnYiLCJyZXF1aXJlIiwiYXBwIiwiaXBjTWFpbiIsInBhdGgiLCJQcmlzbWFDbGllbnQiLCJiY3J5cHQiLCJpc1Byb2QiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjb25maWciLCJqb2luIiwiY3dkIiwiZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uIiwiZGJQYXRoIiwiZ2V0UGF0aCIsIkRBVEFCQVNFX1VSTCIsInByaXNtYSIsImRhdGFzb3VyY2VzIiwiZGIiLCJ1cmwiLCJ3aGVuUmVhZHkiLCJzZXJ2ZSIsImRlZmF1bHQiLCJkaXJlY3RvcnkiLCJCcm93c2VyV2luZG93IiwibWFpbldpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwid2ViUHJlZmVyZW5jZXMiLCJwcmVsb2FkIiwiX19kaXJuYW1lIiwibm9kZUludGVncmF0aW9uIiwiY29udGV4dElzb2xhdGlvbiIsImxvYWRVUkwiLCJwb3J0IiwiYXJndiIsImhhbmRsZSIsImV2ZW50IiwiZW1haWwiLCJzZW5oYURpZ2l0YWRhIiwidXN1YXJpbyIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzZW5oYUJhdGUiLCJjb21wYXJlIiwic2VuaGEiLCJzdWNjZXNzIiwidXN1YXJpb0lkIiwiaWQiLCJtZXNzYWdlIiwiY29kZSIsImVycm9yIiwiY29uc29sZSIsIm5vbWUiLCJzYWx0Um91bmRzIiwic2VuaGFIYXNoIiwiaGFzaCIsIm5vdm9Vc3VhcmlvIiwiY3JlYXRlIiwiZGF0YSIsImxvZyIsIk51bWJlciIsInNlbGVjdCIsIm9uIiwicGxhdGZvcm0iLCJxdWl0Il0sInNvdXJjZVJvb3QiOiIifQ==