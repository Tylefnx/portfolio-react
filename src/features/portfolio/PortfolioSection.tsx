"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import clsx from "clsx";

export default function PortfolioSection() {
  const t = useTranslations("portfolio.projects");
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const projects = [
    { id: "portfolio", key: "portfolio" },
    { id: "gymlogger", key: "gymlogger" },
    { id: "budgetbuddy", key: "budgetbuddy" },
    { id: "bsl", key: "bsl" },
  ];

  return (
    <section className="min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-6 lg:p-12 bg-base relative overflow-hidden">
      <div className="max-w-3xl w-full mx-auto flex flex-col gap-12 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl text-text font-bold mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-surface2" />
            <span className="text-mauve">~/</span>projects
            <span className="w-8 h-px bg-surface2" />
          </h2>
        </motion.div>

        <div className="flex flex-col border border-surface0 bg-mantle rounded-2xl overflow-hidden shadow-2xl">
          {projects.map((proj, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={proj.id}
                className={clsx(
                  "border-b border-surface0 last:border-b-0 transition-colors",
                  isExpanded ? "bg-surface0/30" : "hover:bg-surface0/10"
                )}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                >
                  <span className={clsx("text-lg font-semibold transition-colors", isExpanded ? "text-blue" : "text-text")}>
                    {t(`${proj.key}.title`)}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-subtext0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 flex flex-col gap-6">
                        <p className="text-subtext1 leading-relaxed border-l-2 border-blue pl-4">
                          {t(`${proj.key}.description`)}
                        </p>
                        <a
                          href={t(`${proj.key}.link`)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-text bg-surface1 w-max px-4 py-2 rounded-lg hover:bg-surface2 transition-colors border border-surface2 shadow-sm"
                        >
                          <Github className="w-4 h-4" />
                          View Source
                          <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-green/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
