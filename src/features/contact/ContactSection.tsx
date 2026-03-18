"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import SectionBackground from "@/shared/components/SectionBackground";

export default function ContactSection() {
  const t = useTranslations("contact");
  const footerT = useTranslations("footer");

  return (
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col p-6 lg:p-12 bg-transparent relative overflow-hidden z-0">
      <SectionBackground color1="bg-red/30" color2="bg-pink/30" />
      <div className="flex-1 max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 z-10 py-12">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 flex flex-col gap-6"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text">
            {t("title")}
          </h2>
          <p className="text-lg text-subtext0 leading-relaxed whitespace-pre-line">
            {t("subtitle")}
          </p>
          
          <div className="flex flex-col gap-4 mt-8 bg-mantle p-6 rounded-2xl border border-surface0 w-max">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface0 flex items-center justify-center">
                <Mail className="w-5 h-5 text-mauve" />
              </div>
              <span className="text-text font-medium">tayfunucuncu@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface0 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-peach" />
              </div>
              <span className="text-text font-medium">Remote / Global</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-[450px] bg-mantle p-8 rounded-3xl border border-surface0 shadow-2xl"
        >
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-subtext1">
                {t("form.name")}
              </label>
              <input
                type="text"
                placeholder={t("form.namePlaceholder")}
                className="w-full bg-base border border-surface0 p-3 rounded-xl text-text placeholder:text-surface2 focus:outline-none focus:border-blue transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-subtext1">
                {t("form.email")}
              </label>
              <input
                type="email"
                placeholder={t("form.emailPlaceholder")}
                className="w-full bg-base border border-surface0 p-3 rounded-xl text-text placeholder:text-surface2 focus:outline-none focus:border-blue transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-subtext1">
                {t("form.message")}
              </label>
              <textarea
                rows={4}
                placeholder={t("form.messagePlaceholder")}
                className="w-full bg-base border border-surface0 p-3 rounded-xl text-text placeholder:text-surface2 focus:outline-none focus:border-blue transition-colors resize-none"
              />
            </div>
            <button className="w-full bg-blue text-base py-3.5 rounded-xl font-bold hover:bg-blue/90 transition-colors shadow-lg shadow-blue/20 flex items-center justify-center gap-2 mt-2">
              {t("form.submit")}
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="w-full h-16 border-t border-surface0 mt-auto flex items-center justify-center text-sm text-surface2 pointer-events-none">
        {footerT("copyright")}
      </div>
    </section>
  );
}
