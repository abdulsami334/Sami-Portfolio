import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="A timeline of production-minded engineering." description="Internship work reframed around the impact recruiters care about: architecture, quality, security, and reliability." />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2" />
          {experiences.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08} className="relative mb-10 grid gap-6 md:grid-cols-2">
              <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                <div className="glass rounded-lg p-6">
                  <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-md bg-primary font-semibold text-primary-foreground">{item.logo}</div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{item.role}</h3>
                  <p className="mt-1 text-muted-foreground">{item.company}</p>
                  <p className="mt-4 leading-7 text-muted-foreground">{item.summary}</p>
                </div>
              </div>
              <div className={index % 2 === 0 ? "md:col-start-2" : "md:row-start-1"}>
                <div className="rounded-lg border bg-card p-6">
                  <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
