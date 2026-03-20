"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export default function DynamicBackground({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Parallax pull-up effect for the glow container
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  
  // Parallax for the starfield (moves slower than the content)
  const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Dynamic Base Background Color (Mocha: base -> mantle -> crust)
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#1e1e2e", "#181825", "#11111b"] // base -> mantle -> crust
  );

  // Core Glow Colors (3 Layers for richness)
  const color1 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(137, 180, 250, 0.18)", // blue
      "rgba(250, 179, 135, 0.18)", // peach
      "rgba(166, 227, 161, 0.18)", // green
      "rgba(249, 226, 175, 0.18)", // yellow
      "rgba(243, 139, 168, 0.18)", // red
    ]
  );

  const color2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(203, 166, 247, 0.18)", // mauve
      "rgba(245, 224, 220, 0.18)", // rosewater
      "rgba(148, 226, 213, 0.18)", // teal
      "rgba(235, 160, 172, 0.18)", // maroon
      "rgba(137, 220, 235, 0.18)", // sky
    ]
  );

  const color3 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(116, 199, 236, 0.15)", // sapphire
      "rgba(242, 205, 205, 0.15)", // flamingo
      "rgba(180, 190, 254, 0.15)", // lavender
      "rgba(245, 194, 231, 0.15)", // pink
      "rgba(203, 166, 247, 0.15)", // mauve
    ]
  );

  return (
    <motion.div 
      style={{ backgroundColor: bgColor }}
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      {/* Layer 1: Parallax Starfield (Scattered dots) */}
      <motion.div
        style={{ y: yStars }}
        className="absolute inset-x-0 -top-[10%] h-[120%] opacity-[0.12] mix-blend-screen"
      >
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-text) 1px, transparent 0)`,
            backgroundSize: '48px 48px' 
          }}
        />
        <div 
          className="absolute inset-0 translate-x-6 translate-y-6"
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-subtext0) 1px, transparent 0)`,
            backgroundSize: '72px 72px' 
          }}
        />
      </motion.div>

      {/* Layer 2: Moving Glows Container */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-x-0 -top-[30%] h-[160%] w-full"
      >
        {/* Glow 1 (Top Left) */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: color1, willChange: "transform" }}
          className="absolute top-[15%] -left-[15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full blur-[90px] backdrop-filter opacity-80 mix-blend-screen"
        />
        
        {/* Glow 2 (Bottom Right) */}
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: color2, willChange: "transform" }}
          className="absolute bottom-[10%] -right-[15%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full blur-[100px] backdrop-filter opacity-80 mix-blend-screen"
        />

        {/* Glow 3 (Center Moving) */}
        <motion.div
          animate={{ x: [-30, 30, -30], y: [40, -40, 40] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ backgroundColor: color3, willChange: "transform" }}
          className="absolute top-[40%] left-[20%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full blur-[80px] backdrop-filter opacity-80 mix-blend-screen"
        />
      </motion.div>
      
      {/* Top Gradient Overlay for Depth (Vignette) */}
      <div className="absolute inset-0 bg-gradient-to-b from-crust/30 via-transparent to-crust/50 pointer-events-none" />

      {/* Static Film Grain overlay (Premium Texture) - Optimized numOctaves */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay z-30 pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </motion.div>
  );
}
