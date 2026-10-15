import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display-face" });

export const metadata: Metadata = {
  title: "NexEra - Payroll and People Management Systems",
  description: "South Africa's premier cloud payroll platform. SARS compliant, secure, and built for South African businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
