import type { Metadata, Viewport } from "next";
import { profile } from "@/data/portfolio";
import { Providers } from "@/components/providers";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sami-ghuri.dev"),
  title: {
    default: `${profile.name} - Backend & AI Engineer`,
    template: `%s - ${profile.displayName}`
  },
  description: profile.headline,
  keywords: [
    "Backend Engineer",
    "AI Engineer",
    "Agentic AI",
    "RAG",
    "FastAPI",
    "Node.js",
    "ASP.NET Core",
    "System Design",
    "SaaS Engineer"
  ],
  authors: [{ name: profile.name, url: profile.website }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} - Backend & AI Engineer`,
    description: profile.headline,
    url: "https://sami-ghuri.dev",
    siteName: `${profile.displayName} Portfolio`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${profile.name} portfolio preview` }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - Backend & AI Engineer`,
    description: profile.headline,
    images: ["/opengraph-image"]
  },
  alternates: {
    canonical: "https://sami-ghuri.dev"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3ed" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0f15" }
  ],
  colorScheme: "dark light"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
