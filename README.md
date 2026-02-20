pnpm install
cp .env.example .env
pnpm exec prisma migrate dev --name init (Isso cria o banco de dados vazio).
pnpm dev
node node_modules/electron/install.js
