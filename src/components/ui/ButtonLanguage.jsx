"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default async function ButtonLanguage({ lang }) {
  const pathName = usePathname();
  const route = useRouter();
  const nextLang = lang === "vi" ? "en" : "vi";
  const handleClick = async (e) => {
    if (!pathName) return "/";
    const d = new Date();
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = "lang=" + nextLang + ";" + expires + ";path=/";
    route.push("/" + nextLang + pathName.replace("/" + lang, ""), {
      scroll: false,
    });
  };
  return (
    <button className="text-xl w-5" onClick={handleClick}>
      {nextLang}
    </button>
  );
}
