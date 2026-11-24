import { cn } from "@/lib/utils";

interface OrbVisualProps {
  caption: string;
  status: string;
  className?: string;
}

/**
 * A lightweight stand-in for a 3D scene: layered radial gradients, masked
 * conic rings and SVG orbits. No WebGL, no runtime cost, no layout shift.
 */
export function OrbVisual({ caption, status, className }: OrbVisualProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[520px]", className)}>
      <div className="relative aspect-square w-full">
        {/* Ambient bloom */}
        <div
          aria-hidden="true"
          className="absolute inset-[6%] rounded-full bg-accent/20 blur-[80px] animate-pulse-soft"
        />
        <div
          aria-hidden="true"
          className="absolute inset-[26%] rounded-full bg-violet/30 blur-[60px]"
        />

        {/* Orbit paths */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 size-full"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="orbit-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6575FF" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#00D4FF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="orbit-b" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6575FF" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g className="animate-spin-slow origin-center">
            <ellipse
              cx="200"
              cy="200"
              rx="186"
              ry="74"
              fill="none"
              stroke="url(#orbit-a)"
              strokeWidth="1"
              transform="rotate(-22 200 200)"
            />
          </g>
          <g className="animate-spin-reverse origin-center">
            <ellipse
              cx="200"
              cy="200"
              rx="168"
              ry="58"
              fill="none"
              stroke="url(#orbit-b)"
              strokeWidth="1"
              strokeDasharray="3 9"
              transform="rotate(34 200 200)"
            />
          </g>
          <ellipse
            cx="200"
            cy="200"
            rx="140"
            ry="140"
            fill="none"
            stroke="rgba(244,246,252,0.07)"
            strokeWidth="1"
          />
        </svg>

        {/* Thin rotating spectrum ring */}
        <div
          aria-hidden="true"
          className="ring-gradient animate-spin-slow absolute inset-[9%] rounded-full opacity-60"
          style={{
            maskImage:
              "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 0)",
            WebkitMaskImage:
              "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 0)",
          }}
        />
        <div
          aria-hidden="true"
          className="ring-gradient animate-spin-reverse absolute inset-[15%] rounded-full opacity-25"
          style={{
            maskImage:
              "radial-gradient(farthest-side, transparent calc(100% - 1px), #000 0)",
            WebkitMaskImage:
              "radial-gradient(farthest-side, transparent calc(100% - 1px), #000 0)",
          }}
        />

        {/* Core sphere */}
        <div
          aria-hidden="true"
          className="absolute inset-[28%] overflow-hidden rounded-full border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-40px_60px_-20px_rgba(101,117,255,0.55),0_40px_120px_-20px_rgba(101,117,255,0.45)]"
          style={{
            background:
              "radial-gradient(circle at 34% 26%, #3a4a8f 0%, #1d2450 34%, #101426 62%, #08090d 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(244,246,252,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,246,252,0.35) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(circle at 38% 32%, #000 10%, transparent 72%)",
              WebkitMaskImage:
                "radial-gradient(circle at 38% 32%, #000 10%, transparent 72%)",
            }}
          />
          <div className="absolute inset-x-0 top-1/2 h-24 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan/25 to-transparent blur-md animate-scan" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.55),transparent_38%)] opacity-70" />
        </div>

        {/* Satellite particles */}
        <span
          aria-hidden="true"
          className="absolute left-[14%] top-[24%] size-1.5 rounded-full bg-cyan shadow-[0_0_14px_2px_rgba(0,212,255,0.7)] animate-pulse-soft"
        />
        <span
          aria-hidden="true"
          className="absolute right-[16%] top-[62%] size-1 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(101,117,255,0.8)] animate-pulse-soft [animation-delay:-2.5s]"
        />
        <span
          aria-hidden="true"
          className="absolute left-[42%] bottom-[8%] size-1 rounded-full bg-violet shadow-[0_0_12px_2px_rgba(139,92,246,0.8)] animate-pulse-soft [animation-delay:-4s]"
        />

        {/* Telemetry chip */}
        <div className="absolute -bottom-2 left-1/2 w-[88%] -translate-x-1/2">
          <div className="glass-panel flex items-center justify-between gap-3 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3">
            <span className="min-w-0 font-display text-[9px] uppercase leading-[1.4] tracking-[0.16em] text-muted sm:text-[10px] sm:tracking-[0.2em]">
              {caption}
            </span>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-[9px] uppercase tracking-[0.16em] text-emerald-300 sm:text-[10px] sm:tracking-[0.18em]">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-400" />
              {status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
