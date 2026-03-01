import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GYQS — Global Youth Quantum Society",
  description:
    "A youth-focused quantum sciences educational platform providing free, high-quality resources in quantum computing, mechanics, physics, and chemistry.",
  keywords: [
    "quantum computing",
    "quantum mechanics",
    "quantum physics",
    "education",
    "youth",
    "STEM",
  ],
  openGraph: {
    title: "GYQS — Global Youth Quantum Society",
    description:
      "A youth-focused quantum sciences educational platform. Beyond bits. Beyond limits.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
