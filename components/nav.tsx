"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
  { href: "#hobbies", label: "Hobbies" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky-header">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-bold text-lg" aria-label="Go to top">
          {"<"}Sampurna{" />"}
        </a>

        <button
          className="sm:hidden retro-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="size-4" />
        </button>

        <ul className="hidden sm:flex items-center gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a className="retro-chip hover:underline" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div id="mobile-menu" className="sm:hidden border-t-2 border-[var(--color-ink)]">
          <ul className="mx-auto max-w-5xl px-4 py-3 grid gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a className="retro-chip w-full text-center block" href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
