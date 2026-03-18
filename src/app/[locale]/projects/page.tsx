"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ArrowLeft, Terminal, Layout, Shield, Database } from "lucide-react";
import { Link } from "@/i18n/routing";
import SectionBackground from "@/shared/components/SectionBackground";

const projectIcons = {
  portfolio: <Layout className="w-8 h-8" />,
  gymlogger: <Database className="w-8 h-8" />,
  budgetbuddy: <Terminal className="w-8 h-8" />,
  bsl: <Shield className="w-8 h-8" />,
};

const projectColors = {
  portfolio: "border-blue text-blue bg-blue/5",
  gymlogger: "border-green text-green bg-green/5",
  budgetbuddy: "border-peach text-peach bg-peach/5",
  bsl: "border-mauve text-mauve bg-mauve/5",
};

export default function ProjectsPage() {
  const t = useTranslations("portfolio.projects");
  const navT = useTranslations("nav");
  const containerRef = useRef<HTMLElement>(null);

  const projects = [
    { id: "portfolio", key: "portfolio" },
    { id: "gymlogger", key: "gymlogger" },
    { id: "budgetbuddy", key: "budgetbuddy" },
    { id: "bsl", key: "bsl" },
  ];

  return (
    <main ref={containerRef} className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory bg-base custom-scrollbar relative">
      
      {/* Snap Sections */}
      {projects.map((proj, index) => (
        <section
          key={proj.id}
          className="h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden bg-transparent border-b border-surface0 last:border-b-0 z-0"
        >
          <SectionBackground 
            color1={index % 2 === 0 ? "bg-blue/30" : "bg-green/30"} 
            color2={index % 2 === 0 ? "bg-mauve/30" : "bg-peach/30"} 
          />
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center z-10">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border-2 ${projectColors[proj.id as keyof typeof projectColors]} bg-surface0/70 backdrop-blur-md transition-transform duration-500 hover:scale-110`}>
                {projectIcons[proj.id as keyof typeof projectIcons]}
              </div>
              
              <div className="space-y-4">
                 <h2 className="text-4xl lg:text-5xl font-bold text-text">
                   {t(`${proj.key}.title`)}
                 </h2>
                 <p className="text-xl text-subtext0 leading-relaxed max-w-xl">
                   {t(`${proj.key}.description`)}
                 </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                 {/* Dummy tags for now, usually would come from data */}
                 {["Next.js", "TypeScript", "Tailwind"].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-surface0/70 backdrop-blur-md rounded-lg text-xs font-mono text-subtext1 border border-surface1 shadow-sm">
                      {tag}
                   </span>
                 ))}
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a
                  href={t(`${proj.key}.link`)}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-3.5 bg-blue text-crust hover:bg-blue/90 hover:scale-105 transition-all duration-300 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue/20"
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
              </div>
            </motion.div>

            {/* Project Visual Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <div className="aspect-video bg-mantle/70 backdrop-blur-xl rounded-3xl border border-surface0 shadow-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue/5 group-hover:bg-blue/10 transition-colors duration-500" />
                  <span className="text-surface2 font-bold tracking-widest uppercase italic group-hover:scale-110 transition-transform duration-500">
                     [ {proj.id} preview ]
                  </span>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green/40" />
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Background Number */}
          <div className="absolute right-12 bottom-12 text-[12rem] lg:text-[20rem] font-black text-text/5 leading-none select-none pointer-events-none">
            0{index + 1}
          </div>
        </section>
      ))}
    </main>
  );
}
