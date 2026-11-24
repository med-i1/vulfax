import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid size-8 place-items-center rounded-[10px] border border-white/12 bg-gradient-to-br from-white/[0.14] to-white/[0.02]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="vulfax-mark" x1="2" y1="3" x2="22" y2="21">
              <stop offset="0%" stopColor="#C7CFFF" />
              <stop offset="55%" stopColor="#6575FF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path
            d="M3 5.5 12 20 21 5.5"
            stroke="url(#vulfax-mark)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 5.5 12 12.2 16 5.5"
            stroke="url(#vulfax-mark)"
            strokeOpacity="0.55"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[10px] shadow-[0_0_24px_-6px_rgba(101,117,255,0.65)]"
        />
      </span>
      <span className="font-display text-[15px] font-semibold tracking-[0.28em] text-ink">
        VULFAX
      </span>
    </span>
  );
}
