type Project = {
  title: string
  description: string
  stack: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: "Your Project 1",
    description: "Short description about the project goes here. Add the goal and outcome.",
    stack: ["C", "Java", "Python"],
  },
  {
    title: "Your Project 2",
    description: "Short description about the project goes here. Mention your role.",
    stack: ["Tech A", "Tech B"],
  },
  {
    title: "Your Project 3",
    description: "Short description about the project goes here. Include metrics if any.",
    stack: ["Tech X", "Tech Y"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="retro-card p-5">
              <header className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.link ? (
                  <a className="retro-chip" href={p.link} target="_blank" rel="noreferrer">
                    View
                  </a>
                ) : (
                  <span className="retro-chip">Add Link</span>
                )}
              </header>
              <p className="mt-3 leading-relaxed">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li key={t} className="retro-chip">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm">Tip: Replace these with your real projects, descriptions, tech stack, and links.</p>
      </div>
    </section>
  )
}
