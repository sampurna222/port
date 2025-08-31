import { Nav } from "@/components/nav"
import { BackToTop } from "@/components/back-to-top"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Achievements } from "@/components/sections/achievements"
import { Contact } from "@/components/sections/contact"
import { Hobbies } from "@/components/sections/hobbies"

export default function Page() {
  return (
    <main id="top" className="font-sans">
      <Nav />

      <section className="border-b-2 border-[var(--color-ink)] bg-[var(--color-brand)]">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="retro-card p-6 bg-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-balance">Sampurna Chakrabarty</h1>
                <p className="mt-2 leading-relaxed">
                  3rd-year B.Tech student in Computer Science & Engineering (Data Science specialization)
                </p>
                <p className="mt-1 leading-relaxed">MCKV Institute of Engineering</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a className="retro-btn" href="#projects">
                    View Projects
                  </a>
                  <a className="retro-btn" href="#contact">
                    Contact Me
                  </a>
                </div>
              </div>

              <div className="w-36 h-36 md:w-44 md:h-44 border-2 border-[var(--color-ink)] overflow-hidden bg-[var(--color-surface)] self-end md:self-center">
                <img
                  src="/images/cat-mascot-square.png"
                  alt={
                    "Orange and white round-faced animated cat with spectacles wearing a green shirt with </> symbol"
                  }
                  width={176}
                  height={176}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Hobbies />

      <footer className="mt-8 border-t-2 border-[var(--color-ink)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm">
          <p>&copy; {new Date().getFullYear()} Sampurna Chakrabarty. All rights reserved.</p>
        </div>
      </footer>

      <BackToTop />
    </main>
  )
}
