import Image from "next/image";
import "./globals.css";
import CursorCircle from "@/components/CursorCircle";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans bg-background text-primary m-0 p-0">
        <CursorCircle />
        {/* NAVBAR */}
        <nav className="w-full flex items-center justify-between py-4 px-8 bg-background2 shadow-sm fixed top-0 left-0 z-30">
          <div className="flex items-center gap-3">
            <Image
              src="/favicon.png"
              width={36}
              height={36}
              alt="Logo miniature"
              className="rounded-full"
            />
            <span className="text-2xl font-bold tracking-tight text-primary">
              Re:mind
            </span>
          </div>
          <ul className="flex items-center gap-7 text-base font-medium">
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
        </nav>

        {/* MAIN CONTENT */}
        <div className="min-h-screen flex flex-col">{children}</div>
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
          <a
            href="mailto:contact@remind.com"
            className="text-action hover:underline text-sm font-medium"
          >
            Contactez-nous
          </a>
        </footer>
      </body>
    </html>
  );
}
