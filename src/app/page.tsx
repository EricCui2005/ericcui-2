import React from "react";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <LandingSection />
      <AboutSection />
      {/* <ExpertiseSection /> */}
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
