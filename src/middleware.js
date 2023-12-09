import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { i18n } from "../i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";

function getLocale() {
  const lang = cookies().get("lang");
  const locales = i18n.locales;

  const locale = matchLocale(lang.value, locales, i18n.defaultLocale);

  return locale;
}

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
