"use client";

import { useActionState } from "react";
import { type LoginState, login } from "@/app/admin/actions";

const initialState: LoginState = { status: "idle" };

export function AdminLoginForm() {
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-4">
      <label className="flex flex-col gap-2">
        <span className="font-display text-sm text-paper/80">Mot de passe</span>
        <input
          type="password"
          name="password"
          required
          className="rounded-lg border border-paper/15 bg-transparent px-4 py-3 text-paper outline-none transition-colors focus:border-bronze"
        />
      </label>
      <button type="submit" disabled={isPending} className="btn-primary disabled:opacity-60">
        {isPending ? "..." : "Se connecter"}
      </button>
      {state.status === "error" && <p className="text-sm text-red-400">Mot de passe incorrect.</p>}
    </form>
  );
}
