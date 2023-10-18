import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { inter, open_Sans, poppins, volkhov } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
