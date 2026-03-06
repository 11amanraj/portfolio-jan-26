import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"
import "./globals.css";
import { LayoutGroup } from "motion/react";

const inter = Inter({
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
  variable: "--font-inter",
  display: "swap"
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
  variable: "--font-poppins",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Aman's Portfolio",
  description: "Aman's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <LayoutGroup>
          {children}
        </LayoutGroup>
      </body>
    </html>
  );
}
