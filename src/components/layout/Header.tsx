"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "@/components/shared/icons";
import LanguageToggle from "@/components/shared/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";
import { mainNavLinks } from "@/data/navigation";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_-12px_rgba(6,44,67,0.18)] border-b border-ocean-50" : ""
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-105 overflow-hidden">
            <Image
              src="/logo.png"
              alt={t("brand.primary", locale)}
              width={44}
              height={44}
              className="h-full w-full object-contain"
            />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm md:text-base font-bold tracking-tight text-ocean-900">
              {t("brand.primary", locale)}
            </span>
            <span className="hidden md:block text-[11px] text-ocean-800/60 font-medium">
              {t("brand.association", locale)}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {mainNavLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  active
                    ? "text-ocean-900 bg-ocean-50"
                    : "text-ocean-800/80 hover:text-ocean-900 hover:bg-ocean-50"
                }`}
              >
                {link.label[locale]}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1.5 left-4 right-4 h-0.5 rounded-full bg-ocean-500"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            aria-label={t("nav.search", locale)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ocean-800 hover:bg-ocean-50 hover:text-ocean-900 transition-colors"
          >
            <Search size={20} />
          </button>
          <LanguageToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
