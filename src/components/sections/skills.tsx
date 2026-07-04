import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Technical Skills" title="Depth where AI products usually break." description="A categorized map of the systems, AI, database, cloud, and quality skills behind the work." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04} className="group rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.summary}</p>
                </div>
                <div className="rounded-md border bg-background p-3 text-accent">
                  <group.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} className="bg-background/70">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
