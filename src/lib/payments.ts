export interface Payment {
  id: number;
  lead_id: number;
  kind: "deposit" | "balance" | "custom";
  pack_id: string | null;
  description: string;
  stripe_checkout_session_id: string;
  stripe_payment_intent_id: string | null;
  amount_due_cents: number;
  amount_paid_cents: number | null;
  status: "pending" | "paid" | "cancelled";
  created_at: string;
  paid_at: string | null;
}
