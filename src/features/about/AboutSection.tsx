"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionBackground from "@/shared/components/SectionBackground";

export default function AboutSection() {
  const t = useTranslations("about");

  const details = [
    { title: t("mission.title"), content: t("mission.content") },
    { title: t("vision.title"), content: t("vision.content") },
  ];

  return (
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-12 bg-transparent relative z-0">
      <SectionBackground color1="bg-peach/30" color2="bg-sapphire/30" />
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-12 z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl lg:text-4xl text-text font-bold">
              / <span className="text-blue">{t("header.title")}</span>
            </h2>
          </div>
          <p className="text-lg lg:text-xl text-subtext0 leading-relaxed max-w-2xl">
            {t("header.description")}
          </p>
        </motion.div>

        <div className="w-full h-px bg-surface0" />

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-4 p-8 rounded-3xl bg-mantle/90 backdrop-blur-md border border-surface0 hover:border-surface2 transition-all duration-500 group shadow-xl hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle top ambient glow inside the card */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-peach/30 to-transparent opacity-50" />
              
              <h3 className="text-2xl text-text font-bold flex items-center gap-4 group-hover:text-peach transition-colors">
                <div className="w-12 h-12 rounded-xl bg-surface0/90 backdrop-blur-md border border-surface1 flex items-center justify-center text-peach group-hover:scale-110 transition-transform shadow-md">
                  &gt;
                </div>
                {item.title}
              </h3>
              <p className="text-subtext0 leading-relaxed font-medium">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
