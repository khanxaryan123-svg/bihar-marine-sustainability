import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bihar Marine Environment Association — our vision, mission, values, and commitment to protecting marine ecosystems, restoring coastal habitats, and building a sustainable blue future across Saudi Arabia.",
  openGraph: {
    title: "About Us | Bihar Marine Sustainability",
    description:
      "Our vision, mission and values for a sustainable marine environment and thriving blue economy.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
