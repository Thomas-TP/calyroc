"use client";

import Link from "next/link";
import { LEAD_STATUS_LABELS, type Lead } from "@/lib/leads";

export const STATUS_BADGE_CLASS: Record<Lead["status"], string> = {
  new: "border-paper/15 bg-paper/5 text-paper/70",
  contacted: "border-paper/15 bg-paper/5 text-paper/85",
  quoted: "border-bronze/30 bg-bronze/10 text-bronze",
  won: "border-bronze/40 bg-bronze/20 text-bronze",
  lost: "border-red-400/30 bg-red-400/10 text-red-400",
};

// SQLite's datetime('now') stores UTC without a timezone marker
// ("2026-07-17 10:23:00") -- Date() parses that as local time unless told
// otherwise, silently shifting every timestamp by the browser's offset.
function parseSqliteUtc(value: string): Date {
  return new Date(`${value.replace(" ", "T")}Z`);
}

function formatViewed(value: string): string {
  const rtf = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });
  const days = Math.round((parseSqliteUtc(value).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  if (Math.abs(days) < 1) return rtf.format(0, "day");
  if (Math.abs(days) < 7) return rtf.format(days, "day");
  return rtf.format(Math.round(days / 7), "week");
}

export function LeadCard({ lead, updateCount }: { lead: Lead; updateCount: number }) {
  return (
    <Link
      href={`/admin/leads/${lead.id}`}
      className="block rounded-2xl border border-paper/10 bg-onyx-soft p-5 transition-colors hover:border-bronze/40"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-bold text-paper">{lead.name}</p>
          <p className="truncate text-xs text-stone">{lead.email}</p>
          <p className="mt-1 text-xs text-stone">
            {lead.created_at.slice(0, 10)} · {lead.locale.toUpperCase()}
            {lead.pack_id ? ` · ${lead.pack_id}` : ""}
          </p>
        </div>
        <span
          className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${STATUS_BADGE_CLASS[lead.status]}`}
        >
          {LEAD_STATUS_LABELS[lead.status]}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-paper/60">{lead.message}</p>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.6875rem] text-stone">
        {lead.status_token && <span className="text-bronze">Suivi actif</span>}
        {updateCount > 0 && (
          <span>
            {updateCount} mise{updateCount > 1 ? "s" : ""} à jour
          </span>
        )}
        {lead.suivi_last_viewed_at && <span>Vu {formatViewed(lead.suivi_last_viewed_at)}</span>}
      </div>
    </Link>
  );
}
