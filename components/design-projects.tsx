import Image from "next/image"
import Link from "next/link"
import { Palette, FileText, ExternalLink } from "lucide-react"

const designProjects = [
  {
    title: "EveTick - Design Case Study",
    description:
      "Complete UI/UX design for a dual-platform event booking system. Created user flows, wireframes, and high-fidelity prototypes for both organizer and attendee apps. Focused on intuitive booking experience and seamless navigation.",
    tags: [
      "UI/UX Design",
      "Figma",
      "Prototyping",
      "User Flows",
      "Wireframing",
    ],
    image: "/images/evetick-design.jpg",
    viewDesign: "#",
    caseStudy: "/design/evetick",
  },
  {
    title: "DocNow - Clinic Booking Design",
    description:
      "Designed the complete user experience for a telemedicine platform including doctor search, appointment booking, and video consultation interface. Created accessible design system suitable for all age groups.",
    tags: ["UI/UX Design", "Figma", "Design System", "Accessibility"],
    image: "/images/docnow-design.jpg",
    viewDesign: "#",
    caseStudy: "/design/docnow",
  },
  {
    title: "LingoSign - Accessibility-First Design",
    description:
      "Designed an inclusive interface for deaf and hard-of-hearing users. Focused on visual clarity, sign language video integration, and intuitive communication flow.",
    tags: [
      "UI/UX Design",
      "Accessibility",
      "Inclusive Design",
      "Prototyping",
    ],
    image: "/images/lingosign-design.jpg",
    viewDesign: "#",
    caseStudy: "/design/lingosign",
  },
]

export function DesignProjects() {
  return (
    <section id="design" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm text-primary">
            {"// Creative Work"}
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            UI/UX Design
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Case studies and design prototypes I have created
          </p>
        </div>

        {/* Design project grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {designProjects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} design preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                {/* Design badge */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                  <Palette className="h-3 w-3" />
                  Design
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-3">
                  {project.viewDesign && (
                    <a
                      href={project.viewDesign}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-all hover:bg-primary/20"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      View Prototype
                    </a>
                  )}
                  {project.caseStudy && (
                    <Link
                      href={project.caseStudy}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-medium text-primary transition-all hover:bg-primary/15"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      Case Study
                    </Link>
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
