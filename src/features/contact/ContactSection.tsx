"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("contact");
  const footerT = useTranslations("footer");

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
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col pt-32 pb-20 lg:pt-40 lg:pb-32 p-6 lg:p-12 bg-transparent relative overflow-hidden z-0">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="flex-1 max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 z-10 py-12"
      >
        {/* Left Side: Text */}
        <motion.div variants={itemVariants} className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-peach via-yellow to-flamingo">
              {t("title")}
            </span>
          </h2>
          <p className="text-lg text-subtext0 leading-relaxed whitespace-pre-line">
            {t("subtitle")}
          </p>
          
          <div className="flex flex-col gap-4 mt-8 bg-mantle/40 backdrop-blur-md p-6 rounded-2xl border border-surface0 w-max shadow-lg">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-surface0/40 backdrop-blur-md border border-surface1 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-mauve" />
              </div>
              <span className="text-text font-medium">tayfunucuncu@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-surface0/40 backdrop-blur-md border border-surface1 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-peach" />
              </div>
              <span className="text-text font-medium">Remote / Global</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[450px] bg-mantle/40 backdrop-blur-xl border border-surface0 p-8 rounded-3xl shadow-2xl"
        >
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-subtext1">
                {t("form.name")}
              </label>
              <input
                type="text"
                placeholder={t("form.namePlaceholder")}
                className="w-full bg-base/40 backdrop-blur-md border border-surface0 p-3 rounded-xl text-text placeholder:text-surface2 focus:outline-none focus:border-blue transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-subtext1">
                {t("form.email")}
              </label>
              <input
                type="email"
                placeholder={t("form.emailPlaceholder")}
                className="w-full bg-base/40 backdrop-blur-md border border-surface0 p-3 rounded-xl text-text placeholder:text-surface2 focus:outline-none focus:border-blue transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-subtext1">
                {t("form.message")}
              </label>
              <textarea
                rows={4}
                placeholder={t("form.messagePlaceholder")}
                className="w-full bg-base/40 backdrop-blur-md border border-surface0 p-3 rounded-xl text-text placeholder:text-surface2 focus:outline-none focus:border-blue transition-all resize-none"
              />
            </div>
            <button className="w-full bg-blue text-crust py-3.5 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue/20 flex items-center justify-center gap-2 mt-2">
              {t("form.submit")}
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </motion.div>
      {/* Footer */}
      <div className="w-full h-16 border-t border-surface0 mt-auto flex items-center justify-center text-sm text-surface2 pointer-events-none">
        {footerT("copyright")}
      </div>
    </section>
  );
}
