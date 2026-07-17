import type { Locale } from "@/i18n/locales";
import { gestionnairesPaquets2026 } from "./gestionnaires-paquets-2026";
import type { BlogPost, BlogPostTranslation } from "./types";

export const blogPosts: BlogPost[] = [gestionnairesPaquets2026];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Articles are only ever authored in fr and en -- every other locale
 * reads the en translation (the article page redirects those locales to
 * the /en URL outright; the listing page, which only shows a teaser,
 * resolves through this instead so it never needs a redirect of its
 * own). */
export function resolveBlogLocale(locale: Locale): "fr" | "en" {
  return locale === "fr" ? "fr" : "en";
}

export function getBlogPostTranslation(post: BlogPost, locale: Locale): BlogPostTranslation {
  const translation = post.translations[resolveBlogLocale(locale)] ?? post.translations.en;
  if (!translation) {
    throw new Error(`Blog post "${post.slug}" has no en translation`);
  }
  return translation;
}

export type { BlogPost, BlogPostTranslation, BlogSection } from "./types";
