"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return (
    <button
      onClick={() => signOut()}
      className=" bg-blue-500 rounded-lg px-6 py-2 shadow-[0_4px_0px_1px_rgba(8,53,214,0.8)] active:shadow-[0_0_0_0_rgba(8,53,214,0.8)] active:mt-1"
    >
      Logout
    </button>
  );
}
