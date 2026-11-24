"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  /** Maximum displacement in pixels. */
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  strength = 8,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const coarsePointer = useMediaQuery("(pointer: coarse)");
  const enabled = !reduced && !coarsePointer;

  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 20 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!enabled) return;
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const offsetX = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    const offsetY = (event.clientY - (rect.top + rect.height / 2)) / rect.height;

    x.set(offsetX * strength * 2);
    y.set(offsetY * strength * 2);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x, y }}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  );
}
