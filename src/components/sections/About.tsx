import { aboutContent } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Building practical systems that create real operational leverage."
            description={aboutContent.intro}
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {aboutContent.body}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="rounded-2xl border border-border bg-surface/70 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Interests
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {aboutContent.interests.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border/80 bg-surface-elevated/50 px-3 py-2 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
