"use client";

import PartnerCard from "@/components/sections/PartnerCard";
import { partnerCategories, potentialPartners, type PartnerCategory, type PotentialPartner } from "@/data/partners";
import type { IconKey } from "@/components/shared/icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

const placeholderIcons: Record<string, IconKey> = {
  "cat-01": "institution",
  "cat-02": "university",
  "cat-03": "corporate",
  "cat-04": "corporate",
  "cat-05": "municipality",
  "cat-06": "ngo",
};

const placeholderNames: Record<string, { en: string; ar: string }[]> = {
  "cat-01": [
    { en: "National Fisheries Development Agency", ar: "الجهة الوطنية لتنمية المصائد" },
    { en: "Marine Protected Areas Authority", ar: "هيئة المناطق البحرية المحمية" },
  ],
  "cat-02": [
    { en: "Institute of Marine Sciences", ar: "معهد العلوم البحرية" },
    { en: "Coastal Research Laboratory", ar: "مختبر البحوث الساحلية" },
  ],
  "cat-03": [
    { en: "Maritime Logistics Companies", ar: "شركات اللوجستيات البحرية" },
    { en: "Tourism & Hospitality Groups", ar: "مجموعات السياحة والضيافة" },
  ],
  "cat-04": [
    { en: "Corporate Foundation Alliance", ar: "تحالف مؤسسات القطاع الخاص" },
    { en: "Sustainability CSR Platforms", ar: "منصات المسؤولية الاجتماعية المستدامة" },
    { en: "Impact Investment Funds", ar: "صناديق الاستثمار المؤثر" },
  ],
  "cat-05": [
    { en: "Coastal City Municipalities", ar: "بلديات المدن الساحلية" },
    { en: "Regional Coastal Authorities", ar: "الهيئات الساحلية الإقليمية" },
  ],
  "cat-06": [
    { en: "Local Environmental NGOs", ar: "المنظمات البيئية المحلية" },
    { en: "Community Conservation Groups", ar: "مجموعات الحفظ المجتمعية" },
    { en: "Regional Marine Alliances", ar: "التحالفات البحرية الإقليمية" },
  ],
};

function buildPartnersForCategory(category: PartnerCategory): PotentialPartner[] {
  const matched = potentialPartners.filter((p) => p.categoryId === category.id);
  const minCount = 2;
  const maxCount = 4;
  const target = Math.min(Math.max(matched.length, minCount), maxCount);
  const result: PotentialPartner[] = [...matched];

  const icon = placeholderIcons[category.id] ?? "institution";
  const names = placeholderNames[category.id] ?? [{ en: "Strategic Partner Organization", ar: "منظمة شريك استراتيجي" }];
  let placeholderIndex = 0;

  while (result.length < target) {
    const nameLocale = names[placeholderIndex % names.length];
    result.push({
      id: `placeholder-${category.id}-${placeholderIndex}`,
      slug: `${category.slug}-placeholder-${placeholderIndex}`,
      name: {
        en: nameLocale.en,
        ar: nameLocale.ar,
      },
      categoryId: category.id,
      isPotential: true,
      note: {
        en: "Potential Partner",
        ar: "شريك محتمل",
      },
      iconKey: icon,
    });
    placeholderIndex++;
  }

  return result.slice(0, maxCount);
}

export default function PartnersContent() {
  const { locale } = useLanguage();

  return (
    <div id="main-partners">
      <section className="relative w-full overflow-hidden bg-ocean-900">
        <div className="relative min-h-[55vh] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/marine-sustainability.jpg"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/partners-collaboration.mp4" type="video/mp4" />
          </video>
          <img
            src="/marine-sustainability.jpg"
            alt="Professional marine sustainability collaboration and partnership environment"
            className="absolute inset-0 h-full w-full object-cover -z-0"
            aria-hidden="true"
          />
          <div className="gradient-ocean-overlay absolute inset-0" />
          <div className="relative z-10 flex min-h-[55vh] items-center">
            <div className="container-x py-20 md:py-24 lg:py-28">
              <div className="max-w-4xl">
                <span className="eyebrow-light mb-5 md:mb-6">{t("partners.heroEyebrow", locale)}</span>
                <h1 className="heading-xl text-balance text-white">{t("partners.heroTitle", locale)}</h1>
                <p className="body-lg mt-6 max-w-3xl text-ocean-100/85">{t("partners.heroBody", locale)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="container-x flex flex-col gap-14 md:gap-20">
          {partnerCategories.map((category, catIndex) => {
            const partners = buildPartnersForCategory(category);
            const isEven = catIndex % 2 === 0;
            return (
              <div key={category.id} className="flex flex-col gap-8 md:gap-10">
                <div
                  className={`card-elevated p-8 md:p-10 lg:p-12 bg-gradient-to-br ${
                    isEven
                      ? "from-ocean-50 via-white to-white"
                      : "from-white via-white to-ocean-50/60"
                  }`}
                >
                  <div className="flex flex-col gap-4 max-w-3xl">
                    <span className="eyebrow">CATEGORY {String(catIndex + 1).padStart(2, "0")}</span>
                    <h2 className="heading-md text-ocean-900">{category.title[locale]}</h2>
                    <p className="body-lg text-ocean-800/75">{category.description[locale]}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                  {partners.map((partner) => (
                    <PartnerCard key={partner.id} icon={partner.iconKey} name={partner.name[locale]} label={partner.note[locale]} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden section-y bg-ocean-900">
        <div className="container-x relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6 md:gap-7">
            <span className="eyebrow-light">{t("partners.ctaEyebrow", locale)}</span>
            <h2 className="heading-lg text-white text-balance">{t("partners.ctaHeading", locale)}</h2>
            <p className="body-lg text-ocean-100/85 max-w-2xl">{t("partners.ctaBody", locale)}</p>
            <div className="pt-2">
              <a href="/contact" className="inline-block">
                <button className="btn-primary">{t("buttons.partnerWithUs", locale)}</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
