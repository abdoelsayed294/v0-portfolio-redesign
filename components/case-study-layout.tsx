import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ExternalLink,
  Clock,
  User,
  Target,
  Lightbulb,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface OverviewItem {
  icon: "challenge" | "solution" | "role" | "timeline"
  title: string
  description: string
}

export interface GalleryScreen {
  image: string
  caption: string
}

export interface ProcessStep {
  title: string
  description: string
  image: string
}

export interface ColorSwatch {
  name: string
  hex: string
}

export interface TypographyItem {
  name: string
  font: string
  usage: string
}

export interface Takeaway {
  title: string
  description: string
}

export interface CaseStudyData {
  title: string
  subtitle: string
  tools: string[]
  prototypeLink?: string
  heroImage: string
  overview: OverviewItem[]
  gallery: GalleryScreen[]
  process: ProcessStep[]
  colors: ColorSwatch[]
  typography: TypographyItem[]
  takeaways: Takeaway[]
}

/* ------------------------------------------------------------------ */
/*  Helper: overview icons                                             */
/* ------------------------------------------------------------------ */

const overviewIcons = {
  challenge: Target,
  solution: Lightbulb,
  role: User,
  timeline: Clock,
} as const

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Sticky top bar ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/#design"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          {data.prototypeLink && (
            <a
              href={data.prototypeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Interactive Prototype
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-mono text-sm text-primary">
            {"// Case Study"}
          </p>
          <h1 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {data.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {data.subtitle}
          </p>

          {/* Tool tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {data.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-xl border border-border">
          <div className="relative aspect-[21/9]">
            <Image
              src={data.heroImage}
              alt={`${data.title} hero`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Project Overview Grid ──────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-2xl font-bold text-foreground">
            Project Overview
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.overview.map((item) => {
              const Icon = overviewIcons[item.icon]
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Design Gallery ─────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-2xl font-bold text-foreground">
            Key Screens
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {data.gallery.map((screen, i) => (
              <figure
                key={i}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={screen.image}
                    alt={screen.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="p-5 text-sm leading-relaxed text-muted-foreground">
                  {screen.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design Process ─────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-2xl font-bold text-foreground">
            Design Process
          </h2>
          <div className="flex flex-col gap-16">
            {data.process.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <p className="mb-2 font-mono text-xs text-primary">
                    {`0${i + 1}`}
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1 overflow-hidden rounded-xl border border-border">
                  <div className="relative aspect-video">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Color & Typography ─────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-2xl font-bold text-foreground">
            {"Color & Typography"}
          </h2>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Colors */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                Color Palette
              </h3>
              <div className="flex flex-wrap gap-4">
                {data.colors.map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-2">
                    <div
                      className="h-16 w-16 rounded-xl border border-border"
                      style={{ backgroundColor: c.hex }}
                      title={c.hex}
                    />
                    <span className="text-xs font-medium text-foreground">
                      {c.name}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {c.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                Typography
              </h3>
              <div className="flex flex-col gap-4">
                {data.typography.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <p className="text-lg font-bold text-foreground">
                      {t.name}
                    </p>
                    <p className="mt-1 font-mono text-xs text-primary">
                      {t.font}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t.usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Takeaways ──────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-2xl font-bold text-foreground">
            Key Takeaways
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {data.takeaways.map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <span className="mb-3 inline-block font-mono text-xs text-primary">
                  {`0${i + 1}`}
                </span>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {t.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ─────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Want to see more?
          </h2>
          <p className="max-w-md text-muted-foreground">
            Check out my other design projects or get in touch to discuss
            collaboration opportunities.
          </p>
          <div className="flex gap-4">
            <Link
              href="/#design"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-4" />
              All Design Projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* ── Page footer ────────────────────────────────────────── */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {"© 2026 Abdelrahman Elsayed. All rights reserved."}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {"Built with passion & clean architecture"}
          </p>
        </div>
      </footer>
    </div>
  )
}
