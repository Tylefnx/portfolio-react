"use client";

import TerminalView from "@/features/terminal/components/TerminalView";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function TerminalPage() {
  const t = useTranslations("nav");

  return (
    <div className="min-h-[100dvh] bg-crust flex flex-col p-4 md:p-8 lg:p-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-mauve/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full mx-auto flex flex-col gap-6 z-10 pt-16 md:pt-20"
      >
        {/* Header Indicators */}
        <div className="flex items-center justify-end mb-2">
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green/10 border border-green/20">
                <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-green">System Online</span>
             </div>
          </div>
        </div>

        {/* Terminal Container - High/Full space */}
        <div className="flex-1 min-h-[70vh]">
           <TerminalView fullScreen={true} />
        </div>
      </motion.div>
    </div>
  );
}
