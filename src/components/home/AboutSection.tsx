"use client";

import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { Icon } from "@/components/shared/icons";
import { aboutText } from "@/data/visionMissionValues";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

export default function AboutSection() {
  const { locale } = useLanguage();

  return (
    <section className="w-full bg-white section-y">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="order-2 lg:order-1">
            <SectionHeader
              eyebrow={t("home.aboutEyebrow", locale)}
              heading={t("home.aboutHeading", locale)}
              className="mb-8"
            />
            <p className="body-lg mb-10">{aboutText[locale]}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-700 transition group hover:text-ocean-900"
            >
              <span>{t("buttons.learnMore", locale)}</span>
              <Icon
                name="arrowRight"
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="img-zoom-wrap rounded-3xl shadow-[0_20px_60px_-24px_rgba(6,44,67,0.25)] overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/about-mangrove-coast.jpg"
                aria-hidden="true"
                className="img-zoom-target aspect-[5/4] w-full rounded-3xl object-cover"
              >
                <source src="/about-coastal.mp4" type="video/mp4" />
              </video>
              <img
                src="/about-mangrove-coast.jpg"
                alt="Saudi mangrove coastal habitat — healthy mangroves along a natural coastline"
                className="absolute inset-0 aspect-[5/4] w-full rounded-3xl object-cover -z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
