"use client";

import Image from "next/image";
import "./globals.css";
import CursorCircle from "@/components/CursorCircle";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="fr">
      <body className="font-sans bg-background text-primary m-0 p-0">
        <CursorCircle />

        {/* NAVBAR */}
        <nav className="w-full flex items-center justify-between py-4 px-4 md:px-8 bg-background2 shadow-sm fixed top-0 left-0 z-30">
          <div className="flex items-center gap-3">
            <Image
              src="/favicon.png"
              width={36}
              height={36}
              alt="Logo miniature"
              className="rounded-full"
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight text-primary">
              Re:mind
            </span>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center gap-7 text-base font-medium">
            <li>
              <a
                href="#decouvrir"
                className="text-secondary hover:text-action transition"
              >
                Pourquoi ?
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-secondary hover:text-action transition"
              >
                Fonctionnalités
              </a>
            </li>
            <li>
              <a
                href="#inscription"
                className="text-secondary hover:text-action transition"
              >
                Inscription
              </a>
            </li>
          </ul>

          {/* Hamburger Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              className="w-6 h-0.5 bg-primary transition"
            />
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-primary transition"
            />
            <motion.div
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              className="w-6 h-0.5 bg-primary transition"
            />
          </button>
        </nav>

        {/* Menu Mobile Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-16 left-0 right-0 bg-background2 shadow-lg md:hidden z-20 ${
            isOpen ? "block" : "pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-4 p-6 text-base font-medium">
            <li>
              <a
                href="#decouvrir"
                className="text-secondary hover:text-action transition block"
                onClick={() => setIsOpen(false)}
              >
                Pourquoi ?
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-secondary hover:text-action transition block"
                onClick={() => setIsOpen(false)}
              >
                Fonctionnalités
              </a>
            </li>
            <li>
              <a
                href="#inscription"
                className="text-secondary hover:text-action transition block"
                onClick={() => setIsOpen(false)}
              >
                Inscription
              </a>
            </li>
          </ul>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="min-h-screen flex flex-col pt-16">{children}</div>
        <SpeedInsights />
        <Analytics />

        {/* FOOTER */}
        <footer className="w-full py-8 bg-primary text-background2 flex flex-col items-center text-center gap-3">
          <div>
            <Image
              src="/favicon.png"
              alt="Logo miniature"
              width={40}
              height={40}
              className="inline-block rounded-full"
            />
          </div>
          <div className="text-sm tracking-wide">
            En développement — Re:mind © {new Date().getFullYear()}
          </div>
          <div className="flex gap-4 items-center text-sm font-medium">
            <a
              href="mailto:contact@remind.com"
              className="text-action hover:underline"
            >
              Contactez-nous
            </a>
            <span className="text-background2">•</span>
            <Link href="/privacy" className="text-action hover:underline">
              Politique de confidentialité
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
