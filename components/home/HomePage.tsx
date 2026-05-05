"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HeroSection } from "./HeroSection";
import { MarqueeSection } from "./MarqueeSection";
import { AboutSnippetSection } from "./AboutSnippetSection";
import { ProductShowcaseSection } from "./ProductShowcaseSection";
import { WhySection } from "./WhySection";
import { StatsSection } from "./StatsSection";
import { TestimonialSection } from "./TestimonialSection";
import { CTASection } from "./CTASection";
import { TweaksPanel } from "./TweaksPanel";

const HomePage = () => {
  useScrollReveal();
  return (
    <div className="lg:px-36 space-y-16 lg:space-y-24">
      <HeroSection />
      <MarqueeSection />
      <AboutSnippetSection />
      <ProductShowcaseSection />
      <WhySection />
      <StatsSection />
      <TestimonialSection />
      <CTASection />
      <TweaksPanel />
    </div>
  );
};

export default HomePage;
