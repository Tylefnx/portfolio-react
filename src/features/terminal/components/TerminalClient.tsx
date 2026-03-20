"use client";

import TerminalView from "@/features/terminal/components/TerminalView";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TerminalClient() {
  const t = useTranslations();

  return (
    <div className="min-h-[100dvh] bg-crust flex flex-col p-4 md:p-8 lg:p-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-mauve/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 lg:top-28 lg:left-[46px] z-50 transition-all"
      >
        <Link 
          href="/" 
          className="group flex items-center gap-3 px-5 py-2.5 bg-surface0/40 backdrop-blur-xl border border-surface1 hover:border-blue/50 rounded-2xl transition-all duration-300 hover:-translate-x-1"
        >
          <ArrowLeft className="w-5 h-5 text-blue group-hover:scale-110 transition-transform" />
          <span className="text-sm font-bold text-text group-hover:text-blue transition-colors">
            {t("nav.backToHome")}
          </span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full mx-auto flex flex-col gap-4 z-10 pt-16 md:pt-20"
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

        {/* Terminal Container */}
        <div className="flex-1 lg:max-w-5xl mx-auto w-full">
           <TerminalView fullScreen={true} />
        </div>
      </motion.div>
    </div>
  );
}
