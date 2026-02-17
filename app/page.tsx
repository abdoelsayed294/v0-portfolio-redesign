import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { Hero } from "@/components/hero"
import { AboutMe } from "@/components/about-me"
import { Projects } from "@/components/projects"
import { DesignProjects } from "@/components/design-projects"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <DesignProjects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
