/**
 * Anchor targets in page order. Labels live in the content packs, so this list
 * stays language-independent and is used for active-section tracking.
 */
export const sectionIds = [
  "home",
  "about",
  "capabilities",
  "process",
  "why-vulfax",
  "vision",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
