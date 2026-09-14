import type { Metadata } from "next";
import CTAButton from "@/components/shared/CTAButton";
import WaveDivider from "@/components/shared/WaveDivider";
import { Icon } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bihar Marine Sustainability to explore volunteering, strategic partnerships, research collaboration, community programs, and marine environmental initiatives across Saudi Arabia.",
  openGraph: {
    title: "Contact Us | Bihar Marine Sustainability",
    description:
      "Reach out to explore volunteering, partnerships and marine environmental collaboration.",
  },
};

export default function ContactPage() {
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
                  GET IN TOUCH • LET&rsquo;S CONNECT
                </span>
                <h1 className="heading-xl text-balance text-white">
                  Contact Us
                </h1>
                <p className="body-lg mt-6 max-w-3xl text-ocean-100/85">
                  Get in touch with Bihar Marine Sustainability to explore volunteering, partnerships, collaboration and marine environmental initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider variant="bottom" waveColor="white" className="absolute bottom-0 z-20" />
      </section>

      <section className="bg-white section-y">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <span className="eyebrow">HOW TO REACH US</span>
                <h2 className="heading-md text-ocean-900">
                  We Welcome Your Inquiry
                </h2>
                <p className="body-base text-ocean-800/70 max-w-md">
                  Whether you are interested in volunteering, exploring a
                  strategic partnership, discussing research collaboration,
                  learning about our community programs, or asking a general
                  question about our marine environmental work — please use the
                  adjacent form to send us a message and our team will follow up.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4 card-elevated p-5 md:p-6">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                    <Icon name="globe" size={22} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-500">
                      Based In
                    </span>
                    <span className="text-sm font-semibold text-ocean-900">
                      Kingdom of Saudi Arabia
                    </span>
                    <p className="text-sm text-ocean-800/65 leading-relaxed">
                      Focused on marine and coastal environments across the
                      Kingdom.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 card-elevated p-5 md:p-6">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                    <Icon name="users" size={22} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-500">
                      Partnership &amp; Volunteering
                    </span>
                    <span className="text-sm font-semibold text-ocean-900">
                      Ready to Collaborate
                    </span>
                    <p className="text-sm text-ocean-800/65 leading-relaxed">
                      Tell us about your goals or organization using the form
                      and we will identify the best way to work together.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 card-elevated p-5 md:p-6">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                    <Icon name="flag" size={22} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-500">
                      Marine Programs
                    </span>
                    <span className="text-sm font-semibold text-ocean-900">
                      Initiatives Across Seven Focus Areas
                    </span>
                    <p className="text-sm text-ocean-800/65 leading-relaxed">
                      Protection, restoration, volunteering, awareness,
                      research, aquaculture and blue economy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-5 md:p-6 bg-gradient-to-br from-ocean-50 to-white">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ocean-500 text-white">
                    <Icon name="info" size={22} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-ocean-900">
                      Response Process
                    </span>
                    <p className="text-sm text-ocean-800/70 leading-relaxed">
                      Every submission is reviewed by our team. Responses for
                      partnership, volunteering and collaboration inquiries are
                      prioritized and handled directly by the relevant program
                      lead.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="card-elevated p-7 md:p-9 lg:p-10">
                <div className="flex flex-col gap-4 mb-7 md:mb-8">
                  <span className="eyebrow">SEND US A MESSAGE</span>
                  <h2 className="heading-sm md:heading-md text-ocean-900">
                    Let&rsquo;s Start a Conversation
                  </h2>
                  <p className="body-base text-ocean-800/70">
                    Fill in the form below and our team will get back to you about your inquiry.
                  </p>
                </div>

                <form className="flex flex-col gap-5 md:gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-ocean-900"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="h-11 w-full rounded-xl border border-ocean-100 bg-white px-4 text-sm text-ocean-900 placeholder:text-ocean-800/40 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-ocean-900"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="h-11 w-full rounded-xl border border-ocean-100 bg-white px-4 text-sm text-ocean-900 placeholder:text-ocean-800/40 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-semibold text-ocean-900"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="h-11 w-full rounded-xl border border-ocean-100 bg-white px-4 text-sm text-ocean-900 placeholder:text-ocean-800/40 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="organization"
                        className="text-sm font-semibold text-ocean-900"
                      >
                        Organization
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        placeholder="Enter your organization name"
                        className="h-11 w-full rounded-xl border border-ocean-100 bg-white px-4 text-sm text-ocean-900 placeholder:text-ocean-800/40 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-ocean-900"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this message about?"
                      className="h-11 w-full rounded-xl border border-ocean-100 bg-white px-4 text-sm text-ocean-900 placeholder:text-ocean-800/40 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-ocean-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us more about your inquiry, interest or proposal..."
                      className="min-h-[140px] w-full resize-y rounded-xl border border-ocean-100 bg-white px-4 py-3 text-sm text-ocean-900 placeholder:text-ocean-800/40 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <CTAButton type="submit" variant="primary" size="lg">
                      Send Message
                    </CTAButton>
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
              <span className="eyebrow">EXPLORE MORE WAYS TO ENGAGE</span>
              <h2 className="heading-md md:heading-lg text-ocean-900 text-balance">
                Ready to Make a Difference for Our Oceans?
              </h2>
              <p className="body-base md:body-lg text-ocean-800/70 max-w-2xl">
                Beyond reaching out directly, discover our current areas of work, learn about our mission and vision, or explore the strategic partnership categories we are building across the marine sustainability ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <CTAButton href="/partners" variant="primary" size="md">
                  Explore Partnerships
                </CTAButton>
                <CTAButton href="/" variant="secondary" size="md" iconRight="home">
                  Back to Home
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
