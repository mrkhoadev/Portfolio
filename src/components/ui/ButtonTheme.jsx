"use client";
import { useTheme } from "next-themes";
import React, { useLayoutEffect, useRef } from "react";
export default function ButtonTheme() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef(null);
  const handleClick = () => {
    setTheme(() => {
      const newTheme = resolvedTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  useLayoutEffect(() => {
    const themeLocalStorage = localStorage.getItem("theme");
    if (theme !== "system") {
      setTheme(themeLocalStorage);
    } else if (themeLocalStorage === "system" && resolvedTheme) {
      setTheme(resolvedTheme);
    } else {
      localStorage.setItem("theme", resolvedTheme);
    }
  }, []);
  useLayoutEffect(() => {
    if (buttonRef.current) {
      if (resolvedTheme === "light") {
        buttonRef.current.innerHTML = '<i class="bx bxs-moon"></i>';
      } else {
        buttonRef.current.innerHTML = '<i class="bx bxs-sun"></i>';
      }
    }
  }, [theme, resolvedTheme]);
  return (
    <button onClick={handleClick} ref={buttonRef} className="text-2xl"></button>
  );
}
