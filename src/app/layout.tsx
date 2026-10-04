import type { Metadata } from "next";
import "./globals.css";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://e-techinnovations.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "e-Tech Innovations - Custom Enterprise Software Development",
    template: "%s | e-Tech Innovations",
  },
  description: "Enterprise Software Engineering & Systems Integration. e-Tech Innovations delivers tailor-made HR systems, ERP platforms, modern LMSs, and Hospital Information Systems (HISM).",
  keywords: [
    "Enterprise Software",
    "Custom Software Development",
    "HR Systems",
    "HRMS",
    "ERP Suite",
    "LMS",
    "HISM",
    "Healthcare Software",
    "e-Tech Innovations",
    "Systems Integration",
    "Native Applications"
  ],
  authors: [{ name: "e-Tech Innovations", url: siteUrl }],
  creator: "e-Tech Innovations",
  publisher: "e-Tech Innovations",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "e-Tech Innovations - Custom Enterprise Software Development",
    description: "Enterprise Software Engineering & Systems Integration across Web, Mobile, and Native OS Platforms.",
    siteName: "e-Tech Innovations",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "e-Tech Innovations Enterprise Software Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "e-Tech Innovations - Custom Enterprise Software Development",
    description: "Tailor-made HR systems, ERP platforms, LMSs, and Hospital Information Systems.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/assets/favicon.png", type: "image/png" },
    ],
    shortcut: "/assets/favicon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/favicon.png" />
      </head>
      <body>
        <ScrollRevealProvider />
        <div className="isometric-grid-overlay" />
        <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
