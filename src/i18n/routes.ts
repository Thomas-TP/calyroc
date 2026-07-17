import type { ServiceId } from "@/content/services/types";
import { isLocale, type Locale } from "./locales";

export type LocalizableRoute =
  | "tarifs"
  | "realisations"
  | "aPropos"
  | "mentionsLegales"
  | "confidentialite"
  | "cgv";

/** Per-locale URL slug for the routes whose French folder name isn't a
 * recognizable word in other languages (unlike "services"/"contact"/"blog"/
 * "faq", which stay identical everywhere and need no entry here). `fr`
 * always matches the actual folder name under src/app/[locale]/ -- French
 * is this codebase's internal routing convention. next.config.ts rewrites
 * every other locale's localized slug back to that folder, and redirects
 * the old French-slug URL (e.g. /en/realisations) to the new localized one
 * (/en/work) so already-indexed URLs consolidate onto a single canonical
 * path per locale instead of both staying live. ASCII-only slugs
 * throughout (ueber-uns not über-uns, precos not preços): accented
 * characters get percent-encoded when a URL is copied/shared, which reads
 * as broken. */
export const localizedSlugs: Record<LocalizableRoute, Record<Locale, string>> = {
  tarifs: {
    fr: "tarifs",
    en: "pricing",
    es: "precios",
    it: "prezzi",
    de: "preise",
    pt: "precos",
    nl: "tarieven",
    pl: "cennik",
    ru: "tarify",
  },
  realisations: {
    fr: "realisations",
    en: "work",
    es: "proyectos",
    it: "progetti",
    de: "projekte",
    pt: "projetos",
    nl: "werk",
    pl: "realizacje",
    ru: "raboty",
  },
  aPropos: {
    fr: "a-propos",
    en: "about",
    es: "sobre-nosotros",
    it: "chi-siamo",
    de: "ueber-uns",
    pt: "sobre-nos",
    nl: "over-ons",
    pl: "o-nas",
    ru: "o-nas",
  },
  mentionsLegales: {
    fr: "mentions-legales",
    en: "legal-notice",
    es: "aviso-legal",
    it: "note-legali",
    de: "impressum",
    pt: "aviso-legal",
    nl: "colofon",
    pl: "nota-prawna",
    ru: "yuridicheskaya-informatsiya",
  },
  confidentialite: {
    fr: "confidentialite",
    en: "privacy-policy",
    es: "politica-privacidad",
    it: "informativa-privacy",
    de: "datenschutz",
    pt: "politica-privacidade",
    nl: "privacybeleid",
    pl: "polityka-prywatnosci",
    ru: "politika-konfidentsialnosti",
  },
  cgv: {
    fr: "cgv",
    en: "terms",
    es: "terminos-condiciones",
    it: "termini-condizioni",
    de: "agb",
    pt: "termos-condicoes",
    nl: "algemene-voorwaarden",
    pl: "regulamin",
    ru: "usloviya-ispolzovaniya",
  },
};

/** Per-locale URL slug for each dedicated service page under
 * /services/[slug] -- same ASCII-only, ID-keyed pattern as localizedSlugs
 * above, kept as a separate map because it's a second path segment
 * (/services/{this}) rather than the first. `fr` is the physical folder
 * name under src/app/[locale]/services/, same convention as the rest of
 * the site. */
export const serviceSlugs: Record<ServiceId, Record<Locale, string>> = {
  "showcase-website": {
    fr: "site-vitrine",
    en: "business-website",
    es: "sitio-web-corporativo",
    it: "sito-vetrina",
    de: "unternehmenswebsite",
    pt: "site-institucional",
    nl: "bedrijfswebsite",
    pl: "strona-wizytowka",
    ru: "sayt-vizitka",
  },
  ecommerce: {
    fr: "e-commerce",
    en: "ecommerce-website",
    es: "tienda-online",
    it: "e-commerce",
    de: "onlineshop",
    pt: "loja-online",
    nl: "webshop",
    pl: "sklep-internetowy",
    ru: "internet-magazin",
  },
  redesign: {
    fr: "refonte",
    en: "website-redesign",
    es: "rediseno-web",
    it: "restyling-sito",
    de: "website-relaunch",
    pt: "redesign-de-site",
    nl: "website-redesign",
    pl: "redesign-strony",
    ru: "redizayn-sayta",
  },
  "landing-page": {
    fr: "landing-page",
    en: "landing-page",
    es: "landing-page",
    it: "landing-page",
    de: "landingpage",
    pt: "landing-page",
    nl: "landingpagina",
    pl: "landing-page",
    ru: "lending",
  },
  maintenance: {
    fr: "maintenance",
    en: "website-maintenance",
    es: "mantenimiento-web",
    it: "manutenzione-sito",
    de: "website-wartung",
    pt: "manutencao-de-site",
    nl: "website-onderhoud",
    pl: "utrzymanie-strony",
    ru: "podderzhka-sayta",
  },
  "technical-seo": {
    fr: "seo-technique",
    en: "technical-seo",
    es: "seo-tecnico",
    it: "seo-tecnica",
    de: "technisches-seo",
    pt: "seo-tecnico",
    nl: "technische-seo",
    pl: "seo-techniczne",
    ru: "tekhnicheskoe-seo",
  },
  "visual-identity": {
    fr: "identite-visuelle",
    en: "brand-identity",
    es: "identidad-visual",
    it: "identita-visiva",
    de: "corporate-design",
    pt: "identidade-visual",
    nl: "huisstijl",
    pl: "identyfikacja-wizualna",
    ru: "firmennyy-stil",
  },
};

export function getServiceIdFromSlug(slug: string, locale: Locale): ServiceId | null {
  for (const [id, slugs] of Object.entries(serviceSlugs) as [ServiceId, Record<Locale, string>][]) {
    if (slugs[locale] === slug) return id;
  }
  return null;
}

/** Rewrites a pathname (as returned by usePathname(), e.g. "/fr/tarifs" or
 * "/en/blog/mon-article") to its equivalent under a different locale --
 * used by the language switcher so picking a new language keeps the
 * visitor on the same page instead of bouncing to the homepage. The first
 * segment after the locale is translated via localizedSlugs above; when
 * that segment is "services" (identical in every locale), the second
 * segment is additionally translated via serviceSlugs, since that's now
 * also a real localized route rather than an opaque identifier. Every
 * other second-plus segment -- a blog post slug, a /suivi/[token] tracking
 * token, a /paiement sub-path -- stays untouched. Routes with no entry in
 * localizedSlugs (contact, faq, blog, suivi...) already use the same slug
 * in every locale, so passing the first segment through unchanged is
 * correct for them too. */
export function localizePath(pathname: string, toLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const [currentLocaleSegment, firstRouteSegment, secondRouteSegment, ...rest] = segments;
  if (!firstRouteSegment) return `/${toLocale}`;

  const fromLocale: Locale =
    currentLocaleSegment && isLocale(currentLocaleSegment) ? currentLocaleSegment : "fr";

  if (firstRouteSegment === "services" && secondRouteSegment) {
    const serviceId = getServiceIdFromSlug(secondRouteSegment, fromLocale);
    if (serviceId) {
      return `/${[toLocale, "services", serviceSlugs[serviceId][toLocale], ...rest].join("/")}`;
    }
  }

  for (const routeSlugs of Object.values(localizedSlugs)) {
    if (routeSlugs[fromLocale] === firstRouteSegment) {
      return `/${[toLocale, routeSlugs[toLocale], secondRouteSegment, ...rest].filter(Boolean).join("/")}`;
    }
  }

  return `/${[toLocale, firstRouteSegment, secondRouteSegment, ...rest].filter(Boolean).join("/")}`;
}
