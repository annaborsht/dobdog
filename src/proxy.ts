import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, LANG_COOKIE, LOCALES, isLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

function preferredLocale(request: NextRequest): Locale | undefined {
  const saved = request.cookies.get(LANG_COOKIE)?.value;
  if (isLocale(saved)) return saved;

  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase().split("-")[0];
    if (isLocale(tag)) return tag;
  }
  return undefined;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  const detected = preferredLocale(request);

  if (pathname === "/") {
    // Language-dependent, so keep it temporary.
    url.pathname = `/${detected ?? DEFAULT_LOCALE}`;
    return NextResponse.redirect(url, 307);
  }

  // Old unprefixed URLs (e.g. /puppies) move permanently to a locale URL.
  url.pathname = `/${detected ?? DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip API routes, Next internals, SEO files and anything with a file extension.
  matcher: ["/((?!api|_next|sitemap\\.xml|robots\\.txt|.*\\..*).*)"],
};
