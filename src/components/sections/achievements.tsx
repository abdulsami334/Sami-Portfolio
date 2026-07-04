import { achievements } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function AchievementsSection() {
  return (
    <section id="achievements" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Achievements" title="Signals of consistency and initiative." description="Academic recognition, project awards, hackathon exposure, and founder-level ownership." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={index * 0.05} className="rounded-lg border bg-card p-6 transition-transform hover:-translate-y-1">
              <achievement.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-6 text-xl font-semibold">{achievement.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{achievement.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
