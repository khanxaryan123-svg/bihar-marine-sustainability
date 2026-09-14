"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import ImpactCard from "@/components/sections/ImpactCard";
import { impactAreas } from "@/data/impact";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

export default function ImpactSection() {
  const { locale } = useLanguage();

  return (
    <section className="relative overflow-hidden section-y">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/about-mangrove-coast.jpg"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/impact-coastal.mp4" type="video/mp4" />
        </video>
        <img
          src="/about-mangrove-coast.jpg"
          alt="Saudi mangrove and coastal habitat showing rehabilitation along the Red Sea"
          className="absolute inset-0 h-full w-full object-cover -z-10"
          aria-hidden="true"
        />
        <div className="gradient-teal-overlay absolute inset-0" />
      </div>
      <div className="container-x relative z-10 flex flex-col gap-10 md:gap-14">
        <SectionHeader
          dark
          heading={t("home.impactHeading", locale)}
          subtitle={t("home.impactSubtitle", locale)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {impactAreas.map((item) => (
            <ImpactCard
              key={item.id}
              icon={item.iconKey}
              title={item.title[locale]}
              description={item.shortDescription[locale]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
