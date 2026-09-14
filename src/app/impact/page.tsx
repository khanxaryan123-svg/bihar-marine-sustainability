import type { Metadata } from "next";
import ImpactContent from "./ImpactContent";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Creating lasting change for marine ecosystems and communities through environmental initiatives, community awareness, volunteer action, habitat rehabilitation, mangrove restoration, research innovation, and strategic partnerships.",
  openGraph: {
    title: "Our Impact | Bihar Marine Sustainability",
    description:
      "Measurable and lasting change for marine ecosystems and coastal communities across the Kingdom.",
  },
};

export default function ImpactPage() {
  return <ImpactContent />;
}
