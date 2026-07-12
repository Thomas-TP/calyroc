import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { TransitionLink as Link } from "@/components/TransitionLink";
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
    title: `${dictionary.nav.work} — Calyroc`,
    description: dictionary.workPage.subtitle,
    alternates: buildAlternates(locale, "realisations"),
  };
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale as Locale);
  const { workPage } = dictionary;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-10">
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
