import React from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  links: {
    name: string;
    link: string;
  }[];
};

const ProjectsSection = () => {
  const projects: Project[] = [
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
      link: "#",
      image: "/project-images/Stanford Scheduler.svg",
      links: [
        {
          name: "Github",
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
      link: "#",
      image: "/project-images/2048.svg",
      links: [
        {
          name: "Github",
          link: "https://github.com/EricCui2005/2048",
        },
        {
          name: "Report",
          link: "https://drive.google.com/file/d/1O7x6gZ0GiAALIRFp8dv8l2TGeE0QlWSU/view?pli=1",
        },
      ],
    },
    {
      title: "Education Technology Copilot",
      description:
        "An NLP-powered education technology copilot in partnership with Subject Learning capable of generating module-specific supplementary learning materials and supporting content-based timestamp seeking.",
      technologies: ["Tailwind", "Node.js", "Next.js", "React"],
      link: "#",
      image: "/project-images/Subject.svg",
      links: [
        {
          name: "Github",
          link: "https://github.com/EricCui2005/subject-sandbox",
        },
      ],
    },
    {
      title: "Chihuahua, or Muffin?",
      description:
        "A research study exploring training convolutional neural networks to differentiate between muffin-esque chihuahuas and dog-like blueberry muffins.",
      technologies: ["TensorFlow", "Python", "Google Colab"],
      link: "#",
      image: "/project-images/Chuffin.svg",
      links: [
        {
          name: "Github",
          link: "https://github.com/EricCui2005/Chuffin",
        },
        {
          name: "Report",
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
      link: "#",
      image: "/project-images/Words.svg",
      links: [
        {
          name: "Github",
          link: "https://github.com/EricCui2005/words",
        },
        {
          name: "Website",
          link: "https://words-drab.vercel.app/",
        },
      ],
    },
    {
      title: "AI for Nine Men's Morris",
      description:
        "A research study exploring AI play in Nine Men's Morris using recursive decision-making algorithms and custom game evaluation routines.",
      technologies: ["Replit", "Python", "Google Colab"],
      link: "#",
      image: "/project-images/NMM.svg",
      links: [
        {
          name: "Github",
          link: "https://github.com/EricCui2005/Nine-Mens-Morris",
        },
        {
          name: "Report",
          link: "https://drive.google.com/file/d/1DelBpF1LLmoTEyKdarjO7lrHgJN2c7Z7/view",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 card h-full bg-base-200 shadow-xl"
            >
              <figure className="relative h-48 md:h-56 lg:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body flex flex-col h-full">
                <div className="flex flex-col gap-1">
                  <h3 className="card-title text-white">{project.title}</h3>
                  <div className="h-5 flex flex-wrap gap-1">
                    {project.links.map((link, index) => (
                      <a
                        href={link.link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge h-5 bg-black border-black text-white rounded-xl flex items-center gap-1 pl-1"
                      >
                        <Image
                          src="/link.png"
                          alt="Link"
                          width={12}
                          height={12}
                          className="w-3 h-3"
                        />
                        {link.name}
                      </a>
                    ))}
                  </div>
                  <p className="text-gray-300">{project.description}</p>
                </div>
                <div className="flex-grow"></div>
                <div className="w-full mt-4">
                  <div className="flex flex-wrap-reverse justify-end gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="badge bg-transparent border-sky-500 badge-primary text-sky-500"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
