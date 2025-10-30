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
              desc="Pour les rappels ponctuels et importants."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <FeatureCard
              title="Quotidien"
              icon="🌞"
              desc="Pour votre routine santé et bien-être."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <FeatureCard
              title="Hebdomadaire"
              icon="📆"
              desc="Pour organiser votre semaine sans stress."
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
              title="Traitements médicaux"
              icon="💊"
              desc="Un suivi simple et efficace de vos prises de médicaments."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <FeatureCard
              title="Catégories personnalisées"
              icon="🏷"
              desc="Classez vos rappels et retrouvez-les facilement."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5} direction="right">
            <FeatureCard
              title="Notifications smart"
              icon="🔔"
              desc="Soyez notifié selon vos préférences : unique, quotidien ou hebdomadaire."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* APPEL À ACTION */}
      <section
        id="inscription"
        className="w-full py-20 bg-background2 flex flex-col items-center gap-8 px-6"
      >
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-primary">
            Restez informé du lancement !
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary text-center max-w-xl">
            Inscrivez-vous pour recevoir une notification dès que Re:mind sera
            disponible.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-5 py-3 rounded-full border-2 border-secondary bg-background2 text-primary focus:outline-none focus:border-action transition"
            />
            <button
              type="submit"
              className="bg-action text-primary px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              M'inscrire
            </button>
          </form>
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
    <div className="bg-background2 rounded-2xl shadow-md p-8 flex flex-col items-center gap-3 border border-background hover:shadow-xl hover:scale-105 transition-all">
      <span className="text-5xl">{icon}</span>
      <span className="text-xl font-bold text-primary">{title}</span>
      <span className="text-base text-secondary text-center leading-relaxed">
        {desc}
      </span>
    </div>
  );
}
