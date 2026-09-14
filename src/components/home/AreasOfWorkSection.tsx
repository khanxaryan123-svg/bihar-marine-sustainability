"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import WorkCard from "@/components/sections/WorkCard";
import { areasOfWork } from "@/data/areasOfWork";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

export default function AreasOfWorkSection() {
  const { locale } = useLanguage();

  return (
    <section className="bg-white section-y">
      <div className="container-x flex flex-col gap-10 md:gap-14">
        <SectionHeader
          heading={t("home.workHeading", locale)}
          subtitle={t("home.workSubtitle", locale)}
          viewAllHref="/our-work"
          viewAllLabel={t("buttons.viewAll", locale)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {areasOfWork.map((area) => (
            <WorkCard
              key={area.id}
              imagePrompt=""
              imageAlt={area.imageAlt[locale]}
              icon={area.icon}
              title={area.title[locale]}
              description={area.shortDescription[locale]}
              href={`/our-work#${area.slug}`}
              className={area.isWide ? "md:col-span-2" : ""}
              localImage={area.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
