"use client";

import CTAButton from "@/components/shared/CTAButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

export default function BlueEconomySection() {
  const { locale } = useLanguage();

  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/marine-sustainability.jpg"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/blue-economy-coastline.mp4" type="video/mp4" />
        </video>
        <img
          src="/marine-sustainability.jpg"
          alt="Aerial Saudi coastline and sustainable blue economy — Red Sea coast"
          className="absolute inset-0 h-full w-full object-cover -z-10"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/85 via-ocean-900/70 to-ocean-900/90" />
      </div>
      <div className="container-x relative z-10">
        <div className="max-w-3xl flex flex-col gap-6 md:gap-7">
          <span className="eyebrow-light">{t("home.blueEyebrow", locale)}</span>
          <h2 className="heading-lg text-white text-balance">
            {t("home.blueHeading", locale)}
          </h2>
          <p className="body-lg text-ocean-100/85">
            {t("home.blueBody", locale)}
          </p>
          <div className="pt-2">
            <CTAButton href="/our-work#blue-economy-and-ecotourism" variant="outline-light" size="lg">
              {t("buttons.learnMore", locale)}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
