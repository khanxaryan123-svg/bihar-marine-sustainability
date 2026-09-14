import type { IconKey } from "@/components/shared/icons";
import type { LocaleString } from "@/i18n/types";

export type ImpactItem = {
  id: string;
  slug: string;
  title: LocaleString;
  shortDescription: LocaleString;
  description: LocaleString;
  iconKey: IconKey;
  imagePrompt: string;
  localImage?: string;
  localVideo?: string;
};

export const impactAreas: ImpactItem[] = [
  {
    id: "imp-01",
    slug: "environmental-initiatives",
    title: {
      en: "Environmental Initiatives",
      ar: "المبادرات البيئية",
    },
    shortDescription: {
      en: "Concrete, on-the-ground programs addressing the most pressing marine and coastal environmental challenges.",
      ar: "برامج ملموسة على أرض الواقع تعالج أكثر التحديات البيئية البحرية والساحلية إلحاحاً.",
    },
    description: {
      en: "Our impact begins with well-designed, faithfully executed environmental initiatives. From pollution reduction to habitat rehabilitation, each initiative is defined by clear environmental objectives, transparent implementation, and a commitment to iterative learning. Delivered in partnership with communities and institutions, these initiatives represent the association's practical contribution to protecting and restoring Saudi marine environments.",
      ar: "يبدأ أثرنا بمبادرات بيئية مصممة جيداً ومنفذة بإخلاص. من الحد من التلوث إلى تأهيل الموائل، تتميز كل مبادرة بأهداف بيئية واضحة، وتنفيذ شفاف، والتزام بالتعلم التكراري. وتُقدّم هذه المبادرات بالشراكة مع المجتمعات والمؤسسات، وتمثل المساهمة العملية للجمعية في حماية واستعادة البيئات البحرية السعودية.",
    },
    iconKey: "flag",
    imagePrompt:
      "Aerial photo of ongoing coastal restoration site, mangrove planting zones and clear shallow sea, Saudi Arabian coastline, professional realistic documentary aerial photography, cinematic",
    localImage: "/work-habitat-restoration.jpg",
    localVideo: "/initiatives-mangroves.mp4",
  },
  {
    id: "imp-02",
    slug: "community-awareness",
    title: {
      en: "Community Awareness",
      ar: "الوعي المجتمعي",
    },
    shortDescription: {
      en: "Growing public understanding of marine issues and the practical actions people can take every day.",
      ar: "تنمية الفهم العام للقضايا البحرية والإجراءات العملية التي يمكن للناس اتخاذها يومياً.",
    },
    description: {
      en: "Growing awareness is foundational to durable environmental progress. Through sustained engagement in schools, universities, public spaces, digital platforms and community events, we work to build a more ocean-literate public. When communities understand the value of the marine environment and how their choices affect it, participation in protection efforts becomes more widespread, more informed and more resilient over time.",
      ar: "إن تنمية الوعي هي الأساس للتقدم البيئي الدائم. ومن خلال التفاعل المستمر في المدارس والجامعات والأماكن العامة والمنصات الرقمية والفعاليات المجتمعية، نعمل على بناء جمهور أكثر معرفة بالمحيط. وعندما يفهم المجتمعات قيمة البيئة البحرية وكيف تؤثر خياراتهم عليها، تصبح المشاركة في جهود الحماية أكثر انتشاراً ووعاءً ومرونة بمرور الوقت.",
    },
    iconKey: "book",
    imagePrompt:
      "Saudi community environmental event, families gathered around marine life educational display booth by the beach, realistic documentary event photography, natural daylight",
    localImage: "/marine-sustainability.jpg",
    localVideo: "/work-education.mp4",
  },
  {
    id: "imp-03",
    slug: "volunteers",
    title: {
      en: "Volunteers",
      ar: "المتطوعون",
    },
    shortDescription: {
      en: "A growing, diverse and committed volunteer community taking direct, hands-on action for the marine environment.",
      ar: "مجتمع متطوع متنامٍ متنوع ملتزم يتخذ إجراءً مباشراً وتطبيقياً من أجل البيئة البحرية.",
    },
    description: {
      en: "Volunteers are at the center of our model for change. Through regular cleanup, planting, monitoring, education and outreach activities, a broad cross-section of Saudi society participates directly in marine conservation. Each volunteer represents not only an immediate contribution to practical action but also a long-term ambassador for environmental responsibility in their neighborhood, workplace, school and family.",
      ar: "يحتل المتطوعون مركز الصدارة في نموذجنا للتغيير. ومن خلال أنشطة التنظيف والزراعة والرصد والتثقيف والتوعية المنتظمة، يشارك قطاع عريض من المجتمع السعودي مباشرة في الحفظ البحري. ويمثل كل متطوع ليس فقط مساهمة فورية في العمل العملي، بل أيضاً سفيراً طويل الأمد للمسؤولية البيئية في حيه ومكان عمله ومدرسته وعائلته.",
    },
    iconKey: "users",
    imagePrompt:
      "Large group of diverse volunteers on Saudi beach, cleanup action in progress, everyone wearing gloves and collecting trash, wide shot, realistic documentary photography, warm natural sunlight",
    localImage: "/work-volunteering-beach.jpg",
    localVideo: "/initiatives-volunteers.mp4",
  },
  {
    id: "imp-04",
    slug: "coastal-rehabilitation",
    title: {
      en: "Coastal Rehabilitation",
      ar: "التأهيل الساحلي",
    },
    shortDescription: {
      en: "Ecological rehabilitation of shorelines, coastal wetlands and marine habitats toward healthier, more resilient ecosystems.",
      ar: "التأهيل البيئي للخطوط الساحلية والأراضي الرطبة الساحلية والموائل البحرية نحو نظم بيئية أكثر صحة ومرونة.",
    },
    description: {
      en: "Where coastal environments have been degraded, rehabilitation aims to restore the natural functions and diversity of the ecosystem. Our work includes carefully planned site interventions, erosion control, substrate improvement, replanting of native coastal vegetation and ongoing ecological monitoring. The objective is a measurable recovery of habitat quality that benefits both biodiversity and the communities that depend on healthy coastal systems.",
      ar: "في الأماكن التي تدهورت فيها البيئات الساحلية، يهدف التأهيل إلى استعادة الوظائف الطبيعية والتنوع للنظام البيئي. ويشمل عملنا تدخلات موقعية مخططة بعناية، ومكافحة التعرية، وتحسين الركيزة، وإعادة زراعة النباتات الساحلية المحلية، والرصد البيئي المستمر. والهدف هو تعافٍ ملموس لجودة الموائل يعود بالنفع على التنوع البيولوجي والمجتمعات التي تعتمد على الأنظمة الساحلية السليمة.",
    },
    iconKey: "leaf",
    imagePrompt:
      "Restored coastal wetland with mangroves and tidal channels, blue heron wading, Saudi Arabian wetland rehabilitation site, realistic documentary nature photography, golden hour light",
    localImage: "/about-mangrove-coast.jpg",
    localVideo: "/about-coastal.mp4",
  },
  {
    id: "imp-05",
    slug: "mangroves-and-green-cover",
    title: {
      en: "Mangroves & Green Cover",
      ar: "المنغروف والغطاء الأخضر",
    },
    shortDescription: {
      en: "Expanded mangrove and coastal green cover supporting biodiversity, carbon storage and shoreline stabilization.",
      ar: "توسيع غطاء المنغروف والغطاء الأخضر الساحلي لدعم التنوع البيولوجي واختزان الكربون وتثبيت الخط الساحلي.",
    },
    description: {
      en: "Mangroves are among the most productive and ecologically valuable habitats on Earth. Our long-term contributions to mangrove and coastal green cover support multiple interconnected benefits: enhanced biodiversity habitat, improved nearshore water quality, natural shoreline stabilization against storms and rising seas, and substantial carbon sequestration. Each newly established and surviving tree extends these benefits to surrounding ecosystems and communities.",
      ar: "تعد غابات المنغروف من أكثر الموائل إنتاجاً وقيمة بيئية على وجه الأرض. وتدعم مساهماتنا طويلة الأمد في غطاء المنغروف والغطاء الأخضر الساحلي منافع مترابطة متعددة: تعزيز موائل التنوع البيولوجي، وتحسين جودة المياه القريبة من الشاطئ، والتثبيت الطبيعي للخط الساحلي ضد العواصف وارتفاع مستوى البحر، واختزان كربوني كبير. ويمد كل شجرة تُزرع حديثاً وتبقى على قيد الحياة هذه المنافع إلى النظم البيئية والمجتمعات المحيطة.",
    },
    iconKey: "tree",
    imagePrompt:
      "Dense mangrove forest aerial view with intricate root system exposed at low tide, clear blue channels, Saudi coastline, professional realistic documentary aerial landscape photography",
    localImage: "/work-habitat-restoration.jpg",
    localVideo: "/initiatives-mangroves.mp4",
  },
  {
    id: "imp-06",
    slug: "research-and-innovation",
    title: {
      en: "Research & Innovation",
      ar: "البحث والابتكار",
    },
    shortDescription: {
      en: "Applied research and evidence-based innovation that continuously improve the quality and impact of our work.",
      ar: "البحث التطبيقي والابتكار المستند إلى الأدلة الذي يحسن باستمرار من جودة وأثر عملنا.",
    },
    description: {
      en: "Rigorous data, applied research and an openness to innovation raise the quality and impact of every program we deliver. By working with universities, technical experts and research centers, we turn field observations into lessons learned, emerging methods into tested practices, and local knowledge into sharper program design. The result is stronger, more relevant and more effective marine conservation over time.",
      ar: "إن البيانات الدقيقة والبحث التطبيقي والانفتاح على الابتكار يرفعون من جودة وأثر كل برنامج نقدّمه. ومن خلال العمل مع الجامعات والخبراء الفنيين والمراكز البحثية، نحول الملاحظات الميدانية إلى دروس مستفادة، والطرق الناشئة إلى ممارسات مختبرة، والمعرفة المحلية إلى تصميم برامج أدق. والنتيجة هي حفظ بحري أقوى وأكثر صلة وفعالية بمرور الوقت.",
    },
    iconKey: "innovation",
    imagePrompt:
      "Marine research team using scientific instruments on a research vessel, measuring water quality against backdrop of Saudi Red Sea coastline, realistic documentary science photography",
    localImage: "/work-protection.jpg",
    localVideo: "/work-research-innovation.mp4",
  },
  {
    id: "imp-07",
    slug: "partnerships-and-collaboration",
    title: {
      en: "Partnerships & Collaboration",
      ar: "الشراكات والتعاون",
    },
    shortDescription: {
      en: "Strategic, trust-based partnerships that multiply capacity and extend the reach of marine conservation efforts.",
      ar: "شراكات استراتيجية قائمة على الثقة تُضاعف القدرة وتوسع نطاق جهود الحفظ البحري.",
    },
    description: {
      en: "No single organization can meet the environmental challenges of a connected marine environment on its own. We pursue deliberate, structured collaboration with government agencies, academic institutions, research centers, private-sector partners, municipalities and civil-society organizations. Every partnership is an opportunity to align capabilities, share knowledge, co-deliver programs and achieve outcomes beyond the reach of any one actor.",
      ar: "لا يمكن لمنظمة واحدة مواجهة التحديات البيئية للبيئة البحرية المترابطة بمفردها. نسعى إلى تعاون مدروس ومنظم مع الهيئات الحكومية والمؤسسات الأكاديمية والمراكز البحثية وشركاء القطاع الخاص والبلديات ومنظمات المجتمع المدني. وكل شراكة تمثل فرصة لمواءمة القدرات، وتبادل المعرفة، وتنفيذ البرامج المشتركة، وتحقيق نتائج تتجاوز قدرة أي جهة منفردة.",
    },
    iconKey: "briefcase",
    imagePrompt:
      "Group of professional partners shaking hands after environmental strategy meeting, modern office interior with large window showing Red Sea view, realistic documentary business photography",
    localImage: "/marine-sustainability.jpg",
    localVideo: "/partners-collaboration.mp4",
  },
  {
    id: "imp-08",
    slug: "sustainable-blue-economy",
    title: {
      en: "Sustainable Blue Economy",
      ar: "الاقتصاد الأزرق المستدام",
    },
    shortDescription: {
      en: "A practical contribution to building a blue economy that supports livelihoods, innovation and thriving marine ecosystems.",
      ar: "مساهمة عملية في بناء اقتصاد أزرق يدعم سبل العيش والابتكار والنظم البيئية البحرية المزدهرة.",
    },
    description: {
      en: "A sustainable blue economy treats a healthy marine environment not as a constraint on development but as the very foundation of long-term prosperity. Our contribution in this area focuses on raising awareness, fostering dialogue, and supporting activities that align livelihoods, innovation and enterprise with marine conservation goals. By championing responsible use of marine resources we help build a path where ecological health and economic opportunity reinforce each other.",
      ar: "إن الاقتصاد الأزرق المستدام لا يعامل البيئة البحرية السليمة كقيد على التنمية، بل كأساس للرخاء طويل المدى. وتركز مساهمتنا في هذا المجال على رفع الوعي، وتعزيز الحوار، ودعم الأنشطة التي توائم بين سبل العيش والابتكار والمشاريع وبين أهداف الحفظ البحري. ومن خلال الدفاع عن الاستخدام المسؤول للموارد البحرية، نساعد في بناء مسار يعزز فيه الصحة البيئية والفرصة الاقتصادية بعضهما البعض.",
    },
    iconKey: "globe",
    imagePrompt:
      "Sustainable coastal development panoramic aerial, Saudi Red Sea coastline, eco-friendly tourism infrastructure surrounded by mangroves and coral reefs, realistic cinematic aerial photography, golden hour",
    localImage: "/about-mangrove-coast.jpg",
    localVideo: "/blue-economy-coastline.mp4",
  },
];
