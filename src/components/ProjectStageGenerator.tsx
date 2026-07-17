"use client";

import { useActionState, useState } from "react";
import { type ProjectStageState, updateProjectStage } from "@/app/admin/actions";
import { CustomSelect } from "@/components/CustomSelect";
import { fr } from "@/i18n/dictionaries/fr";

const initialState: ProjectStageState = { status: "idle" };

// Admin stays French-only (see PaymentLinkGenerator for the same
// convention) -- these reuse the exact wording already shown on the public
// homepage process section, so the client's tracking page and the site's
// own "how it works" copy never drift apart.
const STAGE_OPTIONS = fr.home.processSteps.map((step, index) => ({
  value: String(index + 1),
  label: `${index + 1}. ${step.title}`,
}));

export function ProjectStageGenerator({
  leadId,
  defaultStage,
}: {
  leadId: number;
  defaultStage: number | null;
}) {
  const [state, formAction, isPending] = useActionState(updateProjectStage, initialState);
  const [copied, setCopied] = useState(false);
  const [stage, setStage] = useState(String(defaultStage ?? 1));

  return (
    <div>
      <form action={formAction} className="flex flex-wrap items-end gap-3">
        <input type="hidden" name="id" value={leadId} />
        <label className="flex flex-col gap-1">
          <span className="text-xs text-stone">Étape du projet</span>
          <CustomSelect
            name="projectStage"
            ariaLabel="Étape du projet"
            value={stage}
            onChange={setStage}
            options={STAGE_OPTIONS}
            triggerClassName="px-3 py-2 text-sm"
          />
        </label>
        <button
          type="submit"
          disabled={isPending}
          className="btn-secondary !px-4 !py-2 text-xs disabled:opacity-60"
        >
          {isPending ? "Enregistrement..." : "Mettre à jour le suivi"}
        </button>
      </form>

      {state.status === "success" && state.trackingUrl && (
        <div className="mt-3 rounded-xl border border-bronze/30 bg-bronze/10 p-3">
          <p className="flex items-center gap-1.5 text-xs font-medium text-bronze">
            <span aria-hidden>✓</span>
            Lien de suivi à jour
          </p>
          <div className="mt-2 flex items-center gap-2">
            <input
              readOnly
              value={state.trackingUrl}
              onFocus={(event) => event.target.select()}
              className="flex-1 rounded-lg border border-paper/15 bg-onyx/40 px-2 py-1.5 text-xs text-paper/70"
            />
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(state.trackingUrl ?? "");
                setCopied(true);
              }}
              className="btn-secondary !px-3 !py-1.5 text-xs"
            >
              {copied ? "Copié" : "Copier"}
            </button>
          </div>
        </div>
      )}

      {state.status === "error" && (
        <p className="mt-3 text-xs text-red-400">Erreur lors de la mise à jour du suivi.</p>
      )}
    </div>
  );
}
