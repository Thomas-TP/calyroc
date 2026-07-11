import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { pickLocaleFromAcceptLanguage } from "@/i18n/locales";

export function proxy(request: NextRequest) {
  const locale = pickLocaleFromAcceptLanguage(request.headers.get("accept-language"));
  return NextResponse.redirect(new URL(`/${locale}/`, request.url));
}

export const config = {
  matcher: ["/"],
};
