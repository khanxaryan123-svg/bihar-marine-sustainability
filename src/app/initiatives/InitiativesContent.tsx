"use client";

import CTAButton from "@/components/shared/CTAButton";
import WaveDivider from "@/components/shared/WaveDivider";
import { Icon } from "@/components/shared/icons";
import { initiatives } from "@/data/initiatives";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function InitiativesContent() {
  const { locale } = useLanguage();

  return (
    <div id="main-initiatives">
      <section className="relative w-full overflow-hidden bg-ocean-900">
        <div className="relative min-h-[70vh] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/marine-sustainability.jpg"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/initiatives-mangroves.mp4" type="video/mp4" />
          </video>
          <img
            src="/marine-sustainability.jpg"
            alt="Saudi Arabian coastline and marine environment mangrove restoration"
            className="absolute inset-0 h-full w-full object-cover -z-0"
            aria-hidden="true"
          />
          <div className="gradient-ocean-overlay absolute inset-0" />
          <div className="relative z-10 flex min-h-[70vh] items-center">
            <div className="container-x py-20 md:py-24 lg:py-28">
              <div className="max-w-4xl">
                <span className="eyebrow-light mb-5 md:mb-6">
                  ACTION • COMMUNITY • IMPACT
                </span>
                <h1 className="heading-xl text-balance text-white">
                  Our Initiatives
                </h1>
                <p className="body-lg mt-6 max-w-2xl text-ocean-100/85">
                  Purpose-built programs designed to protect marine ecosystems,
                  empower communities, and drive lasting environmental change
                  across Saudi Arabia&rsquo;s coastlines and waters.
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

      <div className="bg-white">
        {initiatives.map((initiative, index) => {
          const isLast = index === initiatives.length - 1;

          return (
            <section
              key={initiative.id}
              id={initiative.slug}
              className={`${isLast ? "" : "border-b border-ocean-50"} section-y`}
            >
              <div className="container-x flex flex-col gap-10 md:gap-14">
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="relative h-[320px] md:h-[420px] lg:h-[480px] w-full">
                    {initiative.localVideo ? (
                      <>
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster={initiative.localImage}
                          aria-hidden="true"
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <source src={initiative.localVideo} type="video/mp4" />
                        </video>
                        {initiative.localImage && (
                          <img
                            src={initiative.localImage}
                            alt={initiative.imageAlt[locale]}
                            className="absolute inset-0 h-full w-full object-cover -z-10"
                            aria-hidden="true"
                          />
                        )}
                      </>
                    ) : (
                      <img
                        src={initiative.localImage}
                        alt={initiative.imageAlt[locale]}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                    <div className="gradient-ocean-overlay absolute inset-0" />
                    <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12 lg:p-16">
                      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-ocean-500/20 border border-ocean-300/30 backdrop-blur-sm px-4 py-1.5 mb-4 md:mb-5">
                        <Icon name="flag" size={14} className="text-ocean-200" />
                        <span className="text-[11px] md:text-xs font-semibold tracking-wider uppercase text-ocean-100">
                          {initiative.relatedAreaLabel[locale]}
                        </span>
                      </div>
                      <h2 className="heading-md md:heading-lg text-balance text-white max-w-4xl">
                        {initiative.title[locale]}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                  <div className="lg:col-span-7 flex flex-col gap-8 md:gap-10">
                    <div className="flex flex-col gap-4">
                      <h3 className="heading-sm text-ocean-900 flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ocean-100 text-ocean-500">
                          <Icon name="eye" size={18} />
                        </span>
                        Overview
                      </h3>
                      <p className="body-base text-ocean-800/75 leading-relaxed">
                        {initiative.overview[locale]}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h3 className="heading-sm text-ocean-900 flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ocean-100 text-ocean-500">
                          <Icon name="target" size={18} />
                        </span>
                        Purpose
                      </h3>
                      <p className="body-base text-ocean-800/75 leading-relaxed">
                        {initiative.purpose[locale]}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h3 className="heading-sm text-ocean-900 flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ocean-100 text-ocean-500">
                          <Icon name="briefcase" size={18} />
                        </span>
                        Activities
                      </h3>
                      <ul className="flex flex-col gap-3.5">
                        {initiative.activities.map((activity, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3.5 body-base text-ocean-800/75"
                          >
                            <span className="mt-[7px] inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-ocean-500" />
                            <span>{activity[locale]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-24 flex flex-col gap-6">
                      <div className="card-elevated p-6 md:p-7 flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                          <span className="eyebrow">RELATED AREA OF WORK</span>
                          <div className="flex items-start gap-3">
                            <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-ocean-500/10 text-ocean-600">
                              <Icon name="globe" size={20} />
                            </span>
                            <div className="flex flex-col gap-1">
                              <h4 className="text-base md:text-lg font-bold text-ocean-900 leading-snug">
                                {initiative.relatedAreaLabel[locale]}
                              </h4>
                              <p className="text-sm text-ocean-800/60 leading-relaxed">
                                This initiative contributes to our strategic
                                focus on {initiative.relatedAreaLabel[locale].toLowerCase()}.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="h-px w-full bg-ocean-100" />

                        <div className="flex flex-col gap-3.5">
                          <h3 className="heading-sm text-ocean-900 flex items-center gap-3">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ocean-100 text-ocean-500">
                              <Icon name="leaf" size={18} />
                            </span>
                            Desired Impact
                          </h3>
                          <p className="body-base text-ocean-800/75 leading-relaxed">
                            {initiative.desiredImpact[locale]}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-3xl bg-ocean-900 relative overflow-hidden p-8 md:p-9">
                        <div className="absolute inset-0 bg-grid-wave opacity-30" />
                        <div className="relative z-10 flex flex-col gap-5">
                          <div className="flex flex-col gap-2">
                            <span className="eyebrow-light">TAKE ACTION</span>
                            <h3 className="text-xl md:text-2xl font-bold leading-snug text-white">
                              Be part of the change
                            </h3>
                            <p className="text-sm md:text-[15px] leading-relaxed text-ocean-100/80">
                              Join our network of volunteers and partners to
                              help deliver this initiative and make a real
                              difference for Saudi marine environments.
                            </p>
                          </div>
                          <CTAButton
                            href="/contact"
                            variant="primary"
                            size="md"
                            className="w-fit"
                          >
                            Get Involved
                          </CTAButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
