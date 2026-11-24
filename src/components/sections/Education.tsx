import { GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Education" title="Academic foundation" />
            <div className="mt-8 rounded-2xl border border-border bg-surface/70 p-6 sm:p-8">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground sm:text-2xl">
                {education.degree}
              </h3>
              <p className="mt-2 text-accent">{education.school}</p>
              <p className="mt-3 text-sm text-muted">
                Graduated: {education.graduated}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow="Certifications"
              title="Additional credentials"
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {certifications.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border bg-surface/70 px-4 py-4 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
