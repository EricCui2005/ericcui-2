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
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      image: "/Eric.jpeg",
      links: [
        {
          name: "Github",
          link: "https://github.com/EricCui2005",
        },
        {
          name: "Report",
          link: "https://github.com/EricCui2005",
        },
      ],
    },
    {
      title: "Project Two",
      description: "An AI-powered data analysis tool",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "Next.js"],
      link: "#",
      image: "/Eric.jpeg",
      links: [
        {
          name: "Github",
          link: "https://github.com/EricCui2005",
        },
        {
          name: "Report",
          link: "https://github.com/EricCui2005",
        },
      ],
    },
    {
      title: "Project Three",
      description: "A real-time collaboration platform",
      technologies: ["Next.js", "WebSocket", "PostgreSQL"],
      link: "#",
      image: "/Eric.jpeg",
      links: [
        {
          name: "Github",
          link: "https://github.com/EricCui2005",
        },
        {
          name: "Report",
          link: "https://github.com/EricCui2005",
        },
      ],
    },
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      image: "/Eric.jpeg",
      links: [
        {
          name: "Github",
          link: "https://github.com/EricCui2005",
        },
        {
          name: "Report",
          link: "https://github.com/EricCui2005",
        },
      ],
    },
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      image: "/Eric.jpeg",
      links: [
        {
          name: "Github",
          link: "https://github.com/EricCui2005",
        },
        {
          name: "Report",
          link: "https://github.com/EricCui2005",
        },
      ],
    },
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      image: "/Eric.jpeg",
      links: [
        {
          name: "Github",
          link: "https://github.com/EricCui2005",
        },
        {
          name: "Report",
          link: "https://github.com/EricCui2005",
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
            <div key={index} className="card h-full bg-base-200 shadow-xl">
              <figure className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body flex flex-col h-full">
                <h3 className="card-title text-white">{project.title}</h3>
                <div className="h-6 flex flex-wrap gap-1">
                  {project.links.map((link, index) => (
                    <a
                      href={link.link}
                      key={index}
                      className="badge bg-gray-700 text-white rounded-xl"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex-grow"></div>
                <div className="w-full mt-4">
                  <div className="flex flex-wrap-reverse justify-end gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="badge badge-primary">
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
