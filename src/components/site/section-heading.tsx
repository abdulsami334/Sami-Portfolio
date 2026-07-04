import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: Readonly<{ eyebrow: string; title: string; description: string; className?: string }>) {
  return (
    <Reveal className={cn("mx-auto mb-12 max-w-3xl text-center", className)}>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
    </Reveal>
  );
}
