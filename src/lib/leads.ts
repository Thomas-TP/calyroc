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
}

/** The 4 client-facing project stages -- deliberately the same steps
 * already described on the homepage (dictionary.home.processSteps), so the
 * public tracking page can reuse that copy instead of inventing new
 * wording. 1-indexed to match "step N of 4" phrasing directly. */
export const PROJECT_STAGE_COUNT = 4;

export const LEAD_STATUSES: Lead["status"][] = ["new", "contacted", "quoted", "won", "lost"];

export const LEAD_STATUS_LABELS: Record<Lead["status"], string> = {
  new: "Nouveau",
  contacted: "Contacté",
  quoted: "Devis envoyé",
  won: "Gagné",
  lost: "Perdu",
};
