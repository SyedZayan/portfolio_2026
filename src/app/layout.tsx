import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // <-- Import Footer

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Full-Stack AI SaaS Developer",
  description: "I Build AI-Powered SaaS Apps, Dashboards & Web Platforms using Next.js, Python, and Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`}>
      <body className="antialiased flex flex-col min-h-screen justify-between bg-dark-bg">
        <div>
          <Navbar />
          {children}
        </div>
        <Footer /> {/* <-- Global Footer placement */}
      </body>
    </html>
  );
}