import React from "react";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import ExpertiseSection from "./components/ExpertiseSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <LandingSection />
      <AboutSection />
      {/* <ExpertiseSection /> */}
      <ProjectsSection />
    </main>
  );
}
