"use client";
import { useTheme } from "next-themes";
import React, { useState } from "react";

export default function Test() {
  const { theme, setTheme } = useTheme();
  return <div>{theme === "light" ? "ok" : "not ok"}</div>;
}
