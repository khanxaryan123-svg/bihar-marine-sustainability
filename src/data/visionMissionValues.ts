import type { IconKey } from "@/components/shared/icons";
import type { LocaleString } from "@/i18n/types";

export type VisionMissionValue = {
  id: string;
  eyebrow: LocaleString;
  title: LocaleString;
  description: LocaleString;
  iconKey: IconKey;
};

export const visionMissionValues: VisionMissionValue[] = [
  {
    id: "vmv-1",
    eyebrow: { en: "Our Vision", ar: "رؤيتنا" },
    title: {
      en: "A leading reference for marine sustainability",
      ar: "مرجع رائد للاستدامة البحرية",
    },
    description: {
      en: "To be a leader in protecting the marine environment, enhancing the sustainability of its resources, and developing the blue economy.",
      ar: "أن نكون رائدين في حماية البيئة البحرية، وتعزيز استدامة مواردها، وتطوير الاقتصاد الأزرق.",
    },
    iconKey: "eye",
  },
  {
    id: "vmv-2",
    eyebrow: { en: "Our Mission", ar: "رسالتنا" },
    title: {
      en: "High-impact conservation action across the Kingdom",
      ar: "عمل حفظ عالي الأثر عبر المملكة",
    },
    description: {
      en: "To contribute to the conservation of the marine environment through high-impact initiatives, volunteer work, partnerships, research and innovation.",
      ar: "المساهمة في حفظ البيئة البحرية من خلال مبادرات عالية الأثر، والعمل التطوعي، والشراكات، والبحث والابتكار.",
    },
    iconKey: "target",
  },
  {
    id: "vmv-3",
    eyebrow: { en: "Our Values", ar: "قيمنا" },
    title: {
      en: "Guiding principles in everything we do",
      ar: "مبادئ توجه كل ما نقوم به",
    },
    description: {
      en: "Sustainability | Responsibility | Transparency | Partnership | Volunteering | Innovation | Excellence",
      ar: "الاستدامة | المسؤولية | الشفافية | الشراكة | التطوع | الابتكار | التميز",
    },
    iconKey: "leaf",
  },
];

type Vision2030Pillar = {
  id: string;
  title: LocaleString;
  description: LocaleString;
  iconKey: IconKey;
};

type Vision2030 = {
  eyebrow: LocaleString;
  title: LocaleString;
  lead: LocaleString;
  pillars: Vision2030Pillar[];
  brand: {
    line1: string;
    line2: string;
  };
};

export const aboutText: LocaleString = {
  en: "Bihar Marine Environment Association is a non-profit organization focused on protecting the marine environment, conserving natural resources, and raising community awareness about the importance of sustainable coastlines and marine resources.",
  ar: "جمعية بحار البيئة البحرية منظمة غير ربحية تركز على حماية البيئة البحرية، والحفاظ على الموارد الطبيعية، ورفع وعي المجتمع بأهمية السواحل والموارد البحرية المستدامة.",
};

export const whyMarineMatters: {
  heading: LocaleString;
  lead: LocaleString;
  problems: { title: LocaleString; description: LocaleString }[];
} = {
  heading: {
    en: "Why Marine Sustainability Matters",
    ar: "لماذا الاستدامة البحرية مهمة",
  },
  lead: {
    en: "Healthy oceans and coasts are essential to life, livelihoods and the long-term prosperity of the Kingdom. When marine systems degrade, the impact reaches far beyond the shoreline.",
    ar: "المحيطات والسواحل السليمة أساسية للحياة وسبل العيش والرخاء طويل المدى للمملكة. وعندما تتدهور الأنظمة البحرية، يتجاوز الأثر خط الساحل بكثير.",
  },
  problems: [
    {
      title: { en: "Marine Pollution", ar: "التلوث البحري" },
      description: {
        en: "Plastic debris, sewage, nutrient runoff and other contaminants degrade water quality, harm marine life and reduce the amenity value of coastal areas.",
        ar: "الحطام البلاستيكي والمياه الصرفية والجريان المغذِّي وغيرها من الملوثات تُقلل من جودة المياه وتُضر بالكائنات البحرية وتُضعِف قيمة المناطق الساحلية.",
      },
    },
    {
      title: {
        en: "Degradation of Marine and Coastal Habitats",
        ar: "تدهور الموائل البحرية والساحلية",
      },
      description: {
        en: "Coastal development, unsustainable practices and other pressures damage coral reefs, mangroves, seagrass beds and other productive habitats.",
        ar: "التنمية الساحلية والممارسات غير المستدامة وغيرها من الضغوط تتلف الشعاب المرجانية والمنغروف و床عشب البحير والموائل الإنتاجية الأخرى.",
      },
    },
    {
      title: { en: "Depletion of Natural Resources", ar: "استنزاف الموارد الطبيعية" },
      description: {
        en: "Unmanaged extraction and use of marine resources erodes the productive base that communities and economic sectors depend on.",
        ar: "الاستخراج والاستخدام غير المدار للموارد البحرية يُقوِّض القاعدة الإنتاجية التي تعتمد عليها المجتمعات والقطاعات الاقتصادية.",
      },
    },
    {
      title: { en: "Biodiversity Loss", ar: "فقدان التنوع البيولوجي" },
      description: {
        en: "The loss of marine species and ecosystems diminishes the resilience of the sea and reduces its capacity to deliver benefits to people.",
        ar: "فقدان الأنواع والنظم البيئية البحرية يُقَلِّل من مرونة البحر وقدرته على تقديم المنافع للبشر.",
      },
    },
    {
      title: { en: "Lack of Community Awareness", ar: "ضعف الوعي المجتمعي" },
      description: {
        en: "Without widespread public understanding of marine issues, it is harder to build the sustained participation needed to support long-term environmental change.",
        ar: "بدون وعي عام واسع بالقضايا البحرية، يصبح بناء المشاركة المستدامة اللازمة لدعم التغيير البيئي الطويل الأمد أكثر صعوبة.",
      },
    },
  ],
};

export const vision2030: Vision2030 = {
  eyebrow: { en: "KINGDOM OF SAUDI ARABIA", ar: "المملكة العربية السعودية" },
  title: {
    en: "Supporting Saudi Vision 2030",
    ar: "دعم رؤية السعودية 2030",
  },
  lead: {
    en: "The mission of Bihar Marine Sustainability is aligned with the Kingdom's long-term commitment to sustainable development, environmental protection, community participation, innovation and a vibrant blue economy.",
    ar: "رسالة جمعية بحار للاستدامة البحرية متوافقة مع التزام المملكة طويل المدى بالتنمية المستدامة، وحماية البيئة، ومشاركة المجتمع، والابتكار، والاقتصاد الأزرق النابض.",
  },
  pillars: [
    {
      id: "v2030-1",
      title: {
        en: "Environmental Sustainability",
        ar: "الاستدامة البيئية",
      },
      description: {
        en: "Contributing to national objectives for the protection of natural heritage, ecosystems and a clean environment.",
        ar: "المساهمة في الأهداف الوطنية لحماية التراث الطبيعي والنظم البيئية والبيئة النظيفة.",
      },
      iconKey: "leaf",
    },
    {
      id: "v2030-2",
      title: { en: "Community Participation", ar: "مشاركة المجتمع" },
      description: {
        en: "Fostering a culture of volunteering and community involvement in the future of Saudi Arabia's coastal and marine spaces.",
        ar: "تعزيز ثقافة التطوع والمشاركة المجتمعية في مستقبل المساحات الساحلية والبحرية بالمملكة العربية السعودية.",
      },
      iconKey: "users",
    },
    {
      id: "v2030-3",
      title: { en: "Innovation", ar: "الابتكار" },
      description: {
        en: "Supporting knowledge, research and innovative solutions to environmental challenges.",
        ar: "دعم المعرفة والبحث والحلول المبتكرة للتحديات البيئية.",
      },
      iconKey: "innovation",
    },
    {
      id: "v2030-4",
      title: { en: "Partnerships", ar: "الشراكات" },
      description: {
        en: "Building strategic relationships across sectors to multiply impact and support national goals.",
        ar: "بناء علاقات استراتيجية عبر القطاعات لمضاعفة الأثر ودعم الأهداف الوطنية.",
      },
      iconKey: "briefcase",
    },
    {
      id: "v2030-5",
      title: { en: "Blue Economy", ar: "الاقتصاد الأزرق" },
      description: {
        en: "Helping unlock sustainable economic opportunities rooted in a healthy, well-managed marine environment.",
        ar: "المساعدة في فتح فرص اقتصادية مستدامة متجذرة في بيئة بحرية سليمة ومُدارة بشكل جيد.",
      },
      iconKey: "globe",
    },
  ],
  brand: {
    line1: "VISION 2030",
    line2: "رؤية 2030",
  },
};

export const aboutObjectives: LocaleString[] = [
  {
    en: "Protect, conserve and rehabilitate marine and coastal ecosystems across the Kingdom.",
    ar: "حماية النظم البيئية البحرية والساحلية وحفظها واستعادتها عبر المملكة.",
  },
  {
    en: "Raise environmental awareness and build a stronger culture of marine responsibility in Saudi communities.",
    ar: "رفع الوعي البيئي وبناء ثقافة أقوى للمسؤولية البحرية في المجتمعات السعودية.",
  },
  {
    en: "Mobilize volunteers and enable direct, hands-on participation in marine conservation.",
    ar: "حشد المتطوعين وتمكين المشاركة المباشرة والتطبيقية في الحفظ البحري.",
  },
  {
    en: "Support and encourage applied research, innovation and evidence-based marine practices.",
    ar: "دعم وتشجيع البحث التطبيقي والابتكار والممارسات البحرية المستندة إلى الأدلة.",
  },
  {
    en: "Develop strategic partnerships with government, research, private and civil-society stakeholders.",
    ar: "بناء شراكات استراتيجية مع الجهات الحكومية والبحثية والخاصة وأصحاب المصلحة في المجتمع المدني.",
  },
  {
    en: "Contribute to a sustainable blue economy that balances prosperity, people and nature.",
    ar: "المساهمة في اقتصاد أزرق مستدام يوازن بين الرخاء والشعب والطبيعة.",
  },
];

export const aboutFutureDirection: { title: LocaleString; paragraph: LocaleString } = {
  title: { en: "Future Direction", ar: "الاتجاه المستقبلي" },
  paragraph: {
    en: "Looking ahead, Bihar Marine Sustainability will continue to deepen its impact by expanding evidence-based programs, strengthening partnerships across sectors, growing a diverse and skilled volunteer community, and supporting the long-term transition toward a more sustainable relationship between Saudi society and the sea. Our ambition is to be a trusted, effective and forward-looking contributor to the Kingdom's marine environment and to the communities that depend on it for generations to come.",
    ar: "وبالنظر إلى المستقبل، ستستمر جمعية بحار للاستدامة البحرية في تعميق أثرها من خلال توسيع البرامج المستندة إلى الأدلة، وتعزيز الشراكات عبر القطاعات، وتنمية مجتمع متطوع متنوع وماهر، ودعم التحول طويل المدى نحو علاقة أكثر استدامة بين المجتمع السعودي والبحر. طموحنا أن نكون مساهماً موثوقاً وفعالاً وتطلعياً في البيئة البحرية للمملكة وفي المجتمعات التي تعتمد عليها لأجيال قادمة.",
  },
};
