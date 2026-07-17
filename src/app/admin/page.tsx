import { getCloudflareContext } from "@opennextjs/cloudflare";
import { redirect } from "next/navigation";
import { logout } from "@/app/admin/actions";
import { AdminDashboard } from "@/components/AdminDashboard";
import { isAuthenticated } from "@/lib/adminAuth";
import type { Lead } from "@/lib/leads";
import type { ProjectUpdate } from "@/lib/projectUpdates";

export default async function AdminPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const { env } = await getCloudflareContext({ async: true });
  const [leadsResult, updatesResult] = await Promise.all([
    env.DB.prepare("SELECT * FROM leads ORDER BY created_at DESC").all(),
    env.DB.prepare("SELECT * FROM project_updates ORDER BY created_at DESC").all(),
  ]);

  const leads = leadsResult.results as unknown as Lead[];
  const updates = updatesResult.results as unknown as ProjectUpdate[];

  const updatesByLead: Record<number, ProjectUpdate[]> = {};
  for (const update of updates) {
    const existing = updatesByLead[update.lead_id];
    if (existing) {
      existing.push(update);
    } else {
      updatesByLead[update.lead_id] = [update];
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:px-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <img src="/logo.webp" alt="Calyroc" width={130} height={36} className="mb-3 h-7 w-auto" />
          <p className="text-eyebrow mb-2">Admin</p>
          <h1 className="text-display-sm text-paper">Leads Calyroc</h1>
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

      <AdminDashboard leads={leads} updatesByLead={updatesByLead} />
    </section>
  );
}
