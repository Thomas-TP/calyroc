import type { Locale } from "@/i18n/locales";
import { ecommerce } from "./ecommerce";
import { landingPage } from "./landing-page";
import { maintenance } from "./maintenance";
import { redesign } from "./redesign";
import { showcaseWebsite } from "./showcase-website";
import { technicalSeo } from "./technical-seo";
import type { ServiceDefinition, ServiceId, ServiceTranslation } from "./types";
import { visualIdentity } from "./visual-identity";

export const services: ServiceDefinition[] = [
  showcaseWebsite,
  ecommerce,
  redesign,
  landingPage,
  maintenance,
  technicalSeo,
  visualIdentity,
];

export function getService(id: ServiceId): ServiceDefinition | undefined {
  return services.find((service) => service.id === id);
}

export function getServiceTranslation(
  service: ServiceDefinition,
  locale: Locale,
): ServiceTranslation {
  const translation = service.translations[locale] ?? service.translations.en;
  if (!translation) {
    throw new Error(`Service "${service.id}" has no en translation`);
  }
  return translation;
}

export type {
  ServiceDefinition,
  ServiceFaqItem,
  ServiceId,
  ServiceProcessStep,
  ServiceTranslation,
} from "./types";
