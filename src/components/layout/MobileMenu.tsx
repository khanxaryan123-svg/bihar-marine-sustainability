"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "@/components/shared/icons";
import LanguageToggle from "@/components/shared/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";
import { mainNavLinks } from "@/data/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { locale } = useLanguage();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label={t("nav.menu", locale)}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ocean-800 hover:bg-ocean-50 hover:text-ocean-900 transition-colors lg:hidden"
      >
        <Menu size={22} />
      </button>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-ocean-900/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-0 bg-white flex flex-col transition-transform duration-500 ease-out ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container-x flex h-16 items-center justify-between border-b border-ocean-50">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-ocean-900">
                {t("nav.menu", locale)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ocean-800 hover:bg-ocean-50 transition-colors"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto">
            <ul className="container-x py-6 flex flex-col">
              {mainNavLinks.map((link, i) => (
                <li
                  key={link.href}
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                  className={`border-b border-ocean-50 last:border-b-0 transition-all duration-300 ${
                    open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
                  }`}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center py-4 text-lg font-semibold text-ocean-900 hover:text-ocean-700 transition-colors"
                  >
                    {link.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
