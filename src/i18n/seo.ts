import { type Locale, locales } from "./locales";

export const SITE_URL = "https://calyroc.com";

const ogLocales: Record<Locale, string> = {
  fr: "fr_CH",
  en: "en_US",
  es: "es_ES",
  it: "it_IT",
  de: "de_CH",
  pt: "pt_PT",
  nl: "nl_NL",
  pl: "pl_PL",
  ru: "ru_RU",
};

/** Localized name of Geneva -- the nearby city used in marketing/SEO copy
 * (schema.org addressLocality, llms.txt, third-party profiles). The
 * registered legal address (Gland) only appears verbatim in the legal
 * pages themselves; everywhere else uses the more recognizable
 * neighboring city, translated per locale like any other exonym. */
export const geneva: Record<Locale, string> = {
  fr: "Genève",
  en: "Geneva",
  es: "Ginebra",
  it: "Ginevra",
  de: "Genf",
  pt: "Genebra",
  nl: "Genève",
  pl: "Genewa",
  ru: "Женева",
};

/** Builds canonical + hreflang alternates for a given locale and path segment
 * (e.g. "services", "" for home). `path` also accepts a per-locale slug map
 * (see src/i18n/routes.ts) for routes whose slug is translated -- each
 * hreflang entry then points at that locale's own localized URL instead of
 * repeating the current locale's slug everywhere. */
export function buildAlternates(locale: Locale, path: string | Record<Locale, string>) {
  const slugFor = (l: Locale) => (typeof path === "string" ? path : path[l]);
  // No trailing slash for the home case ("") -- Next.js defaults to
  // trailingSlash: false, so a "/" suffix here would build a canonical/
  // hreflang URL that itself 308-redirects to the slash-less version,
  // which Ahrefs (rightly) flags as "Canonical points to redirect".
  const suffixFor = (l: Locale) => {
    const slug = slugFor(l);
    return slug ? `/${slug}` : "";
  };
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${SITE_URL}/${l}${suffixFor(l)}`;
  }
  languages["x-default"] = `${SITE_URL}/fr${suffixFor("fr")}`;

  return {
    canonical: `${SITE_URL}/${locale}${suffixFor(locale)}`,
    languages,
  };
}

/** Builds the page's own OpenGraph block -- every page must call this with
 * its own title/description/path. Root layout.tsx's openGraph is only a
 * fallback for whatever a page doesn't override, and Next's metadata
 * merging does NOT reach inside nested objects: a page that only sets a
 * top-level `title`/`description` leaves the parent layout's `openGraph`
 * (title, description, url alike) completely untouched. Without this, every
 * page on the site shared the exact same homepage title/description/url on
 * social platforms -- found via an Ahrefs Site Audit crawl (66 pages
 * flagged "Open Graph URL not matching canonical"). `images` points at one
 * static, English-only asset: a per-locale dynamic image (next/og's
 * ImageResponse, then a hand-built @cf-wasm/resvg route) was built and
 * confirmed working, but both approaches push the compiled Worker over
 * Cloudflare's free-plan 3 MiB size limit -- fine on the paid plan, but
 * Thomas chose to stay on free and keep one static image rather than pay for
 * per-locale rendering. */
export function buildOpenGraph(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  type: "website" | "article" = "website",
) {
  const suffix = path ? `/${path}` : "";
  return {
    title,
    description,
    url: `${SITE_URL}/${locale}${suffix}`,
    siteName: "Calyroc",
    locale: ogLocales[locale],
    type,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Calyroc", type: "image/png" }],
  };
}

/** Same rationale as buildOpenGraph -- the root layout's `twitter` block
 * otherwise leaks the homepage's title/description onto every page. */
export function buildTwitter(title: string, description: string) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: ["/og-image.png"],
  };
}

/** Builds a BreadcrumbList JSON-LD object for a page -- always starts from
 * the site root, then one entry per segment given (in order). */
export function buildBreadcrumbJsonLd(locale: Locale, segments: { name: string; path: string }[]) {
  const items = [{ name: "Calyroc", path: "" }, ...segments];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}/${locale}${item.path ? `/${item.path}` : ""}`,
    })),
  };
}
