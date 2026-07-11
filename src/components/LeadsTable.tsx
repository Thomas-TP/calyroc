import { updateLead } from "@/app/admin/actions";
import { LEAD_STATUSES, type Lead } from "@/lib/leads";

export function LeadsTable({ leads }: { leads: Lead[] }) {
  if (leads.length === 0) {
    return <p className="mt-10 text-stone">Aucun lead pour l'instant.</p>;
  }

  return (
    <div className="mt-10 flex flex-col gap-4">
      {leads.map((lead) => (
        <article key={lead.id} className="rounded-2xl border border-paper/10 bg-onyx-soft p-6">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="font-display font-bold text-paper">
                {lead.name} <span className="font-normal text-stone">— {lead.email}</span>
              </p>
              <p className="text-xs text-stone">
                {lead.created_at} · {lead.locale.toUpperCase()} · {lead.budget}
              </p>
            </div>
          </div>

          <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-paper/85">
            {lead.message}
          </p>

          <form action={updateLead} className="mt-4 flex flex-wrap items-end gap-3">
            <input type="hidden" name="id" value={lead.id} />
            <label className="flex flex-col gap-1">
              <span className="text-xs text-stone">Statut</span>
              <select
                name="status"
                defaultValue={lead.status}
                className="rounded-lg border border-paper/15 bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-bronze"
              >
                {LEAD_STATUSES.map((status) => (
                  <option key={status} value={status} className="bg-onyx">
                    {status}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-1 min-w-[12rem] flex-col gap-1">
              <span className="text-xs text-stone">Notes</span>
              <input
                type="text"
                name="notes"
                defaultValue={lead.notes}
                className="rounded-lg border border-paper/15 bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-bronze"
              />
            </label>
            <button type="submit" className="btn-secondary !px-4 !py-2 text-xs">
              Enregistrer
            </button>
          </form>
        </article>
      ))}
    </div>
  );
}
