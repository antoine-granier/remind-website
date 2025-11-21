import HeroScroll from "@/components/HeroScroll";
import IPhoneMockup from "@/components/IphoneMockup";
import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: 'https://remind-apps.vercel.app',
  title: "Re:mind – Application de rappels pour médicaments et tâches",
  description:
    "Re:mind centralise vos rappels de médicaments, tâches quotidiennes, péages et abonnements dans une app simple et intelligente sur iOS et Android.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    title: "Re:mind – Application de rappels pour médicaments et tâches",
    description:
      "Ne manquez plus une prise de médicament ni une tâche importante grâce à Re:mind.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Re:mind - Application de rappels",
      },
    ],
    siteName: "Re:mind",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Re:mind – Application de rappels pour médicaments et tâches",
    description:
      "Application de rappels pour gérer vos médicaments, tâches et échéances importantes.",
    images: ["/favicon.png"],
  },
};

// JSON-LD (SoftwareApplication) conseillé par Google et schema.org pour les apps. [web:26][web:29][web:35]
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Re:mind",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  description:
    "Application de rappels pour gérer vos médicaments, tâches quotidiennes, péages et abonnements.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* HERO SECTION AVEC ANIMATION SCROLL */}
      <HeroScroll />

      {/* VOTRE ESPRIT, LIBÉRÉ - Avec mockup du dashboard */}
      <section
        id="discover"
        className="w-full py-20 bg-background2 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 overflow-hidden"
      >
        <ScrollReveal direction="left" className="flex-1 max-w-xl">
          <div className="relative w-full max-w-[300px] mx-auto">
            <IPhoneMockup src="/IMG_0800.png" alt="Dashboard Re:mind" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Votre esprit, <span className="italic text-action">libéré</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-6">
            Re:mind centralise tous vos rappels dans un tableau de bord
            intuitif. Visualisez en un coup d'œil vos tâches du jour, celles
            planifiées et celles déjà accomplies.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <h3 className="font-semibold text-primary">Résumé complet</h3>
                <p className="text-secondary">
                  Suivez vos rappels aujourd'hui, planifiés et terminés
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-semibold text-primary">Interface épurée</h3>
                <p className="text-secondary">
                  Un design moderne et facile à utiliser
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* PLANIFIEZ FACILEMENT - Avec mockup du planificateur */}
      <section className="w-full py-20 bg-background flex flex-col lg:flex-row-reverse items-center justify-center gap-12 px-6 overflow-hidden">
        <ScrollReveal direction="right" className="flex-1 max-w-xl">
          <div className="relative w-full max-w-[300px] mx-auto">
            <IPhoneMockup src="/IMG_0801.png" alt="Planificateur Re:mind" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Vos rappels,{" "}
            <span className="italic text-action">toujours à l'heure</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-6">
            Organisez votre semaine avec notre planificateur intégré. Créez des
            rappels ponctuels, quotidiens ou hebdomadaires adaptés à votre
            rythme de vie.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <h3 className="font-semibold text-primary">Vue calendrier</h3>
                <p className="text-secondary">
                  Naviguez facilement dans vos semaines
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⏰</span>
              <div>
                <h3 className="font-semibold text-primary">
                  Rappels multiples
                </h3>
                <p className="text-secondary">
                  Gérez plusieurs rappels par jour sans effort
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* GESTION DES MÉDICAMENTS - Avec mockup */}
      <section className="w-full py-20 bg-background2 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 overflow-hidden">
        <ScrollReveal direction="left" className="flex-1 max-w-xl">
          <div className="relative w-full max-w-[300px] mx-auto">
            <IPhoneMockup src="/IMG_0802.png" alt="Gestion des médicaments" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Gérez vos traitements{" "}
            <span className="italic text-action">intelligemment</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-6">
            Suivez vos traitements avec précision. Re:mind vous permet de
            choisir la posologie, la fréquence et le stock restant pour ne
            jamais manquer une prise.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💊</span>
              <div>
                <h3 className="font-semibold text-primary">Suivi des doses</h3>
                <p className="text-secondary">
                  1 pilule, 3x/jour - tout est clair
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📦</span>
              <div>
                <h3 className="font-semibold text-primary">Gestion du stock</h3>
                <p className="text-secondary">
                  Soyez alerté quand il est temps de renouveler
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CRÉATION FACILE - Avec mockup nouveau rappel */}
      <section className="w-full py-20 bg-background flex flex-col lg:flex-row-reverse items-center justify-center gap-12 px-6 overflow-hidden">
        <ScrollReveal direction="right" className="flex-1 max-w-xl">
          <div className="relative w-full max-w-[300px] mx-auto">
            <IPhoneMockup src="/IMG_0803.png" alt="Créer un rappel" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Créez en{" "}
            <span className="italic text-action">quelques secondes</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-6">
            Interface intuitive pour créer vos rappels rapidement. Choisissez la
            catégorie, la récurrence et l'heure en quelques taps.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center p-4 bg-background2 rounded-xl">
              <span className="text-3xl mb-2">🎯</span>
              <span className="text-sm font-semibold text-primary">
                Rappels
              </span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background2 rounded-xl">
              <span className="text-3xl mb-2">💊</span>
              <span className="text-sm font-semibold text-primary">
                Médicament
              </span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background2 rounded-xl">
              <span className="text-3xl mb-2">💊</span>
              <span className="text-sm font-semibold text-primary">
                Renouvellement
              </span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background2 rounded-xl">
              <span className="text-3xl mb-2">🚗</span>
              <span className="text-sm font-semibold text-primary">Péage</span>
            </div>
          </div>
          <p className="text-center mt-4 font-semibold">Et plein d'autre...</p>
        </ScrollReveal>
      </section>

      {/* PERSONNALISATION - Avec mockup paramètres */}
      <section className="w-full py-20 bg-background2 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 overflow-hidden">
        <ScrollReveal direction="left" className="flex-1 max-w-xl">
          <div className="relative w-full max-w-[300px] mx-auto">
            <IPhoneMockup src="/IMG_0804.png" alt="Paramètres Re:mind" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Personnalisez{" "}
            <span className="italic text-action">à votre guise</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-6">
            Contrôlez chaque détail de votre expérience. Notifications,
            abonnements, traitements et même la détection automatique des péages
            - tout est configurable.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔔</span>
              <div>
                <h3 className="font-semibold text-primary">
                  Notifications intelligentes
                </h3>
                <p className="text-secondary">
                  Activez ou désactivez selon vos préférences
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💎</span>
              <div>
                <h3 className="font-semibold text-primary">Plans flexibles</h3>
                <p className="text-secondary">Version gratuite ou premium</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚗</span>
              <div>
                <h3 className="font-semibold text-primary">
                  Détection de péages
                </h3>
                <p className="text-secondary">
                  Rappels automatiques pour vos paiements en ligne
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* TYPES DE RAPPELS - BENTO ENRICHI */}
      <section className="w-full py-24 bg-background flex flex-col items-center px-6 overflow-hidden">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-center">
            Organisez-vous{" "}
            <span className="italic text-action">comme vous voulez</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-secondary text-center mb-16 text-lg max-w-2xl">
            Trois modes de rappels pensés pour s'adapter à tous vos besoins
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-6xl w-full">
          {/* Card 1 - Large */}
          <ScrollReveal delay={0.2} className="md:col-span-4">
            <EnrichedBentoCard
              title="Unique"
              icon="⏰"
              desc="Pour les rappels ponctuels et événements importants."
              features={[
                "Rendez-vous médical",
                "Date limite projet",
                "Événement spécial",
              ]}
              stats="1 notification"
              statsLabel="au bon moment"
              size="large"
            />
          </ScrollReveal>

          {/* Card 2 - Small */}
          <ScrollReveal delay={0.3} className="md:col-span-2">
            <EnrichedBentoCard
              title="Quotidien"
              icon="🌞"
              desc="Pour votre routine quotidienne."
              features={["Médicaments", "Sport", "Hydratation"]}
              stats="Chaque jour"
              statsLabel="sans y penser"
              size="small"
            />
          </ScrollReveal>

          {/* Card 3 - Medium */}
          <ScrollReveal delay={0.4} className="md:col-span-3">
            <EnrichedBentoCard
              title="Hebdomadaire"
              icon="📆"
              desc="Pour organiser vos tâches récurrentes."
              features={["Courses", "Ménage", "Révisions"]}
              stats="Organisé"
              statsLabel="sans stress"
              size="medium"
            />
          </ScrollReveal>

          {/* Info Card */}
          <ScrollReveal delay={0.5} className="md:col-span-3">
            <div className="h-full bg-gradient-to-br from-action/5 to-primary/5 border-2 border-action/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-action/40 transition-all duration-300 group cursor-pointer">
              <div className="text-4xl mb-2">✨</div>
              <h3 className="text-xl font-bold text-primary">
                Mode personnalisé
              </h3>
              <p className="text-sm text-secondary">
                Créez vos propres règles de récurrence
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-2">
                Bientôt disponible...
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONFIDENTIALITÉ ET DONNÉES */}
      <section className="w-full py-20 bg-background2 flex flex-col items-center gap-8 px-6 overflow-hidden">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary bg-action rounded-full px-3 py-2 w-fit font-bold tracking-wider uppercase text-sm mb-4 block mx-auto">
              Confidentialité
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Vos données vous appartiennent, <span className="text-secondary/80">pour de vrai</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-12">
              Re:mind est conçu avec un principe simple : votre vie privée n'est pas négociable. 
              Aucune donnée n'est collectée, stockée ou partagée. Tout reste sur votre appareil.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          <ScrollReveal delay={0.1}>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-action/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Aucune collecte</h3>
              <p className="text-secondary leading-relaxed">
                Nous ne collectons aucune donnée personnelle. Ni emails, ni historiques, ni habitudes. Rien.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-action/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Stockage local</h3>
              <p className="text-secondary leading-relaxed">
                Toutes vos données restent sur votre téléphone. Vous gardez le contrôle total, toujours.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-action/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Pas de revente</h3>
              <p className="text-secondary leading-relaxed">
                Vos informations ne seront jamais analysées, partagées ou vendues à des tiers. Jamais.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="max-w-3xl mx-auto mt-8 bg-gradient-to-br from-action/10 to-primary/5 border-2 border-action/20 rounded-2xl p-6 text-center">
            <p className="text-primary font-semibold text-lg mb-2">
              💚 Re:mind est une app éthique
            </p>
            <p className="text-secondary">
              Pas de tracker, pas de publicités ciblées, pas de vente de données. 
              Juste une application qui vous aide, point final.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA BLOG */}
      <section className="w-full py-20 bg-gradient-to-br from-action/5 to-primary/5 flex flex-col items-center gap-6 px-6 overflow-hidden">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary bg-action rounded-full px-3 py-2 w-fit font-bold tracking-wider uppercase text-sm mb-4 block mx-auto">
              Blog & Ressources
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Libérez votre esprit, <span className="text-secondary/80">une lecture à la fois</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              Découvrez nos articles sur la charge mentale, l'organisation et le bien-être. 
              Des conseils pratiques pour une vie plus sereine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/blog"
                className="px-8 py-4 bg-action text-primary rounded-xl font-bold hover:bg-action/90 shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
              >
                Lire nos articles
              </a>
              <div className="flex gap-3 text-sm text-secondary">
                <span className="px-3 py-2 bg-white/50 rounded-lg border border-white/60">Bien-être</span>
                <span className="px-3 py-2 bg-white/50 rounded-lg border border-white/60">Santé</span>
                <span className="px-3 py-2 bg-white/50 rounded-lg border border-white/60">Organisation</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA TARIFS */}
      <section className="w-full py-20 bg-background flex flex-col items-center gap-6 px-6 overflow-hidden">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary bg-action rounded-full px-3 py-2 w-fit font-bold tracking-wider uppercase text-sm mb-4 block mx-auto">
              Tarifs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Un plan pour <span className="text-secondary/80">chaque besoin</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              Gratuit, Plus ou Pro : trouvez le plan qui vous correspond. 
              Gérez vos rappels et traitements sans effort, avec ou sans abonnement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="/pricing"
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
              >
                Voir les tarifs
              </a>
              <span className="text-secondary text-sm">À partir de 0€ · Sans engagement</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-4">
                <div className="text-2xl mb-2">🎁</div>
                <div className="text-sm font-semibold text-primary">Version gratuite</div>
                <div className="text-xs text-secondary">Fonctionnalités de base</div>
              </div>
              <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-4">
                <div className="text-2xl mb-2">⭐</div>
                <div className="text-sm font-semibold text-primary">Plus à 0,99€/mois</div>
                <div className="text-xs text-secondary">Catégories illimitées</div>
              </div>
              <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-4">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-sm font-semibold text-primary">Pro à 1,25€/mois</div>
                <div className="text-xs text-secondary">Toutes les fonctionnalités</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* LANCEMENT IMMINENT */}
      <section
        id="launch"
        className="w-full py-20 bg-background2 flex flex-col items-center gap-8 px-6 overflow-hidden"
      >
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center">
            Bientôt disponible
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary text-center max-w-2xl text-lg leading-relaxed">
            Re:mind arrive très prochainement sur iOS et Android. Préparez-vous
            à libérer votre esprit et à simplifier votre quotidien.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6 items-center mt-4">
            <div className="flex items-center gap-3 px-8 py-4 bg-background border-2 border-action rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-action"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-sm text-secondary">Bientôt sur</span>
                <span className="text-xl font-semibold text-primary">
                  App Store
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-8 py-4 bg-background border-2 border-action rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-action"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-sm text-secondary">Bientôt sur</span>
                <span className="text-xl font-semibold text-primary">
                  Google Play
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <p className="text-primary font-semibold text-lg mt-4">
            Restez à l'écoute ! 🚀
          </p>
        </ScrollReveal>
      </section>
    </main>
  );
}

// NOUVELLE FONCTION ENRICHIE
function EnrichedBentoCard({
  title,
  icon,
  desc,
  features,
  stats,
  statsLabel,
  size = "medium",
}: {
  title: string;
  icon: string;
  desc: string;
  features: string[];
  stats: string;
  statsLabel: string;
  size?: "small" | "medium" | "large";
}) {
  const heightClass =
    size === "large"
      ? "h-80 md:h-96"
      : size === "small"
      ? "h-80 md:h-96"
      : "h-80";

  return (
    <div
      className={`group ${heightClass} bg-background2 border-2 border-gray-200 rounded-3xl p-6 md:p-8 hover:border-action/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative`}
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Background icon watermark */}
      <div className="absolute top-0 right-0 text-[180px] opacity-[0.03] transform rotate-12 translate-x-12 -translate-y-12 pointer-events-none">
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl md:text-6xl transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {title}
              </h3>
              <p className="text-sm text-secondary">{desc}</p>
            </div>
          </div>
        </div>

        {/* Features list */}
        <div className="flex-1 mb-6">
          <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-3">
            Exemples d'utilisation
          </p>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-white/50 border border-gray-200 text-primary text-xs font-medium rounded-full hover:border-action/40 hover:bg-white transition-colors"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Stats footer */}
        <div className="flex items-end justify-between">
          <div>
            <div className="text-3xl md:text-4xl font-black text-action mb-1">
              {stats}
            </div>
            <p className="text-xs text-secondary">{statsLabel}</p>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-action transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}
