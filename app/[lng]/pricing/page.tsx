import type { Metadata } from "next";
import { useTranslation } from "../../i18n/server";
import { generateAlternates } from "@/app/utils/metadata";
import PricingContent from "./PricingContent";

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  
  const title = `${t('pricingPage.header.title')} - Re:mind`;
  const description = lng === 'fr'
    ? 'Découvrez nos offres Free, Plus et Pro. Choisissez le plan qui correspond à vos besoins avec Re:mind. Essai gratuit disponible.'
    : 'Discover our Free, Plus and Pro plans. Choose the plan that fits your needs with Re:mind. Free trial available.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://remind-apps.vercel.app/${lng}/pricing`,
      siteName: 'Re:mind',
      locale: lng === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: generateAlternates(lng, '/pricing'),
  };
}

export default async function PricingPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  return <PricingContent lng={lng} />;
}
