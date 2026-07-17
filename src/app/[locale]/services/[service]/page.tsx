import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { getService, getServiceTranslation, services } from "@/content/services";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale, locales } from "@/i18n/locales";
import { getServiceIdFromSlug, localizedSlugs, serviceSlugs } from "@/i18n/routes";
import {
  buildAlternates,
  buildBreadcrumbJsonLd,
  buildOpenGraph,
  buildTwitter,
  geneva,
  SITE_URL,
} from "@/i18n/seo";

// The physical route folder is keyed to the canonical (French) slug, same
// convention as every other localized route in this codebase --
// next.config.ts rewrites every other locale's translated slug back to
// this canonical one before the App Router ever sees the request, so
// `params.service` is always the fr slug regardless of which locale is
// being viewed. Returning just the 7 canonical slugs here lets Next.js
// cross-multiply them with the 9 locales from the parent layout's own
// generateStaticParams, statically generating all 63 pages.
export function generateStaticParams() {
  return services.map((service) => ({ service: serviceSlugs[service.id].fr }));
}

function altPaths(id: (typeof services)[number]["id"]) {
  return Object.fromEntries(locales.map((l) => [l, `services/${serviceSlugs[id][l]}`])) as Record<
    Locale,
    string
  >;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service: slug } = await params;
  if (!isLocale(locale)) return {};
  const id = getServiceIdFromSlug(slug, "fr");
  if (!id) return {};
  const service = getService(id);
  if (!service) return {};
  const translation = getServiceTranslation(service, locale);
  const title = `${translation.title} — Calyroc`;
  const paths = altPaths(id);

  return {
    title,
    description: translation.metaDescription,
    alternates: buildAlternates(locale, paths),
    openGraph: buildOpenGraph(locale, paths[locale], title, translation.metaDescription),
    twitter: buildTwitter(title, translation.metaDescription),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service: slug } = await params;
  if (!isLocale(locale)) notFound();
  const id = getServiceIdFromSlug(slug, "fr");
  if (!id) notFound();
  const service = getService(id);
  if (!service) notFound();

  const loc = locale as Locale;
  const dictionary = getDictionary(loc);
  const { servicesPage } = dictionary;
  const translation = getServiceTranslation(service, loc);
  const ownSlug = serviceSlugs[id][loc];

  const relatedPack = service.relatedPackId
    ? dictionary.pricingPage.packs.find((pack) => pack.id === service.relatedPackId)
    : undefined;

  const otherServices = services.filter((s) => s.id !== id);
  const pricingHref = `/${loc}/${localizedSlugs.tarifs[loc]}#pricing-cards`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: translation.title,
    name: `${translation.title} — Calyroc`,
    description: translation.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "Calyroc",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: geneva[loc],
        addressRegion: geneva[loc],
        addressCountry: "CH",
      },
    },
    areaServed: geneva[loc],
    url: `${SITE_URL}/${loc}/services/${ownSlug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: translation.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(loc, [
    { name: dictionary.nav.services, path: "services" },
    { name: translation.title, path: `services/${ownSlug}` },
  ]);

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Link
        href={`/${loc}/services`}
        className="text-sm text-stone transition-colors hover:text-bronze"
      >
        {servicesPage.backLabel}
      </Link>

      <div className="mt-6">
        <PageHeader
          eyebrow={servicesPage.eyebrow}
          title={translation.heroHeadline}
          subtitle={translation.heroSubhead}
        />
      </div>

      <Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href={`/${loc}/contact`} className="btn-primary">
            {translation.ctaLabel}
          </Link>
          <Link href={pricingHref} className="btn-secondary">
            {servicesPage.pricingLinkLabel}
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-5">
          {translation.description.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-paper/85">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center gap-x-8 gap-y-2 rounded-2xl border border-paper/10 bg-onyx-soft p-6 text-sm">
        <span>
          <span className="text-paper/60">{servicesPage.techLabel}:</span>{" "}
          <span className="text-paper">{translation.tech}</span>
        </span>
        <span>
          <span className="text-paper/60">{servicesPage.timelineLabel}:</span>{" "}
          <span className="text-paper">{translation.timeline}</span>
        </span>
      </div>

      <Reveal>
        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="font-display text-lg font-bold text-paper">
            {servicesPage.includesLabel}
          </h2>
          <ul className="mt-4 space-y-3">
            {translation.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-paper/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mx-auto mt-16 max-w-2xl">
        <Reveal>
          <h2 className="font-display text-lg font-bold text-paper">{servicesPage.processTitle}</h2>
        </Reveal>
        <div className="relative mt-8">
          <div className="absolute bottom-4 left-4 top-4 w-px bg-paper/10" />
          <div className="flex flex-col gap-8">
            {translation.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-bronze bg-onyx font-display text-xs font-bold text-bronze">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-base font-bold text-paper">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {relatedPack && (
        <Reveal>
          <div className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-between gap-4 rounded-2xl border border-bronze/30 bg-bronze/10 p-6">
            <div>
              <p className="font-display text-base font-bold text-paper">{relatedPack.name}</p>
              <p className="mt-1 text-sm text-stone">{relatedPack.price}</p>
            </div>
            <Link
              href={pricingHref}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-bronze transition-colors hover:text-bronze-soft"
            >
              {servicesPage.pricingLinkLabel}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      )}

      <div className="mx-auto mt-16 max-w-2xl">
        <Reveal>
          <h2 className="font-display text-lg font-bold text-paper">{servicesPage.faqTitle}</h2>
        </Reveal>
        <FaqAccordion items={translation.faq} />
      </div>

      <div className="mt-20">
        <Reveal>
          <h2 className="text-center font-display text-lg font-bold text-paper">
            {servicesPage.otherServicesTitle}
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {otherServices.map((other, index) => {
            const otherTranslation = getServiceTranslation(other, loc);
            return (
              <Reveal key={other.id} delay={(index % 2) * 0.06} variant="scale">
                <Link
                  href={`/${loc}/services/${serviceSlugs[other.id][loc]}`}
                  className="block rounded-2xl border border-paper/10 bg-onyx-soft p-5 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/30"
                >
                  <h3 className="font-display text-sm font-bold text-paper">
                    {otherTranslation.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    {otherTranslation.heroSubhead}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link href={`/${loc}/contact`} className="btn-primary">
          {translation.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
