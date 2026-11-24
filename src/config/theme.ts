/**
 * Design tokens mirrored from the CSS `@theme` block.
 * Use these when a value is needed in TypeScript (canvas, SVG, meta theme).
 */
export const theme = {
  colors: {
    void: "#08090D",
    surface: "#10131B",
    elevated: "#191E2A",
    ink: "#F4F6FC",
    muted: "#9299AB",
    accent: "#6575FF",
    violet: "#8B5CF6",
    cyan: "#00D4FF",
  },
  font: {
    display: "var(--font-display)",
    body: "var(--font-sans)",
  },
} as const;

export type Theme = typeof theme;
