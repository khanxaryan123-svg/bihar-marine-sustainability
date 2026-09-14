"use client";

import PartnerCard from "@/components/sections/PartnerCard";
import { partnerCategories, potentialPartners, type PartnerCategory, type PotentialPartner } from "@/data/partners";
import type { IconKey } from "@/components/shared/icons";
import { useLanguage } from "@/i18n/LanguageProvider";

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
                  <span className="eyebrow">
                    CATEGORY {String(catIndex + 1).padStart(2, "0")}
                  </span>
                  <h2 className="heading-md text-ocean-900">
                    {category.title[locale]}
                  </h2>
                  <p className="body-lg text-ocean-800/75">
                    {category.description[locale]}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {partners.map((partner) => (
                  <PartnerCard
                    key={partner.id}
                    icon={partner.iconKey}
                    name={partner.name[locale]}
                    label={partner.note[locale]}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
