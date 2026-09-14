"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import { vision2030 } from "@/data/visionMissionValues";
import { Icon, type IconKey } from "@/components/shared/icons";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageProvider";

type Pillar = {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  iconKey: IconKey;
};

function Vision2030PillarCard({ pillar, locale }: { pillar: Pillar; locale: "en" | "ar" }) {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <div
      ref={reveal}
      className="reveal group relative flex flex-col gap-4 p-6 md:p-7 rounded-2xl bg-white border border-ocean-100 hover:border-ocean-500/30 hover:shadow-[0_1px_2px_rgba(6,44,67,0.04),0_16px_36px_-18px_rgba(6,44,67,0.22)] transition-all duration-500 ease-out"
    >
      <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700 overflow-hidden transition-all duration-300 group-hover:bg-ocean-500 group-hover:text-white">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ocean-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Icon name={pillar.iconKey} size={26} className="relative z-10" />
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-base md:text-lg font-bold leading-snug text-ocean-900 group-hover:text-ocean-700 transition-colors">
          {pillar.title[locale]}
        </h3>
        <p className="text-sm leading-relaxed text-ocean-800/70">
          {pillar.description[locale]}
        </p>
      </div>
      <div className="absolute left-6 right-6 top-0 h-0.5 bg-ocean-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full" />
    </div>
  );
}

export default function Vision2030Section() {
  const { locale } = useLanguage();

  return (
    <section className="bg-white section-y relative overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/marine-sustainability.jpg"
          aria-hidden="true"
          className="h-full w-full object-cover"
        >
          <source src="/vision-2030.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] select-none z-0">
        <div className="absolute -top-10 -right-6 text-[180px] md:text-[280px] font-black tracking-widest leading-none text-ocean-900 rotate-0">
          VISION
        </div>
        <div className="absolute top-40 right-0 text-[160px] md:text-[240px] font-black tracking-widest leading-none text-ocean-900">
          2030
        </div>
        <div
          className="absolute top-10 left-0 text-[80px] md:text-[120px] font-bold tracking-[0.2em] leading-none text-ocean-900"
          dir="rtl"
        >
          رؤية 2030
        </div>
        <div className="absolute bottom-4 left-4 text-[10px] md:text-xs font-semibold tracking-[0.28em] uppercase text-ocean-900">
          KINGDOM OF SAUDI ARABIA
        </div>
      </div>
      <div className="container-x relative z-10 flex flex-col gap-10 md:gap-14">
        <SectionHeader
          eyebrow={vision2030.eyebrow[locale]}
          heading={vision2030.title[locale]}
          subtitle={vision2030.lead[locale]}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
          {vision2030.pillars.map((pillar) => (
            <Vision2030PillarCard key={pillar.id} pillar={pillar} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
