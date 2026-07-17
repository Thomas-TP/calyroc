import type { Locale } from "@/i18n/locales";

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPostTranslation {
  title: string;
  excerpt: string;
  readingTimeMinutes: number;
  tags: string[];
  sections: BlogSection[];
}

export interface BlogPost {
  slug: string;
  publishedAt: string;
  /** Only fr and en are ever authored -- every other locale falls back to
   * en (see resolveBlogLocale in ./index.ts) rather than serving French
   * prose under a UI translated into a language the reader picked. */
  translations: Partial<Record<Locale, BlogPostTranslation>>;
}
