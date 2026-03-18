"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Smartphone, Server, Terminal, Shield } from "lucide-react";
import SectionBackground from "@/shared/components/SectionBackground";

export default function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    { key: "mobile", icon: <Smartphone className="w-8 h-8 text-blue" /> },
    { key: "backend", icon: <Server className="w-8 h-8 text-green" /> },
    { key: "system", icon: <Terminal className="w-8 h-8 text-yellow" /> },
    { key: "security", icon: <Shield className="w-8 h-8 text-red" /> },
  ];

  return (
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-12 bg-transparent relative overflow-hidden z-0">
      <SectionBackground color1="bg-yellow/30" color2="bg-teal/30" />
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl text-text font-bold mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-surface2" />
            <span className="text-teal">~/</span>services
            <span className="w-8 h-px bg-surface2" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.key}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.1 }}
              className="bg-mantle/40 backdrop-blur-md border border-surface0 hover:border-surface2 transition-all duration-500 p-8 rounded-3xl flex flex-col gap-5 group shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-surface0/40 backdrop-blur-md border border-surface1 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                {svc.icon}
              </div>
              <h3 className="text-xl text-text font-bold">
                {t(`items.${svc.key}.title`)}
              </h3>
              <p className="text-subtext0 leading-relaxed text-sm">
                {t(`items.${svc.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
