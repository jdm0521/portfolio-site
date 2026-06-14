const projects = [
  {
    title: "Terraform Multi-Environment Mastery",
    description:
      "Built reusable Terraform modules supporting dev, stage, and prod environments with Azure and GitHub Actions.",
    tech: ["Azure", "Terraform", "GitHub Actions"],
  },
  {
    title: "Azure Networking Lab",
    description:
      "Designed enterprise-style networking using VNets, NSGs, subnets, and security best practices.",
    tech: ["Azure", "Networking", "Security"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
            bg-slate-800
            p-6
            rounded-xl
            border
            border-slate-700
            hover:border-blue-500
            hover:scale-105
            transition
            duration-300
            "
          >
            <h3 className="text-xl font-bold">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
             {project.tech.map((item) => (
                <span
                key={item}
                className="text-sm px-3 py-1 rounded-full bg-slate-700"
                    >
                {item}
            </span>
        ))}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}