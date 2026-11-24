export type IconName =
  | "cpu"
  | "layers"
  | "shield"
  | "sparkles"
  | "cloud"
  | "gauge"
  | "compass"
  | "workflow"
  | "signal"
  | "target"
  | "arrow-up-right"
  | "arrow-up"
  | "check"
  | "menu"
  | "close"
  | "mail";

export interface NavLink {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: IconName;
  tag?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: IconName;
}

export interface ContactFormCopy {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  company: string;
  companyPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  requiredHint: string;
  errors: {
    name: string;
    email: string;
    message: string;
  };
  successTitle: string;
  successBody: string;
  /** Shown when no delivery endpoint is configured. No delivery is claimed. */
  localOnlyTitle: string;
  localOnlyBody: string;
  errorTitle: string;
  errorBody: string;
  retry: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brandTagline: string;
    links: NavLink[];
    cta: CtaLink;
    menuLabel: string;
    closeLabel: string;
  };
  hero: {
    badge: string;
    headline: string[];
    description: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    scrollHint: string;
    pills: string[];
    visualCaption: string;
    visualStatus: string;
  };
  brandStatement: {
    eyebrow: string;
    statement: string;
    emphasis: string;
    note: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    items: Capability[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
    progressLabel: string;
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    items: Benefit[];
  };
  vision: {
    eyebrow: string;
    title: string;
    description: string;
    statement: string;
    points: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    aside: string[];
    form: ContactFormCopy;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    contactPending: string;
    legal: { label: string; href: string }[];
    social: { label: string; href: string; icon: IconName }[];
    availability: string;
    rights: string;
    backToTop: string;
  };
}
