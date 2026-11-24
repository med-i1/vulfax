import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Rendered after the label, aligned with the text. */
  trailingIcon?: ReactNode;
}

type AnchorProps = CommonProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

type NativeButtonProps = CommonProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type ButtonProps = AnchorProps | NativeButtonProps;

const base =
  "group relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-[-0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-void shadow-[0_10px_40px_-12px_rgba(101,117,255,0.75)] hover:bg-white hover:shadow-[0_18px_60px_-14px_rgba(101,117,255,0.95)]",
  secondary:
    "glass-panel text-ink hover:border-white/25 hover:bg-white/[0.06]",
  ghost:
    "border border-transparent text-muted hover:border-white/10 hover:bg-white/[0.04] hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-7 text-[15px]",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    trailingIcon,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {trailingIcon ? (
        <span className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {trailingIcon}
        </span>
      ) : null}
    </>
  );

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as AnchorProps;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as NativeButtonProps)}>
      {content}
    </button>
  );
}
