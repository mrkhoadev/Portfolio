import React from "react";
import Profile from "./components/Profile";
import { getDictionary } from "@/Utils/dictionary";

export default async function ProfileRoute({ params: { lang } }) {
  const dataLang = await getDictionary(lang);

  return (
    <main>
      <Profile dataLang={dataLang} />
    </main>
  );
}
