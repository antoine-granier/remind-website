import type { Metadata } from "next";
import { useTranslation } from "@/app/i18n/server";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return {
    title: `${t('comparePage.title')} - Re:mind`,
    description: t('metadata.description'),
  };
}

export default async function ComparePage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  const rows = [
    'medication',
    'toll',
    'privacy',
    'platform',
    'customization'
  ];

  return (
    <main className="min-h-screen bg-background text-primary">
      {/* Hero Section */}
      <section className="w-full py-20 px-6 flex flex-col items-center text-center">
        <ScrollReveal key={`${lng}-hero`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            {t('comparePage.title')}
          </h1>
          <p className="text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
            {t('comparePage.subtitle')}
          </p>
        </ScrollReveal>
      </section>

      {/* Comparison Table */}
      <section className="w-full pb-20 px-4 md:px-6">
        <ScrollReveal key={`${lng}-table`} delay={0.2} className="max-w-5xl mx-auto overflow-x-auto">
          <div className="min-w-[800px] bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-4 bg-background2/50 border-b border-gray-200">
              <div className="p-6 font-bold text-secondary flex items-center">
                {t('comparePage.table.features')}
              </div>
              <div className="p-6 font-bold text-primary text-xl flex items-center justify-center bg-action/5 border-x border-action/10 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-action"></div>
                {t('comparePage.table.remind')}
              </div>
              <div className="p-6 font-bold text-secondary flex items-center justify-center">
                {t('comparePage.table.apple')}
              </div>
              <div className="p-6 font-bold text-secondary flex items-center justify-center">
                {t('comparePage.table.google')}
              </div>
            </div>

            {rows.map((row, index) => (
              <div
                key={row}
                className={`grid grid-cols-4 hover:bg-white/40 transition-colors ${
                  index !== rows.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="p-6 font-semibold text-primary flex items-center">
                  {t(`comparePage.table.rows.${row}.title`)}
                </div>
                <div className="p-6 font-bold text-primary text-center flex items-center justify-center bg-action/5 border-x border-action/10">
                  {row === 'privacy' ? '🔒 ' : row === 'toll' ? '🚗 ' : row === 'medication' ? '💊 ' : '✅ '}
                  {t(`comparePage.table.rows.${row}.remind`)}
                </div>
                <div className="p-6 text-secondary flex items-center justify-center text-center">
                  {t(`comparePage.table.rows.${row}.apple`)}
                </div>
                <div className="p-6 text-secondary flex items-center justify-center text-center">
                  {t(`comparePage.table.rows.${row}.google`)}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Deep Dive Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal key={`${lng}-health`} delay={0.1}>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {t('comparePage.details.health.title')}
              </h3>
              <p className="text-secondary leading-relaxed">
                {t('comparePage.details.health.desc')}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal key={`${lng}-privacy`} delay={0.2}>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {t('comparePage.details.privacy.title')}
              </h3>
              <p className="text-secondary leading-relaxed">
                {t('comparePage.details.privacy.desc')}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal key={`${lng}-mental`} delay={0.3}>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {t('comparePage.details.mentalLoad.title')}
              </h3>
              <p className="text-secondary leading-relaxed">
                {t('comparePage.details.mentalLoad.desc')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-background2 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal key={`${lng}-faq-title`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              {t('comparePage.faq.title')}
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal key={`${lng}-faq-1`} delay={0.1}>
              <div className="bg-background rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">
                  {t('comparePage.faq.q1')}
                </h3>
                <p className="text-secondary">
                  {t('comparePage.faq.a1')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal key={`${lng}-faq-2`} delay={0.2}>
              <div className="bg-background rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">
                  {t('comparePage.faq.q2')}
                </h3>
                <p className="text-secondary">
                  {t('comparePage.faq.a2')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal key={`${lng}-faq-3`} delay={0.3}>
              <div className="bg-background rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">
                  {t('comparePage.faq.q3')}
                </h3>
                <p className="text-secondary">
                  {t('comparePage.faq.a3')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-linear-to-br from-action/5 to-primary/5 px-6">
        <ScrollReveal key={`${lng}-cta`}>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t('comparePage.cta.title')}
            </h2>
            <a
              href={`/${lng}/download`}
              className="px-8 py-4 bg-action text-primary rounded-xl font-bold hover:bg-action/90 shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
            >
              {t('comparePage.cta.button')}
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
