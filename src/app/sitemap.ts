import type { MetadataRoute } from "next";
import { locales } from "@/i18n/locales";
import { SITE_URL } from "@/i18n/seo";

const routes = [
  "",
  "services",
  "realisations",
  "tarifs",
  "contact",
  "mentions-legales",
  "confidentialite",
  "cgv",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const suffix = route ? `/${route}` : "/";
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `${SITE_URL}/${locale}${suffix}`;
    }

    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${suffix}`,
        lastModified: new Date(),
        alternates: { languages },
      });
    }
  }

  return entries;
}
