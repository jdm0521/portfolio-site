const skills = [
  "Azure",
  "Terraform",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Python",
  "PowerShell",
  "Bash",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-800 px-5 py-3 rounded-lg
                       hover:bg-blue-600 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}