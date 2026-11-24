"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO } from "@/lib/constants";

interface AnimatedTextProps {
  text: string;
  className?: string;
  /** Element to render as the container. */
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
}

/**
 * Splits text deterministically on whitespace so server and client markup
 * match exactly (no random ids, no locale-dependent splitting).
 */
export function AnimatedText({
  text,
  className,
  as = "p",
  delay = 0,
  stagger = 0.04,
}: AnimatedTextProps) {
  const words = text.split(/\s+/).filter(Boolean);
  const MotionTag = motion[as] as React.ElementType;

  return (
    <MotionTag
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.75, ease: EASE_OUT_EXPO },
              },
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
