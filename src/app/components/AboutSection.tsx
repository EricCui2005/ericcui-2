import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            About
            <span className="block w-16 h-1 mt-3 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 shrink-0 rounded-2xl p-[2px] bg-gradient-to-br from-violet-500 to-blue-500 shadow-[0_0_32px_rgba(139,92,246,0.25)]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/Eric.jpeg"
                  alt="Eric Cui"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex-1">
              <p className="text-lg text-muted leading-relaxed mb-6">
                Hi there! I&apos;m Eric Cui, a Stanford CS + EE undergrad
                specializing in Artificial Intelligence and Hardware &
                Software. I&apos;m passionate about creating innovative
                solutions at the intersection of full-stack development and
                cutting-edge AI research. My experience spans building secure
                infrastructure at scale, developing scalable web applications,
                managing robust API services, and designing user-facing
                experiences. I&apos;m currently interested in Web3 and applied
                AI.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                I&apos;m always eager to tackle challenging problems and
                collaborate with others to make an impact.{" "}
                <span className="text-accent font-medium">
                  Let&apos;s connect!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
