import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, person } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { SignalMark } from "@/components/signal-mark";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,box-shadow] duration-200",
        scrolled || open ? "bg-bg shadow-hairline" : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-fg">
          <SignalMark />
          <span className="font-serif text-lg tracking-tight">{person.short}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "inline-flex h-11 items-center px-3 text-sm transition-colors duration-150",
                active === item.href ? "text-fg" : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href={person.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "ml-2 inline-flex h-11 items-center rounded-md px-4 text-sm font-medium text-ink",
              "bg-primary transition-transform duration-150 ease-out hover:bg-primary/90 enabled:active:scale-(--scale-press)",
            )}
          >
            Resume
          </a>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto border-t border-border bg-bg md:hidden"
      >
        <nav className="mx-auto flex h-full max-w-6xl flex-col px-5 py-6" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-lg text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href={person.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex h-11 items-center justify-center rounded-md bg-primary text-sm font-medium text-ink"
          >
            Download resume
          </a>
          <p className="mt-auto pb-6 pt-10 text-sm text-muted">
            {person.status}
            <span className="mt-1 block">{person.location}</span>
          </p>
        </nav>
      </div>
    </header>
  );
}
