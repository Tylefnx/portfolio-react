import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tayfunucuncu.dev",
  description: "Terminal Portfolio Website - Full Stack Mobile Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaCode.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
