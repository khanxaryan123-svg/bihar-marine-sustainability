"use client";

import CTAButton from "@/components/shared/CTAButton";
import WaveDivider from "@/components/shared/WaveDivider";
import SectionHeader from "@/components/shared/SectionHeader";
import VisionMissionCard from "@/components/sections/VisionMissionCard";
import { Icon, type IconKey } from "@/components/shared/icons";
import {
  aboutText,
  visionMissionValues,
  whyMarineMatters,
  vision2030,
  aboutObjectives,
  aboutFutureDirection,
} from "@/data/visionMissionValues";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

const problemIcons: IconKey[] = ["tree", "shield", "fish", "leaf", "users"];
const objectiveIcons: IconKey[] = [
  "shield",
  "book",
  "users",
  "innovation",
  "briefcase",
  "globe",
];

export default function AboutContent() {
  const { locale } = useLanguage();

  const { locale } = useLanguage();

  return (
    <div id="main-about">
      <section className="relative w-full overflow-hidden bg-ocean-900">
        <div className="relative min-h-[70vh] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-reef-turtle.jpg"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/hero-underwater.mp4" type="video/mp4" />
          </video>
          <img
            src="/hero-reef-turtle.jpg"
            alt="Vibrant underwater coral reef ecosystem with sea turtle"
            className="absolute inset-0 h-full w-full object-cover -z-0"
            aria-hidden="true"
          />
          <div className="gradient-ocean-overlay absolute inset-0" />
          <div className="relative z-10 flex min-h-[70vh] items-center">
            <div className="container-x py-20 md:py-24">
              <div className="max-w-4xl">
                <span className="eyebrow-light mb-5 md:mb-6">
                    {t("about.heroEyebrow", locale)}
                  </span>
                  <h1 className="heading-xl text-balance text-white">
                    {t("about.heroTitle", locale)}
                  </h1>
                  <p className="body-lg mt-6 max-w-2xl text-ocean-100/85">
                    {t("about.heroBody", locale)}
                  </p>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider variant="bottom" waveColor="white" className="absolute bottom-0 z-20" />
      </section>

      <section className="w-full bg-white section-y">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="order-2 lg:order-1">
              <SectionHeader
                eyebrow={t("about.whoEyebrow", locale)}
                heading={t("about.whoHeading", locale)}
                className="mb-8"
              />
              <p className="body-lg mb-6">{aboutText[locale]}</p>
              <p className="body-base">
                Founded on the belief that healthy oceans are fundamental to
                life, livelihoods, and the long-term prosperity of the Kingdom,
                we bring together volunteers, researchers, partners and
                communities around a shared commitment to evidence-based marine
                conservation and responsible stewardship of coastal and marine
                spaces.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="img-zoom-wrap rounded-3xl shadow-[0_20px_60px_-24px_rgba(6,44,67,0.25)] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/about-mangrove-coast.jpg"
                  aria-hidden="true"
                  className="img-zoom-target aspect-[5/4] w-full rounded-3xl object-cover"
                >
                  <source src="/about-coastal.mp4" type="video/mp4" />
                </video>
                <img
                  src="/about-mangrove-coast.jpg"
                  alt="Mangrove coastal habitat along Saudi shoreline"
                  className="absolute inset-0 aspect-[5/4] w-full rounded-3xl object-cover -z-10"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-ocean-50 section-y">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow={t("about.vmEyebrow", locale)}
            heading={t("about.vmHeading", locale)}
            subtitle={t("about.vmSubtitle", locale)}
            className="mb-12 md:mb-16"
          />
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
            {visionMissionValues.map((item) => (
              <VisionMissionCard
                key={item.id}
                icon={item.iconKey}
                eyebrow={item.eyebrow[locale]}
                title={item.title[locale]}
                description={item.description[locale]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white section-y">
        <div className="container-x">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div>
              <SectionHeader
                eyebrow={t("about.problemEyebrow", locale)}
                heading={t("about.problemHeading", locale)}
                subtitle={whyMarineMatters.lead[locale]}
                className="mb-10"
              />
              <ul className="flex flex-col gap-6">
                {whyMarineMatters.problems.map((problem, index) => (
                  <li key={`prob-${index}`} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-700">
                      <Icon name={problemIcons[index]} size={22} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-lg font-bold leading-snug text-ocean-900">
                        {problem.title[locale]}
                      </h4>
                      <p className="text-[15px] leading-relaxed text-ocean-800/70">
                        {problem.description[locale]}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="img-zoom-wrap rounded-3xl shadow-[0_20px_60px_-24px_rgba(6,44,67,0.25)]">
                <img
                  src="/work-protection.jpg"
                  alt="Marine and coastal ecosystem with clear water and coral reef"
                  className="img-zoom-target aspect-[4/5] w-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-ocean-50 section-y">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow={t("about.objEyebrow", locale)}
            heading={t("about.objHeading", locale)}
            subtitle={t("about.objSubtitle", locale)}
            className="mb-12 md:mb-16"
          />
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aboutObjectives.map((objective, index) => (
              <div
                key={`obj-${index}`}
                className="group relative flex gap-4 p-6 rounded-2xl bg-white border border-ocean-50 hover:border-ocean-100 hover:shadow-[0_1px_2px_rgba(6,44,67,0.04),0_16px_36px_-18px_rgba(6,44,67,0.22)] transition-all duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-700 group-hover:bg-ocean-500 group-hover:text-white transition-colors duration-300">
                  <Icon name={objectiveIcons[index]} size={22} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-ocean-500 mb-2">
                    Objective {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-[15px] leading-relaxed text-ocean-800/80 font-medium">
                    {objective[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white section-y">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div>
              <div className="img-zoom-wrap rounded-3xl shadow-[0_20px_60px_-24px_rgba(6,44,67,0.25)] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/marine-sustainability.jpg"
                  aria-hidden="true"
                  className="img-zoom-target aspect-[16/10] w-full rounded-3xl object-cover"
                >
                  <source src="/vision-2030.mp4" type="video/mp4" />
                </video>
                <img
                  src="/marine-sustainability.jpg"
                  alt="Sustainable future coastal development and marine health"
                  className="absolute inset-0 aspect-[16/10] w-full rounded-3xl object-cover -z-10"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <SectionHeader
                eyebrow="LOOKING AHEAD"
                heading={aboutFutureDirection.title[locale]}
                className="mb-8"
              />
              <p className="body-lg leading-relaxed text-ocean-800/80">
                {aboutFutureDirection.paragraph[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ocean-50 section-y relative overflow-hidden">
        <div className="container-x relative z-10 flex flex-col gap-10 md:gap-14">
          <SectionHeader
            eyebrow={vision2030.eyebrow[locale]}
            heading="Vision 2030 Alignment"
            subtitle={vision2030.lead[locale]}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
            {vision2030.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="group relative flex flex-col gap-4 p-6 md:p-7 rounded-2xl bg-white border border-ocean-100 hover:border-ocean-500/30 hover:shadow-[0_1px_2px_rgba(6,44,67,0.04),0_16px_36px_-18px_rgba(6,44,67,0.22)] transition-all duration-500 ease-out"
              >
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700 overflow-hidden transition-all duration-300 group-hover:bg-ocean-500 group-hover:text-white">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ocean-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon name={pillar.iconKey} size={26} className="relative z-10" />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-base md:text-lg font-bold leading-snug text-ocean-900 group-hover:text-ocean-700 transition-colors">
                    {pillar.title[locale]}
                  </h3>
                  <p className="text-sm leading-relaxed text-ocean-800/70">
                    {pillar.description[locale]}
                  </p>
                </div>
                <div className="absolute left-6 right-6 top-0 h-0.5 bg-ocean-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-y">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/about-mangrove-coast.jpg"
            aria-hidden="true"
            className="h-full w-full object-cover"
          >
            <source src="/get-involved-coast.mp4" type="video/mp4" />
          </video>
          <img
            src="/about-mangrove-coast.jpg"
            alt="Saudi coastline and ocean mangrove habitat"
            className="absolute inset-0 h-full w-full object-cover -z-10"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/80 via-ocean-900/75 to-ocean-900/85" />
        </div>
        <div className="container-x relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6 md:gap-7">
            <span className="eyebrow-light">JOIN THE MOVEMENT</span>
            <h2 className="heading-lg text-white text-balance">
              Be Part of the Change
            </h2>
            <p className="body-lg text-ocean-100/85 max-w-2xl">
              Whether through volunteering your time, partnering with us, or
              supporting our mission, every action helps protect the marine
              environment we all depend on.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <CTAButton href="/contact" variant="primary" size="lg">
                Join as a Volunteer
              </CTAButton>
              <CTAButton href="/partners" variant="secondary" size="lg">
                Partner With Us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
