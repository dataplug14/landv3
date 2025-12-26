import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-2";
import Features from "@/components/features-3";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-5";
import PlatformServices from "@/components/platform-services";
import StatsSection from "@/components/stats";
import TestimonialsSection from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PlatformServices />
      <Features />
      <IntegrationsSection />
      <ContentSection />
      <StatsSection />
      <TestimonialsSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}
