import type { Locale } from "@/i18n/locales";

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceTranslation {
  /** Nav/breadcrumb-length name, e.g. "Showcase website". */
  title: string;
  /** <title> tag suffix and meta description source. */
  metaDescription: string;
  /** Big H1 -- names the service and who it's for, per current best
   * practice (specific over clever). */
  heroHeadline: string;
  heroSubhead: string;
  /** 2-3 short paragraphs. Kept as an array (not one long string) so the
   * template can render proper paragraph breaks and so each paragraph
   * stays short -- both plain readability and GEO guidance favor short
   * scannable blocks over one wall of text. */
  description: string[];
  includes: string[];
  process: ServiceProcessStep[];
  tech: string;
  timeline: string;
  /** Answers double as on-page FAQPage schema -- each one leads with a
   * direct, complete answer in the first sentence (GEO: AI extraction
   * favors a self-contained opening line over a build-up). */
  faq: ServiceFaqItem[];
  ctaLabel: string;
}

export type ServiceId =
  | "showcase-website"
  | "ecommerce"
  | "redesign"
  | "landing-page"
  | "maintenance"
  | "technical-seo"
  | "visual-identity";

export interface ServiceDefinition {
  id: ServiceId;
  /** Pack this service most directly maps to, for cross-linking to
   * /tarifs -- null for services (redesign, SEO, identity) that are
   * priced individually rather than via the three base packs. */
  relatedPackId: "essentiel" | "pro" | "sur-mesure" | null;
  translations: Partial<Record<Locale, ServiceTranslation>>;
}
