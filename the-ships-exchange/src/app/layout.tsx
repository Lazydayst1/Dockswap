import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Ship's Exchange",
  description: "Buy and sell secondhand items at HMAS Cerberus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        {/* ─── Navbar ────────────────────────────────── */}
        <nav className="bg-blue-900 text-white py-4 px-6 shadow-md flex justify-between items-center z-50">
          {/* Logo + brand */}
          <div className="flex items-center gap-2 font-bold text-xl tracking-wide">
            <Image
              src="/anchor.png"
              alt="Anchor Logo"
              width={40}
              height={40}
              className="rounded-sm bg-blue-900 p-px transition-transform duration-300 hover:rotate-12"
              priority
            />
            <span>The Ship’s Exchange</span>
          </div>

          {/* Nav Links */}
          <div className="space-x-6 text-sm md:text-base">
            <Link href="/"        className="hover:text-yellow-300">🏠 Home</Link>
            <Link href="/listings" className="hover:text-yellow-300">📦 Listings</Link>
            <Link href="/create"   className="hover:text-yellow-300">➕ Create</Link>
            <Link href="/profile"  className="hover:text-yellow-300">👤 Profile</Link>
          </div>
        </nav>

        {/* ─── Page Content ─────────────────────────── */}
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}