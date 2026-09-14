"use client";

import CTAButton from "@/components/shared/CTAButton";
import WaveDivider from "@/components/shared/WaveDivider";
import { Icon } from "@/components/shared/icons";
import { impactAreas } from "@/data/impact";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ImpactContent() {
  const { locale } = useLanguage();

  return (
    <div id="main-impact">
      <section className="relative w-full overflow-hidden bg-ocean-900">
        <div className="relative min-h-[70vh] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/about-mangrove-coast.jpg"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/impact-coastal.mp4" type="video/mp4" />
          </video>
          <img
            src="/about-mangrove-coast.jpg"
            alt="Saudi Arabian coastal and marine ecosystem with mangrove forests"
            className="absolute inset-0 h-full w-full object-cover -z-0"
            aria-hidden="true"
          />
          <div className="gradient-ocean-overlay absolute inset-0" />
          <div className="relative z-10 flex min-h-[70vh] items-center">
            <div className="container-x py-20 md:py-24 lg:py-28">
              <div className="max-w-4xl">
                <span className="eyebrow-light mb-5 md:mb-6">
                  LASTING CHANGE • ECOSYSTEMS • COMMUNITIES
                </span>
                <h1 className="heading-xl text-balance text-white">
                  Our Impact
                </h1>
                <p className="body-lg mt-6 max-w-2xl text-ocean-100/85">
                  Creating lasting change for marine ecosystems and communities.
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

      <section className="bg-white section-y">
        <div className="container-x flex flex-col gap-16 md:gap-20 lg:gap-24">
          {impactAreas.map((area, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={area.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 xl:gap-16 items-center"
              >
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="relative overflow-hidden rounded-3xl img-zoom-wrap">
                    <div className="relative h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px] w-full">
                      {area.localVideo ? (
                        <>
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={area.localImage}
                            aria-hidden="true"
                            className="img-zoom-target absolute inset-0 h-full w-full object-cover"
                          >
                            <source src={area.localVideo} type="video/mp4" />
                          </video>
                          {area.localImage && (
                            <img
                              src={area.localImage}
                              alt={area.title[locale]}
                              className="absolute inset-0 h-full w-full object-cover -z-10"
                              aria-hidden="true"
                            />
                          )}
                        </>
                      ) : (
                        <img
                          src={area.localImage}
                          alt={area.title[locale]}
                          className="img-zoom-target absolute inset-0 h-full w-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex flex-col gap-6 md:gap-7">
                    <div className="relative inline-flex h-16 w-16 md:h-18 md:w-18 items-center justify-center rounded-2xl bg-ocean-100 text-ocean-500 overflow-hidden">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ocean-500/10 to-transparent" />
                      <Icon
                        name={area.iconKey}
                        size={30}
                        className="relative z-10"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="eyebrow">
                        {isEven ? "AREA OF IMPACT" : "OUTCOME AREA"}
                      </span>
                      <h2 className="heading-md md:heading-lg text-balance text-ocean-900">
                        {area.title[locale]}
                      </h2>
                    </div>

                    <p className="body-base md:text-lg text-ocean-800/80 leading-relaxed">
                      {area.shortDescription[locale]}
                    </p>

                    <p className="body-base text-ocean-800/70 leading-relaxed">
                      {area.description[locale]}
                    </p>

                    <div className="flex items-center gap-2 pt-2">
                      <div className="h-0.5 w-10 rounded-full bg-ocean-500" />
                      <span className="text-sm font-semibold text-ocean-600">
                        Part of our long-term commitment to marine health
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

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
            alt="Community by the sea at sunset along Saudi coastline"
            className="absolute inset-0 h-full w-full object-cover -z-10"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/80 via-ocean-900/75 to-ocean-900/85" />
        </div>
        <div className="container-x relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6 md:gap-7">
            <span className="eyebrow-light">TOGETHER FOR THE OCEAN</span>
            <h2 className="heading-lg text-white text-balance">
              Be Part of Our Next Chapter of Impact
            </h2>
            <p className="body-lg text-ocean-100/85 max-w-2xl">
              Every volunteer hour, every partnership, every conversation
              contributes to healthier marine ecosystems and stronger coastal
              communities. Join us in shaping the future of Saudi Arabia&rsquo;s
              seas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <CTAButton href="/contact" variant="primary" size="lg">
                Join Our Mission
              </CTAButton>
              <CTAButton
                href="/initiatives"
                variant="outline-light"
                size="lg"
              >
                Explore Initiatives
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
