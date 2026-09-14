import type { IconKey } from "@/components/shared/icons";
import type { LocaleString } from "@/i18n/types";

export type AreaOfWork = {
  id: string;
  title: LocaleString;
  slug: string;
  description: LocaleString;
  shortDescription: LocaleString;
  icon: IconKey;
  image: string;
  imageAlt: LocaleString;
  isWide?: boolean;
};

export const areasOfWork: AreaOfWork[] = [
  {
    id: "marine-protection",
    slug: "marine-environment-protection",
    icon: "shield",
    isWide: false,
    title: {
      en: "Marine Environment Protection",
      ar: "حماية البيئة البحرية",
    },
    shortDescription: {
      en: "Addressing pollution, marine debris and acute environmental threats across coastal and marine areas.",
      ar: "معالجة التلوث والحطام البحري والتهديدات البيئية الحادة في المناطق الساحلية والبحرية.",
    },
    description: {
      en: "Systematic action to reduce pollution, clean marine debris, monitor water quality and protect sensitive marine environments from acute threats. This area focuses on coordinated programs that support healthy waterways, prevent contamination and respond to priority environmental risks that affect the Kingdom's seas.",
      ar: "إجراء منظم للحد من التلوث، وتنظيف الحطام البحري، ومراقبة جودة المياه، وحماية البيئات البحرية الحساسة من التهديدات الحادة. يركز هذا المجال على البرامج المنسقة التي تدعم المسارات المائية الصحية، وتمنع التلوث، وتستجيب للمخاطر البيئية ذات الأولوية التي تؤثر على بحار المملكة.",
    },
    image: "/work-protection.jpg",
    imageAlt: {
      en: "Marine environment protection — clean blue coastal waters and conservation efforts",
      ar: "حماية البيئة البحرية — مياه ساحلية زرقاء نظيفة وجهود الحفظ",
    },
  },
  {
    id: "habitat-restoration",
    slug: "restoration-of-marine-and-coastal-habitats",
    icon: "sprout",
    isWide: false,
    title: {
      en: "Restoration of Marine and Coastal Habitats",
      ar: "استعادة الموائل البحرية والساحلية",
    },
    shortDescription: {
      en: "Restoring mangroves, coral reefs and seagrass ecosystems that support biodiversity and coastal resilience.",
      ar: "استعادة المنغروف والشعاب المرجانية والنظم البيئية لعشب البحر التي تدعم التنوع البيولوجي والصمود الساحلي.",
    },
    description: {
      en: "Field-based rehabilitation of mangrove forests, coral reefs, seagrass beds and other productive coastal and marine habitats. Restoration work combines local knowledge, research and careful monitoring to improve habitat health, support fisheries and enhance nature-based protection along the coast.",
      ar: "تأهيل ميداني لغابات المنغروف والشعاب المرجانية و床عشب البحير والموائل الساحلية والبحرية الإنتاجية الأخرى. يجمع عمل الاستعادة بين المعرفة المحلية والبحث والمراقبة الدقيقة لتحسين صحة الموائل، ودعم مصايد الأسماك، وتعزيز الحماية الطبيعية على طول الساحل.",
    },
    image: "/work-habitat-restoration.jpg",
    imageAlt: {
      en: "Coastal habitat restoration — mangroves along a clear Saudi tidal coastline",
      ar: "استعادة الموائل الساحلية — المنغروف على طول ساحل مدى سعودي صافٍ",
    },
  },
  {
    id: "environmental-volunteering",
    slug: "environmental-volunteering",
    icon: "handHeart",
    isWide: false,
    title: {
      en: "Environmental Volunteering",
      ar: "التطوع البيئي",
    },
    shortDescription: {
      en: "Hands-on volunteer opportunities that connect people directly to marine conservation action.",
      ar: "فرص تطوعية تطبيقية تربط الناس مباشرة بعمل الحفظ البحري.",
    },
    description: {
      en: "An active and inclusive volunteer program that welcomes citizens, residents and students into practical marine and coastal action. Volunteering covers beach cleanups, habitat rehabilitation, awareness events and data collection — creating strong, direct connections between people and the health of the sea.",
      ar: "برنامج تطوعي نشط وشامل يرحب بالمواطنين والمقيمين والطلاب في العمل البحري والساحلي العملي. يغطي التطوع تنظيف الشواطئ، وتأهيل الموائل، والفعاليات التوعوية، وجمع البيانات — مما يخلق روابط قوية ومباشرة بين الناس وصحة البحر.",
    },
    image: "/work-volunteering-beach.jpg",
    imageAlt: {
      en: "Environmental volunteering — volunteers collaborating during a coastal cleanup",
      ar: "التطوع البيئي — متطوعون يتعاونون أثناء تنظيف ساحلي",
    },
  },
  {
    id: "awareness-education",
    slug: "awareness-and-education",
    icon: "bookOpen",
    isWide: false,
    title: {
      en: "Awareness and Education",
      ar: "التوعية والتثقيف",
    },
    shortDescription: {
      en: "Educational programs and campaigns that build a stronger culture of marine responsibility.",
      ar: "برامج وحملات تعليمية تبني ثقافة أقوى للمسؤولية البحرية.",
    },
    description: {
      en: "Community-centered awareness and education that reaches schools, universities, public audiences and coastal populations. Programs combine classroom-style learning, field visits, campaigns and public events designed to deepen understanding of marine challenges and encourage responsible environmental behavior.",
      ar: "توعية وتثقيف يمركزان على المجتمع ويصلان إلى المدارس والجامعات والجمهور العام والمجموعات الساحلية. تجمع البرامج بين التعلم الصفي والزيارات الميدانية والحملات والفعاليات العامة المصممة لتعميق الفهم للتحديات البحرية وتشجيع السلوك البيئي المسؤول.",
    },
    image: "/marine-sustainability.jpg",
    imageAlt: {
      en: "Awareness and education — a marine conservation learning session for young learners",
      ar: "التوعية والتثقيف — جلسة تعليمية حول الحفظ البحري للمتعلمين الشباب",
    },
  },
  {
    id: "research-innovation",
    slug: "research-and-innovation",
    icon: "flask",
    isWide: false,
    title: {
      en: "Research and Innovation",
      ar: "البحث والابتكار",
    },
    shortDescription: {
      en: "Applied research, evidence-based practice and innovation for marine solutions.",
      ar: "البحث التطبيقي والممارسة المستندة إلى الأدلة والابتكار للحلول البحرية.",
    },
    description: {
      en: "Collaborative applied research and innovation that strengthens the evidence base for marine action across the Kingdom. This area supports partnerships with universities, research centers and experts to generate field data, evaluate program outcomes, and explore new technologies and approaches that support marine sustainability.",
      ar: "بحث تطبيقي وابتكار تعاوييان يعززان قاعدة الأدلة للعمل البحري عبر المملكة. يدعم هذا المجال الشراكات مع الجامعات والمراكز البحثية والخبراء لتوليد البيانات الميدانية، وتقييم نتائج البرامج، واستكشاف التقنيات والمناهج الجديدة التي تدعم الاستدامة البحرية.",
    },
    image: "/initiatives-beach-cleanup.jpg",
    imageAlt: {
      en: "Research and innovation — marine scientists analyzing samples in a research laboratory",
      ar: "البحث والابتكار — علماء بحريون يحللون عينات في مختبر بحثي",
    },
  },
  {
    id: "sustainable-aquaculture",
    slug: "sustainable-aquaculture",
    icon: "fish",
    isWide: false,
    title: {
      en: "Sustainable Aquaculture",
      ar: "الاستزراع المستدام",
    },
    shortDescription: {
      en: "Supporting responsible aquaculture that balances production, environment and community.",
      ar: "دعم الاستزراع المسؤول الذي يوازن بين الإنتاج والبيئة والمجتمع.",
    },
    description: {
      en: "Promoting aquaculture practices that protect ecosystems, support local livelihoods and align with national sustainability goals. This area explores guidance, partnerships, and applied knowledge to support responsible seafood production that works in harmony with marine environments and coastal communities.",
      ar: "الترويج لممارسات الاستزراع التي تحمي النظم البيئية، وتدعم سبل العيش المحلية، وتتماشى مع الأهداف الوطنية للاستدامة. يستكشف هذا المجال الإرشادات والشراكات والمعرفة التطبيقية لدعم الإنتاج المسؤول من المأكولات البحرية الذي يعمل بانسجام مع البيئات البحرية والمجتمعات الساحلية.",
    },
    image: "/marine-sustainability.jpg",
    imageAlt: {
      en: "Sustainable aquaculture — responsible coastal fish farming in clear blue waters",
      ar: "الاستزراع المستدام — استزراع سمك ساحلي مسؤول في مياه زرقاء صافية",
    },
  },
  {
    id: "blue-economy",
    slug: "blue-economy-and-ecotourism",
    icon: "anchor",
    isWide: true,
    title: {
      en: "Blue Economy and Ecotourism",
      ar: "الاقتصاد الأزرق والسياحة البيئية",
    },
    shortDescription: {
      en: "Advancing a sustainable blue economy that combines prosperity, protection and community value.",
      ar: "النهوض بالاقتصاد الأزرق المستدام الذي يجمع بين الرخاء والحماية والقيمة المجتمعية.",
    },
    description: {
      en: "A strategic focus on enabling a sustainable and inclusive blue economy across the Kingdom. This area supports responsible tourism, value-chain development, innovation-driven enterprises and public-private collaboration that deliver economic opportunity while protecting — and investing in — the marine environment and the communities that depend on it.",
      ar: "تركيز استراتيجي على تمكين اقتصاد أزرق مستدام وشامل عبر المملكة. يدعم هذا المجال السياحة المسؤولة، وتنمية سلاسل القيمة، والمؤسسات القائمة على الابتكار، والتعاون بين القطاعين العام والخاص التي تحقق الفرص الاقتصادية مع حماية البيئة البحرية والاستثمار فيها والمجتمعات التي تعتمد عليها.",
    },
    image: "/marine-sustainability.jpg",
    imageAlt: {
      en: "Blue economy and ecotourism — aerial view of a sustainable Saudi coastal landscape",
      ar: "الاقتصاد الأزرق والسياحة البيئية — منظر جوي لمشهد ساحلي سعودي مستدام",
    },
  },
];
