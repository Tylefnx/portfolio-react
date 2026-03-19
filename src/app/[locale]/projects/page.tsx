"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Terminal, Layout, Shield, Database, ArrowLeft, Activity, Radio, Video, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import DynamicBackground from "@/shared/components/DynamicBackground";
import { useScroll } from "framer-motion";

const projectIcons = {
  industaiq: <Activity className="w-8 h-8" />,
  telemetry: <Radio className="w-8 h-8" />,
  media_server: <Video className="w-8 h-8" />,
  portfolio: <Layout className="w-8 h-8" />,
  gymlogger: <Database className="w-8 h-8" />,
  budgetbuddy: <Terminal className="w-8 h-8" />,
  bsl: <Shield className="w-8 h-8" />,
};

const projectColors = {
  industaiq: "border-amber text-amber bg-amber/5",
  telemetry: "border-lavender text-lavender bg-lavender/5",
  media_server: "border-green text-green bg-green/5",
  bls: "border-mauve text-mauve bg-mauve/5",
  portfolio: "border-blue text-blue bg-blue/5",
  gymlogger: "border-green text-green bg-green/5",
  budgetbuddy: "border-peach text-peach bg-peach/5",
  bsl: "border-mauve text-mauve bg-mauve/5",
};

interface ProjectGalleryProps {
  projectId: string;
  images: string[];
}

function ProjectGallery({ projectId, images }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);

  const next = () => { setIndex((prev) => (prev + 1) % images.length); setError(false); };
  const prev = () => { setIndex((prev) => (prev - 1 + images.length) % images.length); setError(false); };

  const fallbackUI = (
    <>
      <div className="absolute inset-0 bg-blue/5 group-hover:bg-blue/10 transition-colors duration-500" />
      <span className="text-surface2 font-bold tracking-widest uppercase italic group-hover:scale-110 transition-transform duration-500">
        [ {projectId} preview {images.length > 0 ? index + 1 : ''} ]
      </span>
    </>
  );

  return (
    <div className="aspect-video bg-mantle/40 backdrop-blur-xl rounded-3xl border border-surface0 shadow-2xl flex items-center justify-center relative overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
           key={index}
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -20 }}
           transition={{ duration: 0.3 }}
           className="absolute inset-0 flex items-center justify-center"
        >
          {images.length > 0 && !error ? (
            <img 
              src={images[index]} 
              alt={`${projectId} preview ${index + 1}`}
              className="w-full h-full object-cover"
              onError={() => setError(true)}
            />
          ) : fallbackUI}
        </motion.div>
      </AnimatePresence>


      {images.length > 1 && (
        <>
          <button 
            onClick={prev}
            className="absolute left-4 p-2 bg-crust/50 hover:bg-blue/20 rounded-full border border-surface0 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all z-20"
          >
            <ChevronLeft className="w-6 h-6 text-text" />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 p-2 bg-crust/50 hover:bg-blue/20 rounded-full border border-surface0 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all z-20"
          >
            <ChevronRight className="w-6 h-6 text-text" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? 'bg-blue w-4' : 'bg-surface2'}`} 
              />
            ))}
          </div>
        </>
      )}

      {/* Decorative dots (always visible) */}
      <div className="absolute top-4 left-4 flex gap-1.5 z-20">
        <div className="w-2.5 h-2.5 rounded-full bg-red/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-green/40" />
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const t = useTranslations("portfolio.projects");
  const tNav = useTranslations("nav");
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const projects = [
    { id: "industaiq", key: "industaiq", tags: ["Python", "RAG", "ML", "Self-Hosted"], images: ["/projects/industaiq/1.png", "/projects/industaiq/2.png"] },
    { id: "telemetry", key: "telemetry", tags: ["Rust", "Python", "Flutter", "Docker"], images: ["/projects/telemetry/1.png"] },
    { id: "media_server", key: "media_server", tags: ["Go", "Flutter", "Linux", "Self-Hosted"], images: ["/projects/media_server/1.png"] },
    { id: "bls", key: "bls", tags: ["C", "Linux", "FreeBSD"], images: ["/projects/bls/1.png"] },
    { id: "portfolio", key: "portfolio", tags: ["Next.js", "TypeScript", "Tailwind", "Self-Hosted"], images: ["/projects/portfolio/1.png"] },
  ];




  return (
    <>
      <DynamicBackground scrollYProgress={scrollYProgress} />
      
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-8 left-8 z-50 transition-all"
      >
        <Link 
          href="/" 
          className="group flex items-center gap-3 px-5 py-2.5 bg-mantle/60 backdrop-blur-xl border border-surface0 hover:border-blue/50 rounded-2xl transition-all duration-300 hover:-translate-x-1 shadow-2xl"
        >
          <ArrowLeft className="w-5 h-5 text-blue group-hover:scale-110 transition-transform" />
          <span className="text-sm font-bold text-text group-hover:text-blue transition-colors">
            {tNav("backToHome")}
          </span>
        </Link>
      </motion.div>

      <main ref={containerRef} className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory bg-transparent custom-scrollbar relative">
        
        {/* Snap Sections */}
      {projects.map((proj, index) => (
        <section
          key={proj.id}
          className="h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden bg-transparent border-b border-surface0 last:border-b-0 z-0"
        >
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center z-10">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col gap-6"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border-2 ${projectColors[proj.id as keyof typeof projectColors]} bg-surface0/40 backdrop-blur-md transition-transform duration-500 hover:scale-110`}>
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
                 {proj.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-surface0/40 backdrop-blur-md rounded-lg text-xs font-mono text-subtext1 border border-surface1 shadow-sm">
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

              {proj.id === 'portfolio' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mt-8 p-4 bg-blue/10 border border-blue/20 rounded-xl backdrop-blur-sm max-w-fit"
                >
                  <p className="text-sm font-medium text-blue flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {t('portfolio.blog_teaser')}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Project Visual Gallery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <ProjectGallery projectId={proj.id} images={proj.images || []} />
            </motion.div>
          </div>

          {/* Background Number */}
          <div className="absolute right-12 bottom-12 text-[12rem] lg:text-[20rem] font-black text-text/5 leading-none select-none pointer-events-none">
            0{index + 1}
          </div>
        </section>
      ))}
      </main>
    </>
  );
}
