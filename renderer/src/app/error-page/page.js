"use client"; // Essencial para capturar parâmetros da URL no Electron

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react'; // Necessário para usar useSearchParams no Next.js

function ErrorContent() {
  const searchParams = useSearchParams();
  
  // Pegamos os dados da URL (ex: ?msg=Erro&cod=500)
  const mensagem = searchParams.get("msg") || "Ocorreu um erro inesperado.";
  const cod = searchParams.get("cod") || "500";

  return (
    <div className="w-full max-w-md text-center bg-white p-10 rounded-xl shadow-lg border border-red-100">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-6">
        <svg xmlns="http://www.w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </div>
      
      <h1 className="text-4xl font-black text-gray-900 mb-2">{cod}</h1>
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-black">Ops! Algo deu errado.</h2>
      <p className="text-gray-600 mb-8">{mensagem}</p>

      <div className="flex flex-col gap-3">
        <Link 
          href="/login" 
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition text-center"
        >
          Voltar para o Login
        </Link>
      </div>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      {/* O Suspense é obrigatório no Next.js ao usar useSearchParams */}
      <Suspense fallback={<p className="text-black">Carregando erro...</p>}>
        <ErrorContent />
      </Suspense>
    </main>
  );
}
