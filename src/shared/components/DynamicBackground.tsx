"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function DynamicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Color & Position transformations based on scroll
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const blob3X = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const mauveOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.1, 0.15]);
  const blueOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.15, 0.1]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-base pointer-events-none">
      {/* Primary Mauve Glow - Moves with scroll */}
      <motion.div
        style={{ y: blob1Y, opacity: mauveOpacity }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] bg-mauve/20 rounded-full blur-[140px]"
      />

      {/* Secondary Blue Glow - Moves inversely with scroll */}
      <motion.div
        style={{ y: blob2Y, opacity: blueOpacity }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[90%] h-[90%] bg-blue/20 rounded-full blur-[160px]"
      />

      {/* Center Lavender Glow - Drifts horizontally */}
      <motion.div
        style={{ x: blob3X }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[20%] w-[50%] h-[50%] bg-lavender/10 rounded-full blur-[120px]"
      />

      {/* Interactive Sapphire Glow - Bottom side */}
      <motion.div
         animate={{
           y: [0, 100, 0],
           opacity: [0.05, 0.1, 0.05]
         }}
         transition={{
           duration: 12,
           repeat: Infinity,
           ease: "easeInOut"
         }}
         className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-sapphire/20 rounded-full blur-[100px]"
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}
