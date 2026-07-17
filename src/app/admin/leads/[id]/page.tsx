import { getCloudflareContext } from "@opennextjs/cloudflare";
import Link from "next/link";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { deleteProjectUpdate, updateLead } from "@/app/admin/actions";
import { CustomSelect } from "@/components/CustomSelect";
import { MessageComposer } from "@/components/MessageComposer";
import { PaymentLinkGenerator } from "@/components/PaymentLinkGenerator";
import { ProjectFileManager } from "@/components/ProjectFileManager";
import { ProjectStageGenerator } from "@/components/ProjectStageGenerator";
import { ProjectUpdateComposer } from "@/components/ProjectUpdateComposer";
import { isLocale } from "@/i18n/locales";
import { SITE_URL } from "@/i18n/seo";
import { isAuthenticated } from "@/lib/adminAuth";
import type { ClientMessage } from "@/lib/clientMessages";
import { LEAD_STATUS_LABELS, LEAD_STATUSES, type Lead } from "@/lib/leads";
import type { ProjectUpdate } from "@/lib/projectUpdates";

const STATUS_OPTIONS = LEAD_STATUSES.map((status) => ({
  value: status,
  label: LEAD_STATUS_LABELS[status],
}));

function formatDate(value: string): string {
  return new Date(`${value.replace(" ", "T")}Z`).toLocaleString("fr-CH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const { id } = await params;
  const leadId = Number(id);
  const { env } = await getCloudflareContext({ async: true });

  const lead = await env.DB.prepare("SELECT * FROM leads WHERE id = ?").bind(leadId).first<Lead>();
  if (!lead) redirect("/admin");

  const [{ results: updateResults }, fileList, paidRow, { results: messageResults }] =
    await Promise.all([
      env.DB.prepare("SELECT * FROM project_updates WHERE lead_id = ? ORDER BY created_at DESC")
        .bind(leadId)
        .all(),
      lead.status_token
        ? env.PROJECT_FILES.list({ prefix: `leads/${lead.status_token}/` })
        : Promise.resolve(null),
      env.DB.prepare(
        "SELECT COALESCE(SUM(amount_paid_cents), 0) AS total FROM payments WHERE lead_id = ? AND status = 'paid'",
      )
        .bind(leadId)
        .first<{ total: number }>(),
      env.DB.prepare("SELECT * FROM client_messages WHERE lead_id = ? ORDER BY created_at DESC")
        .bind(leadId)
        .all(),
    ]);
  const updates = updateResults as unknown as ProjectUpdate[];
  const alreadyPaidCents = paidRow?.total ?? 0;
  const messages = messageResults as unknown as ClientMessage[];

  const files = (fileList?.objects ?? []).map((object) => {
    const key = object.key.slice(`leads/${lead.status_token}/`.length);
    return { key, url: `/api/files/${lead.status_token}/${key}` };
  });

  const leadLocale = isLocale(lead.locale) ? lead.locale : "fr";
  const trackingUrl = lead.status_token
    ? `${SITE_URL}/${leadLocale}/suivi/${lead.status_token}`
    : null;

  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:px-10">
      <Link href="/admin" className="text-xs text-stone transition-colors hover:text-paper">
        ← Retour aux leads
      </Link>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-display-sm text-paper">{lead.name}</h1>
          <p className="mt-1 text-sm text-stone">{lead.email}</p>
          <p className="mt-1 text-xs text-stone">
            {formatDate(lead.created_at)} · {lead.locale.toUpperCase()}
            {lead.pack_id ? ` · ${lead.pack_id}` : ""}
          </p>
        </div>
      </div>

      <p className="mt-6 whitespace-pre-wrap rounded-2xl border border-paper/10 bg-onyx-soft p-5 text-sm leading-relaxed text-paper/85">
        {lead.message}
      </p>

      <Section title="Statut et notes">
        <form action={updateLead} className="flex flex-col gap-4">
          <input type="hidden" name="id" value={lead.id} />
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-stone">Statut</span>
              <CustomSelect
                name="status"
                ariaLabel="Statut"
                defaultValue={lead.status}
                options={STATUS_OPTIONS}
                triggerClassName="px-3 py-2 text-sm"
              />
            </div>
          </div>
          <label className="flex flex-col gap-1">
            <span className="text-xs text-stone">Notes internes</span>
            <textarea
              name="notes"
              rows={3}
              defaultValue={lead.notes}
              className="resize-none rounded-lg border border-paper/15 bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-bronze"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs text-stone">Lien de preview du site (optionnel)</span>
            <input
              type="url"
              name="previewUrl"
              defaultValue={lead.preview_url ?? ""}
              placeholder="https://apercu-client.pages.dev"
              className="rounded-lg border border-paper/15 bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-bronze"
            />
          </label>
          <button type="submit" className="btn-secondary self-start !px-4 !py-2 text-xs">
            Enregistrer
          </button>
        </form>
      </Section>

      <Section title="Écrire au client">
        <MessageComposer leadId={lead.id} />
        {messages.length > 0 && (
          <ul className="mt-5 flex flex-col gap-2.5">
            {messages.map((item) => (
              <li key={item.id} className="rounded-lg bg-onyx-soft px-3 py-2.5">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-medium text-paper">{item.subject}</p>
                  <p className="shrink-0 text-[0.6875rem] text-stone">
                    {formatDate(item.created_at)}
                  </p>
                </div>
                <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-paper/70">
                  {item.message}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section title="Paiement">
        <PaymentLinkGenerator
          leadId={lead.id}
          defaultPackId={lead.pack_id}
          alreadyPaidCents={alreadyPaidCents}
        />
      </Section>

      <Section title="Suivi client">
        <ProjectStageGenerator
          leadId={lead.id}
          defaultStage={lead.project_stage}
          defaultTrackingUrl={trackingUrl}
        />
        {lead.client_approved_at && (
          <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-bronze">
            <span aria-hidden>✓</span>
            Approuvé par le client le {formatDate(lead.client_approved_at)} — envoyer la facture du
            solde ci-dessus.
          </p>
        )}
        {lead.suivi_last_viewed_at && (
          <p className="mt-3 text-xs text-stone">
            Dernière consultation par le client : {formatDate(lead.suivi_last_viewed_at)}
          </p>
        )}
      </Section>

      <Section title="Images et logo partagés avec le client">
        <ProjectFileManager leadId={lead.id} files={files} />
      </Section>

      <Section title="Mises à jour visibles par le client">
        <ProjectUpdateComposer leadId={lead.id} />
        {updates.length > 0 && (
          <ul className="mt-4 flex flex-col gap-2.5">
            {updates.map((update) => (
              <li
                key={update.id}
                className="flex items-start justify-between gap-3 rounded-lg bg-onyx-soft px-3 py-2.5"
              >
                <div className="min-w-0">
                  <p className="text-sm leading-relaxed text-paper/85">{update.message}</p>
                  <p className="mt-1 text-[0.6875rem] text-stone">
                    {formatDate(update.created_at)}
                  </p>
                </div>
                <form action={deleteProjectUpdate}>
                  <input type="hidden" name="id" value={update.id} />
                  <input type="hidden" name="leadId" value={lead.id} />
                  <button
                    type="submit"
                    aria-label="Supprimer cette mise à jour"
                    className="shrink-0 text-stone transition-colors hover:text-red-400"
                  >
                    ✕
                  </button>
                </form>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </section>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-8 border-t border-paper/8 pt-8">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-stone">{title}</p>
      {children}
    </div>
  );
}
