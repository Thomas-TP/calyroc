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
}

export const LEAD_STATUSES: Lead["status"][] = ["new", "contacted", "quoted", "won", "lost"];
