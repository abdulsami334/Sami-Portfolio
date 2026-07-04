"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export function HeroTitle() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const words = ref.current.querySelectorAll("span");
    gsap.fromTo(
      words,
      { y: 24, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.85, stagger: 0.08, ease: "power3.out" }
    );
  }, []);

  return (
    <h1 ref={ref} className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
      <span className="inline-block">Backend</span>{" "}
      <span className="inline-block text-accent">AI</span>{" "}
      <span className="inline-block">systems</span>{" "}
      <span className="inline-block">built</span>{" "}
      <span className="inline-block">for</span>{" "}
      <span className="inline-block">production.</span>
    </h1>
  );
}
