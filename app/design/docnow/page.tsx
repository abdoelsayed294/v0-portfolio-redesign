import type { Metadata } from "next"
import {
  CaseStudyLayout,
  type CaseStudyData,
} from "@/components/case-study-layout"

export const metadata: Metadata = {
  title: "DocNow - Clinic Booking App Design | Abdelrahman Elsayed",
  description:
    "UI/UX case study for DocNow, a telemedicine platform connecting patients with doctors through seamless booking and video consultations.",
}

const data: CaseStudyData = {
  title: "DocNow - Clinic Booking & Telemedicine Design",
  subtitle:
    "Designed the complete user experience for a telemedicine platform that connects patients with healthcare providers through easy appointment booking and video consultations. Focused on accessibility and trust.",
  tools: [
    "Figma",
    "Design System",
    "Accessibility",
    "Prototyping",
    "User Research",
  ],
  heroImage: "/images/case-study/docnow-hero.jpg",

  overview: [
    {
      icon: "challenge",
      title: "The Challenge",
      description:
        "Create a healthcare booking platform that feels trustworthy and approachable to users of all ages and tech literacy levels, while supporting complex features like video consultations and medical history management.",
    },
    {
      icon: "solution",
      title: "The Solution",
      description:
        "A clean, calming interface with large touch targets, clear visual hierarchy, and a step-by-step booking flow that guides patients from doctor discovery to video consultation with minimal friction.",
    },
    {
      icon: "role",
      title: "My Role",
      description:
        "UI/UX Designer: Accessibility research, persona development, information architecture, wireframing, visual design, and interactive prototyping.",
    },
    {
      icon: "timeline",
      title: "Timeline",
      description:
        "5 weeks including accessibility audits and testing with users across different age groups to ensure inclusive usability.",
    },
  ],

  gallery: [
    {
      image: "/images/case-study/docnow-screens-1.jpg",
      caption:
        "Doctor listing with rich profile cards showing photo, specialty, rating, and next available slot. Designed for quick scanning and confident doctor selection.",
    },
    {
      image: "/images/case-study/docnow-screens-2.jpg",
      caption:
        "Appointment booking flow with visual calendar, clear time slot selection, and confirmation summary. Each step is clearly numbered to reduce anxiety.",
    },
    {
      image: "/images/case-study/docnow-screens-3.jpg",
      caption:
        "Video consultation interface with large, accessible controls. Patient can see doctor clearly, mute/unmute, toggle camera, and access in-call chat for sharing symptoms.",
    },
    {
      image: "/images/case-study/docnow-screens-4.jpg",
      caption:
        "Patient dashboard showing upcoming appointments, medical history timeline, prescription notifications, and one-tap rebooking. Designed for returning users to manage ongoing care.",
    },
  ],

  process: [
    {
      title: "Research & Discovery",
      description:
        "Conducted interviews with 6 patients (ages 25-65) and 4 healthcare providers. Analyzed competing platforms like Vezeeta and Practo. Key finding: older users struggle with multi-step booking forms, and all users need visual reassurance about doctor credentials before booking.",
      image: "/images/case-study/docnow-userflow.jpg",
    },
    {
      title: "Wireframes & User Flows",
      description:
        "Mapped the complete patient journey from symptom awareness to post-consultation follow-up. Wireframes focused on reducing cognitive load with single-purpose screens, progressive disclosure of medical information, and consistent back-navigation patterns.",
      image: "/images/case-study/docnow-wireframes.jpg",
    },
    {
      title: "Visual Design & Accessibility",
      description:
        "Chose a calming teal palette to convey trust and health. All text meets WCAG AA contrast standards. Button sizes exceed 48px minimum touch targets. Built a component library with accessible form patterns, clear error states, and support for right-to-left layouts.",
      image: "/images/case-study/docnow-visual-design.jpg",
    },
  ],

  colors: [
    { name: "Primary", hex: "#0D9488" },
    { name: "Secondary", hex: "#0284C7" },
    { name: "Accent", hex: "#F59E0B" },
    { name: "Success", hex: "#22C55E" },
    { name: "Surface", hex: "#0F2937" },
    { name: "Background", hex: "#0A1F2C" },
  ],

  typography: [
    {
      name: "Plus Jakarta Sans",
      font: "Plus Jakarta Sans SemiBold / Bold",
      usage: "Headlines and navigation. Friendly yet professional \u2014 approachable for patients while maintaining medical credibility.",
    },
    {
      name: "Inter",
      font: "Inter Regular / Medium",
      usage: "Body text, form labels, and medical information. Chosen for excellent readability at small sizes and clear number rendering for dates and times.",
    },
  ],

  takeaways: [
    {
      title: "Healthcare design demands extra trust signals",
      description:
        "Users need constant reassurance in medical contexts. Doctor credentials, verified badges, patient reviews, and clear data privacy indicators significantly improved user confidence during testing.",
    },
    {
      title: "Accessibility is non-negotiable in health apps",
      description:
        "Designing for elderly users and those with visual impairments taught me to treat accessibility as a core feature, not an afterthought. Large text, high contrast, and voice guidance support benefit all users.",
    },
    {
      title: "Step-by-step flows reduce booking abandonment",
      description:
        "Breaking the booking process into clearly numbered single-purpose screens reduced abandonment by making progress visible and each decision simple.",
    },
    {
      title: "RTL support needs early planning",
      description:
        "Adding Arabic/RTL support retroactively is painful. Planning for bidirectional layouts from the start with a mirrored component system saved significant rework.",
    },
  ],
}

export default function DocNow() {
  return <CaseStudyLayout data={data} />
}
