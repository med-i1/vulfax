"use client";

import { useEffect } from "react";
import { PageTransition } from "@/components/animations/PageTransition";

export default function GlobalRouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaced in the server/browser console for diagnostics.
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-[100svh] items-center justify-center px-5">
      <PageTransition className="max-w-md text-center">
        <p className="font-display text-[11px] uppercase tracking-[0.28em] text-accent">
          Unexpected interruption
        </p>
        <h1 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
          Something went wrong loading this view.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The page could not be rendered. You can retry the request.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-void transition-colors hover:bg-white"
        >
          Try again
        </button>
      </PageTransition>
    </main>
  );
}
