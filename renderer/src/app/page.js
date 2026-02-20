import { redirect } from "next/navigation";

export default function RootPage() {
  // Isso faz com que ao acessar localhost:3000, 
  // o usuário seja enviado direto para o /login
  redirect("/login");
}
