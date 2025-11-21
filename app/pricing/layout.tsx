import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs - Re:mind | Plans et Abonnements",
  description: "Choisissez le plan Re:mind qui vous convient. Gratuit, Plus ou Pro - gérez vos rappels et traitements médicaux sans effort. Essai gratuit disponible.",
  keywords: ["tarifs remind", "abonnement remind", "prix remind", "plan remind", "rappels médicaments prix"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Tarifs Re:mind - Choisissez votre plan",
    description: "Plans flexibles pour gérer vos rappels et traitements médicaux. Gratuit, Plus (0,99€/mois), Pro (1,25€/mois).",
    type: "website",
    url: "https://remind.com/pricing",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Re:mind Tarifs",
      },
    ],
    siteName: "Re:mind",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs Re:mind - Choisissez votre plan",
    description: "Plans flexibles pour gérer vos rappels et traitements médicaux.",
    images: ["/favicon.png"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
