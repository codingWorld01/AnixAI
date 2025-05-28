import { HomeHero } from "@/components/home/hero";
import { AISolutions } from "@/components/home/ai-solutions";
import { ServicesSection } from "@/components/home/services-section";
import { StatsSection } from "@/components/home/stats-section";
import { BlogPreview } from "@/components/home/blog-preview";
import { CTASection } from "@/components/home/cta-section";
import { WhyUs } from "@/components/home/Why-us";
import { OurProcess } from "@/components/home/OurProcess";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AISolutions />
      <ServicesSection />
      <WhyUs />
      <StatsSection />
      <OurProcess />
      <BlogPreview />
      <CTASection />
    </>
  );
}
