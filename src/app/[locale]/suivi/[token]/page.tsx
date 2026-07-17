import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import type { Lead } from "@/lib/leads";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

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
  const lead = await env.DB.prepare("SELECT * FROM leads WHERE status_token = ?")
    .bind(token)
    .first<Lead>();

  if (!lead || !lead.project_stage) notFound();

  const currentStage = lead.project_stage;
  const pack = dictionary.pricingPage.packs.find((p) => p.id === lead.pack_id);
  // 0 at stage 1, fully drawn once the last stage is reached -- computed
  // server-side, no client JS needed for the rail fill.
  const fillFraction = (currentStage - 1) / (dictionary.home.processSteps.length - 1);

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-10">
      <PageHeader
        eyebrow={trackingPage.eyebrow}
        title={trackingPage.title}
        subtitle={pack ? `${trackingPage.subtitle} — ${pack.name}` : trackingPage.subtitle}
      />

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
          {dictionary.home.processSteps.map((step, index) => {
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

      <div className="mt-20 text-center">
        <h2 className="font-display text-xl font-bold text-paper">{trackingPage.ctaTitle}</h2>
        <Link href={`/${locale}/contact`} className="btn-primary mt-6 inline-flex">
          {trackingPage.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
