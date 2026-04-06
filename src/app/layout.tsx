import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zentrix Labs | High-Performance Websites & Software",
  description: "Zentrix Labs helps businesses scale with modern digital solutions. Specializing in high-performance websites, custom software, and business automation.",
  keywords: ["Digital Agency", "Website Development", "Custom Software", "Automation", "UI/UX Design", "Business Growth"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-black text-white antialiased selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}
