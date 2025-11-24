"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher({ lng }: { lng: string }) {
  const pathname = usePathname();

  const getTargetPath = (targetLng: string) => {
    // Replace the language segment at the start of the path
    return pathname.replace(/^\/[a-z]{2}/, `/${targetLng}`);
  };

  return (
    <div className="flex gap-2">
      {lng === 'fr' ? (
        <Link href={getTargetPath('en')} className="text-sm font-medium text-action hover:underline">
          EN
        </Link>
      ) : (
        <span className="text-sm font-bold text-white">EN</span>
      )}
      <span className="text-secondary">/</span>
      {lng === 'en' ? (
        <Link href={getTargetPath('fr')} className="text-sm font-medium text-action hover:underline">
          FR
        </Link>
      ) : (
        <span className="text-sm font-bold text-white">FR</span>
      )}
    </div>
  );
}
