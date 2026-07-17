import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import type { ReactNode } from "react";
import { AskCalyrocLoader } from "@/components/AskCalyrocLoader";
import { BronzeSweep } from "@/components/BronzeSweep";
import { GrainOverlay } from "@/components/GrainOverlay";
import { MotionProvider } from "@/components/MotionProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale, locales } from "@/i18n/locales";
import { buildOpenGraph, buildTwitter, SITE_URL } from "@/i18n/seo";
import { THEME_INIT_SCRIPT } from "@/lib/theme-script";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ede9e1" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
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
    // Fallback only -- every page's own generateMetadata sets its own
    // openGraph/twitter via buildOpenGraph/buildTwitter (see i18n/seo.ts for
    // why that's required, not optional).
    openGraph: buildOpenGraph(locale, "", dictionary.meta.title, dictionary.meta.description),
    twitter: buildTwitter(dictionary.meta.title, dictionary.meta.description),
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
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className="bg-onyx font-body text-paper antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        {/* Umami Cloud: cookieless analytics, so no consent banner is
            required (see confidentialite page). Simply omitted until
            NEXT_PUBLIC_UMAMI_WEBSITE_ID is set -- this is a build-time
            env var (inlined by Next.js), not a Workers runtime secret,
            so it must be present in the environment when running
            `bunx opennextjs-cloudflare build`, not just as a `wrangler
            secret`. */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
        <MotionProvider>
          <GrainOverlay />
          <BronzeSweep />
          <SiteHeader locale={locale as Locale} dictionary={dictionary} />
          <main>{children}</main>
          <SiteFooter locale={locale as Locale} dictionary={dictionary} />
          <AskCalyrocLoader locale={locale as Locale} dictionary={dictionary} />
        </MotionProvider>
      </body>
    </html>
  );
}
