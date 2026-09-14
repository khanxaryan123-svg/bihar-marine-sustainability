"use client";

import CTAButton from "@/components/shared/CTAButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

export default function GetInvolvedSection() {
  const { locale } = useLanguage();

  return (
    <section className="relative overflow-hidden section-y">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-reef-turtle.jpg"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/get-involved-coast.mp4" type="video/mp4" />
        </video>
        <img
          src="/hero-reef-turtle.jpg"
          alt="Saudi coastline and ocean — Red Sea shoreline inviting community participation"
          className="absolute inset-0 h-full w-full object-cover -z-10"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/80 via-ocean-900/75 to-ocean-900/85" />
      </div>
      <div className="container-x relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6 md:gap-7">
          <span className="eyebrow-light">{t("home.getinEyebrow", locale)}</span>
          <h2 className="heading-lg text-white text-balance">{t("home.getinHeading", locale)}</h2>
          <p className="body-lg text-ocean-100/85 max-w-2xl">
            {t("home.getinBody", locale)}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <CTAButton href="/contact" variant="primary" size="lg">
              {t("buttons.joinVolunteer", locale)}
            </CTAButton>
            <CTAButton href="/partners" variant="secondary" size="lg">
              {t("buttons.partnerWithUs", locale)}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
