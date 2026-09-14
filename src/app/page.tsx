import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import WhyMarineMattersSection from "@/components/home/WhyMarineMattersSection";
import AreasOfWorkSection from "@/components/home/AreasOfWorkSection";
import FeaturedInitiativesSection from "@/components/home/FeaturedInitiativesSection";
import ImpactSection from "@/components/home/ImpactSection";
import BlueEconomySection from "@/components/home/BlueEconomySection";
import PartnersSection from "@/components/home/PartnersSection";
import Vision2030Section from "@/components/home/Vision2030Section";
import GetInvolvedSection from "@/components/home/GetInvolvedSection";

export default function HomePage() {
  return (
    <div id="main-home">
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <WhyMarineMattersSection />
      <AreasOfWorkSection />
      <FeaturedInitiativesSection />
      <ImpactSection />
      <BlueEconomySection />
      <PartnersSection />
      <Vision2030Section />
      <GetInvolvedSection />
    </div>
  );
}
