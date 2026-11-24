"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { content } from "@/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * GSAP is used here only because the progress line is genuinely scroll-linked.
 * Everything else animates through Motion. The context is reverted on unmount
 * so ScrollTriggers never leak between navigations.
 */
export function Process() {
  const { process } = content;
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const progress = progressRef.current;
    if (!container || !progress) return;

    if (reduced) {
      gsap.set(progress, { scaleX: 1, scaleY: 1 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        progress,
        { scaleX: 0, scaleY: 0 },
        {
          scaleX: 1,
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 78%",
            end: "bottom 62%",
            scrub: 0.6,
          },
        },
      );
    }, container);

    return () => context.revert();
  }, [reduced]);

  return (
    <section
      id="process"
      className="relative isolate overflow-hidden border-y border-white/6 bg-surface/30 py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
          narrow
        />

        <div ref={containerRef} className="relative mt-16 lg:mt-20">
          <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
            {/* Desktop rail */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-[5px] hidden h-px bg-white/10 lg:block"
            >
              <div
                ref={progressRef}
                className="h-full w-full origin-left bg-gradient-to-r from-accent via-violet to-cyan"
                style={{ transform: "scaleX(0)" }}
              />
            </div>

            {/* Mobile rail */}
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-[3px] top-2 w-px bg-white/10 lg:hidden"
            />

            {process.steps.map((step, index) => (
              <li key={step.title} className="relative pl-9 lg:pl-0 lg:pt-12">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 grid size-2 place-items-center rounded-full bg-accent shadow-[0_0_18px_2px_rgba(101,117,255,0.55)]"
                />

                <Reveal delay={0.05 * index}>
                  <p className="font-display text-[11px] uppercase tracking-[0.24em] text-muted/70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-medium text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[32ch] text-[13.5px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          <p className="sr-only">{process.progressLabel}</p>
        </div>
      </Container>
    </section>
  );
}
