import type { Metadata } from "next";
import { useTranslation } from "@/app/i18n/server";
import { generateAlternates } from "@/app/utils/metadata";

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return {
    title: `${t('termsPage.title')} - Re:mind`,
    description: t('metadata.description'),
    alternates: generateAlternates(lng, '/terms'),
  };
}

export default async function TermsPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('termsPage.title')}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {t('termsPage.lastUpdate')}
        </p>

        {/* 1. Objet */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('termsPage.sections.1.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('termsPage.sections.1.content')}
          </p>
        </section>

        {/* 2. Description des services */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('termsPage.sections.2.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('termsPage.sections.2.content')}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            {(t('termsPage.sections.2.list', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 3. Accès à l'application */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('termsPage.sections.3.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('termsPage.sections.3.content')}
          </p>
        </section>

        {/* 4. Responsabilité */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('termsPage.sections.4.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('termsPage.sections.4.content')}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
            {(t('termsPage.sections.4.list1', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('termsPage.sections.4.content2')}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            {(t('termsPage.sections.4.list2', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 5. Propriété intellectuelle */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('termsPage.sections.5.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('termsPage.sections.5.content')}
          </p>
        </section>

        {/* 6. Évolutions futures */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('termsPage.sections.6.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('termsPage.sections.6.content')}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
            {(t('termsPage.sections.6.list', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed">
            {t('termsPage.sections.6.content2')}
          </p>
        </section>

        {/* 7. Modifications des CGU */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('termsPage.sections.7.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('termsPage.sections.7.content')}
          </p>
        </section>

        {/* 8. Droit applicable et juridiction */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('termsPage.sections.8.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('termsPage.sections.8.content')}
          </p>
        </section>

        {/* 9. Abonnements */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('termsPage.sections.9.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('termsPage.sections.9.content')}
          </p>
        </section>

        {/* 10. Contact */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('termsPage.sections.10.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('termsPage.sections.10.content')}{" "}
            <a
              href={`mailto:${t('termsPage.sections.10.email')}`}
              className="text-blue-600 hover:underline"
            >
              {t('termsPage.sections.10.email')}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
