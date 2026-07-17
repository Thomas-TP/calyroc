import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/AdminLoginForm";
import { isAuthenticated } from "@/lib/adminAuth";

export default async function AdminLoginPage() {
  if (await isAuthenticated()) redirect("/admin");

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-2xl border border-paper/10 bg-onyx-soft p-8">
        <img src="/logo.webp" alt="Calyroc" width={130} height={36} className="mb-4 h-8 w-auto" />
        <p className="text-eyebrow mb-2">Admin</p>
        <h1 className="text-display-sm text-paper">Accès restreint</h1>
        <p className="mt-2 text-sm text-stone">Réservé à la gestion des leads Calyroc.</p>
        <div className="mt-6">
          <AdminLoginForm />
        </div>
      </div>
    </section>
  );
}
