import React from "react";
import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/app/provider";


const caveat = Caveat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fady Web Dev",
  description: "My Portfolio Website created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={caveat.className}><ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
        {children}
      </ThemeProvider></body>
    </html>
  );
}
