"use client";

import CTAButton from "@/components/shared/CTAButton";
import WaveDivider from "@/components/shared/WaveDivider";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

export default function HeroSection() {
  const { locale } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-ocean-900">
      <div className="relative min-h-[85vh] w-full">
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
          alt="Coral reef with sea turtle and healthy marine biodiversity"
          className="absolute inset-0 h-full w-full object-cover mix-blend-normal -z-0"
          aria-hidden="true"
        />
        <div className="gradient-ocean-overlay absolute inset-0" />
        <div className="relative z-10 flex min-h-[85vh] items-center">
          <div className="container-x py-20 md:py-24 lg:py-28">
            <div className="max-w-4xl">
              <span className="eyebrow-light mb-5 md:mb-6">
                {t("hero.eyebrow", locale)}
              </span>
              <h1 className="heading-xl text-balance text-white">
                {t("hero.headlineLine1", locale)}
                <br />
                {t("hero.headlineLine2", locale)}
                <br />
                {t("hero.headlineLine3", locale)}
              </h1>
              <p className="body-lg mt-6 max-w-2xl text-ocean-100/85">
                {t("hero.supportingText", locale)}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton
                  href="/our-work"
                  variant="primary"
                  size="lg"
                >
                  {t("buttons.exploreOurWork", locale)}
                </CTAButton>
                <CTAButton
                  href="/contact"
                  variant="outline-light"
                  size="lg"
                >
                  {t("buttons.getInvolved", locale)}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaveDivider variant="bottom" waveColor="white" className="absolute bottom-0 z-20" />
    </section>
  );
}
