import type { Locale, LocaleString } from "./types";
import { DEFAULT_LOCALE, LOCALES } from "./types";
import { translations, type UIKey } from "./ui";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && LOCALES.includes(value as Locale);
}

export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function pickString<T extends LocaleString>(value: T, locale: Locale): string {
  return locale === "ar" ? value.ar : value.en;
}

export function t(key: UIKey, locale: Locale): string {
  const dict = translations[locale] ?? translations.en;
  return dict[key] ?? translations.en[key] ?? key;
}
