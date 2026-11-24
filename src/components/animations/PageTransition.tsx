"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Lightweight mount transition. Reserved for standalone routes; the landing
 * page renders above the fold without it to keep first paint immediate.
 */
export function PageTransition({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
