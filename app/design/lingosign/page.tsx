import type { Metadata } from "next"
import {
  CaseStudyLayout,
  type CaseStudyData,
} from "@/components/case-study-layout"

export const metadata: Metadata = {
  title: "LingoSign - Accessibility App Design | Abdelrahman Elsayed",
  description:
    "UI/UX case study for LingoSign, an AI-powered sign language translation app designed with an accessibility-first approach.",
}

const data: CaseStudyData = {
  title: "LingoSign - Accessibility-First Sign Language App Design",
  subtitle:
    "Designed an inclusive interface for an AI-powered sign language translation app. Every design decision prioritized the deaf and hard-of-hearing community with visual clarity, large touch targets, and intuitive communication flows.",
  tools: [
    "Figma",
    "Inclusive Design",
    "Accessibility",
    "Prototyping",
    "User Research",
  ],
  prototypeLink: "#",
  heroImage: "/images/case-study/lingosign-hero.jpg",

  overview: [
    {
      icon: "challenge",
      title: "The Challenge",
      description:
        "Design an app that bridges the communication gap between sign language users and non-signers, making real-time translation feel natural and effortless while ensuring the interface itself is fully accessible to deaf users.",
    },
    {
      icon: "solution",
      title: "The Solution",
      description:
        "A visually-driven interface with minimal text dependency, real-time visual feedback during sign detection, haptic confirmations replacing audio cues, and a video call integration that puts sign language front and center.",
    },
    {
      icon: "role",
      title: "My Role",
      description:
        "UI/UX Designer: Accessibility research, inclusive persona development, user flow mapping, wireframing, high-fidelity design, and usability testing with deaf community members.",
    },
    {
      icon: "timeline",
      title: "Timeline",
      description:
        "6 weeks including two rounds of usability testing with deaf and hard-of-hearing participants and consultation with accessibility experts.",
    },
  ],

  gallery: [
    {
      image: "/images/case-study/lingosign-screens-1.jpg",
      caption:
        "Real-time sign language detection view with clear visual overlay showing hand tracking. Translated text appears in a high-contrast banner at the bottom for instant readability.",
    },
    {
      image: "/images/case-study/lingosign-screens-2.jpg",
      caption:
        "Video call interface optimized for sign language: larger video feed, real-time caption overlay, and visual notification indicators replacing audio alerts.",
    },
    {
      image: "/images/case-study/lingosign-screens-3.jpg",
      caption:
        "Sign language learning module with animated hand gesture guides, progress tracking, and practice mode. Designed for both deaf users teaching signs and hearing users learning them.",
    },
    {
      image: "/images/case-study/lingosign-screens-4.jpg",
      caption:
        "Home dashboard with quick-action cards using large icons and minimal text. Recent translations history provides easy re-access to previous conversations.",
    },
  ],

  process: [
    {
      title: "Research & Discovery",
      description:
        "Engaged directly with the deaf community through 10 user interviews (with sign language interpreters). Studied existing accessibility tools and their shortcomings. Key insight: most existing tools feel medical/clinical rather than empowering. Users wanted an app that felt modern and social, not assistive.",
      image: "/images/case-study/lingosign-userflow.jpg",
    },
    {
      title: "Wireframes & Inclusive Patterns",
      description:
        "Built wireframes with a visual-first approach: icons over text, color coding for states, and visual/haptic feedback replacing all audio cues. Every interactive element exceeds WCAG AAA touch targets (minimum 48px). Created specific patterns for camera permission flows and real-time translation feedback.",
      image: "/images/case-study/lingosign-wireframes.jpg",
    },
    {
      title: "Visual Design & Testing",
      description:
        "Used a nature-inspired green palette to feel fresh and empowering rather than clinical. All designs tested with deaf participants using think-aloud protocol (via interpreter). Iterated on the translation display based on feedback \u2014 users preferred bottom-sheet captions over overlay text.",
      image: "/images/case-study/lingosign-visual-design.jpg",
    },
  ],

  colors: [
    { name: "Primary", hex: "#059669" },
    { name: "Secondary", hex: "#0EA5E9" },
    { name: "Accent", hex: "#F59E0B" },
    { name: "High Contrast", hex: "#FFFFFF" },
    { name: "Surface", hex: "#0D2818" },
    { name: "Background", hex: "#071F14" },
  ],

  typography: [
    {
      name: "Nunito Sans",
      font: "Nunito Sans Bold / ExtraBold",
      usage: "Headlines and action labels. Rounded letterforms feel friendly and approachable. Extra bold weight ensures readability at all sizes.",
    },
    {
      name: "Inter",
      font: "Inter Medium / SemiBold",
      usage: "Body text, captions, and translated text output. Selected for exceptional clarity at small sizes and strong number/letter distinction for real-time translation display.",
    },
  ],

  takeaways: [
    {
      title: "Design with the community, not for them",
      description:
        "Direct involvement of deaf users in every design phase led to insights no amount of secondary research could provide. The think-aloud sessions (via interpreter) revealed unexpected interaction patterns and preferences.",
    },
    {
      title: "Visual feedback must replace every audio cue",
      description:
        "Systematically auditing every interaction for audio dependency was eye-opening. Replacing sounds with haptics, color changes, and animations created a richer experience that actually benefits all users.",
    },
    {
      title: "Camera-based interfaces need trust",
      description:
        "Users were initially hesitant about constant camera use. Clear privacy indicators, local-only processing badges, and a visible camera status helped build trust and willingness to use the translation feature.",
    },
    {
      title: "Empowering design over assistive design",
      description:
        "Framing the app as a communication tool (like a translator) rather than a disability aid changed the entire design language. Users responded much more positively to modern, social-media-inspired UI patterns.",
    },
  ],
}

export default function LingoSign() {
  return <CaseStudyLayout data={data} />
}
