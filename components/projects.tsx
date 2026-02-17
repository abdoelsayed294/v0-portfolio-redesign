import Image from "next/image"
import { ExternalLink, Play, Construction, Palette } from "lucide-react"

const projects = [
  {
    title: "LingoSign",
    description:
      "AI-powered mobile app translating sign language to text in real-time, with video calling features for deaf and hard-of-hearing community.",
    technologies: [
      "Flutter",
      "BLoC/Cubit",
      "Clean Architecture",
      "Firebase",
      "ZegoCloud",
      "AI APIs",
    ],
    image: "/images/lingosign.jpg",
    github: "#",
    demo: "#",
    inDevelopment: false,
    designedByMe: true,
  },
  {
    title: "DocNow",
    description:
      "Comprehensive clinic booking and telemedicine platform with video consultations and patient management.",
    technologies: [
      "Flutter",
      "BLoC",
      "Firebase",
      "ZegoCloud",
      "Clean Architecture",
    ],
    image: "/images/docnow.jpg",
    github: "#",
    demo: null,
    inDevelopment: true,
    designedByMe: true,
  },
  {
    title: "EveTick",
    description:
      "Dual-platform event booking system with separate apps for organizers and attendees. Features event creation, ticketing, and real-time updates.",
    technologies: ["Flutter", "BLoC", "Firebase", "Payment Integration"],
    image: "/images/evetick.jpg",
    github: "#",
    demo: "#",
    inDevelopment: false,
    designedByMe: true,
  },
  {
    title: "Store Management System",
    description:
      "Desktop application for invoice management, expenses tracking, accounts, and detailed PDF reports.",
    technologies: ["Java", "JavaFX", "Access Database", "PDF Generation"],
    image: "/images/store-management.jpg",
    github: null,
    demo: "#",
    inDevelopment: false,
    designedByMe: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm text-primary">
            {"// Featured Work"}
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            A selection of projects I have built, showcasing clean architecture,
            AI integration, and real-time features.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {project.inDevelopment && (
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400 backdrop-blur-sm">
                      <Construction className="h-3 w-3" />
                      In Development
                    </div>
                  )}
                  {project.designedByMe && (
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm" title="UI/UX designed by me">
                      <Palette className="h-3 w-3" />
                      Designed by me
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-4 py-2 text-xs font-medium text-foreground transition-all hover:bg-secondary"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-all hover:bg-primary/20"
                    >
                      <Play className="h-3.5 w-3.5" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
