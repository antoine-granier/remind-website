import type { Metadata } from "next";
import { useTranslation } from "../../i18n/server";
import { generateAlternates } from "@/app/utils/metadata";
import FeaturesContent from "./FeaturesContent";

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  
  const title = `${t('featuresPage.header.title').replace(/<[^>]*>/g, '')} - Re:mind`;
  const description = t('featuresPage.header.subtitle');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://remind-apps.vercel.app/${lng}/features`,
      siteName: 'Re:mind',
      locale: lng === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: generateAlternates(lng, '/features'),
  };
}

export default async function FeaturesPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  return <FeaturesContent lng={lng} />;
}
