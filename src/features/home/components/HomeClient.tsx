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

export default function HomeClient() {
  const setActiveSection = useAppStore((state) => state.setActiveSection);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let currentActive = -1;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that is most visible
        const intersecting = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (intersecting.length > 0) {
          const entry = intersecting[0];
          const index = Array.from(sections).indexOf(entry.target as HTMLElement);
          if (index !== -1 && index !== currentActive) {
            currentActive = index;
            setActiveSection(index);
          }
        }
      },
      { 
        threshold: [0.2, 0.5, 0.8], // Multiple thresholds for smoother detection
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <>
      <DynamicBackground scrollYProgress={scrollYProgress} />
      <main
        ref={containerRef}
        className="h-[100dvh] w-full overflow-y-scroll snap-none lg:snap-y lg:snap-mandatory relative scroll-smooth bg-transparent"
      >
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
