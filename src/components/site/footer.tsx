import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© 2026 {profile.name}. Built with Next.js, TypeScript, Tailwind, Framer Motion, and shadcn/ui patterns.</p>
        <div className="flex gap-4">
          {profile.social.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-foreground" target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
