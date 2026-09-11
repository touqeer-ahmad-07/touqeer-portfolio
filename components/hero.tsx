"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { profile } from "@/lib/data"

const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false })

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl px-5 pt-24"
      >
        <motion.p variants={item} className="mb-6 flex items-center gap-3 font-mono text-sm text-primary">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
          {"> available for opportunities"}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-base text-muted-foreground sm:text-lg">
          <span className="text-foreground">{profile.title}</span>
          <span className="text-primary">|</span>
          <span>{profile.roleLine}</span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Contact me
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8 font-mono text-sm"
        >
          <div>
            <span className="text-2xl font-semibold text-primary">{profile.yearsOfExperience}</span>
            <span className="ml-2 text-muted-foreground">years experience</span>
          </div>
          <div>
            <span className="text-2xl font-semibold text-primary">15+</span>
            <span className="ml-2 text-muted-foreground">apps & projects</span>
          </div>
          <div>
            <span className="text-2xl font-semibold text-primary">4</span>
            <span className="ml-2 text-muted-foreground">platforms shipped</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
