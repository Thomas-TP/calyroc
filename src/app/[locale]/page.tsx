import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { HomeProcess } from "@/components/HomeProcess";
import { HomeServicesTeaser } from "@/components/HomeServicesTeaser";
import { HomeWorkTeaser } from "@/components/HomeWorkTeaser";
import { PriceCompareWidget } from "@/components/PriceCompareWidget";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { buildAlternates, SITE_URL } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: buildAlternates(locale, ""),
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Calyroc",
    url: SITE_URL,
    description: dictionary.meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gland",
      addressRegion: "Vaud",
      addressCountry: "CH",
    },
    areaServed: "Europe",
    priceRange: "590-2900+ CHF",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero dictionary={dictionary} locale={locale as Locale} />
      <PriceCompareWidget dictionary={dictionary} />
      <HomeProcess dictionary={dictionary} />
      <HomeServicesTeaser dictionary={dictionary} locale={locale as Locale} />
      <HomeWorkTeaser dictionary={dictionary} locale={locale as Locale} />
      <CtaBand dictionary={dictionary} locale={locale as Locale} />
    </>
  );
}
