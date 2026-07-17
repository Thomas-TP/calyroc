import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isLocale, type Locale, locales, pickLocaleFromAcceptLanguage } from "@/i18n/locales";
import { localizedSlugs } from "@/i18n/routes";

// Reverse lookup: which locale(s) a bare, locale-less first segment (e.g.
// "pricing") belongs to as a translated slug -- so a locale-less URL that
// already names one locale's own word (someone typed /pricing instead of
// /en/pricing) gets THAT locale prefixed, not a guessed one. Guessing from
// Accept-Language alone previously produced invalid combinations like
// /fr/pricing (French's own slug for that route is "tarifs", not
// "pricing"), which 404's since no rewrite in next.config.ts matches it.
const localesBySlug = new Map<string, Locale[]>();
for (const bySlug of Object.values(localizedSlugs)) {
  for (const locale of locales) {
    const slug = bySlug[locale];
    const owners = localesBySlug.get(slug) ?? [];
    owners.push(locale);
    localesBySlug.set(slug, owners);
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1] ?? "";

  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language");
  const owners = localesBySlug.get(firstSegment);
  const locale =
    owners?.find((owner) => owner === pickLocaleFromAcceptLanguage(acceptLanguage)) ??
    owners?.[0] ??
    pickLocaleFromAcceptLanguage(acceptLanguage);
  // No trailing slash for the bare "/" case -- Next defaults to
  // trailingSlash: false, so redirecting to "/{locale}/" here would add an
  // extra 308 hop (the slash-less version) on top of this redirect,
  // turning "http://calyroc.com/" into a 3-hop chain instead of one.
  const target = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(new URL(target, request.url));
}

export const config = {
  // Redirect any locale-less path (e.g. /confidentialite) to its localized
  // equivalent (/fr/confidentialite), except API routes, the admin space
  // (locale-less by design), Next internals, and static files (anything
  // with a file extension -- icons, fonts, robots.txt, sitemap.xml...).
  matcher: ["/((?!api|admin|_next|.*\\..*).*)"],
};
