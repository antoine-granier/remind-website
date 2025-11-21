import { Metadata } from "next";
import { notFound } from "next/navigation";

// Article data for metadata
const ARTICLES_METADATA = {
  "1": {
    title: "Comprendre et réduire la charge mentale au quotidien",
    description: "La charge mentale est ce poids invisible qui pèse sur nous lorsque nous devons penser à tout, tout le temps. Découvrez des stratégies concrètes pour l'alléger.",
    category: "Bien-être",
  },
  "2": {
    title: "5 astuces pour ne plus jamais oublier ses médicaments",
    description: "Entre les horaires décalés et les oublis, suivre un traitement peut être un défi. Voici nos meilleures astuces pour être régulier sans stress.",
    category: "Santé",
  },
  "3": {
    title: "L'importance du sommeil sur votre mémoire",
    description: "Bien dormir n'est pas un luxe, c'est une nécessité biologique pour consolider vos souvenirs et nettoyer votre cerveau des toxines.",
    category: "Science",
  },
  "4": {
    title: "Digital Detox : reprendre le contrôle de son attention",
    description: "Nos téléphones sont des machines à distraction. Apprenez à configurer vos notifications pour qu'elles vous servent au lieu de vous asservir.",
    category: "Productivité",
  },
  "5": {
    title: "Organiser sa vie de famille sans s'épuiser",
    description: "Calendriers partagés, délégations, rituels : comment transformer le chaos familial en une mécanique bien huilée.",
    category: "Organisation",
  },
  "6": {
    title: "Pourquoi écrire aide à penser plus clairement",
    description: "Le journaling n'est pas réservé aux écrivains. C'est un outil puissant pour externaliser ses pensées et réduire l'anxiété.",
    category: "Développement",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = ARTICLES_METADATA[id as keyof typeof ARTICLES_METADATA];

  if (!article) {
    return {
      title: "Article non trouvé - Re:mind",
    };
  }

  return {
    title: `${article.title} | Blog Re:mind`,
    description: article.description,
    keywords: [
      article.category.toLowerCase(),
      "remind",
      "blog remind",
      "conseils santé",
      "bien-être",
      "organisation",
    ],
    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png",
    },
    openGraph: {
      title: `${article.title} | Re:mind`,
      description: article.description,
      type: "article",
      url: `https://remind.com/blog/${id}`,
      images: [
        {
          url: "/favicon.png",
          width: 512,
          height: 512,
          alt: article.title,
        },
      ],
      siteName: "Re:mind",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/favicon.png"],
    },
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
