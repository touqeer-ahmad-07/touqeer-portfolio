"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { profile } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading index="01 / about" title="From the web to every pocket" />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{profile.summary}</p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 font-mono text-sm sm:grid-cols-2">
            <div>
              <dt className="text-muted-foreground">Location</dt>
              <dd className="mt-1 text-foreground">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Experience</dt>
              <dd className="mt-1 text-foreground">{profile.yearsOfExperience} years</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Focus</dt>
              <dd className="mt-1 text-foreground">Mobile & Full-stack</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Education</dt>
              <dd className="mt-1 text-foreground">BS Computer Science</dd>
            </div>
          </dl>
        </motion.div>

        <div className="relative">
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            career journey
          </div>
          <ol className="relative border-l border-border pl-6">
            {profile.journey.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="mb-6 last:mb-0"
              >
                <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <p className="text-pretty leading-relaxed text-foreground">{step}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
