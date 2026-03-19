"use client";

import { useAppStore } from "@/store/useAppStore";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import clsx from "clsx";
import { Link, usePathname } from "@/i18n/routing";
import { useScrollToSection } from "@/shared/hooks/useScrollToSection";
import { SECTIONS } from "@/shared/constants/sections";

export default function CustomNavbar() {
  const { activeSection, setDrawerOpen } = useAppStore();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const { scrollToSection } = useScrollToSection();

  // Full list of potential nav items
  const allNavItems = [
    { label: t("home"), index: SECTIONS[0].index, href: "/" as const },
    { label: t("about"), index: SECTIONS[1].index, href: "/" as const },
    { label: t("services"), index: SECTIONS[3].index, href: "/" as const },
    { label: t("contact"), index: SECTIONS[4].index, href: "/" as const },
    { label: "Projects", index: 6, href: "/projects" as const },
  ];

  // Filter items based on current page
  const navItems = allNavItems.filter(item => {
    if (pathname === "/") {
       // On home, show section links (except projects which is a separate page now)
       return item.href === "/";
    }
    // On other pages, only show Home (to allow return)
    if (pathname === "/projects" || pathname === "/terminal") {
       return item.href === "/";
    }
    return true;
  });

  const handleNavClick = (item: typeof allNavItems[0]) => {
    scrollToSection(item.index);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base/5 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border-b border-surface0/10 lg:border-none transition-all duration-300">
      <div className="w-full flex items-center justify-between px-6 lg:px-12 py-6 lg:py-8">
        {/* Logo/Brand - Always returns Home */}
        <Link href="/" className="text-xl font-bold tracking-tight text-text hover:opacity-80 transition-opacity">
          <span className="text-blue">~/</span>tayfunucuncu
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 bg-mantle/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-surface0/50 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-blue",
                (pathname === item.href && (pathname !== "/" || activeSection === item.index)) ? "text-blue" : "text-subtext0"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 bg-mantle rounded-xl border border-surface0 text-text shadow-md hover:bg-surface0 transition-colors"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
