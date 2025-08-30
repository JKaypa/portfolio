import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "500",
  variable: "--oswald"
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--open-sans"
})

export const metadata: Metadata = {
  title: "Jose Kaypa",
  description: "Jose Kaypa's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
