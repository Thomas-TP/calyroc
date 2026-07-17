ALTER TABLE leads ADD COLUMN status_token TEXT;
ALTER TABLE leads ADD COLUMN project_stage INTEGER;

CREATE UNIQUE INDEX idx_leads_status_token ON leads(status_token);
