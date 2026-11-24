import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technical capabilities"
            description="Organized by the areas I use most often in product, automation, and AI engineering work."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface/70 p-5 transition hover:border-accent/30">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-surface-elevated/60 px-2.5 py-1 text-xs text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
