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
const ogImageUrl = `${siteUrl}/og-image.png?v=3`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wayne Howlett | Support, Cybersecurity & Technology",
  description:
    "Connect with Wayne Howlett for technical support, networking, cybersecurity and security monitoring, cloud/systems, current resume, portfolio, and email/text contact.",
  keywords: [
    "Wayne Howlett",
    "technical support",
    "networking",
    "cybersecurity",
    "security monitoring",
    "cloud systems",
    "IT support",
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
    title: "Wayne Howlett | Support, Cybersecurity & Technology",
    description:
      "Technical support, networking, security monitoring, cloud/systems, current resume, portfolio, and email/text contact for Wayne Howlett.",
    siteName: "Wayne Howlett | Connect",
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Wayne Howlett support and cybersecurity professional profile",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayne Howlett | Support, Cybersecurity & Technology",
    description:
      "Technical support, networking, cybersecurity, cloud/systems, current resume, portfolio, and email/text contact for Wayne Howlett.",
    images: [ogImageUrl],
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
