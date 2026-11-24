"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-surface/70 transition duration-300",
        "hover:border-accent/35 hover:bg-surface",
      )}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full text-left"
        aria-label={`View details for ${project.title}`}
      >
        <div className="overflow-hidden">
          <div className="transition duration-500 group-hover:scale-[1.02]">
            <ProjectVisual project={project} />
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-surface-elevated/60 px-2.5 py-1 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 ? (
              <span className="rounded-md px-2.5 py-1 text-xs text-muted">
                +{project.technologies.length - 4}
              </span>
            ) : null}
          </div>
          <p className="mt-5 text-sm font-medium text-accent">
            View project details →
          </p>
        </div>
      </button>
    </article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-background p-5 shadow-2xl sm:p-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.25 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Featured project
            </p>
            <h3
              id="project-modal-title"
              className="mt-2 font-display text-2xl font-semibold text-foreground"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            aria-label="Close project details"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5">
          <ProjectVisual project={project} />
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        {project.note ? (
          <p className="mt-4 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted">
            {project.note}
          </p>
        ) : null}

        <div className="mt-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Features
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-lg border border-border bg-surface/70 px-3 py-2 text-sm text-foreground"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Technologies
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-accent-soft px-2.5 py-1 text-xs text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.githubUrl ? (
            <Button href={project.githubUrl} external>
              <GitHubIcon />
              GitHub
            </Button>
          ) : null}
          {project.liveUrl ? (
            <Button href={project.liveUrl} variant="secondary" external>
              <ExternalLink className="h-4 w-4" />
              Live demo
            </Button>
          ) : null}
          {!project.githubUrl && !project.liveUrl ? (
            <p className="text-sm text-muted">
              Public repository and demo links will be added when available.
            </p>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Featured work"
            description="Selected applications across product engineering, automation, and Generative AI."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
