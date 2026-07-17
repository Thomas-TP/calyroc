export const locales = ["fr", "en", "es", "it", "de", "pt", "nl", "pl", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Best-effort match of an Accept-Language header against our supported locales. */
export function pickLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => part.trim().split(";")[0]?.slice(0, 2).toLowerCase())
    .filter((tag): tag is string => Boolean(tag));

  for (const tag of preferred) {
    if (isLocale(tag)) return tag;
  }

  return defaultLocale;
}
