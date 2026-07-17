import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { ServicesGrid } from "@/components/ServicesGrid";
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
  const title = `${dictionary.nav.services} — Calyroc`;

  return {
    title,
    description: dictionary.servicesPage.subtitle,
    alternates: buildAlternates(locale, "services"),
    openGraph: buildOpenGraph(locale, "services", title, dictionary.servicesPage.subtitle),
    twitter: buildTwitter(title, dictionary.servicesPage.subtitle),
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale as Locale);
  const { servicesPage } = dictionary;

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(locale as Locale, [
    { name: dictionary.nav.services, path: "services" },
  ]);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        subtitle={servicesPage.subtitle}
      />
      <ServicesGrid servicesPage={servicesPage} />
      <div className="mt-16 text-center">
        <Link href={`/${locale}/contact`} className="btn-primary">
          {servicesPage.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
