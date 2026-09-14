"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import VisionMissionCard from "@/components/sections/VisionMissionCard";
import { visionMissionValues } from "@/data/visionMissionValues";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

export default function VisionMissionSection() {
  const { locale } = useLanguage();

  return (
    <section className="w-full bg-ocean-50 section-y">
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow={t("home.vmEyebrow", locale)}
          heading={t("home.vmHeading", locale)}
          subtitle={t("home.vmSubtitle", locale)}
          className="mb-12 md:mb-16"
        />
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
          {visionMissionValues.map((item) => (
            <VisionMissionCard
              key={item.id}
              icon={item.iconKey}
              eyebrow={item.eyebrow[locale]}
              title={item.title[locale]}
              description={item.description[locale]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
