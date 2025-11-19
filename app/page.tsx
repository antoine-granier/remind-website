import HeroScroll from "@/components/HeroScroll";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-primary">
      {/* HERO SECTION AVEC ANIMATION SCROLL */}
      <HeroScroll />

      {/* POURQUOI RE:MIND */}
      <section
        id="decouvrir"
        className="w-full py-20 bg-background2 flex flex-col items-center px-6"
      >
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Pourquoi Re:mind ?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary max-w-2xl text-center mb-12 text-lg leading-relaxed">
            Une application de rappels intelligente qui organise toutes vos
            tâches selon vos besoins, pour alléger votre esprit.
          </p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-10">
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

      {/* FONCTIONNALITÉS CLÉS */}
      <section
        id="features"
        className="w-full py-20 bg-background flex flex-col items-center px-6"
      >
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Fonctionnalités clés
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 max-w-6xl">
          <ScrollReveal delay={0.1} direction="left">
            <FeatureCard
              title="Gestion des médicaments"
              icon="💊"
              desc="Suivez vos doses et dosages en un coup d'œil avec un tracker intégré."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <FeatureCard
              title="Catégories personnalisées"
              icon="🏷"
              desc="Créez des catégories sur mesure : Rappels, Médicaments, Renouvellements et Péages."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5} direction="right">
            <FeatureCard
              title="Détection de péages"
              icon="🚗"
              desc="Une fonctionnalité unique pour ne jamais oublier vos passages aux péages."
            />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 max-w-6xl">
          <ScrollReveal delay={0.1} direction="left">
            <FeatureCard
              title="Tableau de bord complet"
              icon="📊"
              desc="Visualisez vos rappels du jour, planifiés et complétés dans une interface intuitive."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <FeatureCard
              title="Planificateur intégré"
              icon="📅"
              desc="Organisez vos rappels par jour de la semaine avec vue calendrier."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5} direction="right">
            <FeatureCard
              title="Notifications intelligentes"
              icon="🔔"
              desc="Recevez des alertes personnalisables selon vos préférences et votre rythme."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* PERSONNALISATION */}
      <section
        id="personnalisation"
        className="w-full py-20 bg-background2 flex flex-col items-center px-6"
      >
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Une expérience sur mesure
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary max-w-2xl text-center mb-12 text-lg leading-relaxed">
            Personnalisez chaque détail pour adapter Re:mind à votre style de
            vie.
          </p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-10">
          <ScrollReveal delay={0.1}>
            <FeatureCard
              title="Plans flexibles"
              icon="💎"
              desc="Choisissez entre la version gratuite ou premium selon vos besoins."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <FeatureCard
              title="Paramètres avancés"
              icon="⚙️"
              desc="Contrôlez vos notifications, abonnements et préférences en toute simplicité."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <FeatureCard
              title="Suivi de traitements"
              icon="📝"
              desc="Ajoutez et gérez vos traitements médicaux avec dates et horaires précis."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* LANCEMENT IMMINENT */}
      <section
        id="lancement"
        className="w-full py-20 bg-background flex flex-col items-center gap-8 px-6"
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
            <div className="flex items-center gap-3 px-8 py-4 bg-background2 border-2 border-action rounded-xl">
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

            <div className="flex items-center gap-3 px-8 py-4 bg-background2 border-2 border-action rounded-xl">
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
    <div className="bg-background2 rounded-2xl h-full shadow-md p-8 flex flex-col items-center gap-3 border border-background hover:shadow-xl hover:scale-105 transition-all">
      <span className="text-5xl">{icon}</span>
      <span className="text-xl font-bold text-primary">{title}</span>
      <span className="text-base text-secondary text-center leading-relaxed">
        {desc}
      </span>
    </div>
  );
}
