import type { Metadata } from "next";
import { Inter, Poppins, Lora } from "next/font/google"
import "./globals.css";
import { LayoutGroup } from "motion/react";
import NavBar from "./Components/Navigation/NavBar";
import Footer from "./Components/Footer/Footer";

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

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-lora",
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
        className={`${inter.variable} ${poppins.variable} ${lora.variable} font-sans antialiased`}
      >
        {/* <NavBar /> */}
        <LayoutGroup>
          {children}
        </LayoutGroup>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
