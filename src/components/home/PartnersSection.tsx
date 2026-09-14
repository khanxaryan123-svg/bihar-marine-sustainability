"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import PartnerCard from "@/components/sections/PartnerCard";
import { homepagePartners } from "@/data/partners";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

export default function PartnersSection() {
  const { locale } = useLanguage();

  return (
    <section className="bg-white section-y">
      <div className="container-x flex flex-col gap-10 md:gap-14">
        <SectionHeader
          heading={t("home.partnersHeading", locale)}
          subtitle={t("home.partnersSubtitle", locale)}
          viewAllHref="/partners"
          viewAllLabel={t("buttons.explorePartnerships", locale)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {homepagePartners.map((partner) => (
            <PartnerCard
              key={partner.id}
              icon={partner.iconKey}
              name={partner.name[locale]}
              label={partner.note[locale]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
