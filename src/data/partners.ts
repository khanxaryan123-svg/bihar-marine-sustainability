import type { IconKey } from "@/components/shared/icons";
import type { LocaleString } from "@/i18n/types";

export type PartnerCategory = {
  id: string;
  slug: string;
  title: LocaleString;
  description: LocaleString;
};

export type PotentialPartner = {
  id: string;
  slug: string;
  name: LocaleString;
  categoryId: string;
  isPotential: true;
  note: LocaleString;
  iconKey: IconKey;
};

export const partnerCategories: PartnerCategory[] = [
  {
    id: "cat-01",
    slug: "government-environmental",
    title: {
      en: "Government & Environmental Institutions",
      ar: "المؤسسات الحكومية والبيئية",
    },
    description: {
      en: "Collaborating with ministries and national environmental bodies to align marine action with national priorities, regulatory frameworks and public policy.",
      ar: "التعاون مع الوزارات والهيئات البيئية الوطنية لمواءمة العمل البحري مع الأولويات الوطنية والأطر التنظيمية والسياسات العامة.",
    },
  },
  {
    id: "cat-02",
    slug: "universities-research",
    title: {
      en: "Universities & Research Centers",
      ar: "الجامعات ومراكز البحوث",
    },
    description: {
      en: "Partnering with academic institutions to advance applied marine research, strengthen evidence-based programs, and translate knowledge into practical action.",
      ar: "الشراكة مع المؤسسات الأكاديمية للنهوض بالبحث البحري التطبيقي، وتعزيز البرامج المستندة إلى الأدلة، وترجمة المعرفة إلى إجراء عملي.",
    },
  },
  {
    id: "cat-03",
    slug: "private-sector",
    title: {
      en: "Private Sector",
      ar: "القطاع الخاص",
    },
    description: {
      en: "Engaging with private companies to integrate marine sustainability principles into operations, supply chains, facilities and long-term business strategies.",
      ar: "التعاون مع الشركات الخاصة لدمج مبادئ الاستدامة البحرية في العمليات وسلاسل التوريد والمرافق والاستراتيجيات التجارية طويلة الأمد.",
    },
  },
  {
    id: "cat-04",
    slug: "csr-organizations",
    title: {
      en: "CSR Organizations",
      ar: "منظمات المسؤولية الاجتماعية للشركات",
    },
    description: {
      en: "Working with corporate social responsibility platforms and foundations to jointly deliver high-impact marine programs that align organizational and community goals.",
      ar: "العمل مع منصات المسؤولية الاجتماعية للشركات والمؤسسات لتقديم برامج بحرية عالية الأثر معاً التي توافق الأهداف التنظيمية والمجتمعية.",
    },
  },
  {
    id: "cat-05",
    slug: "municipalities",
    title: {
      en: "Municipalities",
      ar: "البلديات",
    },
    description: {
      en: "Coordinating with municipal authorities on beach management, coastal waste infrastructure, public facilities and local environmental governance.",
      ar: "التنسيق مع السلطات البلدية في إدارة الشواطئ، والبنية التحتية للنفايات الساحلية، والمرافق العامة، والحوكمة البيئية المحلية.",
    },
  },
  {
    id: "cat-06",
    slug: "environmental-associations",
    title: {
      en: "Environmental Associations",
      ar: "الرابطات البيئية",
    },
    description: {
      en: "Standing alongside other civil-society and environmental associations to amplify collective advocacy, share best practices and co-deliver field programs.",
      ar: "الوقوف بجانب رابطات المجتمع المدني والبيئية الأخرى لتعزيز الدعوة الجماعية، وتبادل أفضل الممارسات، وتنفيذ البرامج الميدانية معاً.",
    },
  },
];

export const potentialPartners: PotentialPartner[] = [
  {
    id: "pp-01",
    slug: "mewa",
    name: {
      en: "Ministry of Environment, Water and Agriculture",
      ar: "وزارة البيئة والمياه والزراعة",
    },
    categoryId: "cat-01",
    isPotential: true,
    note: {
      en: "Potential Partner",
      ar: "شريك محتمل",
    },
    iconKey: "institution",
  },
  {
    id: "pp-02",
    slug: "ncwd",
    name: {
      en: "National Center for Wildlife Development",
      ar: "المركز الوطني لتنمية الحياة الفطرية",
    },
    categoryId: "cat-01",
    isPotential: true,
    note: {
      en: "Potential Partner",
      ar: "شريك محتمل",
    },
    iconKey: "institution",
  },
  {
    id: "pp-03",
    slug: "srsc",
    name: {
      en: "Saudi Red Sea Authority",
      ar: "هيئة البحر الأحمر السعودية",
    },
    categoryId: "cat-01",
    isPotential: true,
    note: {
      en: "Potential Partner",
      ar: "شريك محتمل",
    },
    iconKey: "institution",
  },
  {
    id: "pp-04",
    slug: "municipalities",
    name: {
      en: "Municipalities",
      ar: "البلديات",
    },
    categoryId: "cat-05",
    isPotential: true,
    note: {
      en: "Potential Partner",
      ar: "شريك محتمل",
    },
    iconKey: "municipality",
  },
  {
    id: "pp-05",
    slug: "universities",
    name: {
      en: "Universities & Research Centers",
      ar: "الجامعات ومراكز البحوث",
    },
    categoryId: "cat-02",
    isPotential: true,
    note: {
      en: "Potential Partner",
      ar: "شريك محتمل",
    },
    iconKey: "university",
  },
  {
    id: "pp-06",
    slug: "private-csr",
    name: {
      en: "Private Sector & CSR Organizations",
      ar: "القطاع الخاص ومنظمات المسؤولية الاجتماعية للشركات",
    },
    categoryId: "cat-03",
    isPotential: true,
    note: {
      en: "Potential Partner",
      ar: "شريك محتمل",
    },
    iconKey: "corporate",
  },
];

export const homepagePartners = potentialPartners;
