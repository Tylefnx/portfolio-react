import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Terminal as TerminalIcon, Sparkles, ChevronRight } from "lucide-react";
import SectionBackground from "@/shared/components/SectionBackground";

export default function HomeSection() {
  const t = useTranslations("home");

  return (
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden bg-transparent z-0">
      <SectionBackground color1="bg-blue/30" color2="bg-mauve/30" />
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Col - Hero */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start z-10"
        >
          <div className="px-4 py-2 bg-surface0 rounded-full border border-surface1 mb-6 inline-flex items-center gap-3 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-green animate-pulse" />
            <span className="text-xs text-subtext1 font-bold tracking-widest uppercase">
              {t("statusPill")}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-text font-bold leading-tight tracking-tight whitespace-pre-line">
            {t("heroTitle")}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-subtext0 leading-relaxed max-w-xl">
            {t("heroDescription")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button className="px-8 py-3.5 bg-blue text-crust hover:bg-blue/90 transition-all duration-300 rounded-xl font-bold shadow-lg shadow-blue/20 hover:-translate-y-1">
              {t("viewProjects")}
            </button>
            <button className="px-8 py-3.5 bg-surface0 text-text border border-surface1 hover:bg-surface1 transition-all duration-300 rounded-xl font-bold hover:-translate-y-1">
              {t("contactMe")}
            </button>
          </div>
        </motion.div>

        {/* Right Col - Terminal Entry Point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full z-10 relative group"
        >
          <Link href="/terminal" className="block outline-none">
            <div className="bg-mantle rounded-[2rem] border border-surface0 p-8 lg:p-12 relative overflow-hidden group hover:border-blue/50 transition-all duration-500 cursor-pointer shadow-2xl">
              {/* Top ambient glow inside the card matching the solid background */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-surface0 border border-surface1 flex items-center justify-center group-hover:bg-blue/10 transition-colors duration-500 shadow-lg">
                  <TerminalIcon className="w-8 h-8 text-blue" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-text group-hover:text-blue transition-colors duration-500 flex items-center gap-3">
                    Interactive Terminal
                    <Sparkles className="w-6 h-6 text-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </h3>
                  <p className="text-lg text-subtext0 leading-relaxed font-medium">
                    Explore my projects, skills, and background through a fast, interactive command-line interface.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-blue font-bold text-sm tracking-widest uppercase mt-2 group-hover:translate-x-2 transition-transform duration-500">
                  Launch Terminal <ChevronRight className="w-5 h-5" />
                </div>
              </div>

              {/* Decorative dynamic scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue/5 to-transparent h-full w-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-full group-hover:translate-y-full ease-in-out" style={{ transitionDuration: '2s' }} />
            </div>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
