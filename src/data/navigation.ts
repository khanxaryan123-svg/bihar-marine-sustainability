import type { LocaleString } from "@/i18n/types";

export type NavLink = {
  label: LocaleString;
  href: string;
};

export const mainNavLinks: NavLink[] = [
  {
    label: { en: "Home", ar: "الرئيسية" },
    href: "/",
  },
  {
    label: { en: "About", ar: "من نحن" },
    href: "/about",
  },
  {
    label: { en: "Our Work", ar: "مجالات عملنا" },
    href: "/our-work",
  },
  {
    label: { en: "Initiatives", ar: "المبادرات" },
    href: "/initiatives",
  },
  {
    label: { en: "Impact", ar: "أثرنا" },
    href: "/impact",
  },
  {
    label: { en: "Partners", ar: "الشركاء" },
    href: "/partners",
  },
  {
    label: { en: "Contact", ar: "تواصل معنا" },
    href: "/contact",
  },
];

export type SocialLink = {
  label: LocaleString;
  href: string;
  iconKey: "twitterX" | "linkedin" | "youtube";
};

export const socialLinks: SocialLink[] = [
  { label: { en: "X", ar: "X" }, href: "#", iconKey: "twitterX" },
  { label: { en: "LinkedIn", ar: "لينكدإن" }, href: "#", iconKey: "linkedin" },
  { label: { en: "YouTube", ar: "يوتيوب" }, href: "#", iconKey: "youtube" },
];
