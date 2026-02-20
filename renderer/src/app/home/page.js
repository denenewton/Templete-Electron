"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

useEffect(() => {
  let carregandoDados = false;

  async function verificarSessao() {
    if (carregandoDados || usuario) return; // Impede chamadas duplicadas
    
    const userId = localStorage.getItem("usuario_id");
    if (!userId) {
      router.push("/login");
      return;
    }

    try {
      carregandoDados = true;
      const dados = await window.ipc.invoke('buscar-usuario', { id: userId });
      if (dados) {
        setUsuario(dados);
      } else {
        localStorage.removeItem("usuario_id");
        router.push("/login");
      }
    } catch (error) {
      router.push("/login");
    } finally {
      setCarregando(false);
    }
  }

  verificarSessao();
}, [router]); // Remova 'usuario' ou 'carregando' das dependências aqui


  const handleLogout = () => {
    localStorage.removeItem("usuario_id");
    router.push("/login");
  };

  if (carregando) {
    return <div className="min-h-screen bg-gray-50 p-8 text-black">Carregando perfil nativo...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-800 font-sans">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl font-black text-blue-600">
          Olá, {usuario?.nome || 'Usuário'}! 👋
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Você acessou a área restrita do App Mac. 
          O seu ID no SQLite é <span className="font-mono bg-gray-100 px-1 rounded">{usuario?.id}</span>.
        </p>
        
        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-400 italic font-medium">Sessão ativa via SQLite</p>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-bold hover:bg-red-100 transition"
          >
            Sair com segurança
          </button>
        </div>
      </div>
    </div>
  );
}
