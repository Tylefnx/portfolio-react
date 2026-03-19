"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { User } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("about");

  const details = [
    { title: t("mission.title"), content: t("mission.content") },
    { title: t("vision.title"), content: t("vision.content") },
    { title: t("ownership.title"), content: t("ownership.content") },
    { title: t("automation.title"), content: t("automation.content") },
  ];
 Broadway

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  return (
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-12 bg-transparent relative overflow-hidden z-0">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="max-w-6xl w-full mx-auto flex flex-col gap-12 lg:gap-20 z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-peach/10 border border-peach/20 flex items-center justify-center">
              <User className="w-6 h-6 text-peach" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal via-emerald to-green">
                {t("header.title")}
              </span>
            </h2>
          </div>
          <p className="text-xl lg:text-2xl text-subtext0 leading-relaxed max-w-3xl font-medium">
            {t("header.description")}
          </p>
        </motion.div>

        <div className="w-full h-px bg-surface0" />

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {details.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="flex flex-col gap-4 p-8 rounded-3xl bg-mantle/40 backdrop-blur-md border border-surface0 hover:border-surface2 transition-colors duration-300 group shadow-xl relative overflow-hidden"
            >
              {/* Subtle top ambient glow inside the card */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-peach/30 to-transparent opacity-50" />
              
              <h3 className="text-2xl text-text font-bold flex items-center gap-4 group-hover:text-peach transition-colors">
                <div className="w-12 h-12 rounded-xl bg-surface0/40 backdrop-blur-md border border-surface1 flex items-center justify-center text-peach group-hover:scale-110 transition-transform shadow-md">
                  &gt;
                </div>
                {item.title}
              </h3>
              <p className="text-subtext0 leading-relaxed font-medium">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
