import React from "react";
import AuthForm from "./components/AuthForm";
import { getDictionary } from "@/Utils/dictionary";
import { SignInGithubBtn, SignInGoogleBtn } from "@/components/SignInBtn";

export const metadata = {
  title: "Đăng nhập / Đăng ký",
  description: "Profilo is a self-introduction page",
};

export default async function Auth({ params: { lang } }) {
  const dataLang = await getDictionary(lang);
  return (
    <>
      <main>
        <div className="mx-auto flex justify-center items-center min-h-[650px] flex-col gap-4">
          {/* <AuthForm lang={lang} dataLang={dataLang} /> */}
          <div className="min-h-[50px]">
            <SignInGoogleBtn />
          </div>
          <div className="min-h-[50px]">
            <SignInGithubBtn />
          </div>
        </div>
      </main>
    </>
  );
}
