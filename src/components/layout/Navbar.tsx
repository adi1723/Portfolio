"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = siteConfig.nav.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

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
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a
          href="#home"
          className="focus-ring font-display text-lg font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-md px-3 py-2 text-sm transition",
                active === item.href
                  ? "bg-accent-soft text-accent"
                  : "text-muted hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md text-muted transition hover:bg-accent-soft hover:text-foreground"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md text-muted transition hover:bg-accent-soft hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <ThemeToggle />
          <Button href={siteConfig.resumePath} variant="secondary" className="ml-1">
            <FileDown className="h-4 w-4" />
            Resume
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface/70"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-b border-border bg-background/95 backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-md px-3 py-3 text-base transition",
                active === item.href
                  ? "bg-accent-soft text-accent"
                  : "text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-2 border-t border-border pt-4">
            <Button href={siteConfig.resumePath} className="flex-1">
              <FileDown className="h-4 w-4" />
              Resume
            </Button>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
