import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/site/section-heading";
import { about, profile, techIcons } from "@/data/portfolio";
import { Reveal } from "@/components/motion/reveal";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="An AI and backend engineer who starts from the real problem." description="Python and C# today, with systems tested against real calls, real field images and real users." />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass rounded-lg p-8">
            <p className="text-xl leading-9 text-foreground">{about}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {profile.openTo.map((role) => (
                <Badge key={role}>{role}</Badge>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} className="rounded-lg border bg-card p-6">
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
              {techIcons.map((Icon, index) => (
                <div key={index} className="grid aspect-square place-items-center rounded-md border bg-background/56 text-muted-foreground transition-colors hover:text-accent">
                  <Icon className="h-7 w-7" />
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              Current focus: real-time voice agents, computer vision that works in the field, ASP.NET Core and FastAPI backends, and measuring results honestly.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
