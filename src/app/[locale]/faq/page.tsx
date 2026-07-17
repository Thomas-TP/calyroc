import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type FaqCategory, FaqExplorer } from "@/components/FaqExplorer";
import { PageHeader } from "@/components/PageHeader";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { getServiceTranslation, services } from "@/content/services";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { serviceSlugs } from "@/i18n/routes";
import { buildAlternates, buildBreadcrumbJsonLd, buildOpenGraph, buildTwitter } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  const title = `${dictionary.faqPage.title} — Calyroc`;

  return {
    title,
    description: dictionary.faqPage.subtitle,
    alternates: buildAlternates(locale, "faq"),
    openGraph: buildOpenGraph(locale, "faq", title, dictionary.faqPage.subtitle),
    twitter: buildTwitter(title, dictionary.faqPage.subtitle),
  };
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const dictionary = getDictionary(loc);
  const { faqPage, servicesPage } = dictionary;

  // Every service's own FAQ (already written and localized in
  // src/content/services/) is aggregated here rather than duplicated into
  // the dictionary -- one source of truth, and this page becomes the
  // single searchable hub for every question on the site, general or
  // service-specific.
  const categories: FaqCategory[] = [
    { id: "general", label: faqPage.generalCategoryLabel, items: faqPage.items },
    ...services.map((service) => {
      const translation = getServiceTranslation(service, loc);
      return {
        id: service.id,
        label: translation.title,
        href: `/${loc}/services/${serviceSlugs[service.id][loc]}`,
        items: translation.faq,
      };
    }),
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ),
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(loc, [{ name: faqPage.eyebrow, path: "faq" }]);

  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader eyebrow={faqPage.eyebrow} title={faqPage.title} subtitle={faqPage.subtitle} />

      <div className="mt-12">
        <FaqExplorer
          categories={categories}
          allLabel={faqPage.allCategoryLabel}
          searchPlaceholder={faqPage.searchPlaceholder}
          noResultsLabel={faqPage.searchNoResults}
          learnMoreLabel={servicesPage.learnMoreLabel}
        />
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
        <Link href={`/${loc}/contact`} className="btn-primary">
          {dictionary.pricingPage.ctaLabel}
        </Link>
        <Link href={`/${loc}/services`} className="btn-secondary">
          {faqPage.servicesLinkLabel}
        </Link>
      </div>
    </section>
  );
}
