"use client";

import { useTransition } from "react";
import { setLanguageCookie } from "@/lib/i18n-actions";

type Props = {
  current: string;
};

const LANGS = ["fr", "en", "ar"] as const;

export default function LanguageSwitcher({ current }: Props) {
  const [, startTransition] = useTransition();

  const onSelect = (lang: string) => {
    startTransition(() => {
      setLanguageCookie(lang);
    });
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {LANGS.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => onSelect(lang)}
          className={`w-8 h-8 text-text-primary text-[10px] px-2 py-1 rounded-full cursor-pointer transition flex items-center justify-center ${
            current === lang
              ? "text-black bg-brand-gradient"
              : "bg-surface-elevated hover:bg-brand-yellow-ring hover:text-black"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
