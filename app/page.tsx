import HeroScroll from "@/components/HeroScroll";
import IPhoneMockup from "@/components/IphoneMockup";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-primary">
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
            définir la posologie, la fréquence et le stock restant pour ne
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

      {/* TYPES DE RAPPELS */}
      <section className="w-full py-20 bg-background flex flex-col items-center px-6 overflow-hidden">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-6 text-primary text-center">
            Adaptez Re:mind à votre vie
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary max-w-2xl text-center mb-12 text-lg leading-relaxed">
            Trois types de rappels pour couvrir tous vos besoins quotidiens
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
          <ScrollReveal delay={0.1}>
            <FeatureCard
              title="Unique"
              icon="⏰"
              desc="Pour les rappels ponctuels et événements importants."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <FeatureCard
              title="Quotidien"
              icon="🌞"
              desc="Pour votre routine quotidienne et habitudes santé."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <FeatureCard
              title="Hebdomadaire"
              icon="📆"
              desc="Pour organiser vos tâches récurrentes sans effort."
            />
          </ScrollReveal>
        </div>
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

function FeatureCard({
  title,
  icon,
  desc,
}: {
  title: string;
  icon: string;
  desc: string;
}) {
  return (
    <div className="bg-background2 rounded-2xl h-full shadow-md p-8 flex flex-col items-center gap-3 border border-secondary hover:shadow-xl hover:scale-105 transition-all">
      <span className="text-5xl">{icon}</span>
      <span className="text-xl font-bold text-primary">{title}</span>
      <span className="text-base text-secondary text-center leading-relaxed">
        {desc}
      </span>
    </div>
  );
}
