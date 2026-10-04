import type { Metadata } from "next";
import "./globals.css";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export const metadata: Metadata = {
  title: "e-Tech Innovations - Custom Enterprise Software Development",
  description: "Enterprise Software Engineering & Systems Integration. e-Tech Innovations delivers tailor-made HR systems, ERP platforms, modern LMSs, and Hospital Information Systems (HISM).",
  keywords: ["Enterprise Software", "Custom Software Development", "HR Systems", "HRMS", "ERP Suite", "LMS", "HISM", "Healthcare Software", "e-Tech Innovations"],
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
