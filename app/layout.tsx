import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import { LayoutGroup } from "motion/react";
import NavBar from "./Components/Navigation/NavBar";
import Footer from "./Components/Footer/Footer";

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
        className={`${poppins.variable} font-sans antialiased`}
      >
        <NavBar />
        <LayoutGroup>
          {children}
        </LayoutGroup>
        <Footer />
      </body>
    </html>
  );
}
