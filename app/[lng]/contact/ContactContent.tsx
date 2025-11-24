'use client';

import { useTranslation } from "@/app/i18n/client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactContent({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);

  return (
    <main className="min-h-screen bg-background text-primary">
      {/* Hero Section */}
      <header className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-action/5 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-primary bg-action py-2 px-3 rounded-full mx-auto w-fit font-bold tracking-wider uppercase text-sm mb-4 block">
            {t('contactPage.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('contactPage.title')}
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            {t('contactPage.subtitle')}
          </p>
        </motion.div>
      </header>

      {/* Content Section */}
      <section className="w-full pb-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="bg-white/50 backdrop-blur-md border border-gray-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {t('contactPage.form.message')}
              </h2>
              <ContactForm lng={lng} />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/50 backdrop-blur-md border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                {t('contactPage.info.title')}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-secondary mb-1">
                    {t('contactPage.info.email')}
                  </p>
                  <a
                    href="mailto:antoine.granier@protonmail.com"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {t('contactPage.info.emailValue')}
                  </a>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-secondary">
                    {t('contactPage.info.response')}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links to FAQ */}
            <div className="bg-background2/50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-primary mb-3">
                {lng === 'fr' ? 'Questions fréquentes' : 'Frequently Asked Questions'}
              </h3>
              <p className="text-sm text-secondary mb-4">
                {lng === 'fr'
                  ? 'Consultez notre FAQ pour des réponses rapides.'
                  : 'Check our FAQ for quick answers.'}
              </p>
              <a
                href={`/${lng}/faq`}
                className="inline-block text-primary font-semibold text-sm bg-action py-2 px-3 rounded-full"
              >
                {lng === 'fr' ? 'Voir la FAQ →' : 'View FAQ →'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
