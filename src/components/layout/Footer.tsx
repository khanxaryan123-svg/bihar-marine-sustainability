"use client";

import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/shared/SocialLinks";
import { mainNavLinks, socialLinks } from "@/data/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="relative bg-[#062C43] bg-grid-wave text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#062C43]/60 to-[#062C43] pointer-events-none" />
      <div className="container-x relative py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-105 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt={t("brand.primary", locale)}
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold tracking-tight text-white">
                  {t("brand.primary", locale)}
                </span>
                <span className="text-[11px] text-ocean-100/60 font-medium">
                  {t("brand.association", locale)}
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-ocean-100/70 max-w-md">
              {t("footer.description", locale)}
            </p>
            <SocialLinks links={socialLinks} variant="dark" size="md" />
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-ocean-100/90">
              {t("footer.navigation", locale)}
            </h4>
            <ul className="flex flex-col gap-3">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ocean-100/70 hover:text-white transition-colors"
                  >
                    {link.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-ocean-100/90">
              {t("footer.connect", locale)}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-ocean-100/70">
              <li>{t("brand.kingdom", locale)}</li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t("footer.reachOut", locale)}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ocean-100/50">
            {t("footer.copyright", locale)}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-ocean-100/50">
            <Link href="#" className="hover:text-ocean-100/80 transition-colors">
              {t("footer.privacy", locale)}
            </Link>
            <Link href="#" className="hover:text-ocean-100/80 transition-colors">
              {t("footer.terms", locale)}
            </Link>
            <span className="flex items-center gap-1.5 text-ocean-100/50">
              {t("footer.poweredBy", locale)}{" "}
              <span className="font-semibold text-ocean-100/80 tracking-wide">
                BRDigitech
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
