"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { content } from "@/content";
import { EASE_OUT_EXPO } from "@/lib/constants";

export function BrandStatement() {
  const { brandStatement } = content;

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-y border-white/6 py-24 sm:py-28 lg:py-36"
    >
      <AmbientGlow tone="violet" />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-gradient-to-r from-accent/80 to-transparent"
              />
              {brandStatement.eyebrow}
            </div>

            <motion.div
              aria-hidden="true"
              className="mt-8 h-px w-full max-w-[12rem] origin-left bg-gradient-to-r from-accent via-violet/50 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.1, ease: EASE_OUT_EXPO }}
            />

            <p className="mt-6 max-w-[26ch] text-xs leading-relaxed text-muted/80">
              {brandStatement.note}
            </p>
          </div>

          <div className="lg:col-span-9 lg:pl-8">
            <AnimatedText
              as="h2"
              text={brandStatement.statement}
              className="max-w-[24ch] font-display text-[clamp(1.55rem,3.1vw,2.6rem)] font-medium leading-[1.22] tracking-[-0.02em] text-ink sm:max-w-[26ch]"
              stagger={0.018}
            />

            <motion.p
              className="mt-8 font-display text-sm uppercase tracking-[0.18em] text-accent sm:text-base"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE_OUT_EXPO }}
            >
              {brandStatement.emphasis}
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
}
