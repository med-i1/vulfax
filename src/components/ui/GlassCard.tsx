"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  /** Enable the subtle pointer-driven tilt. */
  tilt?: boolean;
}

/**
 * Glass surface. The spotlight gradient lives in CSS (`.spotlight-card`), fed
 * by `--spot-x` / `--spot-y`; only the tilt needs springs.
 */
export function GlassCard({ children, className, tilt = false }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const coarsePointer = useMediaQuery("(pointer: coarse)");
  const tiltEnabled = tilt && !reduced && !coarsePointer;

  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 24 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 24 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    element.style.setProperty("--spot-x", `${x}%`);
    element.style.setProperty("--spot-y", `${y}%`);

    if (!tiltEnabled) return;
    rotateY.set(((x - 50) / 50) * 4);
    rotateX.set(((50 - y) / 50) * 4);
  }

  function handlePointerLeave() {
    const element = ref.current;
    element?.style.setProperty("--spot-x", "50%");
    element?.style.setProperty("--spot-y", "50%");
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        tiltEnabled
          ? {
              rotateX,
              rotateY,
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
      className={cn(
        "spotlight-card glass-panel relative overflow-hidden rounded-3xl",
        "transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/20",
        className,
      )}
    >
      <div className="relative z-[2]">{children}</div>
    </motion.div>
  );
}
