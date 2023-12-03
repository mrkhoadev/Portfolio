"use client";
import { useTheme } from "next-themes";
import React, { useLayoutEffect, useRef } from "react";
export default function ButtonTheme() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef(null);
  const handleClick = () => {
    // setTheme(() => {
    //   const newTheme = resolvedTheme === "light" ? "dark" : "light";
    //   localStorage.setItem("theme", newTheme);
    //   return newTheme;
    // });
  };
  useLayoutEffect(() => {
    const themeLocalStorage =
      typeof window !== "undefined" && localStorage.getItem("theme");
    if (themeLocalStorage && theme !== "system") {
      setTheme(themeLocalStorage);
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
