"use client";

import { useEffect, useState } from "react";

export function TypingLine({ phrases }: Readonly<{ phrases: string[] }>) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    const doneTyping = length === phrase.length;
    const doneDeleting = length === 0;
    const timeout = window.setTimeout(
      () => {
        if (!deleting && doneTyping) {
          setDeleting(true);
          return;
        }
        if (deleting && doneDeleting) {
          setDeleting(false);
          setPhraseIndex((value) => (value + 1) % phrases.length);
          return;
        }
        setLength((value) => value + (deleting ? -1 : 1));
      },
      doneTyping ? 1200 : deleting ? 35 : 65
    );
    return () => window.clearTimeout(timeout);
  }, [deleting, length, phraseIndex, phrases]);

  return (
    <span className="font-mono text-sm text-accent">
      {phrases[phraseIndex].slice(0, length)}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}
