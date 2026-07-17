import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { PaymentStatusBanner } from "@/components/PaymentStatusBanner";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { buildAlternates, buildOpenGraph, buildTwitter } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  const title = `${dictionary.nav.contact} — Calyroc`;

  return {
    title,
    description: dictionary.contactPage.subtitle,
    alternates: buildAlternates(locale, "contact"),
    openGraph: buildOpenGraph(locale, "contact", title, dictionary.contactPage.subtitle),
    twitter: buildTwitter(title, dictionary.contactPage.subtitle),
  };
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ payment?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { payment } = await searchParams;
  const dictionary = getDictionary(locale as Locale);
  const { contactPage, pricingPage } = dictionary;

  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10">
      <PageHeader
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        subtitle={contactPage.subtitle}
      />

      {(payment === "success" || payment === "cancelled") && (
        <PaymentStatusBanner status={payment} contactPage={contactPage} />
      )}

      <ContactForm contactPage={contactPage} pricingPage={pricingPage} locale={locale as Locale} />

      <div className="mt-12 border-t border-paper/8 pt-8 text-center">
        <h2 className="font-display text-sm font-medium uppercase tracking-wide text-paper/60">
          {contactPage.directTitle}
        </h2>
        <a
          href="mailto:hello@calyroc.com"
          className="mt-2 block font-display text-lg font-bold text-bronze"
        >
          hello@calyroc.com
        </a>
        <p className="mt-2 text-sm text-stone">{contactPage.responseTime}</p>
      </div>
    </section>
  );
}
