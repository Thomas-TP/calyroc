import type { Locale } from "./locales";

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
