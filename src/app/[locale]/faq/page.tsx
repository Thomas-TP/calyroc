import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHeader } from "@/components/PageHeader";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
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
  const dictionary = getDictionary(locale as Locale);
  const { faqPage } = dictionary;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqPage.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(locale as Locale, [
    { name: faqPage.eyebrow, path: "faq" },
  ]);

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
        <FaqAccordion items={faqPage.items} />
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
        <Link href={`/${locale}/contact`} className="btn-primary">
          {dictionary.pricingPage.ctaLabel}
        </Link>
        <Link href={`/${locale}/services`} className="btn-secondary">
          {faqPage.servicesLinkLabel}
        </Link>
      </div>
    </section>
  );
}
