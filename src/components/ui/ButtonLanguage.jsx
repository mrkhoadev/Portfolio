"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { i18n } from "../../../i18n.config";

export default async function ButtonLanguage() {
  const pathName = usePathname();
  const route = useRouter();
  const handleClick = async (e) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    let text = segments[1];
    i18n.locales.forEach((l) => {
      if (segments[1] !== l) {
        text = l;
      }
    });

    route.push(`/${text}`);
  };
  return (
    <button className="text-xl" onClick={handleClick}>
      {i18n.locales.map((l) => {
        if (pathName.split("/")[1] !== l) {
          return l;
        }
      })}
    </button>
  );
}
