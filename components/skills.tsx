"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { skillCategories } from "@/lib/data"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          index="02 / skills"
          title="A toolkit spanning the full stack"
          subtitle="Native mobile, cross-platform, and the backends that power them."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-1 flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{cat.label}</h3>
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mb-5 font-mono text-xs text-muted-foreground">{cat.accent}</p>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
