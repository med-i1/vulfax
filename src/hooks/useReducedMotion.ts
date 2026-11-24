"use client";

import { useReducedMotion as useMotionReducedMotion } from "motion/react";

/**
 * Returns true when the user asked for reduced motion. Used to switch heavy
 * effects off while keeping content and layout fully functional.
 */
export function useReducedMotion(): boolean {
  return useMotionReducedMotion() ?? false;
}
