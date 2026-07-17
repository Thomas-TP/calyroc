"use client";

import { useActionState } from "react";
import {
  type ClientCheckoutState,
  createBalanceCheckout,
} from "@/app/[locale]/suivi/[token]/actions";

const initialState: ClientCheckoutState = { status: "idle" };

export function PayNowButton({
  token,
  paymentId,
  locale,
  label,
  errorLabel,
}: {
  token: string;
  paymentId: number;
  locale: string;
  label: string;
  errorLabel: string;
}) {
  const [state, formAction, isPending] = useActionState(createBalanceCheckout, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="token" value={token} />
      <input type="hidden" name="paymentId" value={paymentId} />
      <input type="hidden" name="locale" value={locale} />
      <button
        type="submit"
        disabled={isPending}
        className="btn-primary !px-5 !py-2.5 text-sm disabled:opacity-60"
      >
        {isPending ? "..." : label}
      </button>
      {state.status === "error" && <p className="mt-2 text-xs text-red-400">{errorLabel}</p>}
    </form>
  );
}
