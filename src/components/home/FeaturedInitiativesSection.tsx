"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import InitiativeCard from "@/components/sections/InitiativeCard";
import { initiatives } from "@/data/initiatives";
import { areasOfWork } from "@/data/areasOfWork";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

const areaIconMap = new Map(
  areasOfWork.map((area) => [area.slug, area.icon])
);

export default function FeaturedInitiativesSection() {
  const { locale } = useLanguage();

  return (
    <section className="bg-ocean-50 section-y">
      <div className="container-x flex flex-col gap-10 md:gap-14">
        <SectionHeader
          heading={t("home.initiativesHeading", locale)}
          subtitle={t("home.initiativesSubtitle", locale)}
          viewAllHref="/initiatives"
          viewAllLabel={t("buttons.viewAllInitiatives", locale)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {initiatives.map((initiative) => (
            <InitiativeCard
              key={initiative.id}
              imagePrompt={initiative.imagePrompt}
              imageAlt={initiative.imageAlt[locale]}
              icon={areaIconMap.get(initiative.relatedAreaSlug) ?? "globe"}
              title={initiative.title[locale]}
              href={`/initiatives#${initiative.slug}`}
              localImage={initiative.localImage}
              localVideo={initiative.localVideo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
