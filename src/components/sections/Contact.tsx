"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Have an interesting project in mind? Let's build something together."
            description="Reach out for software engineering, automation, full-stack, or Generative AI collaboration."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface/70 p-6 sm:p-8">
              <dl className="space-y-5">
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                    Name
                  </dt>
                  <dd className="mt-1 text-foreground">{siteConfig.name}</dd>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                      Location
                    </dt>
                    <dd className="mt-1 text-foreground">{siteConfig.location}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="focus-ring text-foreground underline-offset-4 hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={siteConfig.phoneHref}
                        className="focus-ring text-foreground underline-offset-4 hover:underline"
                      >
                        {siteConfig.phone}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${siteConfig.email}`}>
                  <Mail className="h-4 w-4" />
                  Email me
                </Button>
                <Button variant="secondary" onClick={copyEmail}>
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied ? "Copied" : "Copy email"}
                </Button>
                <Button
                  href={siteConfig.contactFormUrl}
                  variant="ghost"
                  external
                >
                  <ExternalLink className="h-4 w-4" />
                  Contact form
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/70 p-6 sm:p-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Social
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Prefer async? Find me on GitHub and LinkedIn. The contact form
                  opens the existing Google Form so messages are submitted for
                  real—not a fake success UI.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center justify-between rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 transition hover:border-accent/35"
                >
                  <span className="inline-flex items-center gap-3 text-sm text-foreground">
                    <GitHubIcon className="text-accent" />
                    GitHub
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center justify-between rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 transition hover:border-accent/35"
                >
                  <span className="inline-flex items-center gap-3 text-sm text-foreground">
                    <LinkedInIcon className="text-accent" />
                    LinkedIn
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted" />
                </a>
                <Button href={siteConfig.resumePath} className="w-full">
                  Download Resume
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
