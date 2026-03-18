import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Terminal as TerminalIcon, Sparkles, ChevronRight } from "lucide-react";

export default function HomeSection() {
  const t = useTranslations("home");

  return (
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden bg-transparent">
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

        {/* Right Col - Terminal Entry Point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full z-10 relative group"
        >
          <Link href="/terminal" className="block outline-none">
            <div className="bg-mantle rounded-3xl border border-surface0 p-8 lg:p-12 border-dashed relative overflow-hidden group-hover:border-blue/50 transition-all duration-500 cursor-pointer shadow-2xl">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue/10 flex items-center justify-center group-hover:bg-blue/20 transition-colors duration-500">
                  <TerminalIcon className="w-8 h-8 text-blue" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-text group-hover:text-blue transition-colors duration-500 flex items-center gap-2">
                    Interactive Terminal
                    <Sparkles className="w-5 h-5 text-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </h3>
                  <p className="text-subtext0 leading-relaxed">
                    Explore my projects, skills, and background through a fast, interactive command-line interface.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-blue font-bold text-sm tracking-widest uppercase">
                  Launch Terminal <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue/5 to-transparent h-full w-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
