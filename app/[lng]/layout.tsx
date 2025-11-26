import Image from "next/image";
import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
import { useTranslation } from "../i18n/server";
import { languages } from "../i18n/settings";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Navbar } from "@/components/Navbar";
import { Providers } from "./providers";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata = {
  metadataBase: new URL('https://remind-apps.vercel.app'),
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return (
    <html
      lang={lng}
      data-scroll-behavior="smooth"
      className="scroll-smooth"
      title="Re:mind"
    >
      <body className="font-sans bg-background text-primary m-0 p-0">
        <Providers>
          <Navbar lng={lng} />
          
          {/* MAIN CONTENT */}
          <div className="min-h-screen flex flex-col pt-[73px]">{children}</div>
          <SpeedInsights />
          <Analytics />

          {/* SCROLL TO TOP BUTTON */}
          <ScrollToTop />

          {/* FOOTER */}
          <footer className="w-full py-8 bg-primary text-background2 flex flex-col items-center text-center gap-4">
            <div>
              <Image
                src="/favicon.png"
                alt="Logo"
                width={40}
                height={40}
                className="inline-block rounded-full"
              />
            </div>
            <div className="text-sm tracking-wide px-4">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </div>
            <nav className="flex min-w-full flex-wrap gap-x-4 gap-y-2 items-center justify-center text-sm font-medium px-4 max-w-md">
              <Link
                href={`/${lng}/contact`}
                className="text-action hover:underline whitespace-nowrap"
              >
                {t('footer.contact')}
              </Link>
              <span className="text-background2 hidden sm:inline">•</span>
              <Link href={`/${lng}/faq`} className="text-action hover:underline whitespace-nowrap">
                {t('footer.faq')}
              </Link>
              <span className="text-background2 hidden sm:inline">•</span>
              <Link href={`/${lng}/privacy`} className="text-action hover:underline whitespace-nowrap">
                {t('footer.privacy')}
              </Link>
              <span className="text-background2 hidden sm:inline">•</span>
              <Link href={`/${lng}/terms`} className="text-action hover:underline whitespace-nowrap">
                {t('footer.terms')}
              </Link>
            </nav>
            <LanguageSwitcher lng={lng} />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
