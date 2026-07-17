import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { PayNowButton } from "@/components/PayNowButton";
import { TrackingNav } from "@/components/TrackingNav";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { getLeadByToken } from "@/lib/leads";
import type { Payment } from "@/lib/payments";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

function formatChf(cents: number): string {
  return `${(cents / 100).toFixed(2)} CHF`;
}

function formatDate(value: string, locale: string): string {
  return new Date(`${value.replace(" ", "T")}Z`).toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default async function TrackingPaymentsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; token: string }>;
  searchParams: Promise<{ payment?: string }>;
}) {
  const { locale, token } = await params;
  const { payment } = await searchParams;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale as Locale);
  const { trackingPage } = dictionary;

  const { env } = await getCloudflareContext({ async: true });
  const lead = await getLeadByToken(env.DB, token);
  if (!lead?.project_stage) notFound();

  const { results } = await env.DB.prepare(
    "SELECT * FROM payments WHERE lead_id = ? ORDER BY created_at DESC",
  )
    .bind(lead.id)
    .all();
  const payments = results as unknown as Payment[];

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-10">
      <PageHeader
        eyebrow={trackingPage.eyebrow}
        title={trackingPage.paymentsHeading}
        subtitle={trackingPage.paymentsSubtitle}
      />

      <TrackingNav
        locale={locale}
        token={token}
        active="payments"
        overviewLabel={trackingPage.overviewNavLabel}
        paymentsLabel={trackingPage.paymentsNavLabel}
      />

      {payment === "success" && (
        <p className="mt-6 rounded-xl border border-bronze/30 bg-bronze/10 px-4 py-3 text-sm text-bronze">
          {trackingPage.paymentSuccessNotice}
        </p>
      )}

      {payments.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-paper/15 px-6 py-8 text-center text-sm text-stone">
          {trackingPage.paymentsEmpty}
        </p>
      ) : (
        <div className="mt-10 flex flex-col gap-4">
          {payments.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-paper/10 bg-onyx-soft px-6 py-5"
            >
              <div>
                <p className="font-display text-base font-bold text-paper">{item.description}</p>
                <p className="mt-1 text-xs text-stone">{formatDate(item.created_at, locale)}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-display text-lg font-bold text-paper">
                  {formatChf(item.amount_due_cents)}
                </p>
                {item.status === "paid" ? (
                  <span className="rounded-full border border-bronze/40 bg-bronze/20 px-3 py-1 text-xs font-medium text-bronze">
                    {trackingPage.paidLabel}
                  </span>
                ) : item.status === "pending" ? (
                  <PayNowButton
                    token={token}
                    paymentId={item.id}
                    locale={locale}
                    label={trackingPage.payNowLabel}
                    errorLabel={trackingPage.payErrorLabel}
                  />
                ) : (
                  <span className="rounded-full border border-paper/15 bg-paper/5 px-3 py-1 text-xs font-medium text-stone">
                    {item.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
