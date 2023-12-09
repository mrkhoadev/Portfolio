"use client";
import React, { useEffect, useState } from "react";
import LogoutBtn from "./LogoutBtn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";

export default function Profile({ dataLang }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isRender, setIsRender] = useState(false);
  useEffect(() => {
    if (!session && !getCookie("userData")) {
      router.push("/auth", { scroll: false });
    } else {
      if (session) setCookie("userData", session.user);
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
      <LogoutBtn dataLang={dataLang} />
    </div>
  );
}
