import type { PackId } from "../lib/packs";
import { de } from "./dictionaries/de";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { fr } from "./dictionaries/fr";
import { it } from "./dictionaries/it";
import { nl } from "./dictionaries/nl";
import { pl } from "./dictionaries/pl";
import { pt } from "./dictionaries/pt";
import { ru } from "./dictionaries/ru";
import type { Locale } from "./locales";

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
    blog: string;
    studio: string;
    contact: string;
    themeToLight: string;
    themeToDark: string;
    openMenu: string;
    closeMenu: string;
  };
  home: {
    eyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustLine: string;
    scrollHint: string;
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
    faqSeeMoreLabel: string;
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
  blogPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    readMoreLabel: string;
    backLabel: string;
    minutesLabel: string;
  };
  faqPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  trackingPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** Own copy for the 4 stages, distinct from home.processSteps -- the
     * homepage version is written to persuade a prospect and reads as
     * abrupt once addressed to a client who already signed. */
    steps: ProcessStep[];
    currentBadge: string;
    doneBadge: string;
    ctaTitle: string;
    ctaLabel: string;
    summaryHeading: string;
    todayHeading: string;
    updatesHeading: string;
    updatesEmpty: string;
    previewCta: string;
    filesHeading: string;
    approveHeading: string;
    approveDescription: string;
    approveButton: string;
    approvedNotice: string;
    overviewNavLabel: string;
    paymentsNavLabel: string;
    paymentsHeading: string;
    paymentsSubtitle: string;
    paymentsEmpty: string;
    payNowLabel: string;
    payErrorLabel: string;
    paidLabel: string;
    paymentSuccessNotice: string;
  };
  notFoundPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaHome: string;
    ctaContact: string;
  };
  chatbot: {
    label: string;
    title: string;
    aiBadge: string;
    intro: string;
    placeholder: string;
    send: string;
    errorMessage: string;
    disclaimer: string;
    close: string;
    copy: string;
    copied: string;
    expand: string;
    collapse: string;
    resizeHandle: string;
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
      suiviLinkLabel: string;
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
    clientMessage: {
      preview: string;
      heading: string;
      suiviLinkLabel: string;
      signature: string;
    };
  };
}

const dictionaries: Record<Locale, Dictionary> = { fr, en, es, it, de, pt, nl, pl, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
