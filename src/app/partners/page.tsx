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
  return <PartnersContent />;
}
