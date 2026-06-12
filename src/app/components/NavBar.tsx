"use client";

import React, { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const NavBar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:left-5 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 max-w-[calc(100vw-1rem)]">
      <div className="bg-surface/80 backdrop-blur-md border border-edge rounded-2xl p-1.5 md:p-2 shadow-lg shadow-black/40">
        <div className="flex flex-row md:flex-col gap-1 md:gap-1.5">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2.5 rounded-xl text-left transition-all duration-300 ease-out ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600/35 to-blue-600/35 border border-violet-500/40 text-foreground font-semibold px-3 md:px-5 py-2 md:py-3 md:scale-105 shadow-[0_0_18px_rgba(139,92,246,0.25)]"
                    : "border border-transparent text-muted hover:text-foreground hover:bg-surface-hover px-2 md:px-3 py-2 md:py-2"
                }`}
              >
                <span
                  className={`rounded-full shrink-0 transition-all duration-300 ${
                    isActive
                      ? "w-2 h-2 bg-gradient-to-r from-violet-400 to-blue-400"
                      : "w-1.5 h-1.5 bg-muted/60"
                  }`}
                />
                <span
                  className={`transition-all duration-300 ${
                    isActive ? "text-sm md:text-base" : "text-xs md:text-sm"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
