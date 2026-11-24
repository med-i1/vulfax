"use client";

import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { content } from "@/content";

export function WhyVulfax() {
  const { why } = content;

  return (
    <section
      id="why-vulfax"
      className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 size-[32rem] rounded-full bg-violet/10 blur-[160px] animate-drift"
      />

      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            eyebrow={why.eyebrow}
            title={why.title}
            className="lg:col-span-8"
            narrow
          />
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="max-w-[42ch] text-sm leading-relaxed text-muted lg:text-right">
              {why.description}
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {why.items.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={0.05 * index} className="h-full">
                <GlassCard tilt className="h-full">
                  <div className="flex h-full flex-col gap-5 p-6 sm:p-8">
                    <div className="flex items-center gap-4">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-accent">
                        <Icon name={item.icon} className="size-[18px]" />
                      </span>
                      <h3 className="font-display text-lg font-medium leading-snug text-ink">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[13.5px] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
