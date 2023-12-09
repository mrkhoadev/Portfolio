import React from "react";
import AuthForm from "./components/AuthForm";
import { getServerSession } from "next-auth";
import { getDictionary } from "@/Utils/dictionary";

export const metadata = {
  title: "Đăng nhập / Đăng ký",
  description: "Profilo is a self-introduction page",
};

export default async function Auth({ params: { lang } }) {
  const dataLang = await getDictionary(lang);
  return (
    <>
      <main>
        <div className="mx-auto flex justify-center items-center min-h-[650px]">
          <AuthForm lang={lang} dataLang={dataLang} />
        </div>
      </main>
    </>
  );
}
