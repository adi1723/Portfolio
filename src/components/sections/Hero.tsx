"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, FileDown, MapPin } from "lucide-react";
import { heroContent, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--hero-sheen)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
        <div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs text-muted backdrop-blur"
          >
            <MapPin className="h-3.5 w-3.5 text-accent" />
            Based in {siteConfig.location}
            {siteConfig.availability.enabled ? (
              <>
                <span className="text-border">·</span>
                <span className="inline-flex items-center gap-1.5 text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {siteConfig.availability.label}
                </span>
              </>
            ) : null}
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {heroContent.name}
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 max-w-2xl text-xl font-medium leading-snug text-foreground/90 sm:text-2xl md:text-[1.7rem]"
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects">
              View Projects
              <ArrowDownRight className="h-4 w-4" />
            </Button>
            <Button href={siteConfig.resumePath} variant="secondary">
              <FileDown className="h-4 w-4" />
              Download Resume
            </Button>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted transition hover:border-accent/40 hover:text-foreground"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted transition hover:border-accent/40 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
