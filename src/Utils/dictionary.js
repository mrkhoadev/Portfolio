import "server-only";
import viLang from "@/locales/vi-VN.json";
import enLang from "@/locales/en-US.json";

const getViLang = () => {
  return Response.json(viLang);
};
const getEnLang = () => {
  return Response.json(enLang);
};
// Define dictionaries
const dictionaries = {
  vi: getViLang(),
  en: getEnLang(),
};

// Export getDictionary function
export const getDictionary = ({ lang }) => {
  if (lang === "vi") {
    return viLang;
  } else {
    return enLang;
  }
  // try {
  //   const data =  dictionaries[lang].json();
  //   return data;
  // } catch (error) {
  //   console.error("Error loading dictionary:", error);
  //   return null;
  // }
};
