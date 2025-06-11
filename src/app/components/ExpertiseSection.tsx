import React from "react";

const ExpertiseSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    { category: "Backend", items: ["Node.js", "Python", "SQL", "REST APIs"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "CI/CD"] },
  ];

  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-card-bg p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
