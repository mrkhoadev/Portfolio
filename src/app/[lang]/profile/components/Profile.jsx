"use client";
import React, { useEffect, useState } from "react";
import LogoutBtn from "./LogoutBtn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";

export default function Profile({ dataLang }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isRender, setIsRender] = useState(false);
  useEffect(() => {
    if (status !== "authenticated" && !getCookie("userData")) {
      router.push("/auth", { scroll: false });
    } else {
      if (session) setCookie("userData", JSON.stringify(session));
      setIsRender(true);
    }
  }, []);
  if (!isRender) {
    return;
  }
  return (
    <div>
      <h2>{JSON.parse(getCookie("userData")).name}</h2>
      <h2>{JSON.parse(getCookie("userData")).email}</h2>
      <h2>
        {JSON.parse(getCookie("userData")).provider === "github"
          ? "Google chưa đăng nhập!"
          : JSON.parse(getCookie("userData"))?.provider === undefined
          ? ""
          : "Github chưa đăng nhập!"}
      </h2>
      <LogoutBtn dataLang={dataLang} />
    </div>
  );
}
