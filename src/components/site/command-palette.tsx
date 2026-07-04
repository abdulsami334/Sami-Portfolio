"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Command, Copy, ExternalLink, FileText, Mail, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navigation } from "@/data/navigation";
import { profile, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type CommandItem = {
  label: string;
  detail: string;
  href?: string;
  action?: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const commands = useMemo<CommandItem[]>(
    () => [
      ...navigation.map((item) => ({ label: `Go to ${item.label}`, detail: item.href, href: item.href })),
      ...projects.map((project) => ({ label: `Open ${project.title}`, detail: project.category, href: "#projects" })),
      { label: "Download resume", detail: "PDF", href: profile.resume },
      { label: "Open GitHub", detail: profile.github, href: profile.github },
      { label: "Open LinkedIn", detail: profile.linkedin, href: profile.linkedin },
      {
        label: copied ? "Email copied" : "Copy email",
        detail: profile.email,
        action: () => {
          void navigator.clipboard.writeText(profile.email);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1400);
        }
      }
    ],
    [copied]
  );

  const filtered = commands.filter((commandItem) =>
    `${commandItem.label} ${commandItem.detail}`.toLowerCase().includes(query.toLowerCase())
  );

  const runCommand = (commandItem: CommandItem) => {
    commandItem.action?.();
    if (commandItem.href) {
      if (commandItem.href.startsWith("#")) {
        document.querySelector(commandItem.href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.open(commandItem.href, "_blank", "noopener,noreferrer");
      }
    }
    setOpen(false);
    setQuery("");
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="fixed bottom-5 right-5 z-40 hidden rounded-full border bg-background/80 px-4 py-2 text-sm shadow-lg backdrop-blur md:flex"
          type="button"
        >
          <Command className="mr-2 h-4 w-4" />
          Ctrl K
        </button>
      </Dialog.Trigger>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div className="fixed inset-0 z-[70] bg-background/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="fixed left-1/2 top-[12vh] z-[80] w-[min(92vw,680px)] -translate-x-1/2 overflow-hidden rounded-lg border bg-popover shadow-2xl"
              >
                <Dialog.Title className="sr-only">Command palette</Dialog.Title>
                <div className="flex items-center border-b px-4">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search sections, projects, links..."
                    className="h-14 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <Dialog.Close className="rounded-full p-2 hover:bg-muted">
                    <X className="h-4 w-4" />
                  </Dialog.Close>
                </div>
                <div className="max-h-[55vh] overflow-auto p-2">
                  {filtered.map((commandItem) => (
                    <button
                      key={`${commandItem.label}-${commandItem.detail}`}
                      type="button"
                      onClick={() => runCommand(commandItem)}
                      className={cn("flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm hover:bg-muted")}
                    >
                      <span>
                        <span className="block font-medium">{commandItem.label}</span>
                        <span className="block text-xs text-muted-foreground">{commandItem.detail}</span>
                      </span>
                      {commandItem.action ? <Copy className="h-4 w-4" /> : commandItem.href?.endsWith(".pdf") ? <FileText className="h-4 w-4" /> : commandItem.href?.startsWith("mailto") ? <Mail className="h-4 w-4" /> : commandItem.href?.startsWith("#") ? <ArrowRight className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
