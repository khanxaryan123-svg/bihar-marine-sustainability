import type { Metadata } from "next";
import CTAButton from "@/components/shared/CTAButton";
import WaveDivider from "@/components/shared/WaveDivider";
import { Icon } from "@/components/shared/icons";
import ContactContent from "./ContactContent";

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
  return <ContactContent />;
}
