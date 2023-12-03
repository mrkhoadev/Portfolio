import React from "react";
import { NextResponse } from "next/server";

export default function middleware(request) {
  const { pathname, search } = request.nextUrl;
  if (pathname?.startsWith("/en") || pathname?.startsWith("/vi")) {
    return;
  }
  if (pathname?.startsWith("/vi")) {
    // console.log(1);
    return NextResponse.redirect(
      new URL(`/vi${pathname}${search}`, request.url)
    );
  } else {
    return NextResponse.redirect(
      new URL(`/en${pathname}${search}`, request.url)
    );
  }
}
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
