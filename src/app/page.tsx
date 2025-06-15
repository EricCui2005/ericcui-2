import React from "react";
import NavBar from "./components/NavBar";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <LandingSection />
      <AboutSection />
      {/* <ExpertiseSection /> */}
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
