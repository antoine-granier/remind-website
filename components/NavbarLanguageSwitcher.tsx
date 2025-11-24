"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' }
];

export default function NavbarLanguageSwitcher({ lng }: { lng: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(l => l.code === lng) || languages[0];

  const getTargetPath = (targetLng: string) => {
    if (!pathname) return `/${targetLng}`;
    const segments = pathname.split('/');
    segments[1] = targetLng;
    return segments.join('/');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg hover:bg-action/5 transition-colors text-primary font-medium cursor-pointer"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="uppercase">{currentLanguage.code}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-4 h-4 text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-background2 rounded-xl shadow-lg border border-border overflow-hidden z-50"
          >
            <div>
              {languages.map((language) => (
                <Link
                  key={language.code}
                  href={getTargetPath(language.code)}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                    ${lng === language.code 
                      ? 'bg-primary text-action font-semibold' 
                      : 'text-primary hover:bg-action/40'
                    }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span>{language.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
