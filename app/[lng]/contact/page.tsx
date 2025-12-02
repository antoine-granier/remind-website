import type { Metadata } from "next";
import { useTranslation } from "@/app/i18n/server";
import ContactContent from "./ContactContent";
import { generateAlternates } from "@/app/utils/metadata";

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  
  const title = `${t('contactPage.title')} - Re:mind`;
  const description = lng === 'fr' 
    ? 'Contactez l\'équipe Re:mind pour toute question, suggestion ou demande de support.'
    : 'Contact the Re:mind team for any questions, suggestions, or support requests.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://remind-apps.vercel.app/${lng}/contact`,
      siteName: 'Re:mind',
      locale: lng === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: generateAlternates(lng, '/contact'),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": t('contactPage.title'),
            "description": t('contactPage.subtitle'),
            "url": `https://re-mind.app/${lng}/contact`
          })
        }}
      />
      <ContactContent lng={lng} />
    </>
  );
}
