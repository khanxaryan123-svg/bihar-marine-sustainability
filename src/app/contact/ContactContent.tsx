"use client";

import CTAButton from "@/components/shared/CTAButton";
import WaveDivider from "@/components/shared/WaveDivider";
import { Icon } from "@/components/shared/icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/resolvers";

export default function ContactContent() {
  const { locale } = useLanguage();

  return (
    <div id="main-contact">
      <section className="relative w-full overflow-hidden bg-ocean-900">
        <div className="relative min-h-[50vh] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/work-volunteering-beach.jpg"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/get-involved-coast.mp4" type="video/mp4" />
          </video>
          <img
            src="/work-volunteering-beach.jpg"
            alt="Volunteers collaborating on coastal marine conservation"
            className="absolute inset-0 h-full w-full object-cover -z-0"
            aria-hidden="true"
          />
          <div className="gradient-ocean-overlay absolute inset-0" />
          <div className="relative z-10 flex min-h-[50vh] items-center">
            <div className="container-x py-20 md:py-24 lg:py-28">
              <div className="max-w-4xl">
                <span className="eyebrow-light mb-5 md:mb-6">
                  {t("contact.heroEyebrow", locale)}
                </span>
                <h1 className="heading-xl text-balance text-white">
                  {t("contact.heroTitle", locale)}
                </h1>
                <p className="body-lg mt-6 max-w-3xl text-ocean-100/85">
                  {t("contact.heroBody", locale)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider variant="bottom" waveColor="white" className="absolute bottom-0 z-20" />
      </section>

      {/* Remaining contact content (form and info) */}
      <section className="bg-white section-y">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <span className="eyebrow">{t("contact.infoHeading", locale)}</span>
                <h2 className="heading-md text-ocean-900">{t("contact.infoHeading", locale)}</h2>
                <p className="body-base text-ocean-800/70 max-w-md">{t("contact.infoBody", locale)}</p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4 card-elevated p-5 md:p-6">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                    <Icon name="globe" size={22} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-500">{t("contact.basedInTitle", locale)}</span>
                    <span className="text-sm font-semibold text-ocean-900">{t("contact.basedInTitle", locale)}</span>
                    <p className="text-sm text-ocean-800/65 leading-relaxed">{t("contact.basedInDesc", locale)}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 card-elevated p-5 md:p-6">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                    <Icon name="users" size={22} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-500">{t("buttons.partnerWithUs", locale)}</span>
                    <span className="text-sm font-semibold text-ocean-900">{t("contact.partnerTitle", locale)}</span>
                    <p className="text-sm text-ocean-800/65 leading-relaxed">{t("contact.partnerDesc", locale)}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 card-elevated p-5 md:p-6">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                    <Icon name="flag" size={22} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-500">{t("contact.programTitle", locale)}</span>
                    <span className="text-sm font-semibold text-ocean-900">{t("contact.programTitle", locale)}</span>
                    <p className="text-sm text-ocean-800/65 leading-relaxed">{t("contact.programDesc", locale)}</p>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-5 md:p-6 bg-gradient-to-br from-ocean-50 to-white">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ocean-500 text-white">
                    <Icon name="info" size={22} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-ocean-900">{t("contact.responseTitle", locale)}</span>
                    <p className="text-sm text-ocean-800/70 leading-relaxed">{t("contact.responseDesc", locale)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="card-elevated p-7 md:p-9 lg:p-10">
                <div className="flex flex-col gap-4 mb-7 md:mb-8">
                  <span className="eyebrow">{t("contact.formEyebrow", locale)}</span>
                  <h2 className="heading-sm md:heading-md text-ocean-900">{t("contact.formHeading", locale)}</h2>
                  <p className="body-base text-ocean-800/70">{t("contact.formSubtitle", locale)}</p>
                </div>

                <form className="flex flex-col gap-5 md:gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-semibold text-ocean-900">{t("field.name", locale)}</label>
                      <input id="name" name="name" type="text" placeholder={t("placeholder.name", locale)} className="h-11 w-full rounded-xl border border-ocean-100 bg-white px-4 text-sm text-ocean-900 placeholder:text-ocean-800/40 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 transition-colors" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-semibold text-ocean-900">{t("field.email", locale)}</label>
                      <input id="email" name="email" type="email" placeholder={t("placeholder.email", locale)} className="h-11 w-full rounded-xl border border-ocean-100 bg-white px-4 text-sm text-ocean-900 placeholder:text-ocean-800/40 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-ocean-900">{t("field.phone", locale)}</label>
                      <input id="phone" name="phone" type="tel" placeholder={t("placeholder.phone", locale)} className="h-11 w-full rounded-xl border border-ocean-100 bg-white px-4 text-sm text-ocean-900 placeholder:text-ocean-800/40 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 transition-colors" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="organization" className="text-sm font-semibold text-ocean-900">{t("field.organization", locale)}</label>
                      <input id="organization" name="organization" type="text" placeholder={t("placeholder.organization", locale)} className="h-11 w-full rounded-xl border border-ocean-100 bg-white px-4 text-sm text-ocean-900 placeholder:text-ocean-800/40 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 transition-colors" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-ocean-900">{t("field.subject", locale)}</label>
                    <input id="subject" name="subject" type="text" placeholder={t("placeholder.subject", locale)} className="h-11 w-full rounded-xl border border-ocean-100 bg-white px-4 text-sm text-ocean-900 placeholder:text-ocean-800/40 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 transition-colors" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-ocean-900">{t("field.message", locale)}</label>
                    <textarea id="message" name="message" rows={6} placeholder={t("placeholder.message", locale)} className="min-h-[140px] w-full resize-y rounded-xl border border-ocean-100 bg-white px-4 py-3 text-sm text-ocean-900 placeholder:text-ocean-800/40 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 transition-colors" />
                  </div>

                  <div className="pt-2">
                    <CTAButton type="submit" variant="primary" size="lg">{t("buttons.sendMessage", locale)}</CTAButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-y bg-ocean-50">
        <div className="container-x relative z-10">
          <div className="card-elevated p-8 md:p-10 lg:p-14 bg-white bg-grid-wave">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-5 md:gap-6">
              <span className="eyebrow">{t("buttons.getInvolved", locale)}</span>
              <h2 className="heading-md md:heading-lg text-ocean-900 text-balance">{t("home.getinHeading", locale)}</h2>
              <p className="body-base md:body-lg text-ocean-800/70 max-w-2xl">{t("home.getinBody", locale)}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <CTAButton href="/partners" variant="primary" size="md">{t("buttons.explorePartnerships", locale)}</CTAButton>
                <CTAButton href="/" variant="secondary" size="md" iconRight="home">{t("buttons.backToHome", locale)}</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
