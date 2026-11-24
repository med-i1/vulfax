import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animations/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  /** Wrap the title in a narrower measure. */
  narrow?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  narrow = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-muted",
          )}
        >
          <span
            aria-hidden="true"
            className="h-px w-8 bg-gradient-to-r from-accent/80 to-transparent"
          />
          {eyebrow}
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <h2
          className={cn(
            "font-display text-[clamp(1.9rem,3.6vw,3.15rem)] font-medium leading-[1.06] text-ink",
            narrow && "max-w-[22ch]",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.12}>
          <p className="max-w-[52ch] text-[15px] leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
