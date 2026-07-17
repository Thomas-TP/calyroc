"use client";

import { useActionState, useEffect, useRef } from "react";
import { type ClientMessageState, sendMessageToClient } from "@/app/admin/actions";

const initialState: ClientMessageState = { status: "idle" };

export function MessageComposer({ leadId }: { leadId: number }) {
  const [state, formAction, isPending] = useActionState(sendMessageToClient, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  return (
    <div>
      <form ref={formRef} action={formAction} className="flex flex-col gap-3">
        <input type="hidden" name="leadId" value={leadId} />
        <label className="flex flex-col gap-1">
          <span className="text-xs text-stone">Sujet</span>
          <input
            type="text"
            name="subject"
            required
            maxLength={200}
            placeholder="Ex. Question sur votre projet"
            className="rounded-lg border border-paper/15 bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-bronze"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs text-stone">Message</span>
          <textarea
            name="message"
            required
            rows={4}
            maxLength={5000}
            placeholder="Votre message au client..."
            className="resize-none rounded-lg border border-paper/15 bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-bronze"
          />
        </label>
        <button
          type="submit"
          disabled={isPending}
          className="btn-secondary self-start !px-4 !py-2 text-xs disabled:opacity-60"
        >
          {isPending ? "Envoi..." : "Envoyer par email"}
        </button>
      </form>

      {state.status === "success" && (
        <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-bronze">
          <span aria-hidden>✓</span>
          Message envoyé au client.
        </p>
      )}
      {state.status === "error" && (
        <p className="mt-3 text-xs text-red-400">
          {state.message === "send-failed"
            ? "L'envoi a échoué. Vérifiez la configuration email."
            : "Erreur lors de l'envoi."}
        </p>
      )}
    </div>
  );
}
