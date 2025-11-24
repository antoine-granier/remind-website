import Link from 'next/link'

export default function LanguageSwitcher({ lng }: { lng: string }) {

  return (
    <div className="flex gap-2">
      {lng === 'fr' ? (
        <Link href="/en" className="text-sm font-medium text-action hover:underline">
          EN
        </Link>
      ) : (
        <span className="text-sm font-bold text-secondary">EN</span>
      )}
      <span className="text-secondary">/</span>
      {lng === 'en' ? (
        <Link href="/fr" className="text-sm font-medium text-action hover:underline">
          FR
        </Link>
      ) : (
        <span className="text-sm font-bold text-secondary">FR</span>
      )}
    </div>
  )
}
