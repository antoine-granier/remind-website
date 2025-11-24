import type { Metadata } from "next";
import { useTranslation } from "@/app/i18n/server";

export async function generateMetadata({ params }: { params: { lng: string } }): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return {
    title: `${t('privacyPage.title')} - Re:mind`,
    description: t('metadata.description'),
  };
}

export default async function PrivacyPage({ params }: { params: { lng: string } }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('privacyPage.title')}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {t('privacyPage.lastUpdate')}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('privacyPage.sections.1.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('privacyPage.sections.1.content')}
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            {t('privacyPage.sections.1.contact')}{" "}
            <a
              href="mailto:antoine.granier@protonmail.com"
              className="text-blue-600 hover:underline"
            >
              antoine.granier@protonmail.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('privacyPage.sections.2.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacyPage.sections.2.p1')}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacyPage.sections.2.p2')}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacyPage.sections.2.p3')}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacyPage.sections.2.p4')}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacyPage.sections.2.p5')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('privacyPage.sections.2.p6')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('privacyPage.sections.3.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacyPage.sections.3.p1')}
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            {t('privacyPage.sections.3.p2')}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            {(t('privacyPage.sections.3.list', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('privacyPage.sections.4.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacyPage.sections.4.p1')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('privacyPage.sections.4.p2')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('privacyPage.sections.5.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacyPage.sections.5.p1')}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
            {(t('privacyPage.sections.5.list', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacyPage.sections.5.p2')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('privacyPage.sections.5.contact')}{" "}
            <a
              href="mailto:antoine.granier@protonmail.com"
              className="text-blue-600 hover:underline"
            >
              antoine.granier@protonmail.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('privacyPage.sections.6.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('privacyPage.sections.6.p1')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('privacyPage.sections.6.p2')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('privacyPage.sections.7.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('privacyPage.sections.7.content')}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t('privacyPage.sections.8.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('privacyPage.sections.8.content')}
          </p>
        </section>
      </div>
    </div>
  );
}
