import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs - Re:mind | Plans et Abonnements",
  description: "Choisissez le plan Re:mind qui vous convient. Gratuit, Plus ou Pro - gérez vos rappels et traitements médicaux sans effort. Essai gratuit disponible.",
  keywords: ["tarifs remind", "abonnement remind", "prix remind", "plan remind", "rappels médicaments prix"],
  openGraph: {
    title: "Tarifs Re:mind - Choisissez votre plan",
    description: "Plans flexibles pour gérer vos rappels et traitements médicaux. Gratuit, Plus (0,99€/mois), Pro (1,25€/mois).",
    type: "website",
    url: "https://remind.com/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs Re:mind - Choisissez votre plan",
    description: "Plans flexibles pour gérer vos rappels et traitements médicaux.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
