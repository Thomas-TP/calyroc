import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { ServicesGrid } from "@/components/ServicesGrid";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale as Locale);
  const { servicesPage } = dictionary;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-10">
      <PageHeader
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        subtitle={servicesPage.subtitle}
      />
      <ServicesGrid servicesPage={servicesPage} />
      <div className="mt-16 text-center">
        <a href={`/${locale}/contact`} className="btn-primary">
          {servicesPage.ctaLabel}
        </a>
      </div>
    </section>
  );
}
