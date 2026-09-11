"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { interests } from "@/lib/data"

export function Interests() {
  return (
    <section id="interests" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading index="05 / interests" title="What I like to dig into" />
      <div className="grid gap-4 sm:grid-cols-2">
        {interests.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-4 rounded-lg border border-border bg-card p-6"
          >
            <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
