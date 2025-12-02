import { Metadata } from "next";
import { useTranslation } from "../../i18n/server";
import IPhoneMockup from "@/components/IphoneMockup";
import ScrollReveal from "@/components/ScrollReveal";
import FAQItem from "@/components/FAQItem";
import { generateAlternates } from "@/app/utils/metadata";

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return {
    title: `${t('downloadPage.title_prefix')} ${t('downloadPage.title_highlight')}`,
    description: t('downloadPage.subtitle'),
    alternates: generateAlternates(lng, '/download'),
  };
}

export default async function DownloadPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-primary overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-action/10 via-background to-background pointer-events-none" />
      {/* HERO SECTION */}
      <section className="w-full py-20 flex flex-col lg:flex-row items-center justify-center gap-12 px-6">
        <ScrollReveal className="flex-1 max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-primary">
            {t('downloadPage.title_prefix')}
            <span className="text-action">{t('downloadPage.title_highlight')}</span>
          </h1>
          <p className="text-xl text-secondary mb-12 leading-relaxed">
            {t('downloadPage.subtitle')}
          </p>

          <div className="flex flex-col items-center">
            {/* DOWNLOAD BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* App Store */}
              <a
                href="#"
                className="group relative flex items-center gap-4 px-8 py-4 bg-background2 border-2 border-secondary/20 rounded-2xl hover:border-action hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto min-w-[240px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 text-primary group-hover:text-action transition-colors"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-secondary uppercase tracking-wider font-semibold">
                    {t('downloadPage.appStore').split(' ')[0]}
                  </span>
                  <span className="text-xl font-bold text-primary">App Store</span>
                </div>
                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-action text-primary text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  Soon
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="group relative flex items-center gap-4 px-8 py-4 bg-background2 border-2 border-secondary/20 rounded-2xl hover:border-action hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto min-w-[240px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 text-primary group-hover:text-action transition-colors"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-secondary uppercase tracking-wider font-semibold">
                    {t('downloadPage.googlePlay').split(' ')[0]}
                  </span>
                  <span className="text-xl font-bold text-primary">Google Play</span>
                </div>
                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-action text-primary text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  Soon
                </div>
              </a>
            </div>

            {/* QR CODE (Desktop only) */}
            <div className="hidden md:flex flex-col items-center mt-12 p-6">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-linear-to-br from-action/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-secondary/50 group-hover:text-action transition-colors duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                    </svg>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-sm font-bold text-primary">{t('downloadPage.scanTitle')}</h3>
                <p className="text-xs text-secondary">{t('downloadPage.scanDesc')}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.2} className="flex-1 max-w-xl flex justify-center">
             <div className="relative w-full max-w-[300px]">
                <IPhoneMockup src="/IMG_0800.png" alt="Re:mind Dashboard" />
             </div>
        </ScrollReveal>
      </section>

      {/* QUICK START SECTION */}
      <section className="w-full py-20 px-6 flex flex-col items-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            {t('downloadPage.quickStart.title')}
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {/* Step 1 */}
          <ScrollReveal delay={0.1} className="flex flex-col items-center text-center p-6 bg-background2 rounded-2xl border border-secondary/10">
            <div className="w-16 h-16 bg-action/20 rounded-full flex items-center justify-center text-3xl mb-4">
              ⬇️
            </div>
            <h3 className="text-xl font-bold mb-2">{t('downloadPage.quickStart.steps.0.title')}</h3>
            <p className="text-secondary">{t('downloadPage.quickStart.steps.0.desc')}</p>
          </ScrollReveal>

          {/* Step 2 */}
          <ScrollReveal delay={0.2} className="flex flex-col items-center text-center p-6 bg-background2 rounded-2xl border border-secondary/10">
            <div className="w-16 h-16 bg-action/20 rounded-full flex items-center justify-center text-3xl mb-4">
              ✨
            </div>
            <h3 className="text-xl font-bold mb-2">{t('downloadPage.quickStart.steps.1.title')}</h3>
            <p className="text-secondary">{t('downloadPage.quickStart.steps.1.desc')}</p>
          </ScrollReveal>

          {/* Step 3 */}
          <ScrollReveal delay={0.3} className="flex flex-col items-center text-center p-6 bg-background2 rounded-2xl border border-secondary/10">
            <div className="w-16 h-16 bg-action/20 rounded-full flex items-center justify-center text-3xl mb-4">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-2">{t('downloadPage.quickStart.steps.2.title')}</h3>
            <p className="text-secondary">{t('downloadPage.quickStart.steps.2.desc')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* MINI FAQ SECTION */}
      <section className="w-full py-20 px-6 bg-background2/30 flex flex-col items-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            {t('downloadPage.faq.title')}
          </h2>
        </ScrollReveal>

        <div className="max-w-2xl w-full space-y-4">
          <ScrollReveal delay={0.1}>
            <FAQItem
              question={t('downloadPage.faq.q1')}
              answer={t('downloadPage.faq.a1')}
              icon="💸"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <FAQItem
              question={t('downloadPage.faq.q2')}
              answer={t('downloadPage.faq.a2')}
              icon="🔒"
            />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
