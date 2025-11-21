import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Re:mind | Conseils Santé & Bien-être",
  description: "Découvrez nos articles sur la charge mentale, l'organisation, la santé et le bien-être. Des conseils pratiques pour libérer votre esprit.",
  keywords: ["blog remind", "conseils santé", "charge mentale", "organisation", "bien-être", "rappels médicaments"],
  openGraph: {
    title: "Blog Re:mind - Conseils pour libérer votre esprit",
    description: "Articles sur la charge mentale, l'organisation et le bien-être. Des conseils pratiques pour une vie plus sereine.",
    type: "website",
    url: "https://remind.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Re:mind - Conseils Santé & Bien-être",
    description: "Articles sur la charge mentale, l'organisation et le bien-être.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
