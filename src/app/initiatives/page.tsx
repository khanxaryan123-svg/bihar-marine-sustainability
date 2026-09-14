import type { Metadata } from "next";
import InitiativesContent from "./InitiativesContent";

export const metadata: Metadata = {
  title: "Our Initiatives",
  description:
    "Explore our six marine conservation initiatives: Our Beaches Our Responsibility, Sea Ambassadors, Marine Life Protection, Marine Environmental Awareness, Green Mangrove Initiative, and Environmental Partnerships.",
  openGraph: {
    title: "Our Initiatives | Bihar Marine Sustainability",
    description:
      "Programs that create real change for Saudi marine and coastal environments.",
  },
};

export default function InitiativesPage() {
  return <InitiativesContent />;
}
