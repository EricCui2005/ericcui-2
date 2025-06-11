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
            <div key={index} className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-white">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="card-actions justify-between items-end mt-4">
                  <div className="flex flex-wrap gap-2 justify-end">
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
