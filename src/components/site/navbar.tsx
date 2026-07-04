"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-40 px-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2">
        <a href="#top" className="flex items-center gap-3 px-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">SG</span>
          <span className="hidden text-sm font-medium sm:block">{profile.displayName}</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.slice(0, 6).map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild variant="accent" size="sm" className="hidden rounded-full sm:inline-flex">
            <a href="#contact">Contact</a>
          </Button>
          <Button aria-label="Open menu" variant="ghost" size="icon" className="rounded-full lg:hidden" onClick={() => setOpen((value) => !value)}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-auto mt-3 grid max-w-6xl gap-1 rounded-lg p-2 lg:hidden"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
