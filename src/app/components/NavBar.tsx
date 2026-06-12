"use client";

import React from "react";

const NavBar = () => {
  const navItems = [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "experience", label: "experience" },
    { id: "projects", label: "projects" },
    { id: "contact", label: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-max max-w-[calc(100vw-1rem)]">
      <div className="bg-surface/90 backdrop-blur-md border border-edge rounded-lg px-2 sm:px-4 py-2.5 shadow-lg shadow-black/40">
        <div className="flex items-center gap-5 font-mono text-sm">
          <button
            onClick={() => scrollToSection("home")}
            className="hidden sm:block text-accent font-semibold hover:text-accent-strong transition-colors duration-200"
          >
            ~/eric
          </button>
          <div className="hidden sm:block h-4 w-px bg-edge" />
          <div className="flex gap-0.5 sm:gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-1.5 sm:px-2.5 py-1 rounded text-xs sm:text-sm text-muted hover:text-accent hover:bg-surface-hover transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
