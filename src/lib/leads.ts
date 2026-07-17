export interface Lead {
  id: number;
  name: string;
  email: string;
  budget: string;
  message: string;
  locale: string;
  status: "new" | "contacted" | "quoted" | "won" | "lost";
  notes: string;
  created_at: string;
  pack_id: string | null;
  updated_at: string | null;
  status_token: string | null;
  project_stage: number | null;
  preview_url: string | null;
  suivi_last_viewed_at: string | null;
  client_approved_at: string | null;
}

/** The 4 client-facing project stages. Has its own copy in
 * dictionary.trackingPage.steps rather than reusing dictionary.home
 * .processSteps -- the homepage copy is written to persuade a prospect
 * (contrastive "not X, but Y" phrasing) and reads as abrupt/pushy once
 * addressed to a client who already signed. 1-indexed to match "step N of
 * 4" phrasing directly. */
export const PROJECT_STAGE_COUNT = 4;

export const LEAD_STATUSES: Lead["status"][] = ["new", "contacted", "quoted", "won", "lost"];

export const LEAD_STATUS_LABELS: Record<Lead["status"], string> = {
  new: "Nouveau",
  contacted: "Contacté",
  quoted: "Devis envoyé",
  won: "Gagné",
  lost: "Perdu",
};

/** Returns the lead's existing tracking token, generating and persisting
 * one if it doesn't have one yet. Shared by updateProjectStage (setting a
 * stage) and uploadProjectFile (attaching an image) -- either action can be
 * the first to need a token, and both must produce the same one. */
export async function ensureStatusToken(db: D1Database, leadId: number): Promise<string> {
  const existing = await db
    .prepare("SELECT status_token FROM leads WHERE id = ?")
    .bind(leadId)
    .first<{ status_token: string | null }>();

  if (existing?.status_token) return existing.status_token;

  const token = crypto.randomUUID().replace(/-/g, "");
  await db.prepare("UPDATE leads SET status_token = ? WHERE id = ?").bind(token, leadId).run();
  return token;
}

/** Resolves a lead from its public tracking token -- shared by every page
 * under suivi/[token]/ (overview, paiement, and the layout that wraps
 * both). Does not update suivi_last_viewed_at itself: that's a
 * "the client checked their status" signal, meaningful once per visit to
 * the overview page, not something that should fire again on every
 * sub-page a layout happens to also resolve the lead for. */
export async function getLeadByToken(db: D1Database, token: string): Promise<Lead | null> {
  const lead = await db
    .prepare("SELECT * FROM leads WHERE status_token = ?")
    .bind(token)
    .first<Lead>();
  return lead ?? null;
}
