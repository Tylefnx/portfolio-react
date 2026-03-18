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
      
      {/* 2. Brilliant, Visible Grid Pattern (Minimal Desen) */}
      <div 
        className="absolute inset-0 opacity-[0.2] z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L50 50L0 50' fill='none' stroke='%2345475a' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* 3. Colorful, vibrant glowing orbs (Renkli Renkli) */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] ${color1} rounded-full blur-[140px] mix-blend-screen z-20`}
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] ${color2} rounded-full blur-[140px] mix-blend-screen z-20`}
      />
      
      {/* 4. Static Film Grain */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay z-30"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}
