"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { profile } from "@/lib/data"

type Errors = { name?: string; email?: string; message?: string }

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate(): Errors {
    const e: Errors = {}
    if (!form.name.trim()) e.name = "Please enter your name."
    if (!form.email.trim()) e.email = "Please enter your email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "That email doesn't look right."
    if (!form.message.trim()) e.message = "Please write a message."
    else if (form.message.trim().length < 10) e.message = "A little more detail, please (10+ chars)."
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length === 0) {
      // No backend configured — open the user's mail client as a graceful fallback.
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setSent(true)
    }
  }

  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", value: "in/touqeer-ahmad", href: profile.linkedin },
    { label: "GitHub", value: "touqeer-ahmad-07", href: profile.github },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  ]

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          index="06 / contact"
          title="Let's build something together"
          subtitle="Have a project or a role in mind? Send a message and I'll get back to you."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <ul className="space-y-4">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-primary/50"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {l.label}
                    </span>
                    <span className="text-sm text-foreground transition-colors group-hover:text-primary">
                      {l.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <Field label="Name" error={errors.name}>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Your name"
              />
            </Field>

            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="you@example.com"
              />
            </Field>

            <Field label="Message" error={errors.message}>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Tell me about your project..."
              />
            </Field>

            <button
              type="submit"
              className="w-full rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Send message
            </button>

            {sent ? (
              <p className="font-mono text-sm text-primary">
                {"> Thanks! Your mail client should be opening now."}
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-red-400">{error}</span> : null}
    </label>
  )
}
