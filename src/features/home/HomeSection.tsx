import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Terminal as TerminalIcon, Sparkles, ChevronRight } from "lucide-react";
import { useScrollToSection } from "@/shared/hooks/useScrollToSection";

export default function HomeSection() {
  const t = useTranslations("home");
  const { scrollToSection } = useScrollToSection();

  return (
    <section className="h-[100dvh] w-full snap-start flex flex-col items-center justify-center pt-20 pb-12 lg:pt-24 lg:pb-16 p-6 lg:p-12 relative overflow-hidden bg-transparent z-0">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
        {/* Left Col - Hero */}
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-start z-10 pt-20 lg:pt-0"
        >
          <div className="px-4 py-2 bg-surface0/40 backdrop-blur-md rounded-full border border-surface1 mb-6 inline-flex items-center gap-3 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-green animate-pulse" />
            <span className="text-xs text-subtext1 font-bold tracking-widest uppercase">
              {t("statusPill")}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-black leading-[1.2] tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue to-text/90 font-black mb-2">
              {t("heroTitle").split('\n')[0]}
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue to-green font-black drop-shadow-sm">
              {t("heroTitle").split('\n')[1]}
            </span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-subtext0 leading-relaxed max-w-xl">
            {t("heroDescription")}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <Link
              href="/projects"
              className="group px-8 py-4 bg-blue text-crust hover:bg-blue/90 transition-all duration-300 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue/20"
            >
              [ {t("viewProjects")} ]
            </Link>
            <button
              onClick={() => scrollToSection(4)} // Contact is index 4
              className="group px-8 py-4 bg-surface0/50 text-text hover:bg-surface0 transition-all duration-300 rounded-2xl font-bold border border-surface1 hover:border-blue/50"
            >
              [ {t("contactMe")} ]
            </button>
          </div>
        </motion.div>

        {/* Right Col - Terminal Entry Point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="w-full z-10 relative group"
        >
          <Link href="/terminal" className="block outline-none">
            <div className="bg-mantle/40 backdrop-blur-xl rounded-[2.5rem] border border-surface0 p-8 lg:p-10 relative overflow-hidden group hover:border-blue/50 transition-all duration-500 cursor-pointer shadow-2xl">
              {/* Top ambient glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent opacity-50" />
              
              {/* Terminal Mockup Area */}
              <div className="mb-10 rounded-2xl bg-base/60 border border-surface1 overflow-hidden shadow-inner group-hover:border-blue/30 transition-colors duration-500">
                <div className="h-10 bg-surface0/50 border-b border-surface1 flex items-center justify-between px-5">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red/40" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow/40" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green/40" />
                  </div>
                  <div className="text-[10px] text-surface2 font-mono tracking-widest uppercase">
                    zsh — 80x24
                  </div>
                </div>
                <div className="p-6 font-mono text-sm space-y-3 min-h-[160px]">
                  <div className="flex gap-3">
                    <span className="text-green">➜</span>
                    <span className="text-blue">~</span>
                    <motion.span 
                      initial={{ width: "0" }}
                      animate={{ width: "100%" }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        repeatDelay: 2,
                        ease: "linear"
                      }}
                      className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-blue"
                    >
                      tayfun --status
                    </motion.span>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
                    className="text-subtext0 space-y-1"
                  >
                    <p className="text-blue/80">Checking system protocols...</p>
                    <p className="text-green/80">[OK] Core modules active (v1.0.0)</p>
                    <p className="text-yellow/80">[!] Ready for deployment</p>
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-surface0/40 backdrop-blur-md border border-surface1 flex items-center justify-center group-hover:bg-blue/10 transition-all duration-500 shadow-lg">
                    <TerminalIcon className="w-7 h-7 text-blue" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-text group-hover:text-blue transition-colors duration-500 flex items-center gap-3">
                      {t("terminalCardTitle")}
                      <Sparkles className="w-6 h-6 text-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </h3>
                  </div>
                </div>
                
                <p className="text-lg text-subtext0 leading-relaxed font-medium">
                  {t("terminalCardDescription")}
                </p>

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
