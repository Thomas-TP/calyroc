import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { approveProject } from "@/app/[locale]/suivi/[token]/actions";
import { PageHeader } from "@/components/PageHeader";
import { TrackingNav } from "@/components/TrackingNav";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { getLeadByToken } from "@/lib/leads";
import type { ProjectUpdate } from "@/lib/projectUpdates";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// SQLite's datetime('now') stores UTC without a timezone marker
// ("2026-07-17 10:23:00") -- Date() parses that as local time unless told
// otherwise, silently shifting every timestamp by the reader's offset.
function parseSqliteUtc(value: string): Date {
  return new Date(`${value.replace(" ", "T")}Z`);
}

function formatRelative(value: string, locale: string): string {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const days = Math.round((parseSqliteUtc(value).getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  if (Math.abs(days) < 1) return rtf.format(0, "day");
  if (Math.abs(days) < 7) return rtf.format(days, "day");
  if (Math.abs(days) < 30) return rtf.format(Math.round(days / 7), "week");
  return rtf.format(Math.round(days / 30), "month");
}

export default async function ProjectTrackingPage({
  params,
}: {
  params: Promise<{ locale: string; token: string }>;
}) {
  const { locale, token } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale as Locale);
  const { trackingPage } = dictionary;

  const { env } = await getCloudflareContext({ async: true });
  const lead = await getLeadByToken(env.DB, token);

  if (!lead?.project_stage) notFound();

  const [{ results: updateResults }, fileList] = await Promise.all([
    env.DB.prepare("SELECT * FROM project_updates WHERE lead_id = ? ORDER BY created_at DESC")
      .bind(lead.id)
      .all(),
    env.PROJECT_FILES.list({ prefix: `leads/${token}/` }),
    // Fire-and-forget-ish view tracking: awaited so it's guaranteed to run
    // (Workers can terminate background work once the response is sent),
    // but it doesn't block anything else above from running concurrently.
    env.DB.prepare("UPDATE leads SET suivi_last_viewed_at = datetime('now') WHERE id = ?")
      .bind(lead.id)
      .run(),
  ]);
  const updates = updateResults as unknown as ProjectUpdate[];
  const files = fileList.objects.map((object) => {
    const key = object.key.slice(`leads/${token}/`.length);
    return { key, url: `/api/files/${token}/${key}` };
  });

  const currentStage = lead.project_stage;
  const steps = trackingPage.steps;
  const currentStep = steps[currentStage - 1];
  const pack = dictionary.pricingPage.packs.find((p) => p.id === lead.pack_id);
  // 0 at stage 1, fully drawn once the last stage is reached -- computed
  // server-side, no client JS needed for the rail fill.
  const fillFraction = (currentStage - 1) / (steps.length - 1);

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-10">
      <PageHeader
        eyebrow={trackingPage.eyebrow}
        title={trackingPage.title}
        subtitle={pack ? `${trackingPage.subtitle} — ${pack.name}` : trackingPage.subtitle}
      />

      <TrackingNav
        locale={locale}
        token={token}
        active="overview"
        overviewLabel={trackingPage.overviewNavLabel}
        paymentsLabel={trackingPage.paymentsNavLabel}
      />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-paper/10 bg-onyx-soft px-6 py-5">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-stone">
            {trackingPage.summaryHeading}
          </p>
          {pack && <p className="mt-1.5 font-display text-lg font-bold text-paper">{pack.name}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {lead.preview_url && (
            <a
              href={lead.preview_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-4 !py-2 text-xs"
            >
              {trackingPage.previewCta}
            </a>
          )}
          <p className="text-sm text-stone">{formatRelative(lead.created_at, locale)}</p>
        </div>
      </div>

      <div className="relative mt-16">
        {/* Vertical rail — mobile only */}
        <div className="absolute bottom-4 left-4 top-4 w-px bg-paper/10 md:hidden">
          <div
            className="h-full w-full origin-top bg-bronze"
            style={{ transform: `scaleY(${fillFraction})` }}
          />
        </div>

        {/* Horizontal rail — desktop only, centered through the node circles */}
        <div className="absolute left-0 right-0 top-4 hidden h-px bg-paper/10 md:block">
          <div
            className="h-full w-full origin-left bg-bronze"
            style={{ transform: `scaleX(${fillFraction})` }}
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isDone = stepNumber < currentStage;
            const isCurrent = stepNumber === currentStage;

            return (
              <div key={step.title} className="relative pl-12 md:pl-0">
                <span
                  className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border font-display text-xs font-bold md:static md:mb-5 ${
                    isDone
                      ? "border-bronze bg-bronze text-ink"
                      : isCurrent
                        ? "border-bronze bg-onyx text-bronze"
                        : "border-paper/20 bg-onyx text-stone"
                  }`}
                >
                  {isDone ? "✓" : stepNumber}
                </span>
                <h3
                  className={`font-display text-base font-bold ${isCurrent || isDone ? "text-paper" : "text-stone"}`}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{step.description}</p>
                {isCurrent && (
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-bronze/15 px-2.5 py-1 text-xs font-medium text-bronze">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bronze" />
                    {trackingPage.currentBadge}
                  </span>
                )}
                {isDone && (
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-paper/8 px-2.5 py-1 text-xs font-medium text-stone">
                    {trackingPage.doneBadge}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {currentStep && (
        <div className="mt-16 rounded-2xl border border-bronze/30 bg-bronze/8 px-6 py-7 md:px-8">
          <p className="text-eyebrow">{trackingPage.todayHeading}</p>
          <h2 className="mt-2 font-display text-xl font-bold text-paper md:text-2xl">
            {currentStep.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-paper/80 md:text-base">
            {currentStep.description}
          </p>
        </div>
      )}

      {lead.preview_url && !lead.client_approved_at && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-paper/10 bg-onyx-soft px-6 py-5">
          <div>
            <p className="font-display text-sm font-bold text-paper">
              {trackingPage.approveHeading}
            </p>
            <p className="mt-1 text-sm text-stone">{trackingPage.approveDescription}</p>
          </div>
          <form action={approveProject}>
            <input type="hidden" name="token" value={token} />
            <input type="hidden" name="locale" value={locale} />
            <button type="submit" className="btn-primary !px-5 !py-2.5 text-sm">
              {trackingPage.approveButton}
            </button>
          </form>
        </div>
      )}

      {lead.client_approved_at && (
        <p className="mt-6 flex items-center gap-1.5 text-xs font-medium text-bronze">
          <span aria-hidden>✓</span>
          {trackingPage.approvedNotice}
        </p>
      )}

      {files.length > 0 && (
        <div className="mt-16">
          <p className="text-eyebrow">{trackingPage.filesHeading}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {files.map((file) => (
              <a
                key={file.key}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl border border-paper/10 bg-onyx-soft"
              >
                {/** biome-ignore lint/performance/noImgElement: user-uploaded R2 assets, not build-time optimizable */}
                <img src={file.url} alt="" className="block h-40 w-auto max-w-full" />
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16">
        <p className="text-eyebrow">{trackingPage.updatesHeading}</p>
        {updates.length === 0 ? (
          <p className="mt-4 rounded-2xl border border-dashed border-paper/15 px-6 py-8 text-center text-sm text-stone">
            {trackingPage.updatesEmpty}
          </p>
        ) : (
          <ol className="mt-5 flex flex-col gap-4 border-l border-paper/10 pl-6">
            {updates.map((update) => (
              <li key={update.id} className="relative">
                <span className="absolute -left-[1.6rem] top-1.5 h-2 w-2 rounded-full bg-bronze" />
                <p className="text-sm leading-relaxed text-paper/85">{update.message}</p>
                <p className="mt-1 text-xs text-stone">
                  {formatRelative(update.created_at, locale)}
                </p>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="mt-20 text-center">
        <h2 className="font-display text-xl font-bold text-paper">{trackingPage.ctaTitle}</h2>
        <Link href={`/${locale}/contact`} className="btn-primary mt-6 inline-flex">
          {trackingPage.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
