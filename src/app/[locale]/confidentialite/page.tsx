import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageView } from "@/components/LegalPageView";
import { getDictionary } from "@/i18n/dictionary";
import { confidentialite } from "@/i18n/legal";
import { isLocale, type Locale } from "@/i18n/locales";
import { localizedSlugs } from "@/i18n/routes";
import { buildAlternates, buildOpenGraph, buildTwitter } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { title, metaDescription } = confidentialite[locale];
  const pageTitle = `${title} — Calyroc`;

  return {
    title: pageTitle,
    description: metaDescription,
    alternates: buildAlternates(locale, localizedSlugs.confidentialite),
    openGraph: buildOpenGraph(
      locale,
      localizedSlugs.confidentialite[locale],
      pageTitle,
      metaDescription,
    ),
    twitter: buildTwitter(pageTitle, metaDescription),
  };
}

export default async function ConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale as Locale);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-10">
      <LegalPageView
        content={confidentialite[locale as Locale]}
        notice={locale === "fr" ? undefined : dictionary.legalPageNotice}
      />
    </section>
  );
}
