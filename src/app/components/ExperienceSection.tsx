import React from "react";
import Image from "next/image";

type Experience = {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  logo: string;
};

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      company: "Amazon Web Services",
      position: "Software Development Engineer Intern",
      duration: "June - September 2025",
      location: "Seattle, WA",
      description:
        "Developed Rust-based post-quantum cryptography support for AWS hardware security modules. Worked on cryptograhpic SDKs (PKCS#11, JCE, OpenSSL) for exposing CloudHSM functionalities. Implemented Module-Lattice-Based CRYSTALS Dilithium (ML-DSA) cryptographic operation support.",
      logo: "/experience-images/Amazon.jpg",
    },
    {
      company: "Wise Agents",
      position: "Software Development Engineer Intern",
      duration: "December 2024 - March 2025",
      location: "Palo Alto, CA",
      description:
        "Automated ERP and CRM systems with agentic AI. Utilized Spring Boot to refactor Java microservice servers and React for frontend development. Worked with ApolloAPI, MySQL, and StripeAPI to create and maintain client prospecting databases and user profiles.",
      logo: "/experience-images/Wise Agents.png",
    },
    {
      company: "Logistics Plus",
      position: "Software Development Engineer Intern",
      duration: "June - September 2024",
      location: "Erie, PA",
      description:
        "Utilized ASP.NET Core to develop, maintain, and refactor warehousing web services and applications. Built customizable data models for client integrations and communication pipelines. Explored AI integrations using Azure ML Studio.",
      logo: "/experience-images/LP.png",
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-accent-dim">$</span> git log{" "}
            <span className="text-accent">--experience</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-surface border border-edge rounded-lg p-6 flex flex-col h-full transition-all duration-300 hover:border-accent-dim hover:shadow-[0_0_24px_rgba(74,222,128,0.08)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-14 h-14 shrink-0">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground leading-snug mb-1">
                      {experience.position}
                    </h3>
                    <h4 className="font-mono text-accent text-sm">
                      {experience.company}
                    </h4>
                  </div>
                </div>

                <div className="font-mono text-xs text-muted mb-4 space-y-1">
                  <p>
                    <span className="text-accent-dim">--when</span>{" "}
                    {experience.duration}
                  </p>
                  <p>
                    <span className="text-accent-dim">--where</span>{" "}
                    {experience.location}
                  </p>
                </div>

                <p className="text-muted text-sm leading-relaxed flex-grow">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
