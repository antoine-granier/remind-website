import Link from 'next/link'

export default function LanguageSwitcher({ lng }: { lng: string }) {

  return (
    <div className="flex gap-2">
      {lng === 'fr' ? (
        <Link href="/en" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
          EN
        </Link>
      ) : (
        <span className="text-sm font-bold text-primary">EN</span>
      )}
      <span className="text-secondary">/</span>
      {lng === 'en' ? (
        <Link href="/fr" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
          FR
        </Link>
      ) : (
        <span className="text-sm font-bold text-primary">FR</span>
      )}
    </div>
  )
}
