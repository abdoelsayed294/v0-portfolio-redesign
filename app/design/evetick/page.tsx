import type { Metadata } from "next"
import {
  CaseStudyLayout,
  type CaseStudyData,
} from "@/components/case-study-layout"

export const metadata: Metadata = {
  title: "EveTick - Event Booking App Design | Abdelrahman Elsayed",
  description:
    "UI/UX case study for EveTick, a dual-platform event booking system designed for both organizers and attendees.",
}

const data: CaseStudyData = {
  title: "EveTick - Event Booking App Design",
  subtitle:
    "A dual-platform event booking system designed from scratch. Created complete user flows, wireframes, and high-fidelity prototypes for both the organizer dashboard and attendee experience.",
  tools: ["Figma", "Prototyping", "User Flows", "Wireframing", "Design System"],
  prototypeLink: "#",
  heroImage: "/images/case-study/evetick-hero.jpg",

  overview: [
    {
      icon: "challenge",
      title: "The Challenge",
      description:
        "Design an intuitive dual-platform system that serves both event organizers (creation, management, analytics) and attendees (discovery, booking, ticketing) without overwhelming either user group.",
    },
    {
      icon: "solution",
      title: "The Solution",
      description:
        "Two distinct but visually cohesive apps: an organizer dashboard focused on efficiency and data, and an attendee app built around exploration and seamless booking with minimal friction.",
    },
    {
      icon: "role",
      title: "My Role",
      description:
        "UI/UX Designer: User research, competitive analysis, user flow mapping, wireframing, high-fidelity prototyping, and design system creation.",
    },
    {
      icon: "timeline",
      title: "Timeline",
      description:
        "4 weeks from initial research through final high-fidelity prototypes, including two rounds of usability testing and iteration.",
    },
  ],

  gallery: [
    {
      image: "/images/case-study/evetick-screens-1.jpg",
      caption:
        "Home screen featuring a featured events carousel, smart category filters, and contextual search. Designed to surface personalized recommendations immediately.",
    },
    {
      image: "/images/case-study/evetick-screens-2.jpg",
      caption:
        "Event detail page with immersive hero image, clear pricing tiers, and a persistent Book Now CTA. Information hierarchy guides users naturally toward conversion.",
    },
    {
      image: "/images/case-study/evetick-screens-3.jpg",
      caption:
        "Digital ticket with QR code for contactless entry. Designed for quick scanning with high contrast and essential info visible at a glance.",
    },
    {
      image: "/images/case-study/evetick-screens-4.jpg",
      caption:
        "Organizer dashboard showing event creation wizard, real-time ticket sales analytics, and attendee management. Prioritizes actionable data and quick operations.",
    },
  ],

  process: [
    {
      title: "Research & Discovery",
      description:
        "Started with competitive analysis of Eventbrite, Meetup, and local booking platforms. Conducted user interviews with 8 event organizers and 12 regular event attendees to understand pain points. Key insight: organizers needed faster event setup, while attendees wanted better event discovery and social proof.",
      image: "/images/case-study/evetick-userflow.jpg",
    },
    {
      title: "Wireframes & Information Architecture",
      description:
        "Created low-fidelity wireframes for both apps, focusing on reducing the number of steps from event discovery to ticket purchase (from 7 steps to 4). Built separate navigation patterns optimized for each user type \u2014 tab-based for attendees and drawer-based for organizers.",
      image: "/images/case-study/evetick-wireframes.jpg",
    },
    {
      title: "Visual Design & Prototyping",
      description:
        "Developed a vibrant design system with event-category color coding, smooth micro-interactions for booking confirmation, and a consistent component library shared between both platforms. Created interactive prototypes in Figma for usability testing.",
      image: "/images/case-study/evetick-visual-design.jpg",
    },
  ],

  colors: [
    { name: "Primary", hex: "#4F46E5" },
    { name: "Secondary", hex: "#7C3AED" },
    { name: "Accent", hex: "#F59E0B" },
    { name: "Success", hex: "#10B981" },
    { name: "Surface", hex: "#1E1B4B" },
    { name: "Background", hex: "#0F0D2E" },
  ],

  typography: [
    {
      name: "Poppins",
      font: "Poppins SemiBold / Bold",
      usage: "Headlines and CTAs. Chosen for its modern geometric feel that aligns with the event/entertainment context.",
    },
    {
      name: "Inter",
      font: "Inter Regular / Medium",
      usage: "Body text and UI elements. Selected for optimal screen readability and clean number rendering for pricing.",
    },
  ],

  takeaways: [
    {
      title: "Dual-audience design requires shared foundations",
      description:
        "Building separate apps for organizers and attendees taught me the importance of a shared design system. Visual consistency across both platforms builds trust and reduces cognitive load when users switch roles.",
    },
    {
      title: "Reducing booking friction drives conversion",
      description:
        "By cutting the ticket purchase flow from 7 steps to 4 and adding smart defaults, the usability testing showed a 40% improvement in task completion time.",
    },
    {
      title: "Data-driven organizer tools need progressive disclosure",
      description:
        "Organizers have complex needs but showing everything at once overwhelms. Using progressive disclosure and contextual actions kept the dashboard powerful yet approachable.",
    },
    {
      title: "Micro-interactions build confidence",
      description:
        "Adding subtle animations for booking confirmation, ticket generation, and payment success significantly improved user confidence and perceived reliability in testing.",
    },
  ],
}

export default function EveTick() {
  return <CaseStudyLayout data={data} />
}
