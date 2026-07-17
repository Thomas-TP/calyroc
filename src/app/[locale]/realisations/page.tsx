import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { localizedSlugs } from "@/i18n/routes";
import { buildAlternates, buildBreadcrumbJsonLd, buildOpenGraph, buildTwitter } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  const title = `${dictionary.nav.work} — Calyroc`;

  return {
    title,
    description: dictionary.workPage.subtitle,
    alternates: buildAlternates(locale, localizedSlugs.realisations),
    openGraph: buildOpenGraph(
      locale,
      localizedSlugs.realisations[locale],
      title,
      dictionary.workPage.subtitle,
    ),
    twitter: buildTwitter(title, dictionary.workPage.subtitle),
  };
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale as Locale);
  const { workPage } = dictionary;

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(locale as Locale, [
    { name: dictionary.nav.work, path: localizedSlugs.realisations[locale as Locale] },
  ]);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader eyebrow={workPage.eyebrow} title={workPage.title} subtitle={workPage.subtitle} />

      <div className="mt-16 flex flex-col gap-10">
        {workPage.caseStudies.map((study, index) => (
          <Reveal key={study.title} variant={index % 2 === 0 ? "left" : "right"}>
            <CaseStudyCard study={study} labels={workPage} />
          </Reveal>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="font-display text-2xl font-bold text-paper md:text-3xl">
          {workPage.ctaTitle}
        </h2>
        <p className="mt-2 text-stone">{workPage.ctaSubtitle}</p>
        <Link href={`/${locale}/contact`} className="btn-primary mt-6 inline-flex">
          {workPage.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
