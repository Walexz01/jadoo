import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { inter, open_Sans, poppins, volkhov } from "./fonts";
import "./globals.css";
import logo from "@/public/images/Logo.png";

export const metadata: Metadata = {
  title: "Jadoo",
  description: "Book your trip in minute, get full Control for much longer.",
  openGraph: {
    type: "website",
    description: "Book your trip in minute, get full Control for much longer.",
    title: "Jadoo",
    siteName: "Jadoo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${volkhov.variable} ${open_Sans.variable}`}
      >
        <header>
          <Navbar />
        </header>

        {children}
      </body>
    </html>
  );
}
