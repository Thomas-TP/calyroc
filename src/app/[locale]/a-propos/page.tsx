import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "next-view-transitions";
import { FounderCard } from "@/components/FounderCard";
import { PageHeader } from "@/components/PageHeader";
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
    title: `${dictionary.nav.about} — Calyroc`,
    description: dictionary.aboutPage.subtitle,
    alternates: buildAlternates(locale, "a-propos"),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale as Locale);
  const { aboutPage } = dictionary;

  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10">
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        subtitle={aboutPage.subtitle}
      />

      <Reveal delay={0.08}>
        <div className="mt-8">
          <FounderCard aboutPage={aboutPage} />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-16">
          <h2 className="font-display text-lg font-bold text-paper">{aboutPage.storyTitle}</h2>
          <div className="mt-4 space-y-4">
            {aboutPage.storyParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-paper/85">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-16">
          <h2 className="font-display text-lg font-bold text-paper">{aboutPage.whyTitle}</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {aboutPage.whyPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-paper/10 bg-onyx-soft/50 p-6"
              >
                <h3 className="font-display text-sm font-bold text-paper">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-16 rounded-2xl border border-paper/10 bg-onyx-soft/50 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-paper">{aboutPage.ctaTitle}</h2>
          <p className="mt-2 text-stone">{aboutPage.ctaSubtitle}</p>
          <Link href={`/${locale}/contact`} className="btn-primary mt-6">
            {aboutPage.ctaLabel}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
