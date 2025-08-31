"use client"

import type React from "react"
import { useState } from "react"
import { Github, Linkedin } from "lucide-react"

export function Contact() {
  const [status, setStatus] = useState<string | null>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get("name")?.toString().trim()
    const email = data.get("email")?.toString().trim()
    const message = data.get("message")?.toString().trim()

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.")
      return
    }
    setStatus("Thanks! Your message has been noted locally. Replace with a real endpoint when ready.")
    form.reset()
  }

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <form onSubmit={onSubmit} className="retro-card p-5">
            <div className="grid gap-4">
              <label className="grid gap-1">
                <span className="font-medium">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  className="rounded-md border-2 border-[var(--color-ink)] px-3 py-2"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-1">
                <span className="font-medium">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-md border-2 border-[var(--color-ink)] px-3 py-2"
                  placeholder="name@example.com"
                />
              </label>
              <label className="grid gap-1">
                <span className="font-medium">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="rounded-md border-2 border-[var(--color-ink)] px-3 py-2"
                  placeholder="How can I help?"
                />
              </label>

              <button type="submit" className="retro-btn w-fit">
                Send Message
              </button>
              {status && <p className="text-sm mt-1">{status}</p>}
            </div>
          </form>

          <aside className="retro-card p-5">
            <h3 className="font-semibold">Social</h3>
            <ul className="mt-3 grid gap-3">
              <li>
                <a
                  className="flex items-center gap-2 underline"
                  href="https://github.com/sampurna222"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="size-4" /> github.com/sampurna222
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 underline"
                  href="https://www.linkedin.com/in/sampurna-chakrabarty-364a65342"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 underline" href="mailto:sampurnachakrabarty873@gmail.com">
                  <span className="inline-block size-4 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-ink)]" />
                  Email Me
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
