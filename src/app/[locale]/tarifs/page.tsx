import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PackFinder } from "@/components/PackFinder";
import { PageHeader } from "@/components/PageHeader";
import { PriceCompareWidget } from "@/components/PriceCompareWidget";
import { PricingCard } from "@/components/PricingCard";
import { Reveal } from "@/components/Reveal";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { localizedSlugs } from "@/i18n/routes";
import {
  buildAlternates,
  buildBreadcrumbJsonLd,
  buildOpenGraph,
  buildTwitter,
  geneva,
  SITE_URL,
} from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  const title = `${dictionary.nav.pricing} — Calyroc`;

  return {
    title,
    description: dictionary.pricingPage.subtitle,
    alternates: buildAlternates(locale, localizedSlugs.tarifs),
    openGraph: buildOpenGraph(
      locale,
      localizedSlugs.tarifs[locale],
      title,
      dictionary.pricingPage.subtitle,
    ),
    twitter: buildTwitter(title, dictionary.pricingPage.subtitle),
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

  // One Service + Offer per pack -- price is parsed from the display
  // string ("1'490 CHF" -> "1490") since that's the single source of
  // truth already shown to visitors, rather than duplicating a numeric
  // price separately in the dictionary.
  const servicesJsonLd = pricingPage.packs.map((pack) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: pack.name,
    name: `${pack.name} — Calyroc`,
    description: pack.description,
    provider: {
      "@type": "ProfessionalService",
      name: "Calyroc",
      url: SITE_URL,
      // Google's rich-results validator requires an address on the
      // provider for the Local Business feature -- flagged by an Ahrefs
      // Site Audit crawl ("Missing required address property"). Uses the
      // nearby, better-known city (localized per locale) rather than the
      // registered legal address, which only appears verbatim on the
      // legal pages themselves.
      address: {
        "@type": "PostalAddress",
        addressLocality: geneva[locale as Locale],
        addressRegion: geneva[locale as Locale],
        addressCountry: "CH",
      },
    },
    offers: {
      "@type": "Offer",
      price: pack.price.replace(/[^\d]/g, ""),
      priceCurrency: "CHF",
      url: `${SITE_URL}/${locale}/${localizedSlugs.tarifs[locale as Locale]}`,
    },
  }));

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(locale as Locale, [
    { name: dictionary.nav.pricing, path: localizedSlugs.tarifs[locale as Locale] },
  ]);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {servicesJsonLd.map((serviceJsonLd) => (
        <script
          key={serviceJsonLd.serviceType}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader
        eyebrow={pricingPage.eyebrow}
        title={pricingPage.title}
        subtitle={pricingPage.subtitle}
      />

      <Reveal>
        <div className="mt-10">
          <PackFinder pricingPage={pricingPage} />
        </div>
      </Reveal>

      <Reveal>
        <p className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-full border border-bronze/30 bg-bronze/10 px-4 py-2 text-sm text-bronze">
          <span aria-hidden>✓</span>
          {pricingPage.guaranteeLabel}
        </p>
      </Reveal>

      <div id="pricing-cards" className="mt-10 scroll-mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
        {pricingPage.packs.map((pack, index) => (
          <Reveal key={pack.name} delay={index * 0.08} variant="scale">
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
        <Link
          href={`/${locale}/faq`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-bronze transition-colors hover:text-bronze-soft"
        >
          {pricingPage.faqSeeMoreLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-16 text-center">
        <Link href={`/${locale}/contact`} className="btn-primary">
          {pricingPage.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
