import type { Metadata } from "next";
import CTAButton from "@/components/shared/CTAButton";
import WaveDivider from "@/components/shared/WaveDivider";
import PartnersContent from "./PartnersContent";

export const metadata: Metadata = {
  title: "Our Potential Partners",
  description:
    "Bihar Marine Sustainability aims to build strategic partnerships across Saudi government institutions, universities and research centers, private sector, CSR organizations, municipalities, and environmental associations for greater marine impact.",
  openGraph: {
    title: "Our Potential Partners | Bihar Marine Sustainability",
    description:
      "Building strategic partnerships for greater marine environmental impact across the Kingdom of Saudi Arabia.",
  },
};

export default function PartnersPage() {
  return (
    <div id="main-partners">
      <section className="relative w-full overflow-hidden bg-ocean-900">
        <div className="relative min-h-[55vh] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/marine-sustainability.jpg"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/partners-collaboration.mp4" type="video/mp4" />
          </video>
          <img
            src="/marine-sustainability.jpg"
            alt="Professional marine sustainability collaboration and partnership environment"
            className="absolute inset-0 h-full w-full object-cover -z-0"
            aria-hidden="true"
          />
          <div className="gradient-ocean-overlay absolute inset-0" />
          <div className="relative z-10 flex min-h-[55vh] items-center">
            <div className="container-x py-20 md:py-24 lg:py-28">
              <div className="max-w-4xl">
                <span className="eyebrow-light mb-5 md:mb-6">
                  COLLABORATION • IMPACT • PARTNERSHIP
                </span>
                <h1 className="heading-xl text-balance text-white">
                  Our Potential Partners
                </h1>
                <p className="body-lg mt-6 max-w-3xl text-ocean-100/85">
                  The association aims to build strategic partnerships across government, research, education, private sector and environmental organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider variant="bottom" waveColor="white" className="absolute bottom-0 z-20" />
      </section>

      <PartnersContent />

      <section className="relative overflow-hidden section-y bg-ocean-900">
        <div className="container-x relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6 md:gap-7">
            <span className="eyebrow-light">DRIVE CHANGE TOGETHER</span>
            <h2 className="heading-lg text-white text-balance">
              Partner With Us
            </h2>
            <p className="body-lg text-ocean-100/85 max-w-2xl">
              Whether you represent a government body, research institution, private company, CSR platform, municipality or environmental association — we welcome conversations about shared goals, joint programs and long-term collaboration.
            </p>
            <div className="pt-2">
              <CTAButton href="/contact" variant="primary" size="lg">
                Partner With Us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
