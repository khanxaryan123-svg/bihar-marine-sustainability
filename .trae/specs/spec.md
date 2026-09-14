# Bihar Marine Sustainability Website - Product Requirements Document

## Overview
- **Summary**: A complete production-quality, responsive multi-page website for Bihar Marine Sustainability (Seas for Marine Environment Association), a Saudi Arabian non-profit environmental association focused on marine conservation, sustainable natural resources, and the blue economy.
- **Purpose**: Establish a professional, credible, and premium web presence that communicates the organization's mission to Saudi government entities, universities, research centers, corporate partners, CSR organizations, and the general public.
- **Target Users**: Saudi government entities, universities & research centers, corporate partners, CSR organizations, environmental NGOs, volunteers, coastal communities, and the general public in Saudi Arabia.

## Goals
- Deliver a premium, professional multi-page website using Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Implement 7 pages: Home, About, Our Work, Initiatives, Impact, Partners, Contact
- Build reusable component architecture with centralized data arrays
- Achieve responsive design across desktop, tablet, and mobile breakpoints
- Implement semantic HTML, accessibility (WCAG 2.1 AA), and SEO metadata
- Follow the approved visual direction using the specified color palette, typography, and photography treatment
- Ensure NO fabricated statistics, fake logos, contact details, or confirmed-partner claims

## Non-Goals
- Backend CMS or database integration
- E-commerce or donation payment processing
- User authentication, account system
- Server-side form handling beyond static page rendering
- Multi-language (Arabic) implementation (English only per brief)
- Custom CMS admin dashboard

## Background & Context
- Project is a new build on a greenfield project (empty working directory)
- Brand identity specifications include specific color palette: Deep ocean/navy (#063B52, #062C43), Marine blue (#087FA3), Turquoise (#18C7C8), Soft aqua (#DDF7F7), Light blue-gray (#F2F7F8), Natural green (#3E9B70), White (#FFFFFF)
- Typography requirements: Professional sans-serif, strong bold headings, clean body, uppercase eyebrow labels
- NO fabricated statistics, NO confirmed partner claims, NO fake government logos, NO fake contact details
- Use realistic professional documentary-style marine photography (via text_to_image URLs)

## Functional Requirements
- **FR-1**: Global sticky white header with logo, 7-item navigation, search icon, and mobile hamburger menu
- **FR-2**: Homepage with 12 ordered sections: Hero, About Us, Vision/Mission/Values, Why Marine Sustainability Matters, Our Areas of Work (7 cards), Featured Initiatives (6 cards), Our Impact, Blue Economy, Strategic Partnerships, Saudi Vision 2030, Get Involved CTA, Footer
- **FR-3**: About page with sections: Hero, Who We Are, Vision, Mission, Core Values, Problems We Address, Objectives, Future Direction, Saudi Vision 2030 Alignment, CTA
- **FR-4**: Our Work page with 7 detailed area-of-work sections with image + icon + title + description + Learn More
- **FR-5**: Initiatives page with 6 detailed initiative sections with hero image, overview, purpose, activities, related area, desired impact, CTA
- **FR-6**: Impact page with 8 impact area sections using visual storytelling (no fake numbers)
- **FR-7**: Partners page with partner categories and "potential partner" disclaimers
- **FR-8**: Contact page with 6-field form (Name, Email, Phone, Organization, Subject, Message) + Send Message button with placeholders only
- **FR-9**: Dark navy/deep teal footer with brand info, navigation, social icons (X, LinkedIn, YouTube), copyright, and subtle wave pattern
- **FR-10**: Reusable components: Header, Footer, HeroSection, SectionHeader, CTAButton, ImageCard, WorkCard, InitiativeCard, ImpactCard, PartnerCard, VisionMissionCard, WaveDivider, SocialLinks, MobileMenu
- **FR-11**: Centralized data arrays for Areas of Work, Initiatives, Impact items, Partners
- **FR-12**: Client-side routing between all 7 pages using Next.js App Router
- **FR-13**: Subtle interactions: card hover elevation, image zoom on hover, button hover, nav active state, smooth scrolling, mobile menu animation, section reveal animations
- **FR-14**: SEO: page titles, meta descriptions, Open Graph metadata, semantic headings, image alt text, clean URLs

## Non-Functional Requirements
- **NFR-1**: Responsive design optimized for 1440px, 1920px desktop, tablet, and mobile breakpoints
- **NFR-2**: Accessibility: semantic HTML, proper heading hierarchy, alt text, keyboard navigation, visible focus states, ARIA where appropriate, good color contrast, form labels
- **NFR-3**: Performance: optimized image loading, component-based architecture, no unnecessary renders
- **NFR-4**: Build quality: production-quality, maintainable, TypeScript type-safe, component-based with no duplicated markup
- **NFR-5**: Visual fidelity: visual language, layout, spacing, typography, card style, colors, composition closely follow approved reference direction
- **NFR-6**: Content integrity: only information from project brief; NO fabricated stats, numbers, contact details, logos, or confirmed partnerships

## Constraints
- **Technical**: Must use Next.js (App Router) + TypeScript + Tailwind CSS
- **Business**: Potential partners must be labeled "potential" (not confirmed); NO fake logos; NO fake government logos; NO fabricated statistics
- **Dependencies**: No reference image provided (use description as source of truth for visual direction)
- **Content**: All content strictly limited to information in the project brief

## Assumptions
- No reference image file is actually attached; use the detailed text description of the approved visual direction as source of truth
- Images will use the `coresg-normal.trae.ai` text_to_image URL pattern as specified in system image guidelines
- No backend form submission required; contact form is UI-only with placeholders
- English-only implementation (no Arabic RTL required)
- Node.js/npm available in the environment for project initialization

## Acceptance Criteria

### AC-1: Project Structure & Tech Stack
- **Type**: `rule`
- **Given**: A greenfield project directory
- **When**: Project is initialized
- **Then**: Directory contains a valid Next.js 14 App Router project with TypeScript, Tailwind CSS, and standard config files (package.json, tsconfig.json, tailwind.config.ts, next.config.mjs, postcss.config.mjs)
- **Pass Condition**: `npx next build` completes without TypeScript or build errors
- **Evidence**: Terminal output of build command

### AC-2: Header Component
- **Type**: `rule`
- **Given**: Any page is rendered at desktop width
- **When**: User scrolls down
- **Then**: Header remains sticky, has brand logo + "Bihar Marine Sustainability" + subtitle, 7 nav items (Home, About, Our Work, Initiatives, Impact, Partners, Contact), search icon; scroll shadow/border; mobile view has hamburger menu
- **Pass Condition**: Visual inspection of rendered header behavior across pages
- **Evidence**: Browser screenshot of header + mobile menu screenshot

### AC-3: Homepage 12 Sections
- **Type**: `rule`
- **Given**: The homepage route `/`
- **When**: User scrolls from top to bottom
- **Then**: All 12 sections appear in order: Hero, About Us, Vision/Mission/Values, Why Marine Sustainability Matters, Our Areas of Work (7 cards), Featured Initiatives (6 cards), Our Impact, Blue Economy, Strategic Partnerships, Saudi Vision 2030, Get Involved CTA, Footer
- **Pass Condition**: Visual inspection and DOM node count matches expected sections
- **Evidence**: Browser full-page screenshot or DOM query results

### AC-4: All 7 Pages Routable
- **Type**: `rule`
- **Given**: Running dev server
- **When**: Navigate to /, /about, /our-work, /initiatives, /impact, /partners, /contact
- **Then**: Each route renders its respective page with the expected sections specified in FR-2 through FR-8
- **Pass Condition**: Each route returns HTTP 200 and expected page content renders
- **Evidence**: Screenshots of each page header/hero section

### AC-5: Reusable Components & Data Arrays
- **Type**: `rule`
- **Given**: Source code in `src/` or `app/` directory
- **When**: Inspecting component files
- **Then**: All components listed in FR-10 exist as separate files; Areas of Work, Initiatives, Impact items, and Partners use centralized data arrays exported from dedicated files (not hardcoded inline in page components)
- **Pass Condition**: File listing shows all 14 component files; at least 4 data array files exist and are imported by pages
- **Evidence**: File tree listing + grep results showing imports

### AC-6: Color Palette Usage
- **Type**: `rule`
- **Given**: Rendered pages
- **When**: Inspecting computed styles
- **Then**: All specified palette colors appear: #063B52, #062C43, #087FA3, #18C7C8, #DDF7F7, #F2F7F8, #FFFFFF, #3E9B70. No unauthorized prominent colors outside the palette.
- **Pass Condition**: Computed CSS color values match the palette across all primary UI elements
- **Evidence**: CSS variable definitions in Tailwind config + sample computed styles

### AC-7: No Fabricated Content
- **Type**: `rule`
- **Given**: All rendered pages
- **When**: Searching DOM and source code
- **Then**: No fake phone numbers, email addresses, physical addresses, statistics, percentages, counts, awards, government logos, or confirmed-partner language. Partners explicitly labeled "Potential" or equivalent. Contact form uses generic placeholders.
- **Pass Condition**: Grep for digit patterns (phone, %) returns only brief-approved content; partner section uses "potential" wording
- **Evidence**: Grep command output with negative results for fabricated patterns

### AC-8: Accessibility Compliance
- **Type**: `rubric`
- **Dimension**: WCAG 2.1 AA conformance quality
- **Scale**: 1-5
- **Anchors**: 1 = No semantic HTML, missing alt text, broken heading hierarchy; 3 = Basic semantic HTML, alt text present, heading hierarchy mostly correct but missing focus states/ARIA; 5 = Fully semantic HTML, proper H1-H6 hierarchy per page, descriptive alt text on all images, visible focus states, keyboard-navigable, form labels linked correctly, ARIA on nav/mobile menu, color contrast AA for all text
- **Pass Threshold**: >= 4
- **Evidence**: axe-core or manual review results of rendered pages

### AC-9: Responsive Layout Quality
- **Type**: `rubric`
- **Dimension**: Responsive behavior across breakpoints
- **Scale**: 1-5
- **Anchors**: 1 = Layout breaks at tablet/mobile, horizontal scroll, text cut off; 3 = Desktop works well, tablet mostly works, mobile has minor wrapping issues; 5 = Optimized for 1440px/1920px desktop, clean tablet breakpoint layouts, professional mobile nav, cards stack cleanly, images maintain aspect ratio, spacing/typography hierarchy preserved at all widths
- **Pass Threshold**: >= 4
- **Evidence**: Screenshots at 1920px, 1440px, 768px, 375px widths

### AC-10: Visual Fidelity to Approved Direction
- **Type**: `rubric`
- **Dimension**: How closely the design matches the described approved reference
- **Scale**: 1-5
- **Anchors**: 1 = Generic template look, wrong colors, poor spacing, no visual hierarchy; 3 = Correct palette but uninspired, generic cards, uneven whitespace; 5 = Premium professional feel, generous whitespace, strong heading hierarchy, uppercase eyebrow labels, realistic marine photography treatment, cinematic hero, clean rounded cards with subtle shadows, wave dividers, hover elevations, Saudi-focused strategic institutional tone
- **Pass Threshold**: >= 4
- **Evidence**: Full-page desktop screenshots of all 7 pages

### AC-11: SEO Metadata
- **Type**: `rule`
- **Given**: Each page's rendered HTML `<head>`
- **When**: Inspecting `<title>`, `<meta name="description">`, Open Graph tags
- **Then**: Each page has a unique `<title>`, `<meta name="description">`, and at minimum `og:title`, `og:description`, `og:type` meta tags. Homepage uses specified title/suggested description.
- **Pass Condition**: All 7 pages have title + description + OG tags
- **Evidence**: HTML head inspection output for each route

### AC-12: Production Build Passes
- **Type**: `rule`
- **Given**: Project source code
- **When**: Running `next build` + `next lint`
- **Then**: Both commands exit with code 0, no TypeScript errors, no ESLint errors, all pages statically generated or server-rendered successfully
- **Pass Condition**: Exit code 0 for both commands
- **Evidence**: Terminal output of build and lint commands

### AC-13: Subtle Interaction Animations
- **Type**: `rule`
- **Given**: Rendered pages
- **When**: Hovering cards, images, buttons; scrolling; opening mobile menu
- **Then**: Cards have subtle elevation on hover, images have gentle zoom effect on hover, buttons have color/opacity transition, active nav item styled, smooth scroll behavior, mobile menu slides/animated, section reveal animations (fade-up) on scroll. No flashy effects.
- **Pass Condition**: CSS transitions/animations observed on all specified interaction targets
- **Evidence**: Animation CSS/class inspection + interaction screenshots/GIFs

## Open Questions
- [ ] Will a reference image file be provided, or should the text description serve as the sole visual source of truth? (Assumption: text description is sufficient per current inputs)
- [ ] Is Arabic/RTL support needed, or English-only is sufficient for v1? (Assumption: English-only per brief)
- [ ] Should the contact form require actual submission handler (API route) or UI-only with placeholders? (Assumption: UI-only per NFR constraints)
