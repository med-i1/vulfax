import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { Icon } from "@/components/ui/Icon";
import { content } from "@/content";
import { siteConfig } from "@/config/site";

export function Footer() {
  const { footer, nav } = content;
  const year = new Date().getFullYear();
  const hasSecondaryLinks = footer.legal.length > 0 || footer.social.length > 0;

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/8 bg-surface/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <Container className="relative z-10">
        <div className="grid gap-12 py-14 md:grid-cols-12 md:gap-8 lg:py-16">
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#home" className="inline-flex" aria-label="VULFAX — home">
              <Logo />
            </a>
            <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-muted">
              {footer.tagline}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-muted">
              <span
                aria-hidden="true"
                className="relative flex size-1.5"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative size-1.5 rounded-full bg-emerald-400" />
              </span>
              {footer.availability}
            </div>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 lg:col-span-3">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              {footer.navTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink/80 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              {footer.contactTitle}
            </h2>
            <div className="mt-5 space-y-3 text-sm">
              {siteConfig.email ? (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-ink/80 transition-colors hover:text-ink"
                >
                  <Icon name="mail" className="size-4 text-muted" />
                  {siteConfig.email}
                </a>
              ) : (
                <p className="inline-flex items-center gap-2 text-muted">
                  <Icon name="mail" className="size-4" />
                  {footer.contactPending}
                </p>
              )}
              <p className="max-w-[30ch] text-xs leading-relaxed text-muted/80">
                {nav.brandTagline}
              </p>
            </div>

            {hasSecondaryLinks ? (
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {footer.legal.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-xs text-muted transition-colors hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                {footer.social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-xs text-muted transition-colors hover:text-ink"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="md:col-span-12 lg:col-span-2">
            <div className="flex h-full items-start justify-start md:justify-end">
              <a
                href="#home"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-muted transition-colors hover:border-white/20 hover:text-ink"
              >
                {footer.backToTop}
                <Icon name="arrow-up" className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/8 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.copyrightHolder}. {footer.rights}
          </p>
          <p className="font-display text-[10px] uppercase tracking-[0.26em] text-muted/70">
            {nav.brandTagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
