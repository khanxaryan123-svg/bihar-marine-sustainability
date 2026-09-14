import type { Locale } from "./types";

export type UIKey =
  | "nav.home"
  | "nav.about"
  | "nav.ourWork"
  | "nav.initiatives"
  | "nav.impact"
  | "nav.partners"
  | "nav.contact"
  | "nav.search"
  | "nav.menu"
  | "meta.tagline"
  | "footer.navigation"
  | "footer.connect"
  | "footer.basedIn"
  | "footer.reachOut"
  | "footer.privacy"
  | "footer.terms"
  | "footer.copyright"
  | "footer.poweredBy"
  | "footer.description"
  | "buttons.exploreOurWork"
  | "buttons.getInvolved"
  | "buttons.learnMore"
  | "buttons.viewAll"
  | "buttons.joinVolunteer"
  | "buttons.partnerWithUs"
  | "buttons.sendMessage"
  | "buttons.contactTeam"
  | "buttons.backToHome"
  | "buttons.exploreInitiatives"
  | "buttons.explorePartnerships"
  | "buttons.becomePartner"
  | "buttons.exploreImpact"
  | "buttons.viewAllInitiatives"
  | "buttons.joinMission"
  | "common.relatedArea"
  | "common.overview"
  | "common.purpose"
  | "common.activities"
  | "common.desiredImpact"
  | "common.strategicFocus"
  | "common.responseProcess"
  | "common.howToReachUs"
  | "common.sendMessage"
  | "common.nextSteps"
  | "common.seePrograms"
  | "common.takeAction"
  | "common.bePartOfChange"
  | "hero.eyebrow"
  | "hero.headlineLine1"
  | "hero.headlineLine2"
  | "hero.headlineLine3"
  | "hero.supportingText"
  | "home.aboutHeading"
  | "home.aboutEyebrow"
  | "home.aboutBody"
  | "home.vmEyebrow"
  | "home.vmHeading"
  | "home.vmSubtitle"
  | "home.whyHeading"
  | "home.whyEyebrow"
  | "home.whyLead"
  | "home.workHeading"
  | "home.workSubtitle"
  | "home.initiativesHeading"
  | "home.initiativesSubtitle"
  | "home.impactHeading"
  | "home.impactSubtitle"
  | "home.blueEyebrow"
  | "home.blueHeading"
  | "home.blueBody"
  | "home.partnersHeading"
  | "home.partnersSubtitle"
  | "home.v2030Heading"
  | "home.v2030Eyebrow"
  | "home.v2030Lead"
  | "home.getinEyebrow"
  | "home.getinHeading"
  | "home.getinBody"
  | "problem.01.title"
  | "problem.01.desc"
  | "problem.02.title"
  | "problem.02.desc"
  | "problem.03.title"
  | "problem.03.desc"
  | "problem.04.title"
  | "problem.04.desc"
  | "problem.05.title"
  | "problem.05.desc"
  | "about.heroEyebrow"
  | "about.heroTitle"
  | "about.heroBody"
  | "about.whoEyebrow"
  | "about.whoHeading"
  | "about.whoBodyExtra"
  | "about.vmEyebrow"
  | "about.vmHeading"
  | "about.vmSubtitle"
  | "about.problemEyebrow"
  | "about.problemHeading"
  | "about.objEyebrow"
  | "about.objHeading"
  | "about.objSubtitle"
  | "about.futureEyebrow"
  | "about.futureHeading"
  | "about.v2030Heading"
  | "about.ctaEyebrow"
  | "about.ctaHeading"
  | "about.ctaBody"
  | "work.heroEyebrow"
  | "work.heroTitle"
  | "work.heroBody"
  | "work.ctaEyebrow"
  | "work.ctaHeading"
  | "work.ctaSubtitle"
  | "work.closingEyebrow"
  | "work.closingHeading"
  | "work.closingBody"
  | "init.heroEyebrow"
  | "init.heroTitle"
  | "init.heroBody"
  | "impact.heroEyebrow"
  | "impact.heroTitle"
  | "impact.heroBody"
  | "impact.outcomeArea"
  | "impact.impactArea"
  | "impact.commitmentLine"
  | "impact.ctaEyebrow"
  | "impact.ctaHeading"
  | "impact.ctaBody"
  | "partners.heroEyebrow"
  | "partners.heroTitle"
  | "partners.heroBody"
  | "partners.ctaEyebrow"
  | "partners.ctaHeading"
  | "partners.ctaBody"
  | "contact.heroEyebrow"
  | "contact.heroTitle"
  | "contact.heroBody"
  | "contact.infoHeading"
  | "contact.infoBody"
  | "contact.formHeading"
  | "contact.formSubtitle"
  | "contact.formEyebrow"
  | "contact.ctaEyebrow"
  | "contact.ctaHeading"
  | "contact.ctaBody"
  | "contact.basedInTitle"
  | "contact.basedInDesc"
  | "contact.partnerTitle"
  | "contact.partnerDesc"
  | "contact.programTitle"
  | "contact.programDesc"
  | "contact.responseTitle"
  | "contact.responseDesc"
  | "field.name"
  | "field.email"
  | "field.phone"
  | "field.organization"
  | "field.subject"
  | "field.message"
  | "placeholder.name"
  | "placeholder.email"
  | "placeholder.phone"
  | "placeholder.organization"
  | "placeholder.subject"
  | "placeholder.message"
  | "objective.01"
  | "objective.02"
  | "objective.03"
  | "objective.04"
  | "objective.05"
  | "objective.06"
  | "future.title"
  | "future.body"
  | "brand.primary"
  | "brand.association"
  | "brand.kingdom";

export const translations: Record<Locale, Record<UIKey, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.ourWork": "Our Work",
    "nav.initiatives": "Initiatives",
    "nav.impact": "Impact",
    "nav.partners": "Partners",
    "nav.contact": "Contact",
    "nav.search": "Search",
    "nav.menu": "Open menu",
    "meta.tagline": "Toward a Sustainable Marine Environment and a Thriving Blue Economy",
    "footer.navigation": "Navigation",
    "footer.connect": "Connect",
    "footer.basedIn": "Based In",
    "footer.reachOut": "Reach out to our team →",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.copyright": "© 2025 Bihar Marine Sustainability. All rights reserved.",
    "footer.poweredBy": "Powered by",
    "footer.description":
      "A non-profit organization dedicated to protecting marine ecosystems, conserving natural resources, empowering coastal communities and supporting a sustainable blue economy across the Kingdom.",
    "buttons.exploreOurWork": "Explore Our Work",
    "buttons.getInvolved": "Get Involved",
    "buttons.learnMore": "Learn More →",
    "buttons.viewAll": "View All →",
    "buttons.joinVolunteer": "Join as a Volunteer",
    "buttons.partnerWithUs": "Partner With Us",
    "buttons.sendMessage": "Send Message",
    "buttons.contactTeam": "Contact Our Team",
    "buttons.backToHome": "Back to Home",
    "buttons.exploreInitiatives": "Explore Related Initiatives",
    "buttons.explorePartnerships": "Explore Partnerships",
    "buttons.becomePartner": "Become a Partner",
    "buttons.exploreImpact": "Explore Our Impact",
    "buttons.viewAllInitiatives": "View All Initiatives",
    "buttons.joinMission": "Join Our Mission",
    "common.relatedArea": "Related Area of Work",
    "common.overview": "Overview",
    "common.purpose": "Purpose",
    "common.activities": "Activities",
    "common.desiredImpact": "Desired Impact",
    "common.strategicFocus": "Strategic Focus",
    "common.responseProcess": "Response Process",
    "common.howToReachUs": "How to Reach Us",
    "common.sendMessage": "Send Us a Message",
    "common.nextSteps": "Next Steps",
    "common.seePrograms": "See Our Programs in Action",
    "common.takeAction": "Take Action",
    "common.bePartOfChange": "Be part of the change",
    "hero.eyebrow": "HEALTHY OCEANS • THRIVING LIFE",
    "hero.headlineLine1": "Protecting Marine Life",
    "hero.headlineLine2": "Restoring Coastal Habitats",
    "hero.headlineLine3": "Building a Sustainable Future",
    "hero.supportingText":
      "Together for a cleaner ocean, healthier ecosystems and stronger coastal communities.",
    "home.aboutEyebrow": "ABOUT US",
    "home.aboutHeading": "About Us",
    "home.aboutBody":
      "Bihar Marine Environment Association is a non-profit organization focused on protecting the marine environment, conserving natural resources, and raising community awareness about the importance of sustainable coastlines and marine resources.",
    "home.vmEyebrow": "OUR FOUNDATION",
    "home.vmHeading": "Vision, Mission & Values",
    "home.vmSubtitle":
      "Guided by a clear purpose and shared principles, we work every day to protect marine ecosystems, empower communities, and build a sustainable blue future for the Kingdom.",
    "home.whyEyebrow": "THE CHALLENGE",
    "home.whyHeading": "Why Marine Sustainability Matters",
    "home.whyLead":
      "Healthy oceans and coasts are essential to life, livelihoods and the long-term prosperity of the Kingdom. When marine systems degrade, the impact reaches far beyond the shoreline.",
    "home.workHeading": "Areas of Work",
    "home.workSubtitle": "Comprehensive efforts for a healthier ocean and coastal ecosystems.",
    "home.initiativesHeading": "Featured Initiatives",
    "home.initiativesSubtitle": "Programs that create real change.",
    "home.impactHeading": "Our Impact",
    "home.impactSubtitle":
      "Creating measurable and lasting change for marine ecosystems and communities.",
    "home.blueEyebrow": "STRATEGIC • BLUE ECONOMY",
    "home.blueHeading": "Building a Sustainable Blue Economy",
    "home.blueBody":
      "Supporting the sustainable use of marine resources, environmental innovation and responsible marine development.",
    "home.partnersHeading": "Our Potential Partners",
    "home.partnersSubtitle": "Building strategic partnerships for greater impact.",
    "home.v2030Eyebrow": "KINGDOM OF SAUDI ARABIA",
    "home.v2030Heading": "Supporting Saudi Vision 2030",
    "home.v2030Lead":
      "The mission of Bihar Marine Sustainability is aligned with the Kingdom's long-term commitment to sustainable development, environmental protection, community participation, innovation and a vibrant blue economy.",
    "home.getinEyebrow": "JOIN THE MOVEMENT",
    "home.getinHeading": "Get Involved",
    "home.getinBody":
      "Be a part of the change. Volunteer, partner or support our mission.",
    "problem.01.title": "Marine Pollution",
    "problem.01.desc":
      "Plastic debris, sewage, nutrient runoff and other contaminants degrade water quality, harm marine life and reduce the amenity value of coastal areas.",
    "problem.02.title": "Degradation of Marine and Coastal Habitats",
    "problem.02.desc":
      "Coastal development, unsustainable practices and other pressures damage coral reefs, mangroves, seagrass beds and other productive habitats.",
    "problem.03.title": "Depletion of Natural Resources",
    "problem.03.desc":
      "Unmanaged extraction and use of marine resources erodes the productive base that communities and economic sectors depend on.",
    "problem.04.title": "Biodiversity Loss",
    "problem.04.desc":
      "The loss of marine species and ecosystems diminishes the resilience of the sea and reduces its capacity to deliver benefits to people.",
    "problem.05.title": "Lack of Community Awareness",
    "problem.05.desc":
      "Without widespread public understanding of marine issues, it is harder to build the sustained participation needed to support long-term environmental change.",
    "about.heroEyebrow": "OUR STORY",
    "about.heroTitle": "About Us",
    "about.heroBody":
      "A non-profit organization dedicated to protecting the marine environment, conserving natural resources, and building a sustainable relationship between Saudi communities and the sea.",
    "about.whoEyebrow": "WHO WE ARE",
    "about.whoHeading": "Who We Are",
    "about.whoBodyExtra":
      "Founded on the belief that healthy oceans are fundamental to life, livelihoods, and the long-term prosperity of the Kingdom, we bring together volunteers, researchers, partners and communities around a shared commitment to evidence-based marine conservation and responsible stewardship of coastal and marine spaces.",
    "about.vmEyebrow": "OUR FOUNDATION",
    "about.vmHeading": "Vision, Mission & Values",
    "about.vmSubtitle":
      "Guided by a clear purpose and shared principles, we work every day to protect marine ecosystems, empower communities, and build a sustainable blue future for the Kingdom.",
    "about.problemEyebrow": "THE CHALLENGE",
    "about.problemHeading": "Problems We Address",
    "about.objEyebrow": "OUR COMMITMENT",
    "about.objHeading": "Objectives",
    "about.objSubtitle":
      "Concrete goals that guide every initiative, program and partnership we pursue across the Kingdom.",
    "about.futureEyebrow": "LOOKING AHEAD",
    "about.futureHeading": "Future Direction",
    "about.v2030Heading": "Vision 2030 Alignment",
    "about.ctaEyebrow": "JOIN THE MOVEMENT",
    "about.ctaHeading": "Be Part of the Change",
    "about.ctaBody":
      "Whether through volunteering your time, partnering with us, or supporting our mission, every action helps protect the marine environment we all depend on.",
    "work.heroEyebrow": "SEVEN PILLARS • STRATEGIC ACTION",
    "work.heroTitle": "Our Areas of Work",
    "work.heroBody": "Seven key areas for a sustainable marine future.",
    "work.ctaEyebrow": "NEXT STEPS",
    "work.ctaHeading": "See Our Programs in Action",
    "work.ctaSubtitle":
      "Every area of work is delivered through concrete initiatives that engage volunteers, partners and communities across the Kingdom.",
    "work.closingEyebrow": "JOIN OUR MISSION",
    "work.closingHeading": "Support Marine Sustainability Across the Kingdom",
    "work.closingBody":
      "Whether through direct volunteer action, research collaboration, strategic partnership or program support — your contribution shapes healthier marine ecosystems and stronger coastal communities.",
    "init.heroEyebrow": "ACTION • COMMUNITY • IMPACT",
    "init.heroTitle": "Our Initiatives",
    "init.heroBody":
      "Purpose-built programs designed to protect marine ecosystems, empower communities, and drive lasting environmental change across Saudi Arabia's coastlines and waters.",
    "impact.heroEyebrow": "LASTING CHANGE • ECOSYSTEMS • COMMUNITIES",
    "impact.heroTitle": "Our Impact",
    "impact.heroBody": "Creating lasting change for marine ecosystems and communities.",
    "impact.outcomeArea": "OUTCOME AREA",
    "impact.impactArea": "AREA OF IMPACT",
    "impact.commitmentLine": "Part of our long-term commitment to marine health",
    "impact.ctaEyebrow": "TOGETHER FOR THE OCEAN",
    "impact.ctaHeading": "Be Part of Our Next Chapter of Impact",
    "impact.ctaBody":
      "Every volunteer hour, every partnership, every conversation contributes to healthier marine ecosystems and stronger coastal communities. Join us in shaping the future of Saudi Arabia's seas.",
    "partners.heroEyebrow": "COLLABORATION • IMPACT • PARTNERSHIP",
    "partners.heroTitle": "Our Potential Partners",
    "partners.heroBody":
      "The association aims to build strategic partnerships across government, research, education, private sector and environmental organizations.",
    "partners.ctaEyebrow": "DRIVE CHANGE TOGETHER",
    "partners.ctaHeading": "Partner With Us",
    "partners.ctaBody":
      "Whether you represent a government body, research institution, private company, CSR platform, municipality or environmental association — we welcome conversations about shared goals, joint programs and long-term collaboration.",
    "contact.heroEyebrow": "GET IN TOUCH • LET'S CONNECT",
    "contact.heroTitle": "Contact Us",
    "contact.heroBody":
      "Get in touch with Bihar Marine Sustainability to explore volunteering, partnerships, collaboration and marine environmental initiatives.",
    "contact.infoHeading": "We Welcome Your Inquiry",
    "contact.infoBody":
      "Whether you are interested in volunteering, exploring a strategic partnership, discussing research collaboration, learning about our community programs, or asking a general question about our marine environmental work — please use the adjacent form to send us a message and our team will follow up.",
    "contact.formEyebrow": "SEND US A MESSAGE",
    "contact.formHeading": "Let's Start a Conversation",
    "contact.formSubtitle":
      "Fill in the form below and our team will get back to you about your inquiry.",
    "contact.ctaEyebrow": "EXPLORE MORE WAYS TO ENGAGE",
    "contact.ctaHeading": "Ready to Make a Difference for Our Oceans?",
    "contact.ctaBody":
      "Beyond reaching out directly, discover our current areas of work, learn about our mission and vision, or explore the strategic partnership categories we are building across the marine sustainability ecosystem.",
    "contact.basedInTitle": "Kingdom of Saudi Arabia",
    "contact.basedInDesc": "Focused on marine and coastal environments across the Kingdom.",
    "contact.partnerTitle": "Ready to Collaborate",
    "contact.partnerDesc":
      "Tell us about your goals or organization using the form and we will identify the best way to work together.",
    "contact.programTitle": "Initiatives Across Seven Focus Areas",
    "contact.programDesc":
      "Protection, restoration, volunteering, awareness, research, aquaculture and blue economy.",
    "contact.responseTitle": "Response Process",
    "contact.responseDesc":
      "Every submission is reviewed by our team. Responses for partnership, volunteering and collaboration inquiries are prioritized and handled directly by the relevant program lead.",
    "field.name": "Name",
    "field.email": "Email",
    "field.phone": "Phone",
    "field.organization": "Organization",
    "field.subject": "Subject",
    "field.message": "Message",
    "placeholder.name": "Enter your full name",
    "placeholder.email": "Enter your email address",
    "placeholder.phone": "Enter your phone number",
    "placeholder.organization": "Enter your organization name",
    "placeholder.subject": "What is this message about?",
    "placeholder.message": "Tell us more about your inquiry, interest or proposal...",
    "objective.01":
      "Protect, conserve and rehabilitate marine and coastal ecosystems across the Kingdom.",
    "objective.02":
      "Raise environmental awareness and build a stronger culture of marine responsibility in Saudi communities.",
    "objective.03":
      "Mobilize volunteers and enable direct, hands-on participation in marine conservation.",
    "objective.04":
      "Support and encourage applied research, innovation and evidence-based marine practices.",
    "objective.05":
      "Develop strategic partnerships with government, research, private and civil-society stakeholders.",
    "objective.06":
      "Contribute to a sustainable blue economy that balances prosperity, people and nature.",
    "future.title": "Future Direction",
    "future.body":
      "Looking ahead, Bihar Marine Sustainability will continue to deepen its impact by expanding evidence-based programs, strengthening partnerships across sectors, growing a diverse and skilled volunteer community, and supporting the long-term transition toward a more sustainable relationship between Saudi society and the sea. Our ambition is to be a trusted, effective and forward-looking contributor to the Kingdom's marine environment and to the communities that depend on it for generations to come.",
    "brand.primary": "Bihar Marine Sustainability",
    "brand.association": "Seas for Marine Environment Association",
    "brand.kingdom": "Kingdom of Saudi Arabia",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.ourWork": "مجالات عملنا",
    "nav.initiatives": "المبادرات",
    "nav.impact": "أثرنا",
    "nav.partners": "الشركاء",
    "nav.contact": "تواصل معنا",
    "nav.search": "بحث",
    "nav.menu": "فتح القائمة",
    "meta.tagline": "نحو بيئة بحرية مستدامة واقتصاد أزرق مزدهر",
    "footer.navigation": "الروابط",
    "footer.connect": "تواصل",
    "footer.basedIn": "مقرنا",
    "footer.reachOut": "تواصل مع فريقنا →",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الاستخدام",
    "footer.copyright": "© 2025 بحار للاستدامة البحرية. جميع الحقوق محفوظة.",
    "footer.poweredBy": "بإتقان",
    "footer.description":
      "منظمة غير ربحية مكرسة لحماية النظم البيئية البحرية، والحفاظ على الموارد الطبيعية، وتمكين المجتمعات الساحلية، ودعم اقتصاد أزرق مستدام في المملكة.",
    "buttons.exploreOurWork": "استكشف مجالات عملنا",
    "buttons.getInvolved": "انضم إلى مهمتنا",
    "buttons.learnMore": "اعرف المزيد ←",
    "buttons.viewAll": "عرض الكل ←",
    "buttons.joinVolunteer": "انضم كمتطوع",
    "buttons.partnerWithUs": "شارك معنا كشريك",
    "buttons.sendMessage": "إرسال الرسالة",
    "buttons.contactTeam": "تواصل مع فريقنا",
    "buttons.backToHome": "العودة إلى الرئيسية",
    "buttons.exploreInitiatives": "استكشف المبادرات المرتبطة",
    "buttons.explorePartnerships": "استكشف الشراكات",
    "buttons.becomePartner": "كن شريكاً لنا",
    "buttons.exploreImpact": "استكشف أثرنا",
    "buttons.viewAllInitiatives": "عرض جميع المبادرات",
    "buttons.joinMission": "انضم إلى مهمتنا",
    "common.relatedArea": "مجال العمل المرتبط",
    "common.overview": "نظرة عامة",
    "common.purpose": "الغاية",
    "common.activities": "الأنشطة",
    "common.desiredImpact": "الأثر المستهدف",
    "common.strategicFocus": "المحور الاستراتيجي",
    "common.responseProcess": "آلية الرد",
    "common.howToReachUs": "كيفية التواصل معنا",
    "common.sendMessage": "أرسل لنا رسالة",
    "common.nextSteps": "الخطوات التالية",
    "common.seePrograms": "شاهد برامجنا على أرض الواقع",
    "common.takeAction": "اتخذ إجراءً",
    "common.bePartOfChange": "كن جزءاً من التغيير",
    "hero.eyebrow": "محيطات صحية • حياة مزدهرة",
    "hero.headlineLine1": "حماية الكائنات البحرية",
    "hero.headlineLine2": "استعادة الموائل الساحلية",
    "hero.headlineLine3": "بناء مستقبل مستدام",
    "hero.supportingText":
      "معاً نحو محيط أنظف ونظم بيئية صحية ومجتمعات ساحلية أقوى.",
    "home.aboutEyebrow": "من نحن",
    "home.aboutHeading": "من نحن",
    "home.aboutBody":
      "جمعية بحار البيئة البحرية منظمة غير ربحية تركز على حماية البيئة البحرية، والحفاظ على الموارد الطبيعية، ورفع وعي المجتمع بأهمية السواحل والموارد البحرية المستدامة.",
    "home.vmEyebrow": "مؤسساتنا",
    "home.vmHeading": "الرؤية والرسالة والقيم",
    "home.vmSubtitle":
      "نسير يومياً تحت غاية واضحة ومبادئ مشتركة لحماية النظم البيئية البحرية، وتمكين المجتمعات، وبناء مستقبل أزرق مستدام للمملكة.",
    "home.whyEyebrow": "التحدي",
    "home.whyHeading": "لماذا الاستدامة البحرية مهمة",
    "home.whyLead":
      "المحيطات والسواحل السليمة أساسية للحياة وسبل العيش والرخاء طويل المدى للمملكة. وعندما تتدهور الأنظمة البحرية، يتجاوز الأثر خط الساحل بكثير.",
    "home.workHeading": "مجالات عملنا",
    "home.workSubtitle": "جهود شاملة من أجل محيط صحي ونظم بيئية ساحلية مستدامة.",
    "home.initiativesHeading": "مبادراتنا المختارة",
    "home.initiativesSubtitle": "برامج تُحدث تغييراً حقيقياً.",
    "home.impactHeading": "أثرنا",
    "home.impactSubtitle":
      "خلق تغيير ملموس ودائم للنظم البيئية البحرية والمجتمعات.",
    "home.blueEyebrow": "استراتيجي • الاقتصاد الأزرق",
    "home.blueHeading": "بناء اقتصاد أزرق مستدام",
    "home.blueBody":
      "دعم الاستخدام المستدام للموارد البحرية، والابتكار البيئي، والتنمية البحرية المسؤولة.",
    "home.partnersHeading": "شركاؤنا المحتملون",
    "home.partnersSubtitle": "بناء شراكات استراتيجية لأثر أكبر.",
    "home.v2030Eyebrow": "المملكة العربية السعودية",
    "home.v2030Heading": "دعم رؤية السعودية 2030",
    "home.v2030Lead":
      "رسالة جمعية بحار للاستدامة البحرية متوافقة مع التزام المملكة طويل المدى بالتنمية المستدامة، وحماية البيئة، ومشاركة المجتمع، والابتكار، والاقتصاد الأزرق النابض.",
    "home.getinEyebrow": "انضم إلى الحركة",
    "home.getinHeading": "انضم إلينا",
    "home.getinBody":
      "كن جزءاً من التغيير. تطوع، شارك كشريك، أو ادعم مهمتنا.",
    "problem.01.title": "التلوث البحري",
    "problem.01.desc":
      "الحطام البلاستيكي والمياه الصرفية والجريان المغذِّي وغيرها من الملوثات تُقلل من جودة المياه وتُضر بالكائنات البحرية وتُضعِف قيمة المناطق الساحلية.",
    "problem.02.title": "تدهور الموائل البحرية والساحلية",
    "problem.02.desc":
      "التنمية الساحلية والممارسات غير المستدامة وغيرها من الضغوط تتلف الشعاب المرجانية والمنغروف و床عشب البحير والموائل الإنتاجية الأخرى.",
    "problem.03.title": "استنزاف الموارد الطبيعية",
    "problem.03.desc":
      "الاستخراج والاستخدام غير المدار للموارد البحرية يُقوِّض القاعدة الإنتاجية التي تعتمد عليها المجتمعات والقطاعات الاقتصادية.",
    "problem.04.title": "فقدان التنوع البيولوجي",
    "problem.04.desc":
      "فقدان الأنواع والنظم البيئية البحرية يُقَلِّل من مرونة البحر وقدرته على تقديم المنافع للبشر.",
    "problem.05.title": "ضعف الوعي المجتمعي",
    "problem.05.desc":
      "بدون وعي عام واسع بالقضايا البحرية، يصبح بناء المشاركة المستدامة اللازمة لدعم التغيير البيئي الطويل الأمد أكثر صعوبة.",
    "about.heroEyebrow": "قصتنا",
    "about.heroTitle": "من نحن",
    "about.heroBody":
      "منظمة غير ربحية مكرسة لحماية البيئة البحرية والحفاظ على الموارد الطبيعية وبناء علاقة مستدامة بين المجتمعات السعودية والبحر.",
    "about.whoEyebrow": "من نحن",
    "about.whoHeading": "من نحن",
    "about.whoBodyExtra":
      "تأسسنا على إيمان بأن المحيطات السليمة أساسية للحياة وسبل العيش والرخاء طويل المدى للمملكة. نجمع بين المتطوعين والباحثين والشركاء والمجتمعات حول التزام مشترك بالحفظ البحري المستند إلى الأدلة والإشراف المسؤول على المساحات الساحلية والبحرية.",
    "about.vmEyebrow": "مؤسساتنا",
    "about.vmHeading": "الرؤية والرسالة والقيم",
    "about.vmSubtitle":
      "نسير يومياً تحت غاية واضحة ومبادئ مشتركة لحماية النظم البيئية البحرية، وتمكين المجتمعات، وبناء مستقبل أزرق مستدام للمملكة.",
    "about.problemEyebrow": "التحدي",
    "about.problemHeading": "القضايا التي نعالجها",
    "about.objEyebrow": "التزامنا",
    "about.objHeading": "الأهداف",
    "about.objSubtitle":
      "أهداف ملموسة توجه كل مبادرة وبرنامج وشراكة نبنيها عبر المملكة.",
    "about.futureEyebrow": "نظرة المستقبل",
    "about.futureHeading": "الاتجاه المستقبلي",
    "about.v2030Heading": "المتواءمة مع رؤية 2030",
    "about.ctaEyebrow": "انضم إلى الحركة",
    "about.ctaHeading": "كن جزءاً من التغيير",
    "about.ctaBody":
      "سواء من خلال التطوع بوقتك، أو الشراكة معنا، أو دعم مهمتنا، فإن كل إجراء يساهم في حماية البيئة البحرية التي نعتمد جميعاً عليها.",
    "work.heroEyebrow": "سبعة ركائز • عمل استراتيجي",
    "work.heroTitle": "مجالات عملنا",
    "work.heroBody": "سبعة محاور رئيسية من أجل مستقبل بحري مستدام.",
    "work.ctaEyebrow": "الخطوات التالية",
    "work.ctaHeading": "شاهد برامجنا على أرض الواقع",
    "work.ctaSubtitle":
      "كل مجال عمل يُنفّذ من خلال مبادرات ملموسة تضم المتطوعين والشركاء والمجتمعات عبر المملكة.",
    "work.closingEyebrow": "انضم إلى مهمتنا",
    "work.closingHeading": "ادعم الاستدامة البحرية عبر المملكة",
    "work.closingBody":
      "سواء من خلال العمل التطوعي المباشر أو التعاون البحثي أو الشراكة الاستراتيجية أو دعم البرامج، فإن مساهمتك تصوّر نظماً بيئية بحرية أوضح ومجتمعات ساحلية أقوى.",
    "init.heroEyebrow": "عمل • مجتمع • أثر",
    "init.heroTitle": "مبادراتنا",
    "init.heroBody":
      "برامج مصممة بهدف حماية النظم البيئية البحرية، وتمكين المجتمعات، ودفع تغيير بيئي دائم عبر سواحل ومياه المملكة العربية السعودية.",
    "impact.heroEyebrow": "تغيير دائم • نظم بيئية • مجتمعات",
    "impact.heroTitle": "أثرنا",
    "impact.heroBody": "خلق تغيير دائم للنظم البيئية البحرية والمجتمعات.",
    "impact.outcomeArea": "مجال النتائج",
    "impact.impactArea": "مجال الأثر",
    "impact.commitmentLine": "جزء من التزامنا طويل المدى بصحة البحر",
    "impact.ctaEyebrow": "معاً من أجل المحيط",
    "impact.ctaHeading": "كن جزءاً من الفصل القادم من أثرنا",
    "impact.ctaBody":
      "كل ساعة تطوع، وكل شراكة، وكل حوار، تساهم في نظم بيئية بحرية أوضح ومجتمعات ساحلية أقوى. انضم إلينا في صياغة مستقبل بحار المملكة العربية السعودية.",
    "partners.heroEyebrow": "تعاون • أثر • شراكة",
    "partners.heroTitle": "شركاؤنا المحتملون",
    "partners.heroBody":
      "تهدف الجمعية إلى بناء شراكات استراتيجية عبر القطاع الحكومي والبحثي والتعليمي والخاص ومنظمات البيئة.",
    "partners.ctaEyebrow": "حقق التغيير معاً",
    "partners.ctaHeading": "شارك معنا كشريك",
    "partners.ctaBody":
      "سواء كنت تمثل جهة حكومية أو مؤسسة بحثية أو شركة خاصة أو منصة مسؤولية اجتماعية للشركات أو بلدية أو رابطة بيئية، فإننا نرحب بالحوارات حول الأهداف المشتركة والبرامج المشتركة والتعاون الطويل الأمد.",
    "contact.heroEyebrow": "تواصل • لنبدأ الحوار",
    "contact.heroTitle": "تواصل معنا",
    "contact.heroBody":
      "تواصل مع جمعية بحار للاستدامة البحرية لاستكشاف فرص التطوع والشراكات والتعاون والمبادرات البيئية البحرية.",
    "contact.infoHeading": "نرحب باستفساراتك",
    "contact.infoBody":
      "سواء كنت مهتماً بالتطوع، أو استكشاف شراكة استراتيجية، أو مناقشة تعاون بحثي، أو التعرف على برامجنا المجتمعية، أو طرح سؤال عام حول عملنا البيئي البحري، يرجى استخدام النموذج المجاور لإرسال رسالة وسيتابعها فريقنا.",
    "contact.formEyebrow": "أرسل لنا رسالة",
    "contact.formHeading": "لنبدأ الحوار",
    "contact.formSubtitle":
      "املأ النموذج أدناه وسيعود فريقنا إليك بخصوص استفسارك.",
    "contact.ctaEyebrow": "اكتشف المزيد من سبل المشاركة",
    "contact.ctaHeading": "مستعد لإحداث فرق لمحيطاتنا؟",
    "contact.ctaBody":
      "بجانب التواصل المباشر، يمكنك اكتشاف مجالات عملنا الحالية، أو التعرف على مهمتنا ورؤيتنا، أو استكشاف فئات الشراكات الاستراتيجية التي نبنيها عبر نظام الاستدامة البحرية.",
    "contact.basedInTitle": "المملكة العربية السعودية",
    "contact.basedInDesc": "نركز على البيئات البحرية والساحلية عبر المملكة.",
    "contact.partnerTitle": "جاهزون للتعاون",
    "contact.partnerDesc":
      "أخبرنا عن أهدافك أو منظمتك عبر النموذج وسنحدد أفضل طريقة للعمل معاً.",
    "contact.programTitle": "مبادرات عبر سبعة محاور رئيسية",
    "contact.programDesc":
      "الحماية، الاستعادة، التطوع، التوعية، البحث، الاستزراع المستدام، والاقتصاد الأزرق.",
    "contact.responseTitle": "آلية الرد",
    "contact.responseDesc":
      "يراجع فريقنا كل طلب. تعطى الأولوية للرد على استفسارات الشراكة والتطوع والتعاون ويتولّاها المسؤول البرنامجي المعني مباشرة.",
    "field.name": "الاسم",
    "field.email": "البريد الإلكتروني",
    "field.phone": "رقم الهاتف",
    "field.organization": "الجهة / المؤسسة",
    "field.subject": "الموضوع",
    "field.message": "الرسالة",
    "placeholder.name": "أدخل اسمك الكامل",
    "placeholder.email": "أدخل بريدك الإلكتروني",
    "placeholder.phone": "أدخل رقم هاتفك",
    "placeholder.organization": "أدخل اسم مؤسستك",
    "placeholder.subject": "ما موضوع هذه الرسالة؟",
    "placeholder.message": "أخبرنا المزيد عن استفسارك أو اهتمامك أو مقترحك...",
    "objective.01":
      "حماية النظم البيئية البحرية والساحلية وحفظها واستعادتها عبر المملكة.",
    "objective.02":
      "رفع الوعي البيئي وبناء ثقافة أقوى للمسؤولية البحرية في المجتمعات السعودية.",
    "objective.03":
      "حشد المتطوعين وتمكين المشاركة المباشرة والتطبيقية في الحفظ البحري.",
    "objective.04":
      "دعم وتشجيع البحث التطبيقي والابتكار والممارسات البحرية المستندة إلى الأدلة.",
    "objective.05":
      "بناء شراكات استراتيجية مع الجهات الحكومية والبحثية والخاصة وأصحاب المصلحة في المجتمع المدني.",
    "objective.06":
      "المساهمة في اقتصاد أزرق مستدام يوازن بين الرخاء والشعب والطبيعة.",
    "future.title": "الاتجاه المستقبلي",
    "future.body":
      "وبالنظر إلى المستقبل، ستستمر جمعية بحار للاستدامة البحرية في تعميق أثرها من خلال توسيع البرامج المستندة إلى الأدلة، وتعزيز الشراكات عبر القطاعات، وتنمية مجتمع متطوع متنوع وماهر، ودعم التحول طويل المدى نحو علاقة أكثر استدامة بين المجتمع السعودي والبحر. طموحنا أن نكون مساهماً موثوقاً وفعالاً وتطلعياً في البيئة البحرية للمملكة وفي المجتمعات التي تعتمد عليها لأجيال قادمة.",
    "brand.primary": "بحار للاستدامة البحرية",
    "brand.association": "جمعية بحار للبيئة البحرية",
    "brand.kingdom": "المملكة العربية السعودية",
  },
};
