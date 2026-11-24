"use client";

import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Parallax } from "@/components/animations/Parallax";
import { content } from "@/content";

function HorizonVisual() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/8 bg-[linear-gradient(180deg,#0a0c14_0%,#0d1120_45%,#08090d_100%)]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(101,117,255,0.35),transparent_62%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 shadow-[inset_0_0_60px_rgba(101,117,255,0.45)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
      />

      {/* Perspective floor */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden opacity-50"
        style={{ perspective: "320px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(101,117,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(101,117,255,0.35) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            transform: "rotateX(62deg)",
            transformOrigin: "top center",
            maskImage: "linear-gradient(to bottom, #000, transparent 85%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000, transparent 85%)",
          }}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-void to-transparent"
      />

      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 text-[9px] uppercase tracking-[0.16em] text-muted/80 sm:inset-x-5 sm:bottom-5 sm:text-[10px] sm:tracking-[0.2em]">
        <span className="truncate">Platform horizon</span>
        <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap">
          <span aria-hidden="true" className="size-1 rounded-full bg-cyan" />
          v1 → vNext
        </span>
      </div>
    </div>
  );
}

export function Vision() {
  const { vision } = content;

  return (
    <section
      id="vision"
      className="relative isolate overflow-hidden border-y border-white/6 bg-surface/20 py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(139,92,246,0.16),transparent_70%)]"
      />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={vision.eyebrow}
          title={vision.title}
          description={vision.description}
          narrow
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-display text-[clamp(1.3rem,2.2vw,1.85rem)] font-medium leading-[1.35] text-ink/90">
                {vision.statement}
              </p>
            </Reveal>

            <ul className="mt-9 space-y-4">
              {vision.points.map((point, index) => (
                <Reveal key={point} delay={0.08 * index}>
                  <li className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                      <Icon name="check" className="size-3" strokeWidth={2.2} />
                    </span>
                    {point}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <Parallax distance={28}>
              <HorizonVisual />
            </Parallax>
          </div>
        </div>
      </Container>
    </section>
  );
}
