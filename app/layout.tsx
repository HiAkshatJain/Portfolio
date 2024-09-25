import type { Metadata } from "next";
import "./globals.css";

import { DM_Sans } from "next/font/google"; // Import DM Sans from Google Fonts

const dmSansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Portfolio | Akshat Jain",
  description: "Portfolio is made using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSansFont.className} antialiased`}>{children}</body>
    </html>
  );
}
