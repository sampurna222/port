export function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid items-start gap-6 md:grid-cols-3">
          <div className="md:col-span-2 retro-card p-6">
            <h2 className="text-2xl font-bold text-balance">HI!!</h2>
            <p className="mt-3 leading-relaxed">
              Hello!! I am an enthusiastic yet chaotic 3rd year engineering student who is trying hard to balance
              between passion and profession at the same time.
            </p>
            <ul className="mt-4 grid gap-2">
              <li>
                <span className="retro-chip">3rd-year B.Tech CSE (Data Science)</span>
              </li>
              <li>
                <span className="retro-chip">MCKV Institute of Engineering</span>
              </li>
              <li>
                <span className="retro-chip">Passions: AI/ML, Open-source contribution</span>
              </li>
            </ul>
          </div>
          <aside className="retro-card p-6 bg-[var(--color-brand)]">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="underline font-medium" href="mailto:sampurnachakrabarty873@gmail.com">
                  sampurnachakrabarty873@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="underline font-medium"
                  href="https://github.com/sampurna222"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/sampurna222
                </a>
              </li>
              <li>
                <a
                  className="underline font-medium"
                  href="https://www.linkedin.com/in/sampurna-chakrabarty-364a65342"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
