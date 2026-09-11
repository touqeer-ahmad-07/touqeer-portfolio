"use client"

import { motion } from "framer-motion"

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      <div className="mb-3 flex items-center gap-3 font-mono text-sm text-primary">
        <span>{index}</span>
        <span className="h-px w-12 bg-primary/50" />
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">{subtitle}</p> : null}
    </motion.div>
  )
}
