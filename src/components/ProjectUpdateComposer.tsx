"use client";

import { useActionState, useEffect, useRef } from "react";
import { addProjectUpdate, type ProjectUpdateState } from "@/app/admin/actions";

const initialState: ProjectUpdateState = { status: "idle" };

export function ProjectUpdateComposer({ leadId }: { leadId: number }) {
  const [state, formAction, isPending] = useActionState(addProjectUpdate, initialState);
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
