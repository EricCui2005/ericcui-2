import React from "react";
import NavBar from "./components/NavBar";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import UnderConstruction from "./components/UnderConstruction";

export default function Home() {
  return (
    <main>
      <div className="opacity-40 blur-md select-none pointer-events-none">
        <NavBar />
        <LandingSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <UnderConstruction />
    </main>
  );
}
