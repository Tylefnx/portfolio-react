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

  const navItems = [
    { label: t("home"), index: 0, href: "/" },
    { label: t("about"), index: 1, href: "/" },
    { label: t("portfolio"), index: 2, href: "/" },
    { label: t("services"), index: 3, href: "/" },
    { label: t("contact"), index: 4, href: "/" },
    { label: "Terminal", index: 5, href: "/terminal" },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.href === "/terminal") {
      router.push("/terminal");
      return;
    }

    if (pathname !== "/") {
       router.push("/");
       // We might need a small delay or use a layout effect to scroll after nav, 
       // but for now, simple redirect works. 
       // Better: the Home page's IntersectionObserver will pick up the scroll state if we use hash or state.
       return;
    }

    const sections = document.querySelectorAll("section");
    if (sections[item.index]) {
      sections[item.index].scrollIntoView({ behavior: "smooth" });
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
              key={item.index}
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
