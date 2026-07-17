"use client";

import { useMemo, useState } from "react";
import { LeadCard } from "@/components/LeadCard";
import { LEAD_STATUS_LABELS, LEAD_STATUSES, type Lead } from "@/lib/leads";
import type { ProjectUpdate } from "@/lib/projectUpdates";

const STATUS_COLUMN_ACCENT: Record<Lead["status"], string> = {
  new: "text-paper/70",
  contacted: "text-paper/85",
  quoted: "text-bronze",
  won: "text-bronze",
  lost: "text-red-400",
};

// SQLite's datetime('now') stores UTC without a timezone marker
// ("2026-07-17 10:23:00") -- Date() parses that as local time unless told
// otherwise, silently shifting every timestamp by the browser's offset.
function parseSqliteUtc(value: string): Date {
  return new Date(`${value.replace(" ", "T")}Z`);
}

export function AdminDashboard({
  leads,
  updatesByLead,
}: {
  leads: Lead[];
  updatesByLead: Record<number, ProjectUpdate[]>;
}) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<Lead["status"] | "all">("all");

  const stats = useMemo(() => {
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const newThisWeek = leads.filter(
      (lead) => parseSqliteUtc(lead.created_at).getTime() >= oneWeekAgo,
    ).length;
    const inProgress = leads.filter(
      (lead) => lead.status === "contacted" || lead.status === "quoted",
    ).length;
    const won = leads.filter((lead) => lead.status === "won").length;
    const decided = leads.filter((lead) => lead.status === "won" || lead.status === "lost").length;
    const winRate = decided > 0 ? Math.round((won / decided) * 100) : null;

    return { total: leads.length, newThisWeek, inProgress, won, winRate };
  }, [leads]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return leads.filter((lead) => {
      if (statusFilter !== "all" && lead.status !== statusFilter) return false;
      if (!query) return true;
      return (
        lead.name.toLowerCase().includes(query) ||
        lead.email.toLowerCase().includes(query) ||
        lead.message.toLowerCase().includes(query)
      );
    });
  }, [leads, search, statusFilter]);

  if (leads.length === 0) {
    return (
      <div className="mt-10 flex flex-col items-center gap-1.5 rounded-2xl border border-dashed border-paper/15 px-6 py-16 text-center">
        <p className="text-sm text-paper/80">Aucun lead pour l'instant.</p>
        <p className="text-xs text-stone">
          Les nouveaux messages du formulaire de contact apparaîtront ici.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        <StatCard label="Leads" value={stats.total} />
        <StatCard label="Cette semaine" value={stats.newThisWeek} />
        <StatCard label="En cours" value={stats.inProgress} />
        <StatCard label="Gagnés" value={stats.won} />
        <StatCard
          label="Taux de conversion"
          value={stats.winRate === null ? "—" : `${stats.winRate}%`}
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Rechercher un nom, un email, un message..."
          className="min-w-[16rem] flex-1 rounded-lg border border-paper/15 bg-transparent px-4 py-2.5 text-sm text-paper outline-none focus:border-bronze"
        />
        <div className="flex flex-wrap gap-2">
          <FilterChip
            active={statusFilter === "all"}
            onClick={() => setStatusFilter("all")}
            label="Tous"
          />
          {LEAD_STATUSES.map((status) => (
            <FilterChip
              key={status}
              active={statusFilter === status}
              onClick={() => setStatusFilter(status)}
              label={LEAD_STATUS_LABELS[status]}
            />
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-stone">Aucun lead ne correspond à cette recherche.</p>
      ) : (
        <div className="mt-8 flex gap-5 overflow-x-auto pb-4">
          {LEAD_STATUSES.filter((status) => statusFilter === "all" || statusFilter === status).map(
            (status) => {
              const columnLeads = filtered.filter((lead) => lead.status === status);
              if (statusFilter === "all" && columnLeads.length === 0) return null;

              return (
                <div key={status} className="flex w-80 shrink-0 flex-col gap-4">
                  <div className="flex items-center justify-between px-1">
                    <p
                      className={`font-display text-xs font-bold uppercase tracking-[0.15em] ${STATUS_COLUMN_ACCENT[status]}`}
                    >
                      {LEAD_STATUS_LABELS[status]}
                    </p>
                    <span className="rounded-full bg-paper/8 px-2 py-0.5 text-xs text-stone">
                      {columnLeads.length}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {columnLeads.map((lead) => (
                      <LeadCard key={lead.id} lead={lead} updates={updatesByLead[lead.id] ?? []} />
                    ))}
                  </div>
                </div>
              );
            },
          )}
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border border-paper/10 bg-onyx-soft px-4 py-3.5">
      <p className="font-display text-2xl font-bold text-paper">{value}</p>
      <p className="mt-0.5 text-xs text-stone">{label}</p>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "border-bronze bg-bronze/15 text-bronze"
          : "border-paper/15 text-stone hover:border-paper/30 hover:text-paper"
      }`}
    >
      {label}
    </button>
  );
}
