import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://connect.ihowlett.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wayne Howlett Cybersecurity | Connect",
  description:
    "Connect with Wayne Howlett: cybersecurity portfolio, resume, projects, LinkedIn, GitHub, X, Facebook page, and direct email.",
  keywords: [
    "Wayne Howlett",
    "cybersecurity",
    "security engineering",
    "SOC analyst",
    "detection engineering",
    "Wazuh SIEM",
    "cloud security",
    "API security",
  ],
  authors: [{ name: "Wayne Howlett", url: "https://www.ihowlett.com" }],
  creator: "Wayne Howlett",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Wayne Howlett Cybersecurity | Connect",
    description:
      "Quick access to Wayne Howlett's cybersecurity portfolio, projects, resume, professional profiles, and contact information.",
    siteName: "Wayne Howlett Cybersecurity Connect",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wayne Howlett Cybersecurity Connect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayne Howlett Cybersecurity | Connect",
    description:
      "Cybersecurity portfolio, projects, resume, professional links, and contact information.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-white">{children}</body>
    </html>
  );
}
