
import React from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { WorldShowcase } from "@/components/world-showcase";
import { ExperiencesSection } from "@/components/experiences-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f5f3] to-[#ebe8e4] text-[#222]">
      <NavigationBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorldShowcase />
        <ExperiencesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
