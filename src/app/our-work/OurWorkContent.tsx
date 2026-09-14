"use client";

import CTAButton from "@/components/shared/CTAButton";
import WaveDivider from "@/components/shared/WaveDivider";
import SectionHeader from "@/components/shared/SectionHeader";
import { Icon } from "@/components/shared/icons";
import { areasOfWork } from "@/data/areasOfWork";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function OurWorkContent() {
  const { locale } = useLanguage();

  return (
    <div id="main-our-work">
      <section className="relative w-full overflow-hidden bg-ocean-900">
        <div className="relative min-h-[65vh] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/about-mangrove-coast.jpg"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/about-coastal.mp4" type="video/mp4" />
          </video>
          <img
            src="/about-mangrove-coast.jpg"
            alt="Diverse marine environments and conservation work along coastline"
            className="absolute inset-0 h-full w-full object-cover -z-0"
            aria-hidden="true"
          />
          <div className="gradient-ocean-overlay absolute inset-0" />
          <div className="relative z-10 flex min-h-[65vh] items-center">
            <div className="container-x py-20 md:py-24">
              <div className="max-w-4xl">
                <span className="eyebrow-light mb-5 md:mb-6">
                  SEVEN PILLARS • STRATEGIC ACTION
                </span>
                <h1 className="heading-xl text-balance text-white">
                  Our Areas of Work
                </h1>
                <p className="body-lg mt-6 max-w-2xl text-ocean-100/85">
                  Seven key areas for a sustainable marine future.
                </p>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider
          variant="bottom"
          waveColor="white"
          className="absolute bottom-0 z-20"
        />
      </section>

      <section className="bg-white">
        <div className="container-x flex flex-col gap-16 md:gap-20 lg:gap-24 py-16 md:py-20 lg:py-24">
          {areasOfWork.map((area, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={area.id}
                id={area.slug}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 xl:gap-16 items-center scroll-mt-24"
              >
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="relative overflow-hidden rounded-3xl img-zoom-wrap shadow-[0_20px_60px_-24px_rgba(6,44,67,0.25)]">
                    <div className="relative h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px] w-full">
                      <img
                        src={area.image}
                        alt={area.imageAlt[locale]}
                        className="img-zoom-target absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 via-transparent to-transparent" />
                      <div className="absolute top-6 left-6 z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-500/90 backdrop-blur text-white shadow-lg">
                        <Icon name={area.icon} size={26} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex flex-col gap-6 md:gap-7">
                    <div className="flex flex-col gap-3">
                      <span className="eyebrow">
                        AREA {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="heading-md md:heading-lg text-balance text-ocean-900">
                        {area.title[locale]}
                      </h2>
                    </div>

                    <div className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-ocean-50 border border-ocean-100">
                      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean-500/10 text-ocean-600">
                        <Icon name={area.icon} size={22} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-600">
                          Strategic Focus
                        </span>
                        <p className="text-[15px] md:text-base leading-relaxed text-ocean-800/80 font-medium">
                          {area.shortDescription[locale]}
                        </p>
                      </div>
                    </div>

                    <p className="body-base md:text-lg text-ocean-800/75 leading-relaxed">
                      {area.description[locale]}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <CTAButton
                        href={`/initiatives#${area.slug}`}
                        variant="primary"
                        size="md"
                      >
                        Explore Related Initiatives
                      </CTAButton>
                      <CTAButton
                        href="/contact"
                        variant="secondary"
                        size="md"
                      >
                        Get Involved
                      </CTAButton>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden section-y bg-ocean-50">
        <div className="container-x relative z-10">
          <div className="card-elevated p-8 md:p-10 lg:p-14 bg-white bg-grid-wave">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-5 md:gap-6">
              <SectionHeader
                eyebrow="NEXT STEPS"
                heading="See Our Programs in Action"
                subtitle="Every area of work is delivered through concrete initiatives that engage volunteers, partners and communities across the Kingdom."
                align="center"
                className="mb-0"
              />
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <CTAButton href="/initiatives" variant="primary" size="lg">
                  View All Initiatives
                </CTAButton>
                <CTAButton href="/impact" variant="secondary" size="lg">
                  Explore Our Impact
                </CTAButton>
              </div>
            </div>
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
            poster="/marine-sustainability.jpg"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/blue-economy-coastline.mp4" type="video/mp4" />
          </video>
          <img
            src="/marine-sustainability.jpg"
            alt="Saudi Red Sea coastline at golden hour with sustainable marine development"
            className="absolute inset-0 h-full w-full object-cover -z-10"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/80 via-ocean-900/75 to-ocean-900/85" />
        </div>
        <div className="container-x relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6 md:gap-7">
            <span className="eyebrow-light">JOIN OUR MISSION</span>
            <h2 className="heading-lg text-white text-balance">
              Support Marine Sustainability Across the Kingdom
            </h2>
            <p className="body-lg text-ocean-100/85 max-w-2xl">
              Whether through direct volunteer action, research collaboration,
              strategic partnership or program support — your contribution
              shapes healthier marine ecosystems and stronger coastal
              communities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <CTAButton href="/contact" variant="primary" size="lg">
                Contact Our Team
              </CTAButton>
              <CTAButton
                href="/partners"
                variant="outline-light"
                size="lg"
              >
                Become a Partner
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
