"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { projects, type Project } from "@/lib/data"

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 20 })

  function handleMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function reset() {
    x.set(0)
    y.set(0)
  }

  const Wrapper = project.link ? "a" : "div"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        <Wrapper
          {...(project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
        >
          <div className="mb-4 flex items-start justify-between gap-4" style={{ transform: "translateZ(30px)" }}>
            <span className="rounded border border-primary/30 px-2.5 py-1 font-mono text-xs text-primary">
              {project.category}
            </span>
            <span className="text-muted-foreground transition-colors group-hover:text-primary">
              {project.link ? <ArrowIcon /> : null}
            </span>
          </div>

          <h3
            className="text-balance text-xl font-semibold leading-snug"
            style={{ transform: "translateZ(20px)" }}
          >
            {project.name}
          </h3>

          <p
            className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground"
            style={{ transform: "translateZ(15px)" }}
          >
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5" style={{ transform: "translateZ(10px)" }}>
            {project.stack.map((s) => (
              <li key={s} className="rounded bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                {s}
              </li>
            ))}
          </ul>
        </Wrapper>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading
        index="03 / projects"
        title="Things I've shipped"
        subtitle="Apps on the App Store and Google Play, cross-platform builds, and backends behind them."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
