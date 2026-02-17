import { GraduationCap, Award, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm text-primary">
            {"// Background"}
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            About & Education
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education Card */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="relative border-l-2 border-primary/30 pl-6">
                <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-primary" />
                <h4 className="font-semibold text-foreground">
                  Alexandria University
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Computer Science / Engineering
                </p>
                <div className="mt-2 flex items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    Expected Graduation 2026
                  </span>
                </div>
                <div className="mt-2 inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  GPA: 3.61
                </div>
              </div>
            </div>
          </div>

          {/* Courses & Certifications */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Courses & Training
              </h3>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg bg-secondary/50 p-4">
                <h4 className="font-semibold text-foreground">
                  Skills Dynamix (Depi)
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Professional Flutter Development program covering advanced
                  state management, clean architecture patterns, and production
                  app workflows.
                </p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4">
                <h4 className="font-semibold text-foreground">
                  NTI - UI/UX Design
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  User interface and experience design fundamentals,
                  prototyping, and design thinking methodology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
