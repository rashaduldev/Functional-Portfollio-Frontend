import "server-only";
import { cookies } from "next/headers";
import type { Translations } from "@/types/translations";
import en from "@/app/translations/en.json";
import fr from "@/app/translations/fr.json";
import ar from "@/app/translations/ar.json";

export const LANGUAGES = ["en", "fr", "ar"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_COOKIE = "lang";
export const DEFAULT_LANGUAGE: Language = "en";

const dictionaries: Record<Language, Translations> = {
  en: en as Translations,
  fr: fr as Translations,
  ar: ar as Translations,
};

export function isLanguage(value: string | undefined): value is Language {
  return !!value && (LANGUAGES as readonly string[]).includes(value);
}

export async function getLanguage(): Promise<Language> {
  const store = await cookies();
  const value = store.get(LANGUAGE_COOKIE)?.value;
  return isLanguage(value) ? value : DEFAULT_LANGUAGE;
}

export async function getTranslations(): Promise<{
  language: Language;
  isRTL: boolean;
  t: Translations;
}> {
  const language = await getLanguage();
  return {
    language,
    isRTL: language === "ar",
    t: dictionaries[language],
  };
}
