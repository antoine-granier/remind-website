"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../app/i18n/client";
import NavbarLanguageSwitcher from "./NavbarLanguageSwitcher";

export const Navbar = ({ lng }: { lng: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(lng);

  return (
    <>
      <nav className="w-full flex items-center justify-between py-5 px-6 md:px-10 bg-background2 shadow-sm fixed top-0 left-0 z-30">
        <Link href={`/${lng}`} className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/favicon.png"
              width={36}
              height={36}
              alt="Logo"
              className="rounded-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-action/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-primary">
            Re:mind
          </span>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-base font-medium">
          <li>
            <a
              href={`/${lng}/#discover`}
              className="relative text-primary transition-colors duration-300
                after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
                after:bg-action after:transition-all after:duration-300 hover:after:w-full"
            >
              {t('nav.why')}
            </a>
          </li>
          <li>
            <Link
              href={`/${lng}/compare`}
              className="relative text-primary transition-colors duration-300
                after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
                after:bg-action after:transition-all after:duration-300 hover:after:w-full"
            >
              {t('nav.compare')}
            </Link>
          </li>
          <li>
            <Link
              href={`/${lng}/blog`}
              className="relative text-primary transition-colors duration-300
                after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
                after:bg-action after:transition-all after:duration-300 hover:after:w-full"
            >
              {t('nav.blog')}
            </Link>
          </li>
          <li>
            <Link
              href={`/${lng}/pricing`}
              className="relative text-primary transition-colors duration-300
                after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
                after:bg-action after:transition-all after:duration-300 hover:after:w-full"
            >
              {t('nav.pricing')}
            </Link>
          </li>
          <li>
            <a
              href={`/${lng}/#launch`}
              className="px-5 py-2.5 bg-action text-primary rounded-lg font-semibold
                hover:bg-action/90 hover:shadow-md transition-all duration-300
                active:scale-95"
            >
              {t('nav.download')}
            </a>
          </li>
          <li>
            <NavbarLanguageSwitcher lng={lng} />
          </li>
        </ul>

        {/* Hamburger Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-action/5 rounded-lg transition-colors"
          aria-label="Menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-primary rounded-full"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-primary rounded-full"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-primary rounded-full"
          />
        </button>
      </nav>

      {/* Menu Mobile Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`fixed top-[73px] left-0 right-0 bg-background2 shadow-lg md:hidden z-20 ${
          isOpen ? "block" : "pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2 p-5 text-base font-medium">
          <li>
            <a
              href={`/${lng}/#discover`}
              className="text-primary hover:bg-action/5 transition-all duration-200
                block py-3 px-4 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.why')}
            </a>
          </li>
          <li>
            <Link
              href={`/${lng}/compare`}
              className="text-primary hover:bg-action/5 transition-all duration-200
                block py-3 px-4 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.compare')}
            </Link>
          </li>
          <li>
            <Link
              href={`/${lng}/blog`}
              className="text-primary hover:bg-action/5 transition-all duration-200
                block py-3 px-4 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.blog')}
            </Link>
          </li>
          <li>
            <Link
              href={`/${lng}/pricing`}
              className="text-primary hover:bg-action/5 transition-all duration-200
                block py-3 px-4 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.pricing')}
            </Link>
          </li>
          <li>
            <a
              href={`/${lng}/#launch`}
              className="bg-action text-primary hover:bg-action/90 transition-all duration-200
                block py-3 px-4 rounded-lg text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.download')}
            </a>
          </li>
          <li>
            <div className="py-3 px-4">
              <NavbarLanguageSwitcher lng={lng} />
            </div>
          </li>
        </ul>
      </motion.div>
    </>
  );
};
