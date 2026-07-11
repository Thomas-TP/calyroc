import { type Locale, locales } from "./locales";

export const SITE_URL = "https://calyroc.com";

/** Builds canonical + hreflang alternates for a given locale and path segment (e.g. "services", "" for home). */
export function buildAlternates(locale: Locale, path: string) {
  const suffix = path ? `/${path}` : "/";
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${SITE_URL}/${l}${suffix}`;
  }
  languages["x-default"] = `${SITE_URL}/fr${suffix}`;

  return {
    canonical: `${SITE_URL}/${locale}${suffix}`,
    languages,
  };
}
