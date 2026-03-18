"use client";

import { useTranslations } from "next-intl";
import TerminalView from "@/features/terminal/components/TerminalView";
import { motion } from "framer-motion";

export default function HomeSection() {
  const t = useTranslations("home");

  return (
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden bg-base">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Col - Hero */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start z-10"
        >
          <div className="px-3 py-1 bg-surface0 rounded-full border border-surface1 mb-6 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-xs text-subtext1 font-medium tracking-wide">
              {t("statusPill")}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-text font-bold leading-tight tracking-tight whitespace-pre-line">
            {t("heroTitle")}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-subtext0 leading-relaxed max-w-xl">
            {t("heroDescription")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="px-6 py-3 bg-blue text-base hover:bg-blue/90 transition-colors rounded-xl font-semibold shadow-lg shadow-blue/20">
              {t("viewProjects")}
            </button>
            <button className="px-6 py-3 bg-mantle text-text border border-surface0 hover:bg-surface0 transition-colors rounded-xl font-medium">
              {t("contactMe")}
            </button>
          </div>
        </motion.div>

        {/* Right Col - Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full z-10"
        >
          <TerminalView />
        </motion.div>
      </div>

      {/* Decorative Blob */}
      <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-mauve/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
