"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function DynamicBackground() {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress for more "fluid" movement
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dramatic Position & Scale transformations
  const blob1Y = useTransform(smoothScroll, [0, 1], ["0%", "100%"]);
  const blob1X = useTransform(smoothScroll, [0, 1], ["0%", "20%"]);
  
  const blob2Y = useTransform(smoothScroll, [0, 1], ["0%", "-100%"]);
  const blob2X = useTransform(smoothScroll, [0, 1], ["0%", "-20%"]);

  const blob3Rotate = useTransform(smoothScroll, [0, 1], [0, 360]);
  const blob3Scale = useTransform(smoothScroll, [0, 0.5, 1], [1, 1.5, 1]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-base pointer-events-none">
      {/* Dynamic Aurora Layer 1 - Mauve */}
      <motion.div
        style={{ y: blob1Y, x: blob1X }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[100%] h-[100%] bg-mauve/20 rounded-full blur-[160px]"
      />

      {/* Dynamic Aurora Layer 2 - Blue */}
      <motion.div
        style={{ y: blob2Y, x: blob2X }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[30%] -right-[20%] w-[120%] h-[120%] bg-blue/15 rounded-full blur-[180px]"
      />

      {/* Center Swirl Accent - Lavender/Mauve */}
      <motion.div
        style={{ rotate: blob3Rotate, scale: blob3Scale }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border-[2px] border-dashed border-mauve/10 rounded-full blur-[80px]"
      />

      {/* Floating Sparkles / Particles - Randomly distributed */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute rounded-full bg-mauve/20 blur-[40px]"
            style={{
              width: `${10 + Math.random() * 20}%`,
              height: `${10 + Math.random() * 20}%`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Grain / Noise for texture depth */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      {/* Very subtle static gradient overlay to ensure no total black holes */}
      <div className="absolute inset-0 bg-gradient-to-tr from-mauve/5 via-transparent to-blue/5 pointer-events-none" />
    </div>
  );
}
