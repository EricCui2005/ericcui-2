import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Circular Image Placeholder */}
          <div className="w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400 text-lg">Your Photo</span>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              I am a passionate developer with a keen interest in building
              innovative solutions. My journey in technology has equipped me
              with a diverse set of skills and experiences that I&apos;m excited
              to share and apply to new challenges.
            </p>
            <p className="text-lg text-gray-300">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing my
              knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
