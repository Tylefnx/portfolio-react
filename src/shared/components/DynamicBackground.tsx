"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { RefObject } from "react";

export default function DynamicBackground({ containerRef }: { containerRef?: RefObject<HTMLElement | null> }) {
  // Pass the scrolling container directly so Framer Motion maps to its exact scroll position
  const { scrollYProgress } = useScroll({ container: containerRef });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  // Physically slide the background upwards as you scroll downwards to create the "pulled down" effect
  const yOffset = useTransform(smoothScroll, [0, 1], ["0%", "-30%"]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      
      {/* Container that physically scrolls up with the page */}
      <motion.div style={{ y: yOffset }} className="absolute inset-x-0 top-0 h-[200vh] w-full">
        
        {/* Minimal Grid Pattern (Hafif Desen) */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L40 40L0 40' fill='none' stroke='%23cba6f7' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px"
          }}
        />

        {/* Minimal Topography / Waves (Hafif Desen 2) */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 25 50 50 T 100 50' fill='none' stroke='%2389b4fa' stroke-width='0.5' /%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        />

        {/* Colorful but Minimal Orbs (Renkli Renkli ama Hafif) */}
        
        {/* Slide 1 Area (0-20% height) */}
        <div className="absolute top-[5%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-mauve/15 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute top-[10%] right-[10%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-blue/15 rounded-full blur-[100px] mix-blend-screen" />

        {/* Slide 2 Area (20-40% height) */}
        <div className="absolute top-[25%] left-[40%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-peach/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute top-[35%] right-[20%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] bg-sapphire/15 rounded-full blur-[120px] mix-blend-screen" />

        {/* Slide 3 Area (40-60% height) */}
        <div className="absolute top-[45%] left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-green/10 rounded-full blur-[130px] mix-blend-screen" />
        <div className="absolute top-[55%] right-[15%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-pink/15 rounded-full blur-[100px] mix-blend-screen" />

        {/* Slide 4 Area (60-80% height) */}
        <div className="absolute top-[65%] left-[30%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-yellow/10 rounded-full blur-[90px] mix-blend-screen" />
        <div className="absolute top-[75%] right-[30%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] bg-teal/15 rounded-full blur-[120px] mix-blend-screen" />

        {/* Slide 5 Area (80-100% height) */}
        <div className="absolute top-[85%] left-[15%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-lavender/15 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute top-[90%] right-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-maroon/10 rounded-full blur-[130px] mix-blend-screen" />

      </motion.div>

      {/* Static Film Grain for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}
