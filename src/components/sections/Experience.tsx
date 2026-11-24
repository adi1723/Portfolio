import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience"
            description="Roles focused on automation systems, Generative AI prototypes, and data-driven product work."
          />
        </Reveal>

        <div className="relative mt-14 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-border md:before:left-[15px]">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <article className="relative pl-10 md:pl-12">
                <span className="absolute top-2 left-0 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-background md:h-8 md:w-8">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>

                <div className="rounded-2xl border border-border bg-surface/70 p-6 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-accent">{item.company}</p>
                    </div>
                    <div className="text-sm text-muted sm:text-right">
                      <p>{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:top-2 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/70 sm:text-[15px]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  {item.additional ? (
                    <div className="mt-6 rounded-xl border border-border bg-surface-elevated/50 p-5">
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                        {item.additional.title}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {item.additional.highlights.map((point) => (
                          <li
                            key={point}
                            className="text-sm leading-relaxed text-muted"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
