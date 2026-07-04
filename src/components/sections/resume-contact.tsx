"use client";

import { Check, Copy, Download, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { profile } from "@/data/portfolio";

export function ResumeContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    void navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <>
      <section id="resume" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Resume" title="A focused backend and AI profile." description="Embedded for quick recruiter review, with a direct download for ATS and forwarding workflows." />
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="glass rounded-lg p-6">
              <h3 className="text-2xl font-semibold">{profile.name}</h3>
              <p className="mt-2 text-muted-foreground">{profile.role}</p>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  {profile.location}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  {profile.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  {profile.phone}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="accent" className="rounded-full">
                  <a href={profile.resume} download>
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full" onClick={copyEmail}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy email"}
                </Button>
              </div>
            </div>
            <div className="min-h-[640px] overflow-hidden rounded-lg border bg-card">
              <object data={profile.resume} type="application/pdf" className="h-[720px] w-full" aria-label="Resume PDF preview">
                <iframe title="Resume preview" src={profile.resume} className="h-[720px] w-full" />
              </object>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="px-4 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Contact</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">Let’s build reliable AI software.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Available for backend engineering, applied AI engineering, and agentic AI roles where production judgment matters.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="accent" className="rounded-full">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                Email Sami
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" onClick={copyEmail}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy email"}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
