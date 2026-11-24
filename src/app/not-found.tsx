import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { PageTransition } from "@/components/animations/PageTransition";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-5">
      <div aria-hidden="true" className="absolute inset-0 -z-10 grid-overlay" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-[140px]"
      />

      <PageTransition className="w-full max-w-lg text-center">
        <div className="flex justify-center">
          <Logo />
        </div>
        <p className="mt-12 font-display text-[11px] uppercase tracking-[0.28em] text-muted">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
          This surface does not exist yet.
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
          The page you requested is not part of the current release.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-void transition-colors hover:bg-white"
        >
          Return to VULFAX
        </Link>
      </PageTransition>
    </main>
  );
}
