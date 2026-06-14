const projects = [
  {
    title: "Terraform Multi-Environment Mastery",
    description:
      "Built reusable Terraform modules supporting dev, stage, and prod environments with Azure and GitHub Actions.",
    tech: ["Azure", "Terraform", "GitHub Actions"],
    github: "https://github.com/YOUR_USERNAME/terraform-multi-env",
  },
  {
    title: "Azure Networking Lab",
    description:
      "Designed enterprise-style networking using VNets, NSGs, subnets, and security best practices.",
    tech: ["Azure", "Networking", "Security"],
    github: "https://github.com/YOUR_USERNAME/azure-networking-lab",
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
              bg-slate-800/50
              backdrop-blur-sm
              p-6
              rounded-2xl
              border
              border-slate-700
              hover:border-blue-500
              hover:-translate-y-2
              transition
              duration-300
              "
          >
              <div className="h-40 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl mb-6 border border-slate-700 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-16 h-16 rounded-lg border border-blue-500" />

                <div className="absolute left-10 w-8 h-8 rounded border border-blue-400" />

                <div className="absolute right-10 w-8 h-8 rounded border border-blue-400" />

                <div className="absolute h-px w-24 bg-blue-500" />
              </div>
            </div>
            
              {project.title === "Terraform Multi-Environment Mastery" && (
              <div className="mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 rounded-full text-sm font-medium">
                  ⭐ Featured Project
                </span>
              </div>
            )}

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
            <div className="flex gap-3 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
              >
                GitHub
              </a>

              <button
                className="px-4 py-2 border border-blue-500 rounded-lg hover:bg-slate-700 transition"
              >
                Architecture
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}