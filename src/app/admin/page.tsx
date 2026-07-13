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

  const leads = results as unknown as Lead[];
  const newCount = leads.filter((lead) => lead.status === "new").length;

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-16 md:px-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <img src="/logo.png" alt="Calyroc" width={130} height={36} className="mb-3 h-7 w-auto" />
          <p className="text-eyebrow mb-2">Admin</p>
          <h1 className="text-display-sm text-paper">Leads Calyroc</h1>
          <p className="mt-1 text-sm text-stone">
            {leads.length} lead{leads.length > 1 ? "s" : ""}
            {newCount > 0 ? ` · ${newCount} nouveau${newCount > 1 ? "x" : ""}` : ""}
          </p>
        </div>
        <div className="flex gap-3">
          <a href="/admin/export" className="btn-secondary !px-4 !py-2 text-sm">
            Exporter en CSV
          </a>
          <form action={logout}>
            <button type="submit" className="btn-secondary !px-4 !py-2 text-sm">
              Déconnexion
            </button>
          </form>
        </div>
      </div>

      <LeadsTable leads={leads} />
    </section>
  );
}
