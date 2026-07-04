import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Particles } from "@/components/site/particles";
import { TypingLine } from "@/components/site/typing-line";
import { HeroTitle } from "@/components/site/hero-title";
import { profile, recruiterSignals } from "@/data/portfolio";
import { Reveal } from "@/components/motion/reveal";

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32">
      <Particles />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <Reveal className="mb-6 flex flex-wrap items-center gap-3">
            <Badge>Founder @ Notaviq</Badge>
            <TypingLine phrases={["FastAPI + Node.js", "Agentic AI workflows", "Clean Architecture", "RAG-ready systems"]} />
          </Reveal>
          <HeroTitle />
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{profile.headline}</p>
            <p className="mt-4 max-w-2xl leading-8 text-muted-foreground">{profile.intro}</p>
          </Reveal>
          <Reveal delay={0.25} className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="accent" className="rounded-full">
              <a href={profile.resume} download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="glass rounded-lg p-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {recruiterSignals.map((signal) => (
              <div key={signal.label} className="rounded-md border bg-background/42 p-4">
                <signal.icon className="mb-5 h-5 w-5 text-accent" />
                <div className="text-3xl font-semibold">{signal.value}</div>
                <p className="mt-1 text-sm text-muted-foreground">{signal.label}</p>
              </div>
            ))}
          </div>
          <a href="#about" className="mt-4 flex items-center justify-between rounded-md border bg-background/42 p-4 text-sm text-muted-foreground hover:text-foreground">
            Scroll the engineering story
            <ArrowDown className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
