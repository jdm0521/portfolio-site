const projects = [
  {
    title: "Terraform Multi-Environment Mastery",
    description:
      "Reusable infrastructure modules supporting dev, stage and prod."
  },
  {
    title: "Azure Networking Lab",
    description:
      "Enterprise-style virtual network architecture."
  }
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
            className="bg-slate-800 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}