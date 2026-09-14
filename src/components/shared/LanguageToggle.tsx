"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/types";
import { LOCALE_LABELS } from "@/i18n/types";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const isEn = locale === "en";

  const handleClick = (next: Locale) => {
    if (next === locale) return;
    setLocale(next);
  };

  const pillAria =
    locale === "en"
      ? "Language: English. Click to switch to العربية."
      : "اللغة: العربية. انقر للتبديل إلى English.";

  return (
    <div
      role="group"
      aria-label={pillAria}
      dir="ltr"
      className="relative inline-flex items-center rounded-full bg-ocean-900/90 backdrop-blur border border-white/10 py-1 px-1 shadow-[0_4px_20px_-8px_rgba(6,44,67,0.35)]"
    >
      <span
        aria-hidden="true"
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white shadow-sm transition-all duration-300 ease-out ${
          isEn ? "left-1" : "left-[calc(50%+0px)]"
        }`}
      />

      <button
        type="button"
        onClick={() => handleClick("en")}
        aria-pressed={isEn}
        aria-label="Switch to English"
        className={`relative z-10 inline-flex items-center justify-center h-9 md:h-10 px-3.5 md:px-5 rounded-full text-sm md:text-[15px] font-bold tracking-tight transition-all duration-300 ${
          isEn
            ? "text-ocean-700"
            : "text-white/70 hover:text-white/95"
        }`}
      >
        {LOCALE_LABELS.en.native}
      </button>

      <button
        type="button"
        onClick={() => handleClick("ar")}
        aria-pressed={!isEn}
        aria-label="التبديل إلى العربية"
        className={`relative z-10 inline-flex items-center justify-center h-9 md:h-10 px-3.5 md:px-5 rounded-full text-sm md:text-[15px] font-bold tracking-tight transition-all duration-300 ${
          !isEn
            ? "text-ocean-700"
            : "text-white/70 hover:text-white/95"
        }`}
        style={{ fontFamily: '"Segoe UI", "Tahoma", system-ui, sans-serif' }}
      >
        {LOCALE_LABELS.ar.native}
      </button>
    </div>
  );
}
