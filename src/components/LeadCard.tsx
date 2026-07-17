"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import {
  addProjectUpdate,
  deleteProjectUpdate,
  type ProjectUpdateState,
  updateLead,
} from "@/app/admin/actions";
import { CustomSelect } from "@/components/CustomSelect";
import { PaymentLinkGenerator } from "@/components/PaymentLinkGenerator";
import { ProjectStageGenerator } from "@/components/ProjectStageGenerator";
import { LEAD_STATUS_LABELS, LEAD_STATUSES, type Lead } from "@/lib/leads";
import type { ProjectUpdate } from "@/lib/projectUpdates";

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

function formatDate(value: string): string {
  return new Date(`${value.replace(" ", "T")}Z`).toLocaleString("fr-CH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function LeadCard({ lead, updates }: { lead: Lead; updates: ProjectUpdate[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-2xl border border-paper/10 bg-onyx-soft">
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full flex-wrap items-start justify-between gap-3 p-5 text-left"
      >
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-bold text-paper">{lead.name}</p>
          <p className="truncate text-xs text-stone">{lead.email}</p>
          <p className="mt-1 text-xs text-stone">
            {lead.created_at.slice(0, 10)} · {lead.locale.toUpperCase()}
            {lead.pack_id ? ` · ${lead.pack_id}` : ""}
          </p>
          {!expanded && (
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-paper/60">
              {lead.message}
            </p>
          )}
        </div>
        <span
          className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${STATUS_BADGE_CLASS[lead.status]}`}
        >
          {LEAD_STATUS_LABELS[lead.status]}
        </span>
      </button>

      {expanded && (
        <div className="border-t border-paper/8 px-5 pb-5">
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
            <label className="flex min-w-[12rem] flex-1 flex-col gap-1">
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

          <div className="mt-5 border-t border-paper/8 pt-5">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-stone">
              Suivi client
            </p>
            <ProjectStageGenerator leadId={lead.id} defaultStage={lead.project_stage} />
          </div>

          <div className="mt-5 border-t border-paper/8 pt-5">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-stone">
              Mises à jour visibles par le client
            </p>
            <ProjectUpdateComposer leadId={lead.id} />
            {updates.length > 0 && (
              <ul className="mt-4 flex flex-col gap-2.5">
                {updates.map((update) => (
                  <li
                    key={update.id}
                    className="flex items-start justify-between gap-3 rounded-lg bg-onyx/40 px-3 py-2.5"
                  >
                    <div className="min-w-0">
                      <p className="text-sm leading-relaxed text-paper/85">{update.message}</p>
                      <p className="mt-1 text-[0.6875rem] text-stone">
                        {formatDate(update.created_at)}
                      </p>
                    </div>
                    <form action={deleteProjectUpdate}>
                      <input type="hidden" name="id" value={update.id} />
                      <button
                        type="submit"
                        aria-label="Supprimer cette mise à jour"
                        className="shrink-0 text-stone transition-colors hover:text-red-400"
                      >
                        ✕
                      </button>
                    </form>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

const initialUpdateState: ProjectUpdateState = { status: "idle" };

function ProjectUpdateComposer({ leadId }: { leadId: number }) {
  const [state, formAction, isPending] = useActionState(addProjectUpdate, initialUpdateState);
  const formRef = useRef<HTMLFormElement>(null);

  // The message input is uncontrolled (a controlled field would fight the
  // form-reset-on-success pattern below) -- clear it via the DOM directly
  // once a submission succeeds, rather than tracking the text in state.
  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-wrap items-end gap-3">
      <input type="hidden" name="leadId" value={leadId} />
      <label className="flex min-w-[16rem] flex-1 flex-col gap-1">
        <span className="text-xs text-stone">Nouvelle mise à jour</span>
        <input
          type="text"
          name="message"
          required
          maxLength={500}
          placeholder="Ex. Maquette envoyée pour validation"
          className="rounded-lg border border-paper/15 bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-bronze"
        />
      </label>
      <button
        type="submit"
        disabled={isPending}
        className="btn-secondary !px-4 !py-2 text-xs disabled:opacity-60"
      >
        {isPending ? "Publication..." : "Publier"}
      </button>
    </form>
  );
}
