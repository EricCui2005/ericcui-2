"use client";
import React, { useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: {
    name: string;
    link: string;
  }[];
};

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const projects: Project[] = [
    {
      title: "Pretrained Vision Models for Dermascopic Image Analysis",
      description:
        "A medical imaging research study exploring finetuning pretrained vision models for downstream dermascopic image analysis. Studied DINOv2 and ViT architectures with lossy image augmentation techniques.",
      technologies: ["PyTorch", "Python", "Hugging Face", "Weights and Biases"],
      image: "/project-images/ISIC.png",
      links: [
        {
          name: "github",
          link: "https://github.com/EricCui2005/CS231N",
        },
        {
          name: "report",
          link: "https://drive.google.com/file/d/1dgttbOOVdejsM7S5hZa4scnXucNojkiQ/view?usp=sharing",
        },
      ],
    },
    {
      title: "League of Legends Match Prediction Using Stochastic Matrices",
      description:
        "A LoL match prediction model using stochastic matrices and Markov chains. Architected a discrete-time Markov chain model to quantify game state transitions and predict match outcomes. ",
      technologies: [
        "RiotGames API",
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
      image: "/project-images/LoL.png",
      links: [
        {
          name: "github",
          link: "https://github.com/EricCui2005/LoL-Analytics",
        },
        {
          name: "report",
          link: "https://drive.google.com/file/d/1xxVapXsMOevBHwCXgZbT04-qrjk8HhRr/view?usp=sharing",
        },
      ],
    },
    {
      title: 'TreeTrash: TreeHacks 2025 "Most Creative Use of OpenAI API" 2nd',
      description:
        "A computer vision pipeline for identifying incorrectly sorted waste items, winning 2nd Prize at Stanford TreeHacks 2025. Integrated YOLOv8 object detection, OpenCV preprocessing, and vision models for waste classification to generate sustainability reports.",
      technologies: [
        "OpenAI API",
        "YOLOv8",
        "OpenCV",
        "Gemini Pro",
        "Next.js",
        "GPT-4o",
      ],
      image: "/project-images/TreeTrash.png",
      links: [
        {
          name: "github",
          link: "https://github.com/EricCui2005/treehacks-2025",
        },
        {
          name: "devpost",
          link: "https://devpost.com/software/treetrash",
        },
      ],
    },
    {
      title: "Stanford Scheduler",
      description:
        "A Z3 theorem-powered Stanford course scheduling application capable of incorporating degree program requirements and user preferences to output optimal 4-year course schedules.",
      technologies: [
        "Node.js",
        "Tailwind",
        "Next.js",
        "React",
        "MongoDB",
        "Flask",
        "Python",
      ],
      image: "/project-images/Stanford Scheduler.svg",
      links: [
        {
          name: "github",
          link: "https://github.com/ChapSpace/CourseConstrainSolverBackend",
        },
      ],
    },
    {
      title: "Behavioral Cloning in 2048",
      description:
        "A research study exploring AI play in 2048 with deep behavioral cloning neural networks trained on expert data generated from Monte Carlo Tree Search.",
      technologies: [
        "C++",
        "Python",
        "Tqdm",
        "Tkinter",
        "Google Colab",
        "Jupyter Notebook",
        "TensorFlow",
      ],
      image: "/project-images/2048.svg",
      links: [
        {
          name: "github",
          link: "https://github.com/EricCui2005/2048",
        },
        {
          name: "report",
          link: "https://drive.google.com/file/d/1O7x6gZ0GiAALIRFp8dv8l2TGeE0QlWSU/view?pli=1",
        },
      ],
    },
    {
      title: "Education Technology Copilot",
      description:
        "An NLP-powered education technology copilot in partnership with Subject Learning capable of generating module-specific supplementary learning materials and supporting content-based timestamp seeking.",
      technologies: ["OpenAI API", "Tailwind", "Node.js", "Next.js", "React"],
      image: "/project-images/Subject.svg",
      links: [
        {
          name: "github",
          link: "https://github.com/EricCui2005/subject-sandbox",
        },
      ],
    },
    {
      title: "Chihuahua, or Muffin?",
      description:
        "A research study exploring training convolutional neural networks to differentiate between muffin-esque chihuahuas and dog-like blueberry muffins.",
      technologies: ["TensorFlow", "Python", "Google Colab"],
      image: "/project-images/Chuffin.svg",
      links: [
        {
          name: "github",
          link: "https://github.com/EricCui2005/Chuffin",
        },
        {
          name: "report",
          link: "https://drive.google.com/file/d/1rj0hPTKIullq8Tfltbj2IXPIyfsg0rhr/view",
        },
      ],
    },
    {
      title: "Words",
      description:
        "A stylized dictionary and thesuarus offering a seamless all-in-one wordsmithing experience.",
      technologies: [
        "APIs",
        "React",
        "Next.js",
        "Tailwind",
        "Node.js",
        "Vercel",
      ],
      image: "/project-images/Words.svg",
      links: [
        {
          name: "github",
          link: "https://github.com/EricCui2005/words",
        },
        {
          name: "website",
          link: "https://words-drab.vercel.app/",
        },
      ],
    },
    {
      title: "AI for Nine Men's Morris",
      description:
        "A research study exploring AI play in Nine Men's Morris using recursive decision-making algorithms and custom game evaluation routines.",
      technologies: ["Replit", "Python", "Google Colab"],
      image: "/project-images/NMM.svg",
      links: [
        {
          name: "github",
          link: "https://github.com/EricCui2005/Nine-Mens-Morris",
        },
        {
          name: "report",
          link: "https://drive.google.com/file/d/1DelBpF1LLmoTEyKdarjO7lrHgJN2c7Z7/view",
        },
      ],
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const handleShowLess = () => {
    setIsAnimating(true);
    // Wait for fade-out animation to complete before hiding cards
    setTimeout(() => {
      setShowAll(false);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-accent-dim">$</span> ls{" "}
            <span className="text-accent">~/projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-surface border border-edge rounded-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-accent-dim hover:shadow-[0_0_24px_rgba(74,222,128,0.08)] ${
                  index >= 3 && showAll && !isAnimating ? "animate-fadeIn" : ""
                } ${index >= 3 && isAnimating ? "animate-fadeOut" : ""}`}
              >
                <figure className="relative h-48 border-b border-edge">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-foreground leading-snug mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3 font-mono text-xs">
                    {project.links.map((link, linkIndex) => (
                      <a
                        href={link.link}
                        key={linkIndex}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-strong hover:underline underline-offset-4 transition-colors duration-200"
                      >
                        [{link.name}]
                      </a>
                    ))}
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex-grow" />
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="font-mono text-[11px] text-accent border border-accent-dim/60 rounded px-1.5 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="font-mono text-sm text-muted border border-edge rounded-lg px-6 py-2.5 hover:text-accent hover:border-accent-dim transition-all duration-300"
              >
                $ ls --all <span className="text-accent-dim">↓</span>
              </button>
            ) : (
              <button
                onClick={handleShowLess}
                disabled={isAnimating}
                className="font-mono text-sm text-muted border border-edge rounded-lg px-6 py-2.5 hover:text-accent hover:border-accent-dim transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                $ ls | head -3 <span className="text-accent-dim">↑</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
