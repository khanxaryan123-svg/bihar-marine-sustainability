export type Locale = "en" | "ar";

export type LocaleString = {
  en: string;
  ar: string;
};

export type Direction = "ltr" | "rtl";

export const LOCALES: Locale[] = ["en", "ar"];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_DIRECTION: Record<Locale, Direction> = {
  en: "ltr",
  ar: "rtl",
};

export const LOCALE_LABELS: Record<Locale, { native: string; short: string }> = {
  en: { native: "English", short: "EN" },
  ar: { native: "العربية", short: "AR" },
};

export const STORAGE_KEY = "bihar.locale";
