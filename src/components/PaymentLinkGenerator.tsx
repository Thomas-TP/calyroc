"use client";

import { useActionState, useState } from "react";
import { createPaymentLink, type PaymentLinkState } from "@/app/admin/actions";

const initialState: PaymentLinkState = { status: "idle" };

export function PaymentLinkGenerator({ leadId }: { leadId: number }) {
  const [state, formAction, isPending] = useActionState(createPaymentLink, initialState);
  const [copied, setCopied] = useState(false);

  return (
    <div className="mt-3 border-t border-paper/8 pt-3">
      <form action={formAction} className="flex flex-wrap items-end gap-2">
        <input type="hidden" name="leadId" value={leadId} />
        <label className="flex flex-col gap-1">
          <span className="text-xs text-stone">Montant (CHF)</span>
          <input
            type="number"
            name="amountChf"
            min="1"
            step="1"
            required
            className="w-28 rounded-lg border border-paper/15 bg-transparent px-2 py-1.5 text-sm text-paper outline-none focus:border-bronze"
          />
        </label>
        <label className="flex min-w-[10rem] flex-1 flex-col gap-1">
          <span className="text-xs text-stone">Description</span>
          <input
            type="text"
            name="description"
            required
            placeholder="Acompte -- Pack Pro"
            className="rounded-lg border border-paper/15 bg-transparent px-2 py-1.5 text-sm text-paper outline-none focus:border-bronze"
          />
        </label>
        <button
          type="submit"
          disabled={isPending}
          className="btn-secondary !px-3 !py-1.5 text-xs disabled:opacity-50"
        >
          {isPending ? "..." : "Générer un lien de paiement"}
        </button>
      </form>

      {state.status === "success" && state.url && (
        <div className="mt-2 flex items-center gap-2">
          <input
            readOnly
            value={state.url}
            onFocus={(event) => event.target.select()}
            className="flex-1 rounded-lg border border-paper/15 bg-transparent px-2 py-1.5 text-xs text-paper/70"
          />
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(state.url ?? "");
              setCopied(true);
            }}
            className="btn-secondary !px-3 !py-1.5 text-xs"
          >
            {copied ? "Copié" : "Copier"}
          </button>
        </div>
      )}

      {state.status === "error" && (
        <p className="mt-2 text-xs text-red-400">
          {state.message === "not-configured"
            ? "STRIPE_SECRET_KEY n'est pas configuré."
            : "Erreur lors de la création du lien."}
        </p>
      )}
    </div>
  );
}
