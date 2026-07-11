import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { pickLocaleFromAcceptLanguage } from "@/i18n/locales";

export function middleware(request: NextRequest) {
  const locale = pickLocaleFromAcceptLanguage(request.headers.get("accept-language"));
  return NextResponse.redirect(new URL(`/${locale}/`, request.url));
}

export const config = {
  matcher: ["/"],
};
