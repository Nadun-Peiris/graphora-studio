import type { Metadata } from "next";
import { Geist, Geist_Mono, MuseoModerno } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const museoModerno = MuseoModerno({
  variable: "--font-museomoderno",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Graphora Studio — Coming Soon",
  description:
    "Graphora Studio is a creative digital studio focused on web development, branding, and modern digital solutions. Coming soon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${museoModerno.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
