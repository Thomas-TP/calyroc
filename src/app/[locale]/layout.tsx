import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { ViewTransitions } from "next-view-transitions";
import type { ReactNode } from "react";
import { AskCalyroc } from "@/components/AskCalyroc";
import { BronzeSweep } from "@/components/BronzeSweep";
import { GrainOverlay } from "@/components/GrainOverlay";
import { MotionProvider } from "@/components/MotionProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale, locales } from "@/i18n/locales";
import { SITE_URL } from "@/i18n/seo";
import { THEME_INIT_SCRIPT } from "@/lib/theme-script";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const ogLocales: Record<Locale, string> = {
  fr: "fr_CH",
  en: "en_US",
  es: "es_ES",
  it: "it_IT",
  de: "de_CH",
  pt: "pt_PT",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: "%s",
      default: dictionary.meta.title,
    },
    description: dictionary.meta.description,
    applicationName: "Calyroc",
    authors: [{ name: "Calyroc", url: SITE_URL }],
    creator: "Calyroc",
    publisher: "Calyroc",
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      url: `${SITE_URL}/${locale}/`,
      siteName: "Calyroc",
      locale: ogLocales[locale],
      type: "website",
      images: [
        { url: "/og-image.png", width: 1200, height: 630, alt: "Calyroc", type: "image/png" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale as Locale);

  return (
    <ViewTransitions>
      <html lang={locale} className="dark" suppressHydrationWarning>
        <body className="bg-onyx font-body text-paper antialiased">
          <Script id="theme-init" strategy="beforeInteractive">
            {THEME_INIT_SCRIPT}
          </Script>
          <MotionProvider>
            <GrainOverlay />
            <BronzeSweep />
            <SiteHeader locale={locale as Locale} dictionary={dictionary} />
            {children}
            <SiteFooter locale={locale as Locale} dictionary={dictionary} />
            <AskCalyroc locale={locale as Locale} dictionary={dictionary} />
          </MotionProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
