import type { Metadata } from "next";
import OurWorkContent from "./OurWorkContent";

export const metadata: Metadata = {
  title: "Our Areas of Work",
  description:
    "Seven strategic areas of work for a sustainable marine future — marine protection, habitat restoration, volunteering, education, research, sustainable aquaculture and blue economy development.",
  openGraph: {
    title: "Our Areas of Work | Bihar Marine Sustainability",
    description:
      "Seven strategic areas of work for a sustainable marine future.",
  },
};

export default function OurWorkPage() {
  return <OurWorkContent />;
}
