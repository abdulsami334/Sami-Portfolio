import { architectureGallery } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Architecture Gallery" title="Systems thinking made visible." description="A compact gallery of the flows behind Sami's backend and AI work: auth, request lifecycle, LLM boundaries, RAG, and data design." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {architectureGallery.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="rounded-lg border bg-card p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 min-h-16 text-sm leading-6 text-muted-foreground">{item.description}</p>
              <div className="mt-6 space-y-2">
                {item.nodes.map((node, nodeIndex) => (
                  <div key={node} className="flex items-center gap-2">
                    <div className="rounded-md border bg-background px-3 py-2 text-xs font-medium">{node}</div>
                    {nodeIndex < item.nodes.length - 1 ? <div className="h-px flex-1 bg-border" /> : null}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
