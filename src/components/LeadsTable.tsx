import { updateLead } from "@/app/admin/actions";
import { CustomSelect } from "@/components/CustomSelect";
import { PaymentLinkGenerator } from "@/components/PaymentLinkGenerator";
import { LEAD_STATUS_LABELS, LEAD_STATUSES, type Lead } from "@/lib/leads";

const STATUS_BADGE_CLASS: Record<Lead["status"], string> = {
  new: "border-paper/15 bg-paper/5 text-paper/70",
  contacted: "border-paper/15 bg-paper/5 text-paper/85",
  quoted: "border-bronze/30 bg-bronze/10 text-bronze",
  won: "border-bronze/40 bg-bronze/20 text-bronze",
  lost: "border-red-400/30 bg-red-400/10 text-red-400",
};

const STATUS_OPTIONS = LEAD_STATUSES.map((status) => ({
  value: status,
  label: LEAD_STATUS_LABELS[status],
}));

export function LeadsTable({ leads }: { leads: Lead[] }) {
  if (leads.length === 0) {
    return (
      <div className="mt-10 flex flex-col items-center gap-1.5 rounded-2xl border border-dashed border-paper/15 px-6 py-16 text-center">
        <p className="text-sm text-paper/80">Aucun lead pour l'instant.</p>
        <p className="text-xs text-stone">
          Les nouveaux messages du formulaire de contact apparaîtront ici.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-col gap-5">
      {leads.map((lead) => (
        <article key={lead.id} className="rounded-2xl border border-paper/10 bg-onyx-soft p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-display text-base font-bold text-paper">
                {lead.name} <span className="font-normal text-stone">— {lead.email}</span>
              </p>
              <p className="mt-1 text-xs text-stone">
                {lead.created_at} · {lead.locale.toUpperCase()} · {lead.budget}
              </p>
            </div>
            <span
              className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${STATUS_BADGE_CLASS[lead.status]}`}
            >
              {LEAD_STATUS_LABELS[lead.status]}
            </span>
          </div>

          <p className="mt-4 whitespace-pre-wrap rounded-xl bg-onyx/40 p-4 text-sm leading-relaxed text-paper/85">
            {lead.message}
          </p>

          <form
            action={updateLead}
            className="mt-5 flex flex-wrap items-end gap-3 border-t border-paper/8 pt-5"
          >
            <input type="hidden" name="id" value={lead.id} />
            <div className="flex flex-col gap-1">
              <span className="text-xs text-stone">Statut</span>
              <CustomSelect
                name="status"
                ariaLabel="Statut"
                defaultValue={lead.status}
                options={STATUS_OPTIONS}
                triggerClassName="px-3 py-2 text-sm"
              />
            </div>
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

          <div className="mt-5 border-t border-paper/8 pt-5">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-stone">
              Paiement
            </p>
            <PaymentLinkGenerator leadId={lead.id} defaultPackId={lead.pack_id} />
          </div>
        </article>
      ))}
    </div>
  );
}
