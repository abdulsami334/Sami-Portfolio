"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  size: 2 + (index % 4),
  delay: (index % 9) * 0.2
}));

export function Particles() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 35, damping: 18 });
  const springY = useSpring(y, { stiffness: 35, damping: 18 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      x.set((event.clientX - window.innerWidth / 2) / 34);
      y.set((event.clientY - window.innerHeight / 2) / 34);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div aria-hidden className="absolute inset-0 overflow-hidden" style={{ x: springX, y: springY }}>
      <div className="premium-grid absolute inset-0" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-accent/60"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ opacity: [0.15, 0.75, 0.15], scale: [1, 1.8, 1] }}
          transition={{ duration: 4.5, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </motion.div>
  );
}
