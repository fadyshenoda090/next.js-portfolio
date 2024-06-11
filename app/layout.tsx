import React from "react";
import type { Metadata } from "next";
import {titilliumWeb } from "../utils/cutomFonts";
import "./globals.css";
import {ThemeProvider} from "@/app/provider";

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
      <body className={titilliumWeb.className}><ThemeProvider
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
