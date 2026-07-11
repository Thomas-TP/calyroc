import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHeader } from "@/components/PageHeader";
import { PriceCompareWidget } from "@/components/PriceCompareWidget";
import { PricingCard } from "@/components/PricingCard";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { buildAlternates } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);

  return {
    title: `${dictionary.nav.pricing} — Calyroc`,
    description: dictionary.pricingPage.subtitle,
    alternates: buildAlternates(locale, "tarifs"),
  };
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale as Locale);
  const { pricingPage } = dictionary;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingPage.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        eyebrow={pricingPage.eyebrow}
        title={pricingPage.title}
        subtitle={pricingPage.subtitle}
      />

      <Reveal>
        <p className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-full border border-bronze/30 bg-bronze/10 px-4 py-2 text-sm text-bronze">
          <span aria-hidden>✓</span>
          {pricingPage.guaranteeLabel}
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {pricingPage.packs.map((pack, index) => (
          <Reveal key={pack.name} delay={index * 0.08}>
            <PricingCard pack={pack} timelineLabel={pricingPage.deliveryLabel} />
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-paper/10 bg-onyx-soft/50 p-6 text-center">
        <h2 className="font-display text-lg font-bold text-paper">
          {pricingPage.maintenanceTitle}
        </h2>
        <p className="mt-2 text-stone">{pricingPage.maintenanceText}</p>
      </div>

      <PriceCompareWidget dictionary={dictionary} bare />

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="font-display text-lg font-bold text-paper">{pricingPage.termsTitle}</h2>
        <ul className="mt-4 space-y-2">
          {pricingPage.terms.map((term) => (
            <li key={term} className="flex items-start gap-2 text-sm text-paper/85">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bronze" />
              {term}
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="font-display text-lg font-bold text-paper">{pricingPage.faqTitle}</h2>
        <FaqAccordion items={pricingPage.faq} />
      </div>

      <div className="mt-16 text-center">
        <a href={`/${locale}/contact`} className="btn-primary">
          {pricingPage.ctaLabel}
        </a>
      </div>
    </section>
  );
}
