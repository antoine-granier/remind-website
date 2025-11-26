"use client";

import { motion } from "framer-motion";
import { useTranslation } from "../../i18n/client";
import { use } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import IPhoneMockup from "@/components/IphoneMockup";

function FeaturesHeader({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  return (
    <header className="py-20 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-action/5 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <span className="text-primary bg-action py-2 px-3 rounded-full mx-auto w-fit font-bold tracking-wider uppercase text-sm mb-4 block">
          {t('featuresPage.header.badge')}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6" dangerouslySetInnerHTML={{ __html: t('featuresPage.header.title') }} />
        <p className="text-lg text-secondary leading-relaxed">
          {t('featuresPage.header.subtitle')}
        </p>
      </motion.div>
    </header>
  );
}

function FeatureOverviewGrid({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  
  const overviewFeatures = [
    { key: "dashboard", icon: "📊" },
    { key: "calendar", icon: "📅" },
    { key: "tasks", icon: "🔔" },
    { key: "privacy", icon: "🔒" }
  ];

  return (
    <section className="pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {overviewFeatures.map((feature, index) => (
            <ScrollReveal key={feature.key} delay={index * 0.1}>
              <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {t(`featuresPage.overview.${feature.key}.title`)}
                </h3>
                <p className="text-sm text-secondary">
                  {t(`featuresPage.overview.${feature.key}.desc`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  
  return (
    <section className="py-20 px-6 bg-linear-to-b from-background to-background2/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('featuresPage.beforeAfter.title')}
          </h2>
          <p className="text-center text-secondary mb-16 max-w-2xl mx-auto">
            {t('featuresPage.beforeAfter.subtitle')}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <ScrollReveal direction="left">
            <div className="bg-white/50 backdrop-blur-md border border-red-200 rounded-3xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">😰</span>
                  <h3 className="text-2xl font-bold text-red-600">
                    {t('featuresPage.beforeAfter.before.title')}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {(t('featuresPage.beforeAfter.before.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* After */}
          <ScrollReveal direction="right">
            <div className="bg-white/50 backdrop-blur-md border border-green-200 rounded-3xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-action/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">😌</span>
                  <h3 className="text-2xl font-bold text-green-600">
                    {t('featuresPage.beforeAfter.after.title')}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {(t('featuresPage.beforeAfter.after.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-action mt-1">✓</span>
                      <span className="text-primary font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = use(params);
  const { t } = useTranslation(lng);

  const features = [
    {
      key: "dashboard",
      image: "/IMG_0800.png",
      align: "right"
    },
    {
      key: "calendar",
      image: "/IMG_0801.png",
      align: "left"
    },
    {
      key: "tasks",
      image: "/IMG_0803.png",
      align: "right"
    },
    {
      key: "stats",
      image: "/IMG_0804.png",
      align: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <FeaturesHeader lng={lng} />
      
      {/* Feature Overview Grid */}
      <FeatureOverviewGrid lng={lng} />
      
      <main className="max-w-7xl mx-auto px-6">

      {/* Before/After Section */}
      <BeforeAfterSection lng={lng} />

      {/* FEATURES LIST */}
      <div className="w-full max-w-7xl px-6 pb-20 space-y-32 mt-20">
        {features.map((feature, index) => (
          <section key={feature.key} className={`flex flex-col ${feature.align === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
            
            {/* Text Content */}
            <ScrollReveal 
              direction={feature.align === 'left' ? 'left' : 'right'} 
              className="flex-1 text-center lg:text-left"
            >
              {/* Highlight Badge */}
              {t(`featuresPage.features.${feature.key}.highlight`, { defaultValue: '' }) && (
                <div className="inline-block mb-4">
                  <span className="bg-action text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {t(`featuresPage.features.${feature.key}.highlight`)}
                  </span>
                </div>
              )}
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t(`featuresPage.features.${feature.key}.title`)}
              </h2>
              
              <p className="text-lg text-secondary leading-relaxed mb-6">
                {t(`featuresPage.features.${feature.key}.desc`)}
              </p>

              {/* Key Benefits */}
              <div className="space-y-3">
                <h3 className="font-semibold text-primary mb-3">
                  {t('featuresPage.keyBenefitsLabel')}
                </h3>
                <ul className="space-y-2">
                  {(t(`featuresPage.features.${feature.key}.benefits`, { returnObjects: true }) as string[]).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-secondary">
                      <span className="text-action mt-1 shrink-0">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Image Content */}
            <ScrollReveal 
              direction={feature.align === 'left' ? 'right' : 'left'} 
              className="flex-1 flex justify-center"
            >
              <div className="relative w-full max-w-[300px] transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-action/20 blur-3xl rounded-full opacity-20" />
                <IPhoneMockup src={feature.image} alt={t(`featuresPage.features.${feature.key}.title`)} />
              </div>
            </ScrollReveal>

          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="w-full py-20 bg-background2/50 flex flex-col items-center text-center px-6 rounded-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-8">{t('downloadPage.title_prefix')} {t('downloadPage.title_highlight')}</h2>
          <a
            href={`/${lng}/download`}
            className="px-8 py-4 bg-action text-primary rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all"
          >
            {t('downloadPage.appStore')}
          </a>
        </ScrollReveal>
      </section>

      </main>
    </div>
  );
}
