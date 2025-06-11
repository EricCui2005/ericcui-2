import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Project Two",
      description: "An AI-powered data analysis tool",
      technologies: ["Python", "TensorFlow", "FastAPI"],
      link: "#",
    },
    {
      title: "Project Three",
      description: "A real-time collaboration platform",
      technologies: ["Next.js", "WebSocket", "PostgreSQL"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-section-bg text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
