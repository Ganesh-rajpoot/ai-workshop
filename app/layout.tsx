import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { MotionProvider } from "@/components/MotionProvider";
import { fullAddress, seo, site, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  applicationName: site.institute,
  authors: [{ name: site.director }],
  creator: site.institute,
  publisher: site.institute,
  keywords: [
    "AI Training Workshop in Siddharth Nagar",
    "Artificial Intelligence training for students",
    "AI workshop for school students",
    "AI classes for students in Siddharth Nagar",
    "AI training for Classes 6 to 12",
    "AI awareness workshop for schools",
    "ACIT Computer Center",
    "AI workshop in Uttar Pradesh",
  ],
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteUrl}/`,
    siteName: site.institute,
    title: "AI Training Workshop for Students | ACIT Computer Center",
    description:
      "Practical, beginner-friendly AI learning for Classes 6–12 and college students. Schools in Siddharth Nagar and Uttar Pradesh can enquire to host a workshop.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Training Workshop for Students | ACIT Computer Center",
    description:
      "Practical, beginner-friendly AI learning for Classes 6–12 and college students. Schools can enquire to host a workshop.",
  },
  robots: { index: true, follow: true },
  other: { "geo.placename": fullAddress },
};

export const viewport: Viewport = {
  themeColor: "#080B18",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
