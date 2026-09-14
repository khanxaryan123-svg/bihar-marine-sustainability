# Bihar Marine Sustainability Website - Implementation Plan

## Task 1: Initialize Next.js 14 + TypeScript + Tailwind Project
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Create a new Next.js 14 App Router project with TypeScript using `create-next-app`
  - Configure Tailwind CSS v3 with custom theme (color palette: #063B52, #062C43, #087FA3, #18C7C8, #DDF7F7, #F2F7F8, #FFFFFF, #3E9B70)
  - Configure global CSS with typography settings (sans-serif, heading weights, uppercase eyebrow text utilities)
  - Set up ESLint config, tsconfig strict mode, Next.js config with image domains for `coresg-normal.trae.ai`
  - Create base layout in app/layout.tsx with global SEO metadata
- **Acceptance Criteria Addressed**: AC-1, AC-6, AC-11
- **Test Requirements**:
  - `rule` TR-1.1: `npx next lint` exits 0 with no errors; evidence = terminal output
  - `rule` TR-1.2: `npx next build` exits 0 with no errors; evidence = terminal output
  - `rule` TR-1.3: tailwind.config.ts includes all 8 palette colors as named theme extensions; evidence = file read of tailwind.config
  - `rubric` TR-1.4: Project structure cleanliness; scale 1-5; anchors 1=messy files 3=standard structure 5=clean src/app, src/components, src/data separation; threshold >=4; evidence = directory listing
- **Notes**: Use `--ts --tailwind --eslint --app --no-src-dir false` flags; actually use src directory pattern for cleaner organization.

## Task 2: Create Centralized Data Arrays
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - Create src/data/areasOfWork.ts with 7 items: Marine Environment Protection, Restoration of Marine and Coastal Habitats, Environmental Volunteering, Awareness and Education, Research and Innovation, Sustainable Aquaculture, Blue Economy and Ecotourism. Each item includes { id, title, slug, description, imagePrompt, iconKey }.
  - Create src/data/initiatives.ts with 6 items: Our Beaches Our Responsibility, Sea Ambassadors, Marine Life Protection, Marine Environmental Awareness, Green Mangrove Initiative, Environmental Partnerships. Each item includes { id, title, slug, overview, purpose, activities, relatedArea, desiredImpact, imagePrompt }.
  - Create src/data/impact.ts with 8 items: Environmental Initiatives, Community Awareness, Volunteers, Coastal Rehabilitation, Mangroves & Green Cover, Research & Innovation, Partnerships & Collaboration, Sustainable Blue Economy. Each includes { id, title, description, iconKey, imagePrompt }.
  - Create src/data/partners.ts with 6 potential partners + 6 categories: Ministry of Environment Water and Agriculture, National Center for Wildlife Development, Saudi Red Sea Authority, Municipalities, Universities & Research Centers, Private Sector & CSR Organizations. Each item explicitly marked as "potential" partner.
  - Create src/data/navigation.ts with nav links and social links.
  - Create src/data/visionMissionValues.ts with Vision, Mission, Values text content.
- **Acceptance Criteria Addressed**: AC-5, AC-7
- **Test Requirements**:
  - `rule` TR-2.1: Count of items in each data array matches spec: 7 areas, 6 initiatives, 8 impact, 6 partners; evidence = grep count
  - `rule` TR-2.2: No numeric statistics/percentages/counts (except structural IDs) in data arrays; evidence = grep for digit patterns
  - `rule` TR-2.3: Partners data array includes "potential" wording/flag field; evidence = file read
  - `rubric` TR-2.4: Data structure consistency; scale 1-5; anchors 1=inconsistent fields 3=mostly consistent 5=strict type safety, all arrays use consistent field patterns, fully typed; threshold >=4; evidence = TS import check
- **Notes**: All files must be fully typed with TypeScript interfaces/types exported.

## Task 3: Build Reusable UI Base Components
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2
- **Description**:
  - Create src/components/shared/SectionHeader.tsx with eyebrow, heading, subtitle, optional right-side "View All" link
  - Create src/components/shared/CTAButton.tsx with variants: primary (turquoise filled), secondary (white/outlined), dark, sizes: sm/md/lg, optional right arrow icon
  - Create src/components/shared/ImageCard.tsx: base card with image + zoom-on-hover, content overlay, optional badge/eyebrow
  - Create src/components/shared/WaveDivider.tsx: organic wave-shaped SVG divider between sections (top wave and bottom wave variants)
  - Create src/components/shared/SocialLinks.tsx: X, LinkedIn, YouTube icon links with hover
  - Create src/components/shared/icons/ directory with simple line SVG React components: eye, target, leaf, search, menu, x (close), chevron-right, arrow-right, home, info, briefcase, flag, impact, users, mail, phone, globe, wave/logo mark
- **Acceptance Criteria Addressed**: AC-5, AC-13
- **Test Requirements**:
  - `rule` TR-3.1: All listed component files exist and export valid React components; evidence = ls directory listing + file read samples
  - `rule` TR-3.2: CTAButton has at least 2 variants (primary/secondary) rendered with correct palette colors; evidence = rendered snapshot/CSS classes
  - `rule` TR-3.3: ImageCard applies CSS transform scale(1.03) on image hover with transition; evidence = CSS class inspection
  - `rubric` TR-3.4: Component API design quality; scale 1-5; anchors 1=no props/duplication 3=basic props 5=clean props, sensible defaults, composition-ready, fully typed; threshold >=4; evidence = component source review

## Task 4: Build Header and Mobile Menu Components
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 3
- **Description**:
  - Create src/components/layout/Header.tsx: Sticky white header with shadow-on-scroll behavior using scroll listener
  - Left: Wave logo SVG icon + "Bihar Marine Sustainability" bold text + subtitle "Seas for Marine Environment Association" small text
  - Middle/Right: 7 nav links with hover/active state, search icon button
  - Create src/components/layout/MobileMenu.tsx: Hamburger trigger, slide-in overlay/side panel with nav links, animated open/close, close button
  - Integrate both into root app/layout.tsx with Next.js Link navigation
- **Acceptance Criteria Addressed**: AC-2, AC-5, AC-13
- **Test Requirements**:
  - `rule` TR-4.1: Header has CSS `position: sticky; top: 0;` and on-scroll applies shadow/border class after Y > 10 scroll; evidence = JS scroll handler code + CSS
  - `rule` TR-4.2: Desktop nav renders 7 links with correct labels matching spec; evidence = rendered HTML
  - `rule` TR-4.3: Mobile (<=768px) view shows hamburger instead of inline nav; clicking opens menu with links and close button; evidence = mobile screenshots
  - `rubric` TR-4.4: Header visual quality; scale 1-5; anchors 1=unpolished 3=functional 5=clean minimal professional, generous padding, proper logo lockup, subtle shadows; threshold >=4; evidence = desktop + mobile screenshots

## Task 5: Build Footer Component
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 3
- **Description**:
  - Create src/components/layout/Footer.tsx: Dark navy (#062C43 / #063B52) background
  - Left: Brand info (logo mark, "Bihar Marine Sustainability", "Seas for Marine Environment Association")
  - Middle: Navigation column (7 links)
  - Right: SocialLinks (X, LinkedIn, YouTube)
  - Bottom: Copyright "© 2025 Bihar Marine Sustainability. All rights reserved."
  - Add subtle ocean/wave SVG pattern background (low opacity)
- **Acceptance Criteria Addressed**: AC-5, AC-10
- **Test Requirements**:
  - `rule` TR-5.1: Footer bg color uses #062C43 or #063B52 palette color, text uses white/#DDF7F7; evidence = computed CSS
  - `rule` TR-5.2: All 7 nav links + 3 social icons + copyright text present; evidence = DOM inspection
  - `rule` TR-5.3: Subtle wave pattern exists as a background SVG/image with opacity <= 0.1; evidence = CSS inspection
  - `rubric` TR-5.4: Footer visual design; scale 1-5; anchors 1=cluttered 3=acceptable 5=premium, well-spaced columns, subtle pattern, good contrast, professional; threshold >=4; evidence = footer screenshot

## Task 6: Build Reusable Section Card Components
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 3
- **Description**:
  - Create src/components/sections/VisionMissionCard.tsx: Horizontal card with line icon, uppercase eyebrow label, title, body text. White bg, thin border, subtle shadow, aqua accent icon. Used 3 per row.
  - Create src/components/sections/WorkCard.tsx: Premium photographic card with line icon overlay, title, short description, chevron arrow link. Hover: elevation + image zoom. Used for Areas of Work (7 items) on homepage. Support "wide" variant for Blue Economy card (2-col span).
  - Create src/components/sections/InitiativeCard.tsx: Photographic card for initiatives. Image, icon, title, arrow link, hover interaction. Used on homepage (6 items) and initiatives page.
  - Create src/components/sections/ImpactCard.tsx: Impact section item with icon, title, descriptive text (no numbers). Visual storytelling focus.
  - Create src/components/sections/PartnerCard.tsx: Clean placeholder card for potential partners. Generic org icon/monogram, org name, "Potential Partner" label, NO fabricated logos.
- **Acceptance Criteria Addressed**: AC-5, AC-7, AC-10, AC-13
- **Test Requirements**:
  - `rule` TR-6.1: VisionMissionCard has border, shadow, aqua-colored icon; 3-per-row layout at desktop; evidence = screenshot + CSS
  - `rule` TR-6.2: WorkCard has transform elevation on hover (translateY -4px) + image scale effect; evidence = CSS classes
  - `rule` TR-6.3: PartnerCard explicitly displays "Potential Partner" label text; no image src references external logos; evidence = rendered text check
  - `rule` TR-6.4: ImpactCard contains NO digits/stats; only icons + text descriptions; evidence = content grep
  - `rubric` TR-6.5: Card collection design consistency; scale 1-5; anchors 1=inconsistent 3=functional 5=uniform rounded corners, consistent hover motion, professional photography treatment, unified spacing; threshold >=4; evidence = card grid screenshot

## Task 7: Build Homepage Sections (Hero + About + Vision/Mission + Why Matters)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 4, Task 5, Task 6
- **Description**:
  - Create src/components/home/HeroSection.tsx: Full-width underwater image. Eyebrow "HEALTHY OCEANS • THRIVING LIFE". H1: "Protecting Marine Life / Restoring Coastal Habitats / Building a Sustainable Future". Supporting text. Two CTA buttons (Explore Our Work primary, Get Involved secondary). Subtle dark text gradient overlay. Bottom WaveDivider transitioning to About.
  - Create src/components/home/AboutSection.tsx: White bg, 2-col split. Left: SectionHeader "About Us", paragraph content, "Learn More →" link. Right: Large rounded coastal/mangrove image.
  - Create src/components/home/VisionMissionSection.tsx: Soft aqua bg (#DDF7F7 / #F2F7F8). SectionHeader. Three VisionMissionCards (Vision / Mission / Values) in a grid.
  - Create src/components/home/WhyMarineMattersSection.tsx: SectionHeader "Why Marine Sustainability Matters". Split layout: left text with 5 key problems (bullets: Marine pollution, Degradation of habitats, Depletion of resources, Biodiversity loss, Lack of awareness), right marine/coastal photo.
  - Create app/page.tsx importing and composing all homepage sections.
- **Acceptance Criteria Addressed**: AC-3, AC-10, AC-8, AC-9
- **Test Requirements**:
  - `rule` TR-7.1: Homepage H1 text exactly matches spec: 3 lines "Protecting Marine Life / Restoring Coastal Habitats / Building a Sustainable Future"; evidence = rendered text
  - `rule` TR-7.2: About section right-side image uses rounded corners (rounded-2xl/3xl) and mangrove/coastal image prompt; evidence = screenshot
  - `rule` TR-7.3: Vision/Mission/Values cards render exactly 3 with correct icons (eye/target/leaf) and matching text content; evidence = rendered DOM
  - `rule` TR-7.4: Why Marine Matters lists all 5 problem bullets with NO statistics; evidence = rendered text
  - `rubric` TR-7.5: Hero cinematic quality; scale 1-5; anchors 1=flat 3=ok image 5=immersive photo, subtle gradient, proper text contrast, wave transition, premium typography; threshold >=4; evidence = hero screenshot

## Task 8: Build Homepage Remaining Sections (Work, Initiatives, Impact, Blue Economy, Partners, Vision2030, CTA)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 7
- **Description**:
  - Create src/components/home/AreasOfWorkSection.tsx: SectionHeader + View All link. Grid of 7 WorkCards. Blue Economy & Ecotourism card uses wide 2-column variant.
  - Create src/components/home/FeaturedInitiativesSection.tsx: Pale aqua bg. SectionHeader with subtitle + View All. Grid of 6 InitiativeCards.
  - Create src/components/home/ImpactSection.tsx: Large mangrove/coastal photo with teal overlay. Heading "Our Impact" + subtitle. 8 impact items as grid/cards.
  - Create src/components/home/BlueEconomySection.tsx: Aerial coastline bg, premium feature section style. Heading "Building a Sustainable Blue Economy". Body text. "Learn More →" link.
  - Create src/components/home/PartnersSection.tsx: SectionHeader "Our Potential Partners" + subtitle. Grid of 6 PartnerCards.
  - Create src/components/home/Vision2030Section.tsx: Clean white section. Heading "Supporting Saudi Vision 2030" + explanation paragraph. 5 visual pillars (Environmental Sustainability, Community Participation, Innovation, Partnerships, Blue Economy). Subtle "VISION 2030 رؤية 2030 KINGDOM OF SAUDI ARABIA" text styling.
  - Create src/components/home/GetInvolvedSection.tsx: Wide coastline image + subtle overlay. Heading "Get Involved". Text. Two CTA buttons (Join as a Volunteer primary, Partner With Us secondary).
  - Add all sections to app/page.tsx.
- **Acceptance Criteria Addressed**: AC-3, AC-7, AC-10
- **Test Requirements**:
  - `rule` TR-8.1: Areas of Work renders 7 cards total, Blue Economy card spans 2 columns at desktop (CSS grid-col-span-2 or w-full on a 2-col row); evidence = grid CSS + screenshot
  - `rule` TR-8.2: Impact section has 8 items rendered with descriptions and no numeric stats; evidence = DOM inspection
  - `rule` TR-8.3: Vision 2030 section includes all 5 pillars and text "VISION 2030" with no fabricated official logo; evidence = rendered text
  - `rule` TR-8.4: Get Involved CTA section has exactly 2 buttons with specified labels; evidence = DOM
  - `rule` TR-8.5: Partners section cards all display "Potential Partner" labeling; evidence = screenshot
  - `rubric` TR-8.6: Section transitions and visual rhythm quality; scale 1-5; anchors 1=jarring transitions 3=acceptable 5=smooth wave dividers/color transitions, generous whitespace, premium pacing; threshold >=4; evidence = full page screenshot

## Task 9: Build About Page
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 8
- **Description**:
  - Create app/about/page.tsx with root layout Header/Footer
  - Hero section: "About Us" heading on marine background image
  - Who We Are section: 2-col layout with image + description
  - Vision + Mission + Core Values section: three-card grid reusing VisionMissionCard
  - Problems We Address section: listed 5 problems with icons
  - Objectives section: clean text list
  - Future Direction section: strategic content block
  - Saudi Vision 2030 Alignment section: 5 pillars + explanation
  - Final CTA section (Get Involved style) at bottom
- **Acceptance Criteria Addressed**: AC-3, AC-10
- **Test Requirements**:
  - `rule` TR-9.1: Route /about renders all 9 section blocks (hero, who we are, vision, mission, core values, problems, objectives, future direction, Vision 2030, CTA); evidence = DOM section count
  - `rule` TR-9.2: Vision/Mission/Cards section reuses VisionMissionCard component from Task 6; evidence = source import statement
  - `rubric` TR-9.3: Page design cohesion with homepage; scale 1-5; anchors 1=styling mismatch 3=consistent enough 5=identical design system, same section spacing, identical card styles; threshold >=4; evidence = page screenshot comparison

## Task 10: Build Our Work Page
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 9
- **Description**:
  - Create app/our-work/page.tsx
  - Page hero: "Our Areas of Work" heading + intro "Seven key areas for a sustainable marine future."
  - Seven detailed sections (one per area of work), alternating left/right layout: each with Image, Icon, Title, Description, Learn More CTAButton
  - Use data from src/data/areasOfWork.ts
  - Final CTA at bottom
- **Acceptance Criteria Addressed**: AC-4, AC-5
- **Test Requirements**:
  - `rule` TR-10.1: Route /our-work renders 7 distinct area-of-work detail blocks with images + titles matching data array; evidence = DOM text check
  - `rule` TR-10.2: Each block includes a "Learn More" button/link; evidence = count
  - `rubric` TR-10.3: Layout alternation rhythm quality; scale 1-5; anchors 1=all stacked same layout 3=some alternation 5=alternating left/right, well-spaced, premium; threshold >=4; evidence = page screenshot

## Task 11: Build Initiatives Page
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 10
- **Description**:
  - Create app/initiatives/page.tsx
  - Page hero: "Our Initiatives" heading
  - Six detailed initiative sections, each containing: hero image banner, initiative title, Overview, Purpose, Activities, Related Area of Work, Desired Impact, CTA button
  - Use data from src/data/initiatives.ts
- **Acceptance Criteria Addressed**: AC-4, AC-7
- **Test Requirements**:
  - `rule` TR-11.1: Route /initiatives renders 6 initiative detail sections, each containing 6 labeled subsections (Overview, Purpose, Activities, Related Area of Work, Desired Impact, CTA); evidence = DOM heading counts
  - `rule` TR-11.2: No fabricated statistics in any initiative section; evidence = content grep
  - `rubric` TR-11.3: Initiative storytelling quality; scale 1-5; anchors 1=dry text walls 3=basic structure 5=rich photography per section, clear information hierarchy, engaging professional copy; threshold >=4; evidence = screenshot of sample initiative

## Task 12: Build Impact Page
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 11
- **Description**:
  - Create app/impact/page.tsx
  - Hero: "Our Impact" heading + intro "Creating lasting change for marine ecosystems and communities."
  - 8 impact area sections using visual storytelling: each section has contextual image, icon, title, descriptive text paragraphs explaining the impact focus
  - NO numbers, percentages, or stats anywhere
  - Final CTA
- **Acceptance Criteria Addressed**: AC-4, AC-7, AC-10
- **Test Requirements**:
  - `rule` TR-12.1: Route /impact renders 8 impact area blocks with images + matching titles from impact data array; evidence = DOM
  - `rule` TR-12.2: Grep for \d+ (digits) in impact page content returns only year/copyright matches; no impact stats; evidence = grep output
  - `rubric` TR-12.3: Visual storytelling effectiveness; scale 1-5; anchors 1=just text 3=text+images 5=immersive photo pairings, compelling captions, narrative flow; threshold >=4; evidence = page screenshot

## Task 13: Build Partners Page + Contact Page
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 12
- **Description**:
  - Create app/partners/page.tsx:
    - Hero: "Our Potential Partners" heading + explanation paragraph about strategic partnerships across sectors
    - 6 categories sections: Government & Environmental Institutions, Universities & Research Centers, Private Sector, CSR Organizations, Municipalities, Environmental Associations
    - Under each category, list potential organizations using PartnerCard component with clear "Potential Partner" labels
  - Create app/contact/page.tsx:
    - Hero: "Contact Us" heading + supporting text
    - Contact form with 6 fields: Name (input), Email (input type=email), Phone (input type=tel), Organization (input), Subject (input), Message (textarea)
    - "Send Message" CTAButton primary
    - All fields use generic HTML placeholders, NO fabricated contact info (address/phone/email display)
- **Acceptance Criteria Addressed**: AC-4, AC-7, AC-8
- **Test Requirements**:
  - `rule` TR-13.1: Partners page renders 6 category headings, each with partner cards explicitly labeled "Potential Partner"; evidence = DOM
  - `rule` TR-13.2: Contact form renders exactly 6 labeled form inputs (Name, Email, Phone, Organization, Subject, Message) + Submit button; each input has `<label>` associated via htmlFor/id; evidence = HTML inspection
  - `rule` TR-13.3: Contact page has NO displayed address, phone number, or email text anywhere in body; evidence = grep for common contact patterns
  - `rule` TR-13.4: All form inputs have proper `aria-label` or linked label; evidence = HTML inspection

## Task 14: Final Polish, SEO, Accessibility Pass
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 13
- **Description**:
  - Add per-page SEO metadata using Next.js generateMetadata in each route page.tsx: unique title, description, OG tags for all 7 pages
  - Homepage title: "Bihar Marine Sustainability | Seas for Marine Environment Association"; description matches spec
  - Add alt text to all images using descriptive strings
  - Implement section reveal animations (IntersectionObserver hook + fade-up CSS class)
  - Ensure smooth scroll CSS behavior globally
  - Audit all pages for heading hierarchy: exactly one `<h1>` per page, H2/H3 properly nested
  - Add focus-visible outlines to all interactive elements
  - Add aria-current="page" to active nav link
  - Ensure sufficient color contrast (white text on navy, dark text on white/aqua)
- **Acceptance Criteria Addressed**: AC-8, AC-11, AC-13
- **Test Requirements**:
  - `rule` TR-14.1: All 7 page routes have unique `<title>` + meta description in `<head>`; evidence = curl of HTML from each route
  - `rule` TR-14.2: Each page has exactly 1 H1; no skipped heading levels; evidence = grep for H1 count per page
  - `rule` TR-14.3: Nav link matching current route has aria-current="page" attribute; evidence = DOM inspection
  - `rule` TR-14.4: html or global CSS includes scroll-behavior: smooth; evidence = CSS
  - `rubric` TR-14.5: Section reveal animation subtlety; scale 1-5; anchors 1=too flashy or none 3=present 5=smooth fade-up on scroll, professional, not distracting; threshold >=4; evidence = animated interaction test
- **Notes**: Use a simple useInView hook + opacity/translate transition classes.

## Task 15: Build Verification & Issue Fixing
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 14
- **Description**:
  - Run `next lint` and fix any ESLint errors
  - Run `next build` and fix any TypeScript/build errors
  - Manually verify all routes render in dev server at desktop, tablet, mobile widths
  - Screenshot all 7 pages for evidence
  - Fix any regressions from previous tasks
  - Ensure Tailwind responsive classes used properly (sm:, md:, lg:, xl:, 2xl:)
- **Acceptance Criteria Addressed**: AC-1, AC-9, AC-10, AC-12
- **Test Requirements**:
  - `rule` TR-15.1: `next lint` exits 0; evidence = terminal output
  - `rule` TR-15.2: `next build` exits 0 with all pages generated; evidence = terminal output
  - `rule` TR-15.3: All 7 routes return 200 and render expected content; evidence = HTTP status checks
  - `rubric` TR-15.4: Mobile (<390px) layout quality; scale 1-5; anchors 1=broken overlap 3=usable 5=cards stack properly, nav hamburger works, typography scales, touch targets big enough; threshold >=4; evidence = mobile screenshots
  - `rubric` TR-15.5: Desktop (1440px) full homepage screenshot visual quality; scale 1-5; anchors 1=unprofessional 3=passable 5=premium institutional quality, suitable for Saudi government presentation; threshold >=4; evidence = full page 1440px screenshot
- **Notes**: This task gates the Review phase. Only mark completed when ALL previous rule-type TRs have passing evidence.
