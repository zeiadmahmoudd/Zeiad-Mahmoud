import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://zeiadmahmoud.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zeiad Mahmoud - AI Engineer & Solution Consultant",
    template: "%s | Zeiad Mahmoud",
  },
  description:
    "AI Engineer and Solution Consultant. I design document understanding pipelines, Databricks data pipelines, and RAG-based AI agents, and drive enterprise AI adoption across governmental and maritime sectors. Microsoft Certified (AI-102, AI-900). Willing to relocate.",
  keywords: [
    "AI Engineer",
    "Solution Consultant",
    "Document understanding",
    "Azure Document Intelligence",
    "RAG",
    "Microsoft 365 Copilot",
    "Copilot Studio",
    "Azure AI Engineer",
    "AI-102",
    "AI-900",
    "Databricks",
    "LangChain",
    "Power Automate",
    "Azure AI Foundry",
  ],
  authors: [{ name: "Zeiad Mahmoud" }],
  creator: "Zeiad Mahmoud",
  openGraph: {
    type: "website",
    title: "Zeiad Mahmoud - AI Engineer & Solution Consultant",
    description:
      "Enterprise AI delivered end to end: from formal requirement-gathering to Azure architecture, Databricks pipelines, autonomous agents, and the production UI.",
    url: siteUrl,
    siteName: "Zeiad Mahmoud",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeiad Mahmoud - AI Engineer & Solution Consultant",
    description:
      "Microsoft Certified Azure AI Engineer. Enterprise AI from discovery to deployment.",
  },
  robots: { index: true, follow: true },
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
      <body className="min-h-full bg-bg text-ink">{children}</body>
    </html>
  );
}
