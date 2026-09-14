"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import { Icon, type IconKey } from "@/components/shared/icons";
import { whyMarineMatters } from "@/data/visionMissionValues";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

const problemIcons: IconKey[] = ["tree", "shield", "fish", "leaf", "users"];

export default function WhyMarineMattersSection() {
  const { locale } = useLanguage();

  return (
    <section className="w-full bg-white section-y">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <SectionHeader
              eyebrow={t("home.whyEyebrow", locale)}
              heading={t("home.whyHeading", locale)}
              subtitle={whyMarineMatters.lead[locale]}
              className="mb-10"
            />
            <ul className="flex flex-col gap-6">
              {whyMarineMatters.problems.map((problem, index) => (
                <li key={problem.title[locale]} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-700">
                    <Icon name={problemIcons[index]} size={22} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-lg font-bold leading-snug text-ocean-900">
                      {problem.title[locale]}
                    </h4>
                    <p className="text-[15px] leading-relaxed text-ocean-800/70">
                      {problem.description[locale]}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="img-zoom-wrap rounded-3xl shadow-[0_20px_60px_-24px_rgba(6,44,67,0.25)]">
              <img
                src="/marine-sustainability.jpg"
                alt="Marine and coastal ecosystem — the interconnected challenges of pollution, habitat loss and resource depletion"
                className="img-zoom-target aspect-[4/5] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
