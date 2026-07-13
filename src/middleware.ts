import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isLocale, pickLocaleFromAcceptLanguage } from "@/i18n/locales";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1] ?? "";

  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const locale = pickLocaleFromAcceptLanguage(request.headers.get("accept-language"));
  const target = pathname === "/" ? `/${locale}/` : `/${locale}${pathname}`;
  return NextResponse.redirect(new URL(target, request.url));
}

export const config = {
  // Redirect any locale-less path (e.g. /confidentialite) to its localized
  // equivalent (/fr/confidentialite), except API routes, the admin space
  // (locale-less by design), Next internals, and static files (anything
  // with a file extension -- icons, fonts, robots.txt, sitemap.xml...).
  matcher: ["/((?!api|admin|_next|.*\\..*).*)"],
};
