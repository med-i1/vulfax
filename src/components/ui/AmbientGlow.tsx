import { cn } from "@/lib/utils";

interface AmbientGlowProps {
  className?: string;
  /** Colour treatment for the blurred fields. */
  tone?: "accent" | "violet" | "cyan";
}

const tones = {
  accent: "bg-accent/18",
  violet: "bg-violet/16",
  cyan: "bg-cyan/12",
} as const;

export function AmbientGlow({ className, tone = "accent" }: AmbientGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute left-[8%] top-[-6%] size-[34rem] rounded-full blur-[140px] animate-drift",
          tones[tone],
        )}
      />
      <div
        className={cn(
          "absolute right-[-6%] top-[30%] size-[28rem] rounded-full blur-[150px] animate-drift [animation-delay:-8s]",
          tone === "violet" ? "bg-accent/14" : "bg-violet/14",
        )}
      />
      <div className="absolute inset-0 noise" />
    </div>
  );
}
