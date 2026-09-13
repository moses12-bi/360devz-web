import type { Metadata, Viewport } from "next";
import "./globals.css";

const DESCRIPTION =
  "360 DEVZ LTD builds operational software for African institutions — custom systems, managed hosting and security assessment, built and supported from Kigali.";

export const metadata: Metadata = {
  // TODO(before launch): set this to your live domain once it is pointed.
  // Social previews and canonical URLs are built from it.
  metadataBase: new URL("https://360devz.com"),
  title: {
    default: "360devz — operational software, hosting and security | Kigali",
    template: "%s — 360devz",
  },
  description: DESCRIPTION,
  applicationName: "360devz",
  authors: [{ name: "360 DEVZ LTD" }],
  keywords: [
    "360devz",
    "Rwanda software company",
    "Kigali software development",
    "managed hosting Rwanda",
    "security assessment Rwanda",
    "EduCloud",
    "school management Rwanda",
  ],
  openGraph: {
    type: "website",
    siteName: "360devz",
    title: "360devz — systems that run the work",
    description: DESCRIPTION,
    locale: "en_RW",
  },
  twitter: {
    card: "summary_large_image",
    title: "360devz — systems that run the work",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0E1F19",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/*
          The two faces above the fold on every page: Heavy for the headline,
          Book for everything else. Preloading them stops the swap-in flash
          that `font-display: swap` otherwise causes on a first visit.
          Bold and italic load normally — they appear further down the page.
        */}
        <link
          rel="preload"
          href="/fonts/nexa-heavy.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/nexa-book.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
