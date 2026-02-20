"use client"; // Obrigatório para componentes com eventos no Next.js App Router

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CadastroPage() {
  const router = useRouter();

  const handleCadastro = async (event) => {
    event.preventDefault(); // Impede o refresh da página

    const formData = new FormData(event.target);
    const nome = formData.get("nome");
    const email = formData.get("email");
    const senha = formData.get("senha");

    try {
      // 1. CHAMA O HANDLER 'executar-cadastro' que criamos no background.js
      const resposta = await window.ipc.invoke('executar-cadastro', { nome, email, senha });

      if (resposta.success) {
        // 2. Simula o login automático salvando o ID localmente
        localStorage.setItem("usuario_id", resposta.usuarioId);
        
        alert("Conta criada com sucesso!");
        router.push("/home");
      } else {
        // 3. Redireciona para sua página de erro com os parâmetros que você já usava
        router.push(`/error-page?msg=${encodeURIComponent(resposta.message)}&cod=${resposta.code}`);
      }
    } catch (error) {
      console.error("Erro na comunicação com o sistema:", error);
      router.push("/error-page?msg=Erro tecnico ao acessar o banco SQLite&cod=500");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Criar Nova Conta</h1>
        
        {/* MUDANÇA: Usamos onSubmit em vez de action POST */}
        <form onSubmit={handleCadastro} className="space-y-4">
          <input 
            name="nome" 
            type="text" 
            placeholder="Nome Completo" 
            className="w-full rounded-md border p-2 text-black" 
            required 
          />
          <input 
            name="email" 
            type="email" 
            placeholder="E-mail" 
            className="w-full rounded-md border p-2 text-black" 
            required 
          />
          <input 
            name="senha" 
            type="password" 
            placeholder="Senha" 
            className="w-full rounded-md border p-2 text-black" 
            required 
          />
          
          <button 
            type="submit" 
            className="w-full rounded-md bg-green-600 py-2 font-semibold text-white transition hover:bg-green-700"
          >
            Cadastrar no Sistema
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Já tem uma conta? 
          <Link href="/login" className="text-blue-600 font-bold hover:underline ml-1">
            Faça login aqui
          </Link>
        </p>
      </div>
    </main>
  );
}
