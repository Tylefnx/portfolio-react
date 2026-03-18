"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function AboutSection() {
  const t = useTranslations("about");

  const details = [
    { title: t("mission.title"), content: t("mission.content") },
    { title: t("vision.title"), content: t("vision.content") },
  ];

  return (
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-12 bg-mantle relative">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="flex flex-col gap-3 p-6 rounded-2xl bg-base border border-surface0 hover:border-surface1 transition-colors group"
            >
              <h3 className="text-xl text-text font-semibold flex items-center gap-2">
                <span className="text-green group-hover:text-peach transition-colors">
                  &gt;
                </span>{" "}
                {item.title}
              </h3>
              <p className="text-subtext0 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
