import HeroScroll from "@/components/HeroScroll";
import IPhoneMockup from "@/components/IphoneMockup";
import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from "next";
import { useTranslation } from "../i18n/server";

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await useTranslation(lng, 'translation');
  return {
    metadataBase: new URL('https://remind-apps.vercel.app'),
    title: t('metadata.title'),
    description: t('metadata.description'),
    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png",
    },
    openGraph: {
      type: "website",
      title: t('metadata.ogTitle'),
      description: t('metadata.ogDescription'),
      images: [
        {
          url: "/favicon.png",
          width: 512,
          height: 512,
          alt: "Re:mind - Application de rappels",
        },
      ],
      siteName: "Re:mind",
      locale: lng === 'fr' ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t('metadata.twitterTitle'),
      description: t('metadata.twitterDescription'),
      images: ["/favicon.png"],
    },
  };
}

export default async function Home({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  // JSON-LD (SoftwareApplication)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Re:mind",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android",
    description: t('metadata.description'),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* HERO SECTION AVEC ANIMATION SCROLL */}
      <HeroScroll lng={lng} />

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
            {t('hero.title_prefix')}<span className="italic text-action">{t('hero.title_highlight')}</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-6">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <h3 className="font-semibold text-primary">{t('hero.features.summary.title')}</h3>
                <p className="text-secondary">
                  {t('hero.features.summary.desc')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-semibold text-primary">{t('hero.features.interface.title')}</h3>
                <p className="text-secondary">
                  {t('hero.features.interface.desc')}
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
            {t('planning.title_prefix')}
            <span className="italic text-action">{t('planning.title_highlight')}</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-6">
            {t('planning.subtitle')}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <h3 className="font-semibold text-primary">{t('planning.features.calendar.title')}</h3>
                <p className="text-secondary">
                  {t('planning.features.calendar.desc')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⏰</span>
              <div>
                <h3 className="font-semibold text-primary">
                  {t('planning.features.multiple.title')}
                </h3>
                <p className="text-secondary">
                  {t('planning.features.multiple.desc')}
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
            {t('medication.title_prefix')}
            <span className="italic text-action">{t('medication.title_highlight')}</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-6">
            {t('medication.subtitle')}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💊</span>
              <div>
                <h3 className="font-semibold text-primary">{t('medication.features.doses.title')}</h3>
                <p className="text-secondary">
                  {t('medication.features.doses.desc')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📦</span>
              <div>
                <h3 className="font-semibold text-primary">{t('medication.features.stock.title')}</h3>
                <p className="text-secondary">
                  {t('medication.features.stock.desc')}
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
            {t('creation.title_prefix')}
            <span className="italic text-action">{t('creation.title_highlight')}</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-6">
            {t('creation.subtitle')}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center p-4 bg-background2 rounded-xl">
              <span className="text-3xl mb-2">🎯</span>
              <span className="text-sm font-semibold text-primary">
                {t('creation.categories.reminders')}
              </span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background2 rounded-xl">
              <span className="text-3xl mb-2">💊</span>
              <span className="text-sm font-semibold text-primary">
                {t('creation.categories.medication')}
              </span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background2 rounded-xl">
              <span className="text-3xl mb-2">💊</span>
              <span className="text-sm font-semibold text-primary">
                {t('creation.categories.renewal')}
              </span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background2 rounded-xl">
              <span className="text-3xl mb-2">🚗</span>
              <span className="text-sm font-semibold text-primary">{t('creation.categories.toll')}</span>
            </div>
          </div>
          <p className="text-center mt-4 font-semibold">{t('creation.more')}</p>
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
            {t('customization.title_prefix')}
            <span className="italic text-action">{t('customization.title_highlight')}</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-6">
            {t('customization.subtitle')}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔔</span>
              <div>
                <h3 className="font-semibold text-primary">
                  {t('customization.features.notifications.title')}
                </h3>
                <p className="text-secondary">
                  {t('customization.features.notifications.desc')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💎</span>
              <div>
                <h3 className="font-semibold text-primary">{t('customization.features.plans.title')}</h3>
                <p className="text-secondary">{t('customization.features.plans.desc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚗</span>
              <div>
                <h3 className="font-semibold text-primary">
                  {t('customization.features.tolls.title')}
                </h3>
                <p className="text-secondary">
                  {t('customization.features.tolls.desc')}
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
            {t('bento.title_prefix')}
            <span className="italic text-action">{t('bento.title_highlight')}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-secondary text-center mb-16 text-lg max-w-2xl">
            {t('bento.subtitle')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-6xl w-full">
          {/* Card 1 - Large */}
          <ScrollReveal delay={0.2} className="md:col-span-4">
            <EnrichedBentoCard
              title={t('bento.unique.title')}
              icon="⏰"
              desc={t('bento.unique.desc')}
              features={t('bento.unique.features', { returnObjects: true }) as string[]}
              stats={t('bento.unique.stats')}
              statsLabel={t('bento.unique.statsLabel')}
              size="large"
            />
          </ScrollReveal>

          {/* Card 2 - Small */}
          <ScrollReveal delay={0.3} className="md:col-span-2">
            <EnrichedBentoCard
              title={t('bento.daily.title')}
              icon="🌞"
              desc={t('bento.daily.desc')}
              features={t('bento.daily.features', { returnObjects: true }) as string[]}
              stats={t('bento.daily.stats')}
              statsLabel={t('bento.daily.statsLabel')}
              size="small"
            />
          </ScrollReveal>

          {/* Card 3 - Medium */}
          <ScrollReveal delay={0.4} className="md:col-span-3">
            <EnrichedBentoCard
              title={t('bento.weekly.title')}
              icon="📆"
              desc={t('bento.weekly.desc')}
              features={t('bento.weekly.features', { returnObjects: true }) as string[]}
              stats={t('bento.weekly.stats')}
              statsLabel={t('bento.weekly.statsLabel')}
              size="medium"
            />
          </ScrollReveal>

          {/* Info Card */}
          <ScrollReveal delay={0.5} className="md:col-span-3">
            <div className="h-full bg-linear-to-br from-action/5 to-primary/5 border-2 border-action/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-action/40 transition-all duration-300 group cursor-pointer">
              <div className="text-4xl mb-2">✨</div>
              <h3 className="text-xl font-bold text-primary">
                {t('bento.custom.title')}
              </h3>
              <p className="text-sm text-secondary">
                {t('bento.custom.desc')}
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-2">
                {t('bento.custom.soon')}
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
              {t('privacy.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              {t('privacy.title_prefix')}<span className="text-secondary/80">{t('privacy.title_highlight')}</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-12">
              {t('privacy.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          <ScrollReveal delay={0.1}>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-action/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('privacy.cards.noCollection.title')}</h3>
              <p className="text-secondary leading-relaxed">
                {t('privacy.cards.noCollection.desc')}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-action/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('privacy.cards.localStorage.title')}</h3>
              <p className="text-secondary leading-relaxed">
                {t('privacy.cards.localStorage.desc')}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-action/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('privacy.cards.noResale.title')}</h3>
              <p className="text-secondary leading-relaxed">
                {t('privacy.cards.noResale.desc')}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="max-w-3xl mx-auto mt-8 bg-linear-to-br from-action/10 to-primary/5 border-2 border-action/20 rounded-2xl p-6 text-center">
            <p className="text-primary font-semibold text-lg mb-2">
              {t('privacy.ethical.title')}
            </p>
            <p className="text-secondary">
              {t('privacy.ethical.desc')}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA BLOG */}
      <section className="w-full py-20 bg-linear-to-br from-action/5 to-primary/5 flex flex-col items-center gap-6 px-6 overflow-hidden">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary bg-action rounded-full px-3 py-2 w-fit font-bold tracking-wider uppercase text-sm mb-4 block mx-auto">
              {t('blog.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              {t('blog.title_prefix')}<span className="text-secondary/80">{t('blog.title_highlight')}</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              {t('blog.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`/${lng}/blog`}
                className="px-8 py-4 bg-action text-primary rounded-xl font-bold hover:bg-action/90 shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
              >
                {t('blog.cta')}
              </a>
              <div className="flex gap-3 text-sm text-secondary">
                <span className="px-3 py-2 bg-white/50 rounded-lg border border-white/60">{t('blog.tags.wellness')}</span>
                <span className="px-3 py-2 bg-white/50 rounded-lg border border-white/60">{t('blog.tags.health')}</span>
                <span className="px-3 py-2 bg-white/50 rounded-lg border border-white/60">{t('blog.tags.organization')}</span>
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
              {t('pricing.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              {t('pricing.title_prefix')}<span className="text-secondary/80">{t('pricing.title_highlight')}</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              {t('pricing.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={`/${lng}/pricing`}
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
              >
                {t('pricing.cta')}
              </a>
              <span className="text-secondary text-sm">{t('pricing.subtext')}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-4">
                <div className="text-2xl mb-2">🎁</div>
                <div className="text-sm font-semibold text-primary">{t('pricing.cards.free.title')}</div>
                <div className="text-xs text-secondary">{t('pricing.cards.free.desc')}</div>
              </div>
              <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-4">
                <div className="text-2xl mb-2">⭐</div>
                <div className="text-sm font-semibold text-primary">{t('pricing.cards.plus.title')}</div>
                <div className="text-xs text-secondary">{t('pricing.cards.plus.desc')}</div>
              </div>
              <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-4">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-sm font-semibold text-primary">{t('pricing.cards.pro.title')}</div>
                <div className="text-xs text-secondary">{t('pricing.cards.pro.desc')}</div>
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
            {t('launch.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary text-center max-w-2xl text-lg leading-relaxed">
            {t('launch.subtitle')}
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
                <span className="text-sm text-secondary">{t('launch.soon')}</span>
                <span className="text-xl font-semibold text-primary">
                  {t('launch.appStore')}
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
                <span className="text-sm text-secondary">{t('launch.soon')}</span>
                <span className="text-xl font-semibold text-primary">
                  {t('launch.googlePlay')}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <p className="text-primary font-semibold text-lg mt-4">
            {t('launch.stayTuned')}
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
