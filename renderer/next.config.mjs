/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  
  // IMPORTANTE PARA ELECTRON:
  // Como o app roda localmente, o Next.js não consegue otimizar imagens
  // via servidor. Isso evita que as imagens sumam no app nativo.
  images: {
    unoptimized: true,
  },

  // O Nextron geralmente cuida do roteamento, mas se você tiver problemas 
  // com links no macOS, pode ser necessário adicionar:
  // trailingSlash: true, 
};

export default nextConfig;
