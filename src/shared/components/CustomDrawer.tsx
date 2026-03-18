"use client";

import { useAppStore } from "@/store/useAppStore";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import clsx from "clsx";
import { useRouter, usePathname } from "@/i18n/routing";

export default function CustomDrawer() {
  const { isDrawerOpen, setDrawerOpen, activeSection } = useAppStore();
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
    setDrawerOpen(false);
    
    if (item.href === "/terminal") {
      router.push("/terminal");
      return;
    }

    if (pathname !== "/") {
      router.push("/");
      return;
    }

    const sections = document.querySelectorAll("section");
    if (sections[item.index]) {
      sections[item.index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 bg-crust/80 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300",
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setDrawerOpen(false)}
      />
      <div
        className={clsx(
          "fixed top-0 right-0 h-[100dvh] w-64 bg-mantle border-l border-surface0 z-[60] p-6 lg:hidden transition-transform duration-300 ease-in-out shadow-2x",
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 text-subtext1 hover:text-text transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.index}
              onClick={() => handleNavClick(item)}
              className={clsx(
                "text-left text-lg font-medium transition-colors",
                (pathname === item.href && (pathname !== "/" || activeSection === item.index)) ? "text-blue" : "text-subtext0"
              )}
            >
              / {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
