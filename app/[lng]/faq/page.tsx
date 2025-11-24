import type { Metadata } from "next";
import { useTranslation } from "@/app/i18n/server";
import FAQContent from "./FAQContent";

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  
  const title = `${t('faq.title')} - Re:mind`;
  const description = lng === 'fr' 
    ? 'Toutes les réponses à vos questions sur Re:mind : confidentialité, plateformes, fonctionnalités et plus encore.'
    : 'All the answers to your questions about Re:mind: privacy, platforms, features and more.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://re-mind.app/${lng}/faq`,
      siteName: 'Re:mind',
      locale: lng === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://re-mind.app/${lng}/faq`,
      languages: {
        'fr': 'https://re-mind.app/fr/faq',
        'en': 'https://re-mind.app/en/faq',
      },
    },
  };
}

export default async function FAQPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  // Structured data for SEO (FAQ Schema)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": t('faq.q1'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq.a1')
        }
      },
      {
        "@type": "Question",
        "name": t('faq.q2'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq.a2')
        }
      },
      {
        "@type": "Question",
        "name": t('faq.q3'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq.a3')
        }
      },
      {
        "@type": "Question",
        "name": t('faq.q4'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq.a4')
        }
      }
    ]
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQContent lng={lng} />
    </>
  );
}
