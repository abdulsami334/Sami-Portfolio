"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 780);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_28px_hsl(var(--accent))]" />
            Loading systems
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
