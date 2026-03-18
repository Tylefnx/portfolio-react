"use client";

import { useEffect, useRef } from "react";
import HomeSection from "@/features/home/HomeSection";
import AboutSection from "@/features/about/AboutSection";
import PortfolioSection from "@/features/portfolio/PortfolioSection";
import ServicesSection from "@/features/services/ServicesSection";
import ContactSection from "@/features/contact/ContactSection";
import { useAppStore } from "@/store/useAppStore";
import { useScroll } from "framer-motion";
import DynamicBackground from "@/shared/components/DynamicBackground";

export default function PortfolioPage() {
  const setActiveSection = useAppStore((state) => state.setActiveSection);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target as HTMLElement);
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <>
      <DynamicBackground scrollYProgress={scrollYProgress} />
      <main ref={containerRef} className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory relative scroll-smooth bg-transparent">
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
