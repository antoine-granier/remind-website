'use client';

import { useTranslation } from "@/app/i18n/client";
import { motion } from "framer-motion";
import FAQItem from "@/components/FAQItem";

export default function FAQContent({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);

  const faqData = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
      icon: '🔒',
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
      icon: '🔄',
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
      icon: '📱',
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
      icon: '🌐',
    }
  ];

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
            {lng === 'fr' ? 'FAQ' : 'FAQ'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('faq.title')}
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            {lng === 'fr' 
              ? 'Tout ce que vous devez savoir sur Re:mind.'
              : 'Everything you need to know about Re:mind.'}
          </p>
        </motion.div>
      </header>

      {/* FAQ Items */}
      <section className="w-full pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={`${lng}-faq-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-background2/50 rounded-2xl p-8 text-center border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-3">
                {lng === 'fr' ? 'Encore des questions ?' : 'Still have questions?'}
              </h3>
              <p className="text-secondary mb-6">
                {lng === 'fr' 
                  ? 'Notre équipe est là pour vous aider.'
                  : 'Our team is here to help.'}
              </p>
              <a
                href="mailto:contact@re-mind.app"
                className="inline-block px-8 py-3 bg-action text-primary rounded-lg font-semibold
                  hover:bg-action/90 hover:shadow-lg transition-all duration-300
                  active:scale-95"
              >
                {lng === 'fr' ? 'Nous contacter' : 'Contact us'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
