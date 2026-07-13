import { de } from "./dictionaries/de";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { fr } from "./dictionaries/fr";
import { it } from "./dictionaries/it";
import { pt } from "./dictionaries/pt";
import type { Locale } from "./locales";
import type { PackId } from "../lib/packs";

export interface ServiceItem {
  title: string;
  description: string;
  includes: string[];
  tech: string;
  timeline: string;
}

export interface CaseStudy {
  title: string;
  tagline: string;
  category: string;
  problem: string;
  stack: string[];
  features: string[];
  results: string[];
  url: string;
}

export interface PricingPack {
  id: PackId;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  timeline: string;
  highlighted: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface WhyPoint {
  title: string;
  description: string;
}

export interface PriceCompareItem {
  label: string;
  range: string;
}

export interface QuizOption {
  value: string;
  label: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    work: string;
    pricing: string;
    about: string;
    contact: string;
    themeToLight: string;
    themeToDark: string;
  };
  home: {
    eyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustLine: string;
    processEyebrow: string;
    processTitle: string;
    processSteps: ProcessStep[];
    priceCompareEyebrow: string;
    priceCompareTitle: string;
    priceCompareAgencyLabel: string;
    priceCompareItems: PriceCompareItem[];
    priceCompareAgencyTotal: string;
    priceCompareCalyrocLabel: string;
    priceCompareNote: string;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesCta: string;
    workEyebrow: string;
    workTitle: string;
    workCta: string;
    ctaBandTitle: string;
    ctaBandSubtitle: string;
    ctaBandLabel: string;
  };
  footer: {
    tagline: string;
    legalLinks: {
      mentionsLegales: string;
      confidentialite: string;
      cgv: string;
    };
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    includesLabel: string;
    techLabel: string;
    timelineLabel: string;
    items: ServiceItem[];
  };
  workPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    problemLabel: string;
    stackLabel: string;
    featuresLabel: string;
    resultsLabel: string;
    linkLabel: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaLabel: string;
    caseStudies: CaseStudy[];
  };
  pricingPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    guaranteeLabel: string;
    deliveryLabel: string;
    finderEyebrow: string;
    finderTitle: string;
    finderSubtitle: string;
    finderTypeQuestion: QuizQuestion;
    finderPagesQuestion: QuizQuestion;
    finderLanguagesQuestion: QuizQuestion;
    finderResultTitle: string;
    finderResultCta: string;
    finderRestartLabel: string;
    finderBackLabel: string;
    packs: PricingPack[];
    maintenanceTitle: string;
    maintenanceText: string;
    termsTitle: string;
    terms: string[];
    faqTitle: string;
    faq: FaqItem[];
    ctaLabel: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    founderRole: string;
    portfolioLabel: string;
    linkedinLabel: string;
    storyTitle: string;
    storyParagraphs: string[];
    whyTitle: string;
    whyPoints: WhyPoint[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaLabel: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formPackLabel: string;
    formPackUnsureLabel: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    formError: string;
    directTitle: string;
    responseTime: string;
    paymentSuccessTitle: string;
    paymentSuccessBody: string;
    paymentCancelledTitle: string;
    paymentCancelledBody: string;
  };
  legalPageNotice: string;
  chatbot: {
    label: string;
    title: string;
    intro: string;
    placeholder: string;
    send: string;
    errorMessage: string;
    disclaimer: string;
  };
  email: {
    clientConfirmation: {
      subject: string;
      preview: string;
      heading: string;
      intro: string;
      recapTitle: string;
      packLabel: string;
      messageLabel: string;
      responseTimeText: string;
      signature: string;
    };
    paymentLink: {
      subject: string;
      preview: string;
      heading: string;
      intro: string;
      amountLabel: string;
      descriptionLabel: string;
      ctaLabel: string;
      expiryNote: string;
      signature: string;
    };
    paymentReceipt: {
      subject: string;
      preview: string;
      heading: string;
      intro: string;
      amountLabel: string;
      dateLabel: string;
      nextStepsText: string;
      signature: string;
    };
  };
}

const dictionaries: Record<Locale, Dictionary> = { fr, en, es, it, de, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
