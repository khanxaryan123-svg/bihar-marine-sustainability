"use client";

import type { ReactNode } from "react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Locale, Direction } from "./types";
import {
  DEFAULT_LOCALE,
  LOCALE_DIRECTION,
  LOCALE_LABELS,
  STORAGE_KEY,
} from "./types";
import { resolveLocale } from "./resolvers";

type LanguageContextValue = {
  locale: Locale;
  direction: Direction;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
  labels: typeof LOCALE_LABELS[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const fromStorage = window.localStorage.getItem(STORAGE_KEY);
    if (fromStorage) return resolveLocale(fromStorage);
    const nav = typeof navigator !== "undefined" ? navigator.language?.toLowerCase() : "";
    if (nav?.startsWith("ar")) return "ar";
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = readInitialLocale();
    setLocaleState(initial);
    setMounted(true);
  }, []);

  const direction: Direction = LOCALE_DIRECTION[locale];

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "ar" : "en");
  }, [locale, setLocale]);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.setAttribute("lang", locale);
    root.setAttribute("dir", direction);
  }, [locale, direction, mounted]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      direction,
      setLocale,
      toggleLocale,
      labels: LOCALE_LABELS[locale],
    }),
    [locale, direction, setLocale, toggleLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      locale: DEFAULT_LOCALE,
      direction: LOCALE_DIRECTION[DEFAULT_LOCALE],
      setLocale: () => {},
      toggleLocale: () => {},
      labels: LOCALE_LABELS[DEFAULT_LOCALE],
    };
  }
  return ctx;
}
