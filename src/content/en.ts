import type { SiteContent } from "@/types/content";

/**
 * English content pack.
 *
 * All copy here is deliberately non-specific: it never claims clients, numbers,
 * awards or outcomes. Replace it with approved brand messaging when available.
 */
export const en: SiteContent = {
  meta: {
    title: "VULFAX — Technology · Innovation · Future",
    description:
      "VULFAX designs and engineers premium digital systems — engineering precision, considered design, and architecture built to scale.",
  },
  nav: {
    brandTagline: "Technology · Innovation · Future",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Process", href: "#process" },
      { label: "Why VULFAX", href: "#why-vulfax" },
      { label: "Vision", href: "#vision" },
    ],
    cta: { label: "Start a conversation", href: "#contact" },
    menuLabel: "Open navigation menu",
    closeLabel: "Close navigation menu",
  },
  hero: {
    badge: "Technology · Innovation · Future",
    headline: ["Engineering the", "systems behind", "what comes next."],
    description:
      "We design and build premium digital products and platforms — combining engineering precision, considered interface design, and an architecture that scales with ambition.",
    primaryCta: { label: "Start a conversation", href: "#contact" },
    secondaryCta: { label: "Explore capabilities", href: "#capabilities" },
    scrollHint: "Scroll to explore",
    pills: ["Product strategy", "Experience design", "Platform engineering"],
    visualCaption: "Adaptive system · live topology",
    visualStatus: "Operational",
  },
  brandStatement: {
    eyebrow: "The VULFAX philosophy",
    statement:
      "Technology should feel inevitable. Every system we design starts from first principles, respects the people who use it, and is engineered to keep moving long after launch.",
    emphasis: "Designed with intent. Engineered for permanence.",
    note: "A forward-looking technology brand built around clarity, craft and scale.",
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "A complete capability surface, from first sketch to production traffic.",
    description:
      "Each discipline is available on its own, or composed into a single delivery team when a project demands the whole chain.",
    items: [
      {
        title: "Digital Products",
        description:
          "End-to-end product design and engineering — from first principles and information architecture to a production interface.",
        icon: "layers",
        tag: "Design → Build",
      },
      {
        title: "Platform Architecture",
        description:
          "Modular, observable foundations that stay maintainable as teams, features and traffic grow.",
        icon: "cpu",
        tag: "Foundations",
      },
      {
        title: "Intelligent Systems",
        description:
          "Applied automation and data-driven workflows that make products respond, not just display.",
        icon: "sparkles",
        tag: "Automation",
      },
      {
        title: "Cloud & Infrastructure",
        description:
          "Resilient delivery environments engineered for performance, cost clarity and operational confidence.",
        icon: "cloud",
        tag: "Operations",
      },
      {
        title: "Experience Design",
        description:
          "Interfaces with intent: motion, accessibility and brand consistency carried through every state.",
        icon: "compass",
        tag: "Interface",
      },
      {
        title: "Reliability Engineering",
        description:
          "Systems that hold under load — tested, instrumented and continuously refined after release.",
        icon: "shield",
        tag: "Assurance",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "A deliberate process, with no black boxes.",
    description:
      "Four working phases keep decisions visible and delivery predictable from the first session to the handover.",
    progressLabel: "Delivery progress",
    steps: [
      {
        title: "Discover",
        description:
          "We map the problem, the constraints and the people involved before proposing a single screen.",
      },
      {
        title: "Architect",
        description:
          "Design system, information architecture and technical foundations are defined and reviewed together.",
      },
      {
        title: "Build",
        description:
          "Design and engineering run in parallel, in short cycles with reviewable increments at every step.",
      },
      {
        title: "Evolve",
        description:
          "Release, measure and refine — with documentation that keeps the system understandable as it grows.",
      },
    ],
  },
  why: {
    eyebrow: "Why VULFAX",
    title: "Built like a product team, not an agency queue.",
    description:
      "The same people who define the strategy carry it through the interface and the codebase.",
    items: [
      {
        title: "Senior craft throughout",
        description:
          "Design and engineering decisions are made by the people doing the work — without layered handoffs.",
        icon: "target",
      },
      {
        title: "One continuous process",
        description:
          "Strategy, interface and implementation stay in the same room, so intent survives delivery.",
        icon: "workflow",
      },
      {
        title: "Architected to scale",
        description:
          "Foundations are chosen for the version after launch, not only for the first release.",
        icon: "gauge",
      },
      {
        title: "Transparent by default",
        description:
          "Clear scope, visible progress, honest constraints and documented technical decisions.",
        icon: "signal",
      },
    ],
  },
  vision: {
    eyebrow: "Future vision",
    title: "The next decade belongs to systems that are designed, not assembled.",
    description:
      "VULFAX is built to grow beyond a single website — into a corporate platform, and eventually an operating system for how the company works.",
    statement:
      "We are building toward a modular digital platform: one identity, many surfaces, and a foundation that absorbs new products without starting over.",
    points: [
      "A scalable brand and design system",
      "Products that share one architectural spine",
      "Infrastructure ready for global markets",
    ],
  },
  contact: {
    eyebrow: "Start a conversation",
    title: "Tell us what you are building next.",
    description:
      "Share a short outline of the project. You will get a considered response — not an automated sales sequence.",
    aside: [
      "A first conversation to align on scope and constraints.",
      "A clear view of approach, timeline and team shape.",
      "No obligation, no invented promises.",
    ],
    form: {
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      company: "Company",
      companyPlaceholder: "Optional",
      message: "Project outline",
      messagePlaceholder:
        "A few lines about what you are building, and what success looks like.",
      submit: "Send message",
      submitting: "Sending…",
      requiredHint: "Required fields are marked with an asterisk.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        message: "Please add at least 20 characters about your project.",
      },
      successTitle: "Message sent",
      successBody: "Thank you — your message has been received.",
      localOnlyTitle: "Validated locally",
      localOnlyBody:
        "Your details passed validation, but message delivery is not connected in this build yet. Configure a contact endpoint in src/config/site.ts to enable it.",
      errorTitle: "Could not send",
      errorBody:
        "Something interrupted the request. Please try again in a moment.",
      retry: "Try again",
    },
  },
  footer: {
    tagline:
      "A technology brand engineering digital systems with precision, restraint and intent.",
    navTitle: "Navigate",
    contactTitle: "Contact",
    contactPending: "Contact details pending approval",
    legal: [],
    social: [],
    availability: "Available for selected collaborations",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};
