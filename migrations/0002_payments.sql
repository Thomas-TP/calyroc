ALTER TABLE leads ADD COLUMN pack_id TEXT;
ALTER TABLE leads ADD COLUMN updated_at TEXT;

CREATE TABLE payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lead_id INTEGER NOT NULL REFERENCES leads(id),
  kind TEXT NOT NULL DEFAULT 'deposit',
  pack_id TEXT,
  description TEXT NOT NULL,
  stripe_checkout_session_id TEXT NOT NULL,
  stripe_payment_intent_id TEXT,
  amount_due_cents INTEGER NOT NULL,
  amount_paid_cents INTEGER,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  paid_at TEXT
);

CREATE UNIQUE INDEX idx_payments_stripe_session ON payments(stripe_checkout_session_id);
CREATE INDEX idx_payments_lead_id ON payments(lead_id);
