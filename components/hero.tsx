import { ArrowDown, Send } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Glow effect */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Greeting tag */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Abdelrahman{" "}
          <span className="text-primary">Elsayed</span>
        </h1>

        {/* Title */}
        <p className="mt-4 font-mono text-lg text-primary sm:text-xl">
          Flutter Developer | Mobile App Architect
        </p>

        {/* Tagline */}
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          I build high-performance cross-platform apps with clean architecture
          and seamless UX. Specialized in AI-powered solutions and real-time
          communication apps.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            View My Work
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
          >
            Contact Me
            <Send className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-1.5 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
