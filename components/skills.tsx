import {
  Smartphone,
  Database,
  Wrench,
  Palette,
  Lightbulb,
  Users,
  MessageSquare,
  BarChart3,
  Clock,
} from "lucide-react"

const technicalSkills = [
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "BLoC / Cubit", "Clean Architecture"],
  },
  {
    category: "Design Tools",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
    highlighted: true,
  },
  {
    category: "Backend & Services",
    icon: Database,
    skills: ["Firebase", "REST APIs", "SQLite"],
  },
  {
    category: "Tools & Languages",
    icon: Wrench,
    skills: ["Git", "JavaFX", "Python", "C++"],
  },
]

const softSkills = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Team Work", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Analytical Thinking", icon: BarChart3 },
  { name: "Time Management", icon: Clock },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm text-primary">
            {"// What I Work With"}
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Skills & Expertise
          </h2>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-lg font-semibold text-foreground">
            Technical Skills
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technicalSkills.map((group) => (
              <div
                key={group.category}
                className={`rounded-xl border p-6 transition-all duration-300 hover:border-primary/40 ${
                  group.highlighted
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    group.highlighted ? "bg-primary/20" : "bg-primary/10"
                  }`}>
                    <group.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {group.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-md px-3 py-1.5 text-sm ${
                        group.highlighted
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="mb-8 text-center text-lg font-semibold text-foreground">
            Soft Skills
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 transition-all duration-300 hover:border-primary/40"
              >
                <skill.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
