import type { Metadata, Viewport } from "next";
import { profile } from "@/data/portfolio";
import { Providers } from "@/components/providers";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: {
    default: `${profile.name} - ${profile.role}`,
    template: `%s - ${profile.displayName}`
  },
  description: profile.headline,
  keywords: [
    "AI Engineer",
    "Backend Engineer",
    "Forward Deployed Engineer",
    "Voice AI",
    "Computer Vision",
    "YOLO",
    "FastAPI",
    "ASP.NET Core",
    "Python",
    "C#"
  ],
  authors: [{ name: profile.name, url: profile.website }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} - ${profile.role}`,
    description: profile.headline,
    url: profile.website,
    siteName: `${profile.displayName} Portfolio`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${profile.name} portfolio preview` }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.role}`,
    description: profile.headline,
    images: ["/opengraph-image"]
  },
  alternates: {
    canonical: profile.website
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
