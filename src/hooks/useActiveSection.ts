"use client";

import { useEffect, useState } from "react";
import { ACTIVE_SECTION_MARGIN } from "@/lib/constants";

/**
 * Tracks which section is currently in view so the navbar can highlight it.
 * Returns an empty string until the observer reports the first section.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const first = visible[0];
        if (first) setActive(first.target.id);
      },
      { rootMargin: ACTIVE_SECTION_MARGIN, threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
