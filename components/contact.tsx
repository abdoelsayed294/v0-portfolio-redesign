import {
  MapPin,
  Phone,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Alexandria, Egypt",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 106 576 7718",
    href: "tel:+201065767718",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Get in touch",
    href: "mailto:abdelrahman@example.com",
  },
]

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
]

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm text-primary">
            {"// Let's Connect"}
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Interested in working together or have an opportunity? Feel free to
            reach out.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 sm:p-10">
          {/* Contact details */}
          <div className="grid gap-6 sm:grid-cols-3">
            {contactInfo.map((item) => {
              const Wrapper = item.href ? "a" : "div"
              return (
                <Wrapper
                  key={item.label}
                  {...(item.href
                    ? {
                        href: item.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="flex flex-col items-center gap-3 rounded-lg bg-secondary/50 p-5 text-center transition-all duration-300 hover:bg-secondary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              )
            })}
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-border" />

          {/* Social links & CV */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
