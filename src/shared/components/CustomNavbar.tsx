"use client";

import { useAppStore } from "@/store/useAppStore";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import clsx from "clsx";
import { Link, useRouter, usePathname } from "@/i18n/routing";

export default function CustomNavbar() {
  const { activeSection, setDrawerOpen } = useAppStore();
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();

  // Full list of potential nav items
  const allNavItems = [
    { label: t("home"), index: 0, href: "/", onPage: "/" },
    { label: t("about"), index: 1, href: "/", onPage: "/" },
    { label: t("services"), index: 3, href: "/", onPage: "/" },
    { label: t("contact"), index: 4, href: "/", onPage: "/" },
    { label: "Terminal", index: 5, href: "/terminal", onPage: "/terminal" },
    { label: "Projects", index: 6, href: "/projects", onPage: "/projects" },
  ];

  // Filter items based on current page
  const navItems = allNavItems.filter(item => {
    if (pathname === "/") {
       // On home, show all section links + Terminal & Projects (but user said no portfolio in navbar if it's below)
       // Wait, "portfolio linki aşağıda var zaten navbar'a gerek yok" 
       // refers to the PORTFOLIO (projects) section link on the home page.
       if (item.href === "/projects") return false; 
       return true;
    }
    // On other pages, only show Home and the current page link (or just Home + relevant others)
    // "sadece o sayfada mevcut olan yerler olsun"
    if (pathname === "/projects") {
       return item.href === "/" || item.href === "/projects";
    }
    if (pathname === "/terminal") {
       return item.href === "/" || item.href === "/terminal";
    }
    return true;
  });

  const handleNavClick = (item: typeof allNavItems[0]) => {
    if (item.href !== pathname) {
      router.push(item.href as any);
      return;
    }

    if (pathname === "/") {
      const sections = document.querySelectorAll("section");
      if (sections[item.index]) {
        sections[item.index].scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 lg:p-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Logo/Brand */}
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
