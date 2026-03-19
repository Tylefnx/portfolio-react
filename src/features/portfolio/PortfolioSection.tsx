"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ChevronRight, Layout, Database, Sparkles, Briefcase } from "lucide-react";

export default function PortfolioSection() {
  const t = useTranslations("portfolio.projects");

  const featuredProjects = [
    { id: "gymlogger", key: "gymlogger", icon: <Database className="w-6 h-6 text-green" /> },
    { id: "portfolio", key: "portfolio", icon: <Layout className="w-6 h-6 text-blue" /> },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden bg-transparent z-0">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="max-w-5xl w-full mx-auto flex flex-col gap-12 z-10"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-4 text-center lg:text-left">
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-blue/10 border border-blue/20 flex items-center justify-center">
               <Briefcase className="w-6 h-6 text-blue" />
            </div>
            <h2 className="text-3xl lg:text-4xl text-text font-bold tracking-tight">
              <span className="text-blue">~/</span>portfolio
            </h2>
          </div>
          <p className="text-lg lg:text-xl text-subtext0 leading-relaxed font-medium max-w-2xl">
            {t("description")}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              variants={itemVariants}
              className="group bg-mantle/40 backdrop-blur-md border border-surface0 hover:border-surface2 transition-all duration-500 p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden shadow-2xl"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface0/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="w-12 h-12 rounded-xl bg-surface0/40 backdrop-blur-md border border-surface1 flex items-center justify-center relative z-10 transition-transform group-hover:scale-110 shadow-md">
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
          variants={itemVariants}
          className="flex justify-center mt-6"
        >
          <Link
            href="/projects"
            className="px-10 py-5 bg-mantle/40 backdrop-blur-md border-2 border-dashed border-surface1 hover:border-surface2 hover:bg-surface0 transition-all duration-300 rounded-3xl flex items-center gap-4 group shadow-xl"
          >
             <div className="flex flex-col items-start gap-1">
                <span className="text-xs uppercase tracking-[0.2em] font-black text-subtext1 group-hover:text-text transition-colors">
                  discovery_init --all
                </span>
                <span className="text-xl font-bold text-text flex items-center gap-2">
                   Explore All Projects
                   <Sparkles className="w-5 h-5 text-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
             </div>
             <div className="w-12 h-12 rounded-full bg-surface0/40 backdrop-blur-md flex items-center justify-center group-hover:bg-text group-hover:text-base transition-all transform group-hover:translate-x-2 shadow-md">
                <ChevronRight className="w-6 h-6" />
             </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
