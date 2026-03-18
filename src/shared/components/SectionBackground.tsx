import { motion } from "framer-motion";

export default function SectionBackground({
  color1,
  color2,
}: {
  color1: string;
  color2: string;
}) {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* 1. Base Gradient slightly darker than base to add contrast */}
      <div className="absolute inset-0 bg-base z-0" />
      
      {/* 2. Abstract, ambient glowing orbs (Renkli Renkli) pushed to edges */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-[30%] -left-[20%] w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] ${color1} rounded-full blur-[150px] mix-blend-screen z-20`}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -bottom-[30%] -right-[20%] w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] ${color2} rounded-full blur-[150px] mix-blend-screen z-20`}
      />
      
      {/* 4. Static Film Grain */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay z-30"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}
