import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { PricingCard } from "@/components/PricingCard";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale as Locale);
  const { pricingPage } = dictionary;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-10">
      <PageHeader
        eyebrow={pricingPage.eyebrow}
        title={pricingPage.title}
        subtitle={pricingPage.subtitle}
      />

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {pricingPage.packs.map((pack) => (
          <PricingCard key={pack.name} pack={pack} />
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-paper/10 bg-onyx-soft/50 p-6 text-center">
        <h2 className="font-display text-lg font-bold text-paper">
          {pricingPage.maintenanceTitle}
        </h2>
        <p className="mt-2 text-stone">{pricingPage.maintenanceText}</p>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="font-display text-lg font-bold text-paper">{pricingPage.termsTitle}</h2>
        <ul className="mt-4 space-y-2">
          {pricingPage.terms.map((term) => (
            <li key={term} className="flex items-start gap-2 text-sm text-paper/85">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bronze" />
              {term}
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="font-display text-lg font-bold text-paper">{pricingPage.faqTitle}</h2>
        <div className="mt-4 flex flex-col divide-y divide-paper/8">
          {pricingPage.faq.map((item) => (
            <div key={item.question} className="py-4">
              <h3 className="font-display text-sm font-medium text-paper">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <a href={`/${locale}/contact`} className="btn-primary">
          {pricingPage.ctaLabel}
        </a>
      </div>
    </section>
  );
}
