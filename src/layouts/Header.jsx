"use client";
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import ButtonLanguage from "@/components/ui/ButtonLanguage";
import ButtonTheme from "@/components/ui/ButtonTheme";

export default function Header() {
  const headerRef = useRef(null);
  const headerInnerRef = useRef(null);
  useLayoutEffect(() => {
    if (headerInnerRef.current && headerRef.current) {
      headerRef.current.style.height = `${headerInnerRef.current.clientHeight}px`;
    }
  }, [headerInnerRef.current, headerRef.current]);
  return (
    <header ref={headerRef} className=" relative z-1">
      <div
        className="fixed inset-x-0 top-0 bg-light-400 dark:bg-dark-400 shadow-md z-10"
        ref={headerInnerRef}
      >
        <nav className="max-w-7xl xl:mx-auto container flex justify-between items-center py-4 px-2 z-2">
          <ul className="flex gap-6 items-center font-bold">
            <li>
              <Link href={"/"}>
                <p className="inline-block text-2xl text-100">Anh Khoa</p>
              </Link>
            </li>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
          </ul>
          <ul className="flex gap-4 items-center">
            <li>
              <Link href={"/"} className="text-2xl">
                <i className="bx bxl-react"></i>
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-2xl">
                <i className="bx bxl-facebook-circle"></i>
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-2xl">
                <i className="bx bxl-github"></i>
              </Link>
            </li>
            <li>
              <ButtonTheme />
            </li>
            <li>
              <ButtonLanguage />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
