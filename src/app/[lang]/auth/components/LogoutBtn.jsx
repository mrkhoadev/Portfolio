"use client";
import { setStatusLogin } from "@/redux/slice/authSlice";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function LogoutBtn({ session }) {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/auth", { scroll: false });
    }
  }, []);
  return (
    <button
      onClick={() => {
        dispatch(setStatusLogin(false));
        deleteCookie("userData");
      }}
      className=" bg-blue-500 rounded-lg px-6 py-2 shadow-[0_4px_0px_1px_rgba(8,53,214,0.8)] active:shadow-[0_0_0_0_rgba(8,53,214,0.8)] active:mt-1"
    >
      Logout
    </button>
  );
}
