"use client";

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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-900 card bg-base-200 shadow-xl h-full"
            >
              <div className="card-body flex flex-col h-full p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {experience.position}
                    </h3>
                    <h4 className="text-lg text-sky-400 mb-1">
                      {experience.company}
                    </h4>
                    <p className="text-sm text-gray-400 mb-1">
                      {experience.duration}
                    </p>
                    <p className="text-sm text-gray-400">
                      {experience.location}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 flex-grow">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
