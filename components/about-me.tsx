import Image from "next/image"
import { Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/AbdoElsayed294",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:abdelrahman@example.com",
  },
]

export function AboutMe() {
  return (
    <section id="about-me" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm text-primary">
            {"// Who I Am"}
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            About Me
          </h2>
        </div>

        {/* Content grid: text left, image right on desktop */}
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text content */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Abdelrahman <span className="text-primary">Elsayed</span>
            </h3>

            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="font-mono text-sm text-primary">
                Flutter Developer & Mobile App Architect
              </span>
            </div>

            <p className="leading-relaxed text-muted-foreground">
              Flutter developer passionate about building meaningful mobile
              experiences that solve real-world problems. With a background in
              Computer Science from Alexandria University (GPA 3.61), I
              specialize in clean architecture and AI-powered applications. I
              believe in creating accessible technology that makes a difference
              &mdash; like my work on LingoSign for the deaf community.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              When I&apos;m not coding, I enjoy learning about UI/UX design and
              contributing to open-source projects.
            </p>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Clean Architecture",
                "AI-Powered Apps",
                "Accessibility First",
                "Cross-Platform",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
                >
                  <Sparkles className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  <link.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="relative flex-shrink-0">
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-primary/20" />
            <div className="absolute -inset-6 rounded-full border border-primary/10" />

            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-full bg-primary/15 blur-2xl" />

            {/* Image container */}
            <div className="group relative">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-border shadow-lg shadow-primary/10 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/20 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <Image
                  src="/images/profile.jpg"
                  alt="Abdelrahman Elsayed - Flutter Developer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Status badge */}
              <div className="absolute -right-2 bottom-6 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-lg">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-foreground">
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
