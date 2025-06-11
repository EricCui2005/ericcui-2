import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-6">
            I am a passionate developer with a keen interest in building
            innovative solutions. My journey in technology has equipped me with
            a diverse set of skills and experiences that I&apos;m excited to
            share and apply to new challenges.
          </p>
          <p className="text-lg text-gray-300">
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open-source projects, or sharing my
            knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
