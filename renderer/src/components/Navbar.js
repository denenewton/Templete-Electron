'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900';
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex space-x-8">
          <Link 
            href="/home" 
            className={`font-medium transition ${isActive('/home')}`}
          >
            Home
          </Link>
          <Link 
            href="/login" 
            className={`font-medium transition ${isActive('/login')}`}
          >
            Login
          </Link>
          <Link 
            href="/cadastro" 
            className={`font-medium transition ${isActive('/cadastro')}`}
          >
            Cadastro
          </Link>
        </div>
      </div>
    </nav>
  );
}
