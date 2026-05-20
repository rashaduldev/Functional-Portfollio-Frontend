"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { LANGUAGE_COOKIE, isLanguage } from "./i18n";

export async function setLanguageCookie(lang: string) {
  if (!isLanguage(lang)) return;
  const store = await cookies();
  store.set(LANGUAGE_COOKIE, lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  revalidatePath("/", "layout");
}
