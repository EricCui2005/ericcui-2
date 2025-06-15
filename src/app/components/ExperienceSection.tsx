"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Slightly more than card width (384px)
      const currentScrollLeft = scrollContainerRef.current.scrollLeft;
      const newScrollLeft =
        direction === "left"
          ? currentScrollLeft - scrollAmount
          : currentScrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const experiences: Experience[] = [
    {
      company: "Amazon",
      position: "Software Development Engineer Intern",
      duration: "June - Present 2025",
      location: "Seattle, WA",
      description:
        "Working on Rust-based cryptographic SDKs for exposing AWS CloudHSM functionality.",
      logo: "/experience-images/Amazon.jpg",
    },
    {
      company: "Wise Agents",
      position: "Software Development Engineer Intern",
      duration: "December 2024 - March 2025",
      location: "Palo Alto, CA",
      description:
        "Automated ERP and CRM systems with agentic AI. Utilized Spring Boot to refactor Java microservice servers and React for frotnend development. Worked with ApolloAPI, MySQL, and StripeAPI to create and maintain client prospecting databases and user profiles.",
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
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className={`flex-shrink-0 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scrollbar-hide flex-grow"
            onScroll={checkScrollability}
          >
            <div className="flex gap-8 w-max">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="bg-gray-900 card bg-base-200 shadow-xl w-96 flex-shrink-0"
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

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className={`flex-shrink-0 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
