import { getCloudflareContext } from "@opennextjs/cloudflare";
import { redirect } from "next/navigation";
import { logout } from "@/app/admin/actions";
import { LeadsTable } from "@/components/LeadsTable";
import { isAuthenticated } from "@/lib/adminAuth";
import type { Lead } from "@/lib/leads";

export default async function AdminPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const { env } = await getCloudflareContext({ async: true });
  const { results } = await env.DB.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-16 md:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl font-bold text-paper">Leads Calyroc</h1>
        <div className="flex gap-3">
          <a href="/admin/export" className="btn-secondary !px-4 !py-2 text-sm">
            Export CSV
          </a>
          <form action={logout}>
            <button type="submit" className="btn-secondary !px-4 !py-2 text-sm">
              Déconnexion
            </button>
          </form>
        </div>
      </div>

      <LeadsTable leads={results as unknown as Lead[]} />
    </section>
  );
}
