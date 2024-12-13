import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import { Ubuntu } from 'next/font/google'
import { twMerge } from "tailwind-merge";

import "./globals.css";

// Font setup
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const ubuntu = Ubuntu({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
})

// Metadata for SEO
export const metadata: Metadata = {
  title: "Adler 3D ",
  description: " Adler 3D Showcase",
};

// RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Pretendard font loaded via CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard@latest/dist/web/static/pretendard.css"
        />
      </head>
      <body
        className={twMerge(
          inter.variable,
          ubuntu.variable,
          "bg-black text-white antialiased font-pretendard" // Apply Pretendard as the default font
        )}
      >
        {children}
      </body>
    </html>
  );
}
