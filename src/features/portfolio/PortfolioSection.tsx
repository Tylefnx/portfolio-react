"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ChevronRight, Layout, Database, Sparkles } from "lucide-react";
import SectionBackground from "@/shared/components/SectionBackground";

export default function PortfolioSection() {
  const t = useTranslations("portfolio.projects");

  const featuredProjects = [
    { id: "gymlogger", key: "gymlogger", icon: <Database className="w-6 h-6 text-green" /> },
    { id: "portfolio", key: "portfolio", icon: <Layout className="w-6 h-6 text-blue" /> },
  ];

  return (
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-12 bg-transparent relative overflow-hidden z-0">
      <SectionBackground color1="bg-green/30" color2="bg-lavender/30" />
      <div className="max-w-5xl w-full mx-auto flex flex-col gap-12 z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="flex flex-col gap-4 text-center lg:text-left"
        >
          <div className="flex items-center gap-3 justify-center lg:justify-start">
             <span className="w-12 h-px bg-surface2 invisible lg:visible" />
             <h2 className="text-3xl lg:text-4xl text-text font-bold">
               Featured <span className="text-mauve">Projects</span>
             </h2>
          </div>
          <p className="text-lg text-subtext0 max-w-2xl mx-auto lg:mx-0">
            A selection of my most impactful works, spanning from AI-powered mobile apps to high-performance systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50, rotate: idx === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="group bg-mantle/40 backdrop-blur-md border border-surface0 hover:border-mauve/50 transition-all duration-500 p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden shadow-xl"
            >
               <div className="absolute inset-0 bg-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="w-12 h-12 rounded-xl bg-surface0 flex items-center justify-center relative z-10 transition-transform group-hover:scale-110">
                  {proj.icon}
               </div>

               <div className="relative z-10 space-y-3">
                  <h3 className="text-2xl text-text font-bold group-hover:text-mauve transition-colors">
                    {t(`${proj.key}.title`)}
                  </h3>
                  <p className="text-subtext0 leading-relaxed line-clamp-2">
                    {t(`${proj.key}.description`)}
                  </p>
               </div>

               <Link
                 href="/projects"
                 className="mt-4 flex items-center gap-2 text-sm font-bold text-subtext1 group-hover:text-text transition-colors relative z-10"
               >
                 Details & Source <ChevronRight className="w-4 h-4" />
               </Link>
            </motion.div>
          ))}
        </div>

        {/* Explore More CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-6"
        >
          <Link
            href="/projects"
            className="px-10 py-5 bg-mantle border-2 border-dashed border-surface1 hover:border-blue/50 hover:bg-surface0 transition-all rounded-3xl flex items-center gap-4 group shadow-2xl"
          >
             <div className="flex flex-col items-start gap-1">
                <span className="text-xs uppercase tracking-[0.2em] font-black text-subtext1 group-hover:text-blue transition-colors">
                  discovery_init --all
                </span>
                <span className="text-xl font-bold text-text flex items-center gap-2">
                   Explore All Projects
                   <Sparkles className="w-5 h-5 text-yellow animate-pulse" />
                </span>
             </div>
             <div className="w-12 h-12 rounded-full bg-surface0 flex items-center justify-center group-hover:bg-blue group-hover:text-white transition-all transform group-hover:rotate-45">
                <ChevronRight className="w-6 h-6" />
             </div>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
