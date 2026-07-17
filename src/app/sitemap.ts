import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { type Locale, locales } from "@/i18n/locales";
import { localizedSlugs } from "@/i18n/routes";
import { SITE_URL } from "@/i18n/seo";

// Slugs identical across every locale (translating them would just repeat
// the same recognizable word); the routes with a real translated slug per
// locale (see i18n/routes.ts) are handled separately below.
const staticRoutes = ["", "services", "contact", "faq", "blog"];

// hreflang lives only in each page's HTML <head> (see buildAlternates in
// i18n/seo.ts) -- Google documents the HTML-tag, HTTP-header, and sitemap
// methods as equivalent but explicitly warns against mixing them on one
// site. This sitemap used to also carry `alternates.languages` on every
// entry, duplicating what the HTML tags already declare; dropped to avoid
// the two sources ever drifting apart.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    // No trailing slash for the home route ("") -- Next defaults to
    // trailingSlash: false, so a "/" here would list a sitemap URL that
    // itself 308-redirects, which Ahrefs flags as "3XX redirect in sitemap".
    const suffix = route ? `/${route}` : "";

    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${suffix}`,
        lastModified: new Date(),
      });
    }
  }

  for (const bySlug of Object.values(localizedSlugs)) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}/${bySlug[locale as Locale]}`,
        lastModified: new Date(),
      });
    }
  }

  // Same locale-prefixed-but-single-language pattern as the legal pages:
  // each article is authored once (see src/content/blog) but still gets a
  // URL under every locale prefix.
  for (const post of blogPosts) {
    const suffix = `/blog/${post.slug}`;

    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${suffix}`,
        lastModified: new Date(post.publishedAt),
      });
    }
  }

  return entries;
}
