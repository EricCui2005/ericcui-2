import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-accent-dim">$</span> cat{" "}
            <span className="text-accent">about.md</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-64 h-64 shrink-0 p-3">
              <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent" />
              <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent" />
              <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent" />
              <div className="relative w-full h-full">
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
                <span className="text-accent">Let&apos;s connect!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
