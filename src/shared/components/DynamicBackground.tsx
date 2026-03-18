"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export default function DynamicBackground({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Parallax pull-up effect (hafif üste doğru çekilsin)
  // Maps 0 to 1 scroll progress to 0% to -20% translation
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // We have 5 sections on the main page. Snap points roughly at 0, 0.25, 0.5, 0.75, 1
  // We interpolate colors 
  const color1 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(137, 180, 250, 0.22)", // blue (Home)
      "rgba(250, 179, 135, 0.22)", // peach (About)
      "rgba(166, 227, 161, 0.22)", // green (Portfolio)
      "rgba(249, 226, 175, 0.22)", // yellow (Services)
      "rgba(243, 139, 168, 0.22)", // red (Contact)
    ]
  );

  const color2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(203, 166, 247, 0.22)", // mauve (Home)
      "rgba(116, 199, 236, 0.22)", // sapphire (About)
      "rgba(180, 190, 254, 0.22)", // lavender (Portfolio)
      "rgba(148, 226, 213, 0.22)", // teal (Services)
      "rgba(245, 194, 231, 0.22)", // pink (Contact)
    ]
  );

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-base">
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-x-0 -top-[20%] h-[140%] w-full"
      >
        {/* Glow 1 */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: color1 }}
          className="absolute top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full blur-[120px] mix-blend-screen transition-colors duration-700"
        />
        {/* Glow 2 */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: color2 }}
          className="absolute top-[50%] -right-[10%] w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] rounded-full blur-[120px] mix-blend-screen transition-colors duration-700"
        />
      </motion.div>
      
      {/* Static Film Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay z-30"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}
