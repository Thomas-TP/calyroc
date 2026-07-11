import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/AdminLoginForm";
import { isAuthenticated } from "@/lib/adminAuth";

export default async function AdminLoginPage() {
  if (await isAuthenticated()) redirect("/admin");

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="mb-8 font-display text-2xl font-bold text-paper">Calyroc — Admin</h1>
      <AdminLoginForm />
    </section>
  );
}
