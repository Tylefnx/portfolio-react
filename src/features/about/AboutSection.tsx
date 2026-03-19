"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { Zap, ShieldCheck, Layers, Cpu } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("about");

  const details = [
    { title: t("mission.title"), content: t("mission.content"), icon: <Zap className="w-7 h-7" /> },
    { title: t("vision.title"), content: t("vision.content"), icon: <ShieldCheck className="w-7 h-7" /> },
    { title: t("ownership.title"), content: t("ownership.content"), icon: <Layers className="w-7 h-7" /> },
    { title: t("automation.title"), content: t("automation.content"), icon: <Cpu className="w-7 h-7" /> },
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
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-32 p-6 lg:p-12 bg-transparent relative overflow-hidden z-0">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="max-w-6xl w-full mx-auto flex flex-col gap-16 z-10"
      >
        {/* Centered Header */}
        <motion.div variants={itemVariants} className="text-center flex flex-col gap-6">
          <h2 className="text-3xl lg:text-5xl font-black tracking-tighter flex items-center justify-center gap-4">
            <span className="w-16 h-1 rounded-full bg-gradient-to-r from-transparent to-teal/40" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal via-emerald to-green">
              {t("header.title")}
            </span>
            <span className="w-16 h-1 rounded-full bg-gradient-to-l from-transparent to-green/40" />
          </h2>
          <p className="text-lg lg:text-xl text-subtext0 leading-relaxed max-w-2xl mx-auto font-medium">
            {t("header.description")}
          </p>
        </motion.div>

        {/* Details Grid (4-column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {details.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="flex flex-col gap-5 p-8 rounded-3xl bg-mantle/40 backdrop-blur-md border border-surface0 hover:border-surface2 transition-colors duration-300 group shadow-xl relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-xl bg-surface0/40 backdrop-blur-md border border-surface1 flex items-center justify-center text-teal group-hover:scale-110 transition-transform duration-300 shadow-md">
                {item.icon}
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl text-text font-bold group-hover:text-teal transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-subtext0 leading-relaxed text-sm font-medium">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
