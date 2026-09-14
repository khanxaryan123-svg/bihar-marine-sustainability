import type { LocaleString } from "@/i18n/types";

export type Initiative = {
  id: string;
  slug: string;
  title: LocaleString;
  overview: LocaleString;
  purpose: LocaleString;
  activities: LocaleString[];
  relatedAreaSlug: string;
  relatedAreaLabel: LocaleString;
  desiredImpact: LocaleString;
  imagePrompt: string;
  localImage?: string;
  localVideo?: string;
  imageAlt: LocaleString;
};

export const initiatives: Initiative[] = [
  {
    id: "init-01",
    slug: "our-beaches-our-responsibility",
    title: {
      en: "Our Beaches, Our Responsibility",
      ar: "شواطئنا مسؤوليتنا",
    },
    overview: {
      en: "A community-driven cleanup initiative that brings volunteers together to remove litter and marine debris from Saudi beaches while promoting long-term behavioral change.",
      ar: "مبادرة تنظيف مجتمعية تجمع المتطوعين معاً لإزالة النفايات والحطام البحري من شواطئ المملكة، مع تعزيز تغيير سلوكي طويل المدى.",
    },
    purpose: {
      en: "To reduce coastal pollution, protect marine wildlife from entanglement and ingestion of plastic, and build a lasting sense of shared responsibility for the cleanliness of Saudi shorelines.",
      ar: "الحد من التلوث الساحلي، وحماية الكائنات البحرية من التشابك في البلاستيك وابتلاعه، وبناء إحساس دائم بالمسؤولية المشتركة نحو نظافة سواحل المملكة.",
    },
    activities: [
      {
        en: "Regularly scheduled community beach cleanups across coastal locations",
        ar: "حملات تنظيف مجتمعية منتظمة للشواطئ في مختلف المواقع الساحلية",
      },
      {
        en: "Sorting and recording collected debris to inform pollution-reduction strategies",
        ar: "فرز وتسجيل الحطام المجمّع لتوجيه استراتيجيات الحد من التلوث",
      },
      {
        en: "Public awareness booths at cleanup sites to educate participants on waste reduction",
        ar: "أجنحة توعية عامة في مواقع التنظيف لتثقيف المشاركين حول تقليل النفايات",
      },
      {
        en: "Distribution of educational materials to encourage reduced single-use plastic consumption",
        ar: "توزيع مواد تثقيفية لتشجيع تقليل استهلاك البلاستيك أحادي الاستخدام",
      },
      {
        en: "Coordination with municipalities and local authorities for responsible waste disposal",
        ar: "التنسيق مع البلديات والسلطات المحلية للتصرف المسؤول في النفايات",
      },
    ],
    relatedAreaSlug: "environmental-volunteering",
    relatedAreaLabel: {
      en: "Environmental Volunteering",
      ar: "التطوع البيئي",
    },
    desiredImpact: {
      en: "Measurably cleaner shorelines, reduced plastic entering the marine environment, a growing network of informed volunteers, and a visible cultural shift toward responsible coastal stewardship.",
      ar: "سواحل أنظف بشكل ملموس، وانخفاض كمية البلاستيك الذي يدخل البيئة البحرية، وشبكة متنامية من المتطوعين المطلعين، وتحوّل ثقافي واضح نحو الإشراف المسؤول على المناطق الساحلية.",
    },
    imagePrompt:
      "Saudi beach cleanup volunteer initiative, diverse adults collecting waste from sand near the sea, natural daylight, realistic documentary environmental photography, professional",
    localImage: "/initiatives-beach-cleanup.jpg",
    localVideo: "/initiatives-volunteers.mp4",
    imageAlt: {
      en: "Diverse volunteers participating in a beach cleanup, collecting waste from the sandy shore near the Red Sea coast during daytime",
      ar: "متطوعون متنوعون يشاركون في حملة تنظيف شاطئ، ويجمعون النفايات من الشاطئ الرملي بالقرب من ساحل البحر الأحمر خلال النهار",
    },
  },
  {
    id: "init-02",
    slug: "sea-ambassadors",
    title: {
      en: "Sea Ambassadors",
      ar: "سفراء البحر",
    },
    overview: {
      en: "A youth leadership program that equips students and young advocates with the knowledge, skills and network to become voices for marine conservation in their communities.",
      ar: "برنامج قيادة شبابي يزوّد الطلاب والدعاة الشباب بالمعرفة والمهارات والشبكة اللازمة ليصبحوا أصواتاً للحفظ البحري في مجتمعاتهم.",
    },
    purpose: {
      en: "To nurture a new generation of informed, confident and active young leaders who champion marine sustainability within schools, universities and public life across the Kingdom.",
      ar: "رعاية جيل جديد من القادة الشباب المطلعين الواثقين النشطين الذين يروّجون للاستدامة البحرية في المدارس والجامعات والحياة العامة في جميع أنحاء المملكة.",
    },
    activities: [
      {
        en: "Structured training workshops on marine ecology, conservation and advocacy",
        ar: "ورش تدريب منظمة حول البيئة البحرية والحفظ والدعوة",
      },
      {
        en: "Mentorship sessions with marine scientists and environmental practitioners",
        ar: "جلسات إرشادية مع علماء بحريين وممارسين بيئيين",
      },
      {
        en: "Youth-led awareness campaigns in schools and universities",
        ar: "حملات توعية بقيادة الشباب في المدارس والجامعات",
      },
      {
        en: "Field visits to coastal habitats, restoration sites and research facilities",
        ar: "زيارات ميدانية للموائل الساحلية ومواقع الاستعادة والمرافق البحثية",
      },
      {
        en: "Opportunities to organize community events and practical conservation actions",
        ar: "فرص لتنظيم فعاليات مجتمعية وإجراءات حفظ تطبيقية",
      },
    ],
    relatedAreaSlug: "awareness-and-education",
    relatedAreaLabel: {
      en: "Awareness and Education",
      ar: "التوعية والتثقيف",
    },
    desiredImpact: {
      en: "A growing cohort of confident young advocates who carry marine sustainability literacy into their communities, pursue environmental careers, and inspire peer-level action across Saudi society.",
      ar: "فئة متنامية من الدعاة الشباب الواثقين ينقلون معرفة الاستدامة البحرية إلى مجتمعاتهم، ويمارسون مهن بيئية، ويلهمون أقرانهم إلى العمل في جميع أنحاء المجتمع السعودي.",
    },
    imagePrompt:
      "Group of young Saudi university students as environmental ambassadors, standing by the Red Sea coast looking at the horizon, realistic documentary photography, natural light, premium aesthetic",
    localImage: "/marine-sustainability.jpg",
    localVideo: "/work-education.mp4",
    imageAlt: {
      en: "Group of young Saudi environmental ambassadors standing by the Red Sea coast overlooking the horizon",
      ar: "مجموعة من سفراء البيئة الشباب السعوديين يقفون على ساحل البحر الأحمر يطلون على الأفق",
    },
  },
  {
    id: "init-03",
    slug: "marine-life-protection",
    title: {
      en: "Marine Life Protection",
      ar: "حماية الكائنات البحرية",
    },
    overview: {
      en: "A species-focused initiative supporting the protection and recovery of vulnerable marine wildlife, from coral communities and seagrass to sea turtles and coastal fisheries.",
      ar: "مبادرة تركز على الأنواع لدعم حماية واستعادة الكائنات البحرية المعرضة للخطر، من مجتمعات الشعاب المرجانية وعشب البحير إلى سلاحف البحر والمصايد الساحلية.",
    },
    purpose: {
      en: "To reduce direct pressures on threatened marine species, protect critical habitats and ecological corridors, and support evidence-based interventions that allow Saudi marine biodiversity to recover and thrive.",
      ar: "الحد من الضغوط المباشرة على الأنواع البحرية المهددة، وحماية الموائل الحيوية والممرات البيئية، ودعم التدخلات المستندة إلى الأدلة التي تمكّن التنوع البيولوجي البحري السعودي من الاستعادة والازدهار.",
    },
    activities: [
      {
        en: "Partnership-based monitoring of vulnerable species and critical habitats",
        ar: "رصد قائم على الشراكات للأنواع المعرضة للموائل الحيوية",
      },
      {
        en: "Community reporting networks for wildlife sightings and disturbance incidents",
        ar: "شبكات إبلاغ مجتمعية عن مشاهدات الحياة البرية وحوادث الاضطراب",
      },
      {
        en: "Advocacy for responsible coastal and marine development practices",
        ar: "الدعوة لممارسات التنمية الساحلية والبحرية المسؤولة",
      },
      {
        en: "Awareness campaigns to reduce harm to sensitive species from human activities",
        ar: "حملات توعية للحد من الأذى الذي تسببه الأنشطة البشرية للأنواع الحساسة",
      },
      {
        en: "Collaborative scientific support for species protection planning",
        ar: "دعم علمي تعاوني لتخطيط حماية الأنواع",
      },
    ],
    relatedAreaSlug: "marine-environment-protection",
    relatedAreaLabel: {
      en: "Marine Environment Protection",
      ar: "حماية البيئة البحرية",
    },
    desiredImpact: {
      en: "Improved protection status for key marine species, reduced human-caused harm to wildlife, better-informed site-management decisions, and stronger public support for species-protection measures.",
      ar: "تحسين وضع الحماية للأنواع البحرية الرئيسية، والحد من الأذى البشري للحياة البرية، واتخاذ قرارات إدارة مواقع أفضل استنارة، وتعزيز الدعم الشعبي لتدابير حماية الأنواع.",
    },
    imagePrompt:
      "Close-up realistic documentary photography of a sea turtle swimming over a healthy Saudi coral reef, clear blue water, abundant fish, natural sunlight, premium environmental imagery",
    localImage: "/hero-reef-turtle.jpg",
    localVideo: "/initiatives-marine-life.mp4",
    imageAlt: {
      en: "A sea turtle swimming gracefully over a vibrant, healthy coral reef in clear blue Saudi waters with small fish surrounding it",
      ar: "سلحفاة بحرية تسبح برشاقة فوق شعاب مرجانية نابضة بالحياة وصحية في المياه السعودية الزرقاء الصافية مع أسماك صغيرة تحيط بها",
    },
  },
  {
    id: "init-04",
    slug: "marine-environmental-awareness",
    title: {
      en: "Marine Environmental Awareness",
      ar: "التوعية البيئية البحرية",
    },
    overview: {
      en: "A multi-channel public awareness initiative dedicated to raising broader understanding of marine issues and the actions that individuals and organizations can take.",
      ar: "مبادرة توعية عامة متعددة القنوات مكرسة لرفع مستوى الفهم الأوسع للقضايا البحرية والإجراءات التي يمكن للأفراد والمنظمات اتخاذها.",
    },
    purpose: {
      en: "To make ocean literacy more accessible across Saudi society and to translate growing awareness into responsible everyday choices that reduce pressure on marine ecosystems.",
      ar: "جعل محو الأمية المحيطية أكثر سهولة في جميع أنحاء المجتمع السعودي، وترجمة الوعي المتزايد إلى خيارات يومية مسؤولة تقلل من الضغط على النظم البيئية البحرية.",
    },
    activities: [
      {
        en: "Public awareness campaigns across social, digital and community channels",
        ar: "حملات توعية عامة عبر القنوات الاجتماعية والرقمية والمجتمعية",
      },
      {
        en: "Educational exhibitions and public events focused on marine themes",
        ar: "معارض تثقيفية وفعاليات عامة تركز على المواضيع البحرية",
      },
      {
        en: "Partnerships with media, influencers and community figures to amplify conservation messages",
        ar: "شراكات مع وسائل الإعلام والمؤثرين وشخصيات المجتمع لتعزيز رسائل الحفظ",
      },
      {
        en: "Publications and digital resources explaining key marine challenges and solutions",
        ar: "منشورات وموارد رقمية تشرح التحديات والحلول البحرية الرئيسية",
      },
      {
        en: "School and university outreach programs with age-appropriate learning materials",
        ar: "برامج توعية للمدارس والجامعات بمواد تعليمية مناسبة لكل فئة عمرية",
      },
    ],
    relatedAreaSlug: "awareness-and-education",
    relatedAreaLabel: {
      en: "Awareness and Education",
      ar: "التوعية والتثقيف",
    },
    desiredImpact: {
      en: "Increased public knowledge of the value of Saudi marine environments, more widespread adoption of ocean-friendly behaviors, and stronger societal support for marine conservation policies and initiatives.",
      ar: "زيادة المعرفة العامة بقيمة البيئات البحرية السعودية، وتبني سلوكات موالية للمحيط على نطاق أوسع، وتعزيز الدعم المجتمعي للسياسات والمبادرات المتعلقة بالحفظ البحري.",
    },
    imagePrompt:
      "Environmental awareness public exhibition in Saudi Arabia, families learning about marine ecosystems through interactive displays, realistic documentary event photography, natural indoor lighting",
    localImage: "/marine-sustainability.jpg",
    localVideo: "/work-education.mp4",
    imageAlt: {
      en: "Families engaging with interactive educational displays about marine ecosystems at a public environmental awareness exhibition in Saudi Arabia",
      ar: "عائلات تتفاعل مع عرض تثقيفي تفاعلي حول النظم البيئية البحرية في معرض توعية بيئية عام في المملكة العربية السعودية",
    },
  },
  {
    id: "init-05",
    slug: "green-mangrove-initiative",
    title: {
      en: "Green Mangrove Initiative",
      ar: "مبادرة المنغروف الأخضر",
    },
    overview: {
      en: "A large-scale ecological restoration initiative focused on planting and rehabilitating mangrove forests along Saudi coastlines to restore habitat, sequester carbon and protect shorelines.",
      ar: "مبادرة استعادة بيئية واسعة النطاق تركز على زراعة وإعادة تأهيل غابات المنغروف على طول سواحل المملكة لاستعادة الموائل واختزان الكربون وحماية الخط الساحلي.",
    },
    purpose: {
      en: "To restore and expand mangrove ecosystems for the benefit of biodiversity, climate resilience, fisheries productivity and coastal communities across the Kingdom.",
      ar: "استعادة وتوسيع النظم البيئية للمنغروف لصالح التنوع البيولوجي والمرونة المناخية وإنتاجية المصايد والمجتمعات الساحلية في جميع أنحاء المملكة.",
    },
    activities: [
      {
        en: "Scientific site assessment and ecological restoration planning",
        ar: "تقييم علمي للمواقع وتخطيط للاستعادة البيئية",
      },
      {
        en: "Community and volunteer mangrove planting days across multiple coastal sites",
        ar: "أيام مجتمعية وتطوعية لزراعة المنغروف في مواقع ساحلية متعددة",
      },
      {
        en: "Long-term monitoring of mangrove growth, survival rates and ecosystem recovery",
        ar: "رصد طويل المدى لنمو المنغروف ومعدلات بقائه واستعادة النظم البيئية",
      },
      {
        en: "Workshops for local communities on the ecological and economic value of mangroves",
        ar: "ورش عمل للمجتمعات المحلية حول القيمة البيئية والاقتصادية للمنغروف",
      },
      {
        en: "Partnerships with research institutions to improve restoration techniques",
        ar: "شراكات مع المؤسسات البحثية لتحسين تقنيات الاستعادة",
      },
    ],
    relatedAreaSlug: "restoration-of-habitats",
    relatedAreaLabel: {
      en: "Restoration of Marine and Coastal Habitats",
      ar: "استعادة الموائل البحرية والساحلية",
    },
    desiredImpact: {
      en: "Expanded mangrove coverage, enhanced coastal resilience against erosion and storms, improved fisheries habitat, measurable carbon-sequestration co-benefits, and empowered local communities involved in restoration stewardship.",
      ar: "توسيع غطاء المنغروف، وتعزيز المرونة الساحلية ضد التعرية والعواصف، وتحسين موائل المصايد، ومنافع مشتركة ملموسة لاختزان الكربون، وتمكين المجتمعات المحلية المشاركة في إشراف الاستعادة.",
    },
    imagePrompt:
      "Mangrove planting volunteer initiative along Saudi coastline, workers planting mangrove saplings in shallow tidal mudflats, realistic documentary restoration photography, natural coastal environment",
    localImage: "/work-habitat-restoration.jpg",
    localVideo: "/initiatives-mangroves.mp4",
    imageAlt: {
      en: "Volunteers planting mangrove saplings in shallow tidal mudflats along the Saudi coastline during a restoration initiative",
      ar: "متطوعون يزرعون شتلات المنغروف في السهول الطينية المد الضحلة على طول الساحل السعودي خلال مبادرة استعادة",
    },
  },
  {
    id: "init-06",
    slug: "environmental-partnerships",
    title: {
      en: "Environmental Partnerships",
      ar: "الشراكات البيئية",
    },
    overview: {
      en: "An initiative designed to build strategic, principled and action-oriented partnerships between the association and government, research, private and civil-society stakeholders.",
      ar: "مبادرة مصممة لبناء شراكات استراتيجية قائمة على المبادئ ومنخرطة في العمل بين الجمعية وأصحاب المصلحة الحكوميين والبحثيين والخاصين وأصحاب المصلحة في المجتمع المدني.",
    },
    purpose: {
      en: "To multiply conservation impact by aligning capabilities, resources and expertise across sectors toward shared marine sustainability outcomes across Saudi Arabia.",
      ar: "مضاعفة أثر الحفظ من خلال مواءمة القدرات والموارد والخبرات عبر القطاعات نحو نتائج مشتركة للاستدامة البحرية في جميع أنحاء المملكة العربية السعودية.",
    },
    activities: [
      {
        en: "Structured engagement with government and environmental institutions on shared priorities",
        ar: "تفاعل منظم مع المؤسسات الحكومية والبيئية حول الأولويات المشتركة",
      },
      {
        en: "Collaborative research agreements with universities and specialized research centers",
        ar: "اتفاقات بحث تعاونية مع الجامعات ومراكز البحث المتخصصة",
      },
      {
        en: "Corporate social responsibility partnerships with private-sector organizations",
        ar: "شراكات المسؤولية الاجتماعية للشركات مع منظمات القطاع الخاص",
      },
      {
        en: "Joint programming with civil-society and community-based organizations",
        ar: "برمجة مشتركة مع منظمات المجتمع المدني والمنظمات المجتمعية",
      },
      {
        en: "Regular multi-stakeholder dialogue and coordination forums",
        ar: "حوارات ومنتديات تنسيقية منتظمة بين أصحاب المصلحة المتعددين",
      },
    ],
    relatedAreaSlug: "blue-economy-and-ecotourism",
    relatedAreaLabel: {
      en: "Blue Economy and Ecotourism",
      ar: "الاقتصاد الأزرق والسياحة البيئية",
    },
    desiredImpact: {
      en: "A strong and trusted network of aligned partners, jointly delivered conservation programs at scale, improved capacity for marine action across sectors, and durable contributions to national sustainable development goals.",
      ar: "شبكة قوية وموثوقة من الشركاء المنسجمين، وبرامج حفظ يتم تنفيذها مشتركاً على نطاق واسع، وتحسين القدرة على العمل البحري عبر القطاعات، ومساهمات دائمة في أهداف التنمية المستدامة الوطنية.",
    },
    imagePrompt:
      "Professional meeting of environmental partners in modern Saudi conference room with coastal view, diverse men and women discussing marine sustainability strategy, realistic documentary business photography",
    localImage: "/about-mangrove-coast.jpg",
    localVideo: "/partners-collaboration.mp4",
    imageAlt: {
      en: "Diverse group of professional environmental partners in a modern Saudi conference room with coastal view, discussing marine sustainability strategy around a meeting table",
      ar: "مجموعة متنوعة من الشركاء البيئيين المحترفين في غرفة مؤتمرات سعودية حديثة تطل على الساحل، ويناقشون استراتيجية الاستدامة البحرية حول طاولة اجتماع",
    },
  },
];
