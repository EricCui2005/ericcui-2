import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-64 h-64 relative">
            <Image
              src="/Eric.jpeg"
              alt="Eric Cui"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              Hi there! I&apos;m Eric Cui, a Computer Science and Electrical
              Engineering student at Stanford University specializing in
              Artificial Intelligence and Harware & Software. I&apos;m
              passionate about creating innovative solutions at the intersection
              of full-stack development, deep learning, and cutting-edge AI
              research. My experience lies in building scalable web
              applications, integrating natural language processing systems, and
              managing robust API services.
            </p>
            <p className="text-lg text-gray-300">
              I&apos;m always eager to tackle challenging projects and
              collaborate with others to make an impact. Let&apos;s connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
