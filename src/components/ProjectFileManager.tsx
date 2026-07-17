"use client";

import { useActionState, useEffect, useRef } from "react";
import { deleteProjectFile, type ProjectFileState, uploadProjectFile } from "@/app/admin/actions";

const initialState: ProjectFileState = { status: "idle" };

export function ProjectFileManager({
  leadId,
  files,
}: {
  leadId: number;
  files: { key: string; url: string }[];
}) {
  const [state, formAction, isPending] = useActionState(uploadProjectFile, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  return (
    <div>
      <form ref={formRef} action={formAction} className="flex flex-wrap items-center gap-3">
        <input type="hidden" name="leadId" value={leadId} />
        <input
          type="file"
          name="file"
          accept="image/png,image/jpeg,image/webp,image/svg+xml"
          required
          className="max-w-full flex-1 text-xs text-stone file:mr-3 file:rounded-full file:border-0 file:bg-paper/8 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-paper hover:file:bg-paper/15"
        />
        <button
          type="submit"
          disabled={isPending}
          className="btn-secondary !px-4 !py-2 text-xs disabled:opacity-60"
        >
          {isPending ? "Envoi..." : "Ajouter"}
        </button>
      </form>
      <p className="mt-2 text-[0.6875rem] text-stone">PNG, JPEG, WebP ou SVG — 8 Mo maximum.</p>

      {state.status === "error" && (
        <p className="mt-2 text-xs text-red-400">
          {state.message === "type"
            ? "Format non supporté."
            : state.message === "size"
              ? "Fichier trop volumineux (8 Mo max)."
              : "Erreur lors de l'envoi."}
        </p>
      )}

      {files.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {files.map((file) => (
            <div
              key={file.key}
              className="group relative aspect-square overflow-hidden rounded-xl border border-paper/10 bg-onyx/40"
            >
              {/** biome-ignore lint/performance/noImgElement: user-uploaded R2 assets, not build-time optimizable */}
              <img src={file.url} alt="" className="h-full w-full object-cover" />
              <form
                action={deleteProjectFile}
                className="absolute right-1.5 top-1.5 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <input type="hidden" name="leadId" value={leadId} />
                <input type="hidden" name="key" value={file.key} />
                <button
                  type="submit"
                  aria-label="Supprimer cette image"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-onyx/90 text-xs text-paper/70 hover:text-red-400"
                >
                  ✕
                </button>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
