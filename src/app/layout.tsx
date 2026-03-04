import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daryl Blair Gonzales | Head of HR · Systems Builder · No-Code Operator",
  description:
    "HR meets Systems Thinking. Built with curiosity, Claude, and zero CS degree. 7+ years of HR & Operations experience, automation specialist, and generalist problem solver.",
  keywords: [
    "HR",
    "Human Resources",
    "Operations",
    "No-Code",
    "Automation",
    "Systems Builder",
    "Notion",
    "Slack Bot",
    "Typebot",
    "Generalist",
  ],
  authors: [{ name: "Daryl Blair Gonzales" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Daryl Blair Gonzales | HR Systems Builder",
    description:
      "HR meets Systems Thinking. Built with curiosity, Claude, and zero CS degree.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daryl Blair Gonzales | HR Systems Builder",
    description:
      "HR meets Systems Thinking. Built with curiosity, Claude, and zero CS degree.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
