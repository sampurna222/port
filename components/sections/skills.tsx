const skills = [
  { name: "C", level: "Intermediate" },
  { name: "Java", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "AI/ML Fundamentals", level: "Learning" },
  { name: "Open Source", level: "Contributor" },
]

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((s) => (
            <div key={s.name} className="retro-card p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{s.name}</span>
                <span className="text-sm">{s.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
