import { profile } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Three.js.
        </p>
        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
