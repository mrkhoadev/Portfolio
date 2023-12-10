"use client";
import { signIn } from "next-auth/react";
import React from "react";

export function SignInGoogleBtn() {
  console.log(process.env.NEXTAUTH_URL);
  return (
    <button
      onClick={() => signIn("google")}
      className=" bg-blue-500 rounded-lg px-6 py-2 shadow-[0_4px_0px_1px_rgba(8,53,214,0.8)] active:shadow-[0_0_0_0_rgba(8,53,214,0.8)] active:mt-1"
    >
      Đăng nhập Google ở đây{" "}
    </button>
  );
}
export function SignInGithubBtn() {
  return (
    <button
      onClick={() => signIn("github")}
      className=" bg-blue-500 rounded-lg px-6 py-2 shadow-[0_4px_0px_1px_rgba(8,53,214,0.8)] active:shadow-[0_0_0_0_rgba(8,53,214,0.8)] active:mt-1"
    >
      Đăng nhập Github ở đây
    </button>
  );
}
