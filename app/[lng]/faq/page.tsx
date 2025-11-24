import type { Metadata } from "next";
import { useTranslation } from "@/app/i18n/server";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return {
    title: `${t('faq.title')} - Re:mind`,
    description: t('faq.title'),
  };
}

export default async function FAQPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return (
    <main className="min-h-screen bg-background text-primary">
      {/* FAQ Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal key={`${lng}-faq-title`}> 
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              {t('faq.title')}
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {/* Question 1 */}
            <ScrollReveal key={`${lng}-faq-1`} delay={0.1}>
              <div className="bg-background rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">
                  {t('faq.q1')}
                </h3>
                <p className="text-secondary">{t('faq.a1')}</p>
              </div>
            </ScrollReveal>
            {/* Question 2 */}
            <ScrollReveal key={`${lng}-faq-2`} delay={0.2}>
              <div className="bg-background rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">
                  {t('faq.q2')}
                </h3>
                <p className="text-secondary">{t('faq.a2')}</p>
              </div>
            </ScrollReveal>
            {/* Question 3 */}
            <ScrollReveal key={`${lng}-faq-3`} delay={0.3}>
              <div className="bg-background rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">
                  {t('faq.q3')}
                </h3>
                <p className="text-secondary">{t('faq.a3')}</p>
              </div>
            </ScrollReveal>
            {/* Question 4 */}
            <ScrollReveal key={`${lng}-faq-4`} delay={0.4}>
              <div className="bg-background rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">
                  {t('faq.q4')}
                </h3>
                <p className="text-secondary">{t('faq.a4')}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
