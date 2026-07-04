"use client";

import { ThemeProvider } from "next-themes";
import { CommandPalette } from "@/components/site/command-palette";
import { CursorGlow } from "@/components/site/cursor-glow";
import { LoadingScreen } from "@/components/site/loading-screen";
import { ScrollProgress } from "@/components/site/scroll-progress";

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      {children}
      <CommandPalette />
    </ThemeProvider>
  );
}
