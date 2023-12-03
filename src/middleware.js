import React from "react";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export default function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const lang = cookies().get("lang");
  const regex = /^\/(en|vi)(\/[^\/]*)?$/;
  const match = regex.test(pathname);
  if (
    (pathname && pathname?.startsWith("/en")) ||
    pathname?.startsWith("/vi")
  ) {
    if (match) return;
  }
  if (lang?.value === "en") {
    return NextResponse.redirect(
      new URL(`/en${pathname}${search}`, request.url)
    );
  } else {
    return NextResponse.redirect(
      new URL(`/vi${pathname}${search}`, request.url)
    );
  }
}
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
