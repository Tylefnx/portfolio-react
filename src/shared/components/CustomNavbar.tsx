"use client";

import { useAppStore } from "@/store/useAppStore";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import clsx from "clsx";

export default function CustomNavbar() {
  const { activeSection, setDrawerOpen } = useAppStore();
  const t = useTranslations("nav");

  const navItems = [
    { label: t("home"), index: 0 },
    { label: t("about"), index: 1 },
    { label: t("portfolio"), index: 2 },
    { label: t("services"), index: 3 },
    { label: t("contact"), index: 4 },
  ];

  const handleNavClick = (index: number) => {
    const sections = document.querySelectorAll("section");
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 lg:p-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Logo/Brand */}
        <div className="text-xl font-bold tracking-tight text-text">
          <span className="text-blue">~/</span>tayfunucuncu
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 bg-mantle/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-surface0/50">
          {navItems.map((item) => (
            <button
              key={item.index}
              onClick={() => handleNavClick(item.index)}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-blue",
                activeSection === item.index ? "text-blue" : "text-subtext0"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 bg-mantle rounded-xl border border-surface0 text-text"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
