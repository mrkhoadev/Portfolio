import React from "react";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

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
