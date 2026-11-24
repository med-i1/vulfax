"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { content } from "@/content";
import { sectionIds } from "@/config/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { nav } = content;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "border-b border-white/8 bg-void/70 backdrop-blur-xl supports-[backdrop-filter]:bg-void/55"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container>
          <div className="flex h-[72px] items-center justify-between gap-6">
            <a
              href="#home"
              className="rounded-lg transition-opacity hover:opacity-80"
              aria-label="VULFAX — home"
            >
              <Logo />
            </a>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {nav.links.map((link) => {
                  const isActive = `#${activeSection}` === link.href;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "relative inline-flex h-9 items-center rounded-full px-3.5 text-[13px] transition-colors duration-300",
                          isActive
                            ? "text-ink"
                            : "text-muted hover:text-ink",
                        )}
                      >
                        {isActive ? (
                          <motion.span
                            layoutId="nav-active-pill"
                            className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.06]"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        ) : null}
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <MagneticButton className="hidden sm:inline-flex">
                <Button
                  href={nav.cta.href}
                  size="sm"
                  variant="secondary"
                  trailingIcon={<Icon name="arrow-up-right" className="size-4" />}
                >
                  {nav.cta.label}
                </Button>
              </MagneticButton>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                aria-label={menuOpen ? nav.closeLabel : nav.menuLabel}
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-ink transition-colors hover:bg-white/[0.08] lg:hidden"
              >
                <Icon name={menuOpen ? "close" : "menu"} className="size-5" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            key="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden"
          >
            <div className="border-b border-white/8 bg-void/95 backdrop-blur-xl">
              <Container>
                <nav aria-label="Mobile" className="py-4">
                  <ul className="flex flex-col">
                    {nav.links.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.04 + index * 0.035,
                          duration: 0.32,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <a
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center justify-between border-b border-white/5 py-3.5 text-[15px] text-ink"
                        >
                          {link.label}
                          <Icon
                            name="arrow-up-right"
                            className="size-4 text-muted"
                          />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="pt-5">
                    <Button
                      href={nav.cta.href}
                      size="lg"
                      className="w-full"
                      onClick={() => setMenuOpen(false)}
                    >
                      {nav.cta.label}
                    </Button>
                  </div>
                </nav>
              </Container>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
