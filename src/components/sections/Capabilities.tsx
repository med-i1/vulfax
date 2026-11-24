"use client";

import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { content } from "@/content";

export function Capabilities() {
  const { capabilities } = content;

  return (
    <section
      id="capabilities"
      className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 size-[30rem] rounded-full bg-accent/8 blur-[150px]"
      />

      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            eyebrow={capabilities.eyebrow}
            title={capabilities.title}
            className="lg:col-span-7"
            narrow
          />
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="max-w-[46ch] text-sm leading-relaxed text-muted lg:text-right">
              {capabilities.description}
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {capabilities.items.map((item, index) => (
            <li key={item.title} className="h-full">
              <Reveal delay={0.04 * (index % 3)} className="h-full">
                <GlassCard tilt className="h-full">
                  <div className="flex h-full flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="relative grid size-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.01] text-accent">
                        <Icon name={item.icon} className="size-5" />
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-xl shadow-[0_0_28px_-10px_rgba(101,117,255,0.9)]"
                        />
                      </span>
                      <span className="font-display text-[11px] tracking-[0.18em] text-muted/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-7 font-display text-[19px] font-medium leading-snug text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                      {item.description}
                    </p>

                    {item.tag ? (
                      <div className="mt-auto pt-7">
                        <div className="flex items-center justify-between border-t border-white/8 pt-4">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-muted/70">
                            {item.tag}
                          </span>
                          <Icon
                            name="arrow-up-right"
                            className="size-3.5 text-muted/50"
                          />
                        </div>
                      </div>
                    ) : null}
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
