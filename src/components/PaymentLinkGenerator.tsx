"use client";

import { useActionState, useState } from "react";
import { createPaymentLink, type PaymentLinkState } from "@/app/admin/actions";
import { CustomSelect } from "@/components/CustomSelect";
import { fr } from "@/i18n/dictionaries/fr";
import { DEPOSIT_PERCENT_OPTIONS, isPackId, PACK_BASE_PRICE_CHF, type PackId } from "@/lib/packs";

const initialState: PaymentLinkState = { status: "idle" };

const PACK_OPTIONS = fr.pricingPage.packs.map((pack) => ({ value: pack.id, label: pack.name }));

const KIND_OPTIONS = [
  { value: "deposit", label: "Acompte" },
  { value: "balance", label: "Solde" },
  { value: "custom", label: "Personnalisé" },
];

const PERCENT_OPTIONS = DEPOSIT_PERCENT_OPTIONS.map((percent) => ({
  value: String(percent),
  label: `${percent}%`,
}));

type Kind = "deposit" | "balance" | "custom";

export function PaymentLinkGenerator({
  leadId,
  defaultPackId,
}: {
  leadId: number;
  defaultPackId: string | null;
}) {
  const [state, formAction, isPending] = useActionState(createPaymentLink, initialState);
  const [copied, setCopied] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);

  const startPackId: PackId = defaultPackId && isPackId(defaultPackId) ? defaultPackId : "essentiel";
  const [packId, setPackId] = useState<PackId>(startPackId);
  const [kind, setKind] = useState<Kind>("deposit");
  const [depositPercent, setDepositPercent] = useState("30");
  const [amountChf, setAmountChf] = useState(() => computeAmount(startPackId, "deposit", "30"));
  const [description, setDescription] = useState(() =>
    computeDescription(startPackId, "deposit", "30"),
  );

  function packLabel(id: PackId): string {
    return PACK_OPTIONS.find((option) => option.value === id)?.label ?? id;
  }

  function computeDescription(nextPackId: PackId, nextKind: Kind, nextPercent: string): string {
    const label = packLabel(nextPackId);
    if (nextKind === "deposit") return `Acompte ${nextPercent}% — Pack ${label}`;
    if (nextKind === "balance") return `Solde — Pack ${label}`;
    return `Pack ${label}`;
  }

  function computeAmount(nextPackId: PackId, nextKind: Kind, nextPercent: string): string {
    if (nextKind !== "deposit") return "";
    const basePrice = PACK_BASE_PRICE_CHF[nextPackId];
    if (!basePrice) return "";
    return String(Math.round((basePrice * Number(nextPercent)) / 100));
  }

  function handlePackChange(value: string) {
    const nextPackId = isPackId(value) ? value : packId;
    setPackId(nextPackId);
    setAmountChf(computeAmount(nextPackId, kind, depositPercent));
    setDescription(computeDescription(nextPackId, kind, depositPercent));
  }

  function handleKindChange(value: string) {
    const nextKind = value as Kind;
    setKind(nextKind);
    setAmountChf(computeAmount(packId, nextKind, depositPercent));
    setDescription(computeDescription(packId, nextKind, depositPercent));
  }

  function handlePercentChange(value: string) {
    setDepositPercent(value);
    setAmountChf(computeAmount(packId, kind, value));
    setDescription(computeDescription(packId, kind, value));
  }

  return (
    <div>
      <form action={formAction} className="flex flex-col gap-3">
        <input type="hidden" name="leadId" value={leadId} />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <label className="flex flex-col gap-1">
            <span className="text-xs text-stone">Formule</span>
            <CustomSelect
              name="packId"
              ariaLabel="Formule"
              value={packId}
              onChange={handlePackChange}
              options={PACK_OPTIONS}
              triggerClassName="w-full px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs text-stone">Type</span>
            <CustomSelect
              name="kind"
              ariaLabel="Type"
              value={kind}
              onChange={handleKindChange}
              options={KIND_OPTIONS}
              triggerClassName="w-full px-3 py-1.5 text-sm"
            />
          </label>
          {kind === "deposit" ? (
            <label className="flex flex-col gap-1">
              <span className="text-xs text-stone">Pourcentage</span>
              <CustomSelect
                name="depositPercent"
                ariaLabel="Pourcentage"
                value={depositPercent}
                onChange={handlePercentChange}
                options={PERCENT_OPTIONS}
                triggerClassName="w-full px-3 py-1.5 text-sm"
              />
            </label>
          ) : (
            <div />
          )}
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[7rem_1fr]">
          <label className="flex flex-col gap-1">
            <span className="text-xs text-stone">Montant (CHF)</span>
            <input
              type="number"
              name="amountChf"
              min="1"
              step="1"
              required
              value={amountChf}
              onChange={(event) => setAmountChf(event.target.value)}
              className="rounded-lg border border-paper/15 bg-transparent px-2 py-1.5 text-sm text-paper outline-none focus:border-bronze"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs text-stone">Description</span>
            <input
              type="text"
              name="description"
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="rounded-lg border border-paper/15 bg-transparent px-2 py-1.5 text-sm text-paper outline-none focus:border-bronze"
            />
          </label>
        </div>

        <label className="flex items-center gap-2 text-xs text-stone">
          <input
            type="checkbox"
            checked={sendEmail}
            onChange={(event) => setSendEmail(event.target.checked)}
            className="accent-bronze"
          />
          {sendEmail && <input type="hidden" name="sendEmail" value="true" />}
          Envoyer ce lien par email au client
        </label>

        {sendEmail && (
          <textarea
            name="personalMessage"
            rows={2}
            placeholder="Message personnalisé (optionnel)"
            className="resize-none rounded-lg border border-paper/15 bg-transparent px-2 py-1.5 text-sm text-paper outline-none focus:border-bronze"
          />
        )}

        <button
          type="submit"
          disabled={isPending}
          className="btn-secondary self-start !px-4 !py-2 text-xs disabled:opacity-60"
        >
          {isPending ? "Génération..." : "Générer un lien de paiement"}
        </button>
      </form>

      {state.status === "success" && state.url && (
        <div className="mt-3 rounded-xl border border-bronze/30 bg-bronze/10 p-3">
          <p className="flex items-center gap-1.5 text-xs font-medium text-bronze">
            <span aria-hidden>✓</span>
            Lien généré{state.emailSent ? " et email envoyé au client" : ""}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <input
              readOnly
              value={state.url}
              onFocus={(event) => event.target.select()}
              className="flex-1 rounded-lg border border-paper/15 bg-onyx/40 px-2 py-1.5 text-xs text-paper/70"
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
        </div>
      )}

      {state.status === "error" && (
        <p className="mt-3 text-xs text-red-400">
          {state.message === "not-configured"
            ? "STRIPE_SECRET_KEY n'est pas configuré."
            : state.message === "lead-not-found"
              ? "Lead introuvable."
              : "Erreur lors de la création du lien."}
        </p>
      )}
    </div>
  );
}
