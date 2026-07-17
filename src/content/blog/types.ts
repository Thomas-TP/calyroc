import type { Locale } from "@/i18n/locales";

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  locale: Locale;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTimeMinutes: number;
  tags: string[];
  sections: BlogSection[];
}
