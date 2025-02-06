import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "@locales/en/translations.json";
import translationFR from "@locales/fr/translations.json";
import { isProduction } from "./env";

export const defaultNS = "translations";
export const resources = {
  en: { translations: translationEN },
  fr: { translations: translationFR },
} as const;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    defaultNS,
    ns: [defaultNS],
    debug: !isProduction,
    fallbackLng: {
      "en-GB": ["en"],
      default: ["en"],
    },
    react: {
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    load: "languageOnly",
    resources,
  });

export default i18n;
