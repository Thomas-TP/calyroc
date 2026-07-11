import { de } from "./dictionaries/de";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { fr } from "./dictionaries/fr";
import { it } from "./dictionaries/it";
import { pt } from "./dictionaries/pt";
import type { Locale } from "./locales";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    work: string;
    pricing: string;
    contact: string;
  };
  home: {
    eyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    tagline: string;
  };
}

const dictionaries: Record<Locale, Dictionary> = { fr, en, es, it, de, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
