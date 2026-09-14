"use client";

import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { DEFAULT_LOCALE, LOCALE_DIRECTION } from "@/i18n/types";

export default function HtmlLangSync() {
  const { locale } = useLanguage();

  useEffect(() => {
    const root = document.documentElement;
    const active = locale ?? DEFAULT_LOCALE;
    root.setAttribute("lang", active);
    root.setAttribute("dir", LOCALE_DIRECTION[active]);
  }, [locale]);

  return null;
}
