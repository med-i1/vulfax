"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { OrbVisual } from "@/components/ui/OrbVisual";
import { content } from "@/content";
import { EASE_OUT_EXPO } from "@/lib/constants";

export function Hero() {
  const { hero } = content;
  const lastLine = hero.headline.length - 1;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-32"
    >
      {/* Atmosphere */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 grid-overlay" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[520px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(101,117,255,0.22),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 -z-10 size-[36rem] rounded-full bg-violet/10 blur-[160px] animate-drift"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 noise" />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:gap-10">
          <div className="max-w-[38rem]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted backdrop-blur-sm">
                <span
                  aria-hidden="true"
                  className="relative flex size-1.5 items-center justify-center"
                >
                  <span className="absolute size-1.5 animate-ping rounded-full bg-accent/70" />
                  <span className="relative size-1.5 rounded-full bg-accent" />
                </span>
                {hero.badge}
              </span>
            </motion.div>

            <h1 className="mt-7 font-display text-[clamp(2.6rem,5.6vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.03em] text-ink">
              {hero.headline.map((line, index) => (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className={
                      index === lastLine
                        ? "block text-gradient"
                        : "block"
                    }
                    initial={{ y: "108%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.95,
                      delay: 0.12 + index * 0.09,
                      ease: EASE_OUT_EXPO,
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="mt-7 max-w-[46ch] text-[15px] leading-relaxed text-muted sm:text-base"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease: EASE_OUT_EXPO }}
            >
              {hero.description}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.54, ease: EASE_OUT_EXPO }}
            >
              <MagneticButton className="w-full sm:w-auto">
                <Button
                  href={hero.primaryCta.href}
                  size="lg"
                  className="w-full sm:w-auto"
                  trailingIcon={<Icon name="arrow-up-right" className="size-4" />}
                >
                  {hero.primaryCta.label}
                </Button>
              </MagneticButton>
              <Button
                href={hero.secondaryCta.href}
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.ul
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/8 pt-6 text-[10px] uppercase tracking-[0.18em] text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
            >
              {hero.pills.map((pill) => (
                <li key={pill} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="size-1 rounded-full bg-accent/80"
                  />
                  {pill}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            className="relative lg:pl-6"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease: EASE_OUT_EXPO }}
          >
            <OrbVisual
              caption={hero.visualCaption}
              status={hero.visualStatus}
              className="max-w-[440px] sm:max-w-[500px]"
            />
          </motion.div>
        </div>
      </Container>

      <motion.div
        className="absolute inset-x-0 bottom-6 hidden justify-center lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <a
          href="#about"
          className="group inline-flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-ink"
        >
          {hero.scrollHint}
          <span
            aria-hidden="true"
            className="relative h-10 w-px overflow-hidden bg-white/12"
          >
            <span className="absolute inset-x-0 top-0 h-3 animate-[vulfax-scan_2.6s_ease-in-out_infinite] bg-gradient-to-b from-accent to-transparent" />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
