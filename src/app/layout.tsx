import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WordleProvider } from "@/context/WordleContext";
import { UtilityProvider } from "@/context/UtilityContext";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wordle",
  description: "Wordle Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-red-100 relative max-w-[600px] mx-auto`}
      >
        <WordleProvider>
          <UtilityProvider>
            <NavBar />
            {children}
          </UtilityProvider>
        </WordleProvider>
      </body>
    </html>
  );
}
