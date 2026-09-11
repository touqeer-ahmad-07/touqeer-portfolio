"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { experiences } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          index="04 / experience"
          title="Career timeline"
          subtitle="Roles across mobile-first product teams in Lahore, Pakistan."
        />

        <div className="relative border-l border-border pl-8 sm:pl-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border border-primary/50 bg-background sm:-left-[49px]">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {exp.role} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{exp.location}</p>

              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {h}
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
