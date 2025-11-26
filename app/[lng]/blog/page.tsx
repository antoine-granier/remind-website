"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";
import { use } from "react";

// --- Components ---

function BlogHeader({ lng }: { lng: string }) {
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
          {t('blogPage.header.badge')}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6" dangerouslySetInnerHTML={{ __html: t('blogPage.header.title') }} />
        <p className="text-lg text-secondary leading-relaxed">
          {t('blogPage.header.subtitle')}
        </p>
      </motion.div>
    </header>
  );
}

function ArticleCard({ article, featured = false, lng }: { article: any; featured?: boolean; lng: string }) {
  const { t } = useTranslation(lng);
  return (
    <Link href={`/${lng}/blog/${article.id}`} className="group block h-full">
      <article
        className={`h-full flex ${
          featured ? "flex-col md:flex-row gap-8" : "flex-col gap-4"
        } bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl p-6 hover:shadow-xl hover:scale-[1.01] transition-all duration-300`}
      >
        {/* Image Placeholder */}
        <div
          className={`shrink-0 flex items-center justify-center bg-linear-to-br from-action/20 to-primary/5 rounded-2xl ${
            featured ? "w-full md:w-1/2 h-64 md:h-auto text-8xl" : "w-full h-48 text-6xl"
          }`}
        >
          {article.image}
        </div>

        {/* Content */}
        <div className={`flex flex-col ${featured ? "justify-center md:w-1/2" : ""}`}>
          <div className="flex items-center gap-3 text-xs font-medium text-secondary mb-3">
            <span className="bg-white/80 px-2 py-1 rounded-md border border-secondary/10 text-primary">
              {article.category}
            </span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h2
            className={`font-bold text-primary mb-3 group-hover:text-action transition-colors ${
              featured ? "text-3xl md:text-4xl" : "text-xl"
            }`}
          >
            {article.title}
          </h2>
          <p className="text-secondary leading-relaxed mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="mt-auto flex items-center text-primary bg-action rounded-full w-fit py-2 px-3 font-semibold text-sm">
            {t('blogPage.cta.read')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = use(params);
  const { t } = useTranslation(lng);

  // --- Mock Data with Translations ---
  // Note: In a real app, this would likely come from a CMS or be fully translated in JSON
  // For now, we'll map the IDs to the translation keys we created
  const ARTICLES = [
    {
      id: 1,
      title: t('blogPage.articles.1.title'),
      excerpt: t('blogPage.articles.1.excerpt'),
      category: t('blogPage.articles.1.category'),
      date: "21 Nov 2024",
      readTime: "5 min",
      image: "🧠",
      featured: true,
    },
    {
      id: 2,
      title: t('blogPage.articles.2.title'),
      excerpt: t('blogPage.articles.2.excerpt'),
      category: t('blogPage.articles.2.category'),
      date: "18 Nov 2024",
      readTime: "3 min",
      image: "💊",
      featured: false,
    },
    {
      id: 3,
      title: t('blogPage.articles.3.title'),
      excerpt: t('blogPage.articles.3.excerpt'),
      category: t('blogPage.articles.3.category'),
      date: "15 Nov 2024",
      readTime: "7 min",
      image: "🌙",
      featured: false,
    },
    {
      id: 4,
      title: t('blogPage.articles.4.title'),
      excerpt: t('blogPage.articles.4.excerpt'),
      category: t('blogPage.articles.4.category'),
      date: "10 Nov 2024",
      readTime: "4 min",
      image: "📱",
      featured: false,
    },
    {
      id: 5,
      title: t('blogPage.articles.5.title'),
      excerpt: t('blogPage.articles.5.excerpt'),
      category: t('blogPage.articles.5.category'),
      date: "05 Nov 2024",
      readTime: "6 min",
      image: "🏡",
      featured: false,
    },
    {
      id: 6,
      title: t('blogPage.articles.6.title'),
      excerpt: t('blogPage.articles.6.excerpt'),
      category: t('blogPage.articles.6.category'),
      date: "01 Nov 2024",
      readTime: "4 min",
      image: "✍️",
      featured: false,
    },
  ];

  const featuredArticle = ARTICLES.find((a) => a.featured);
  const otherArticles = ARTICLES.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-background pb-20">
      <BlogHeader lng={lng} />

      <main className="max-w-7xl mx-auto px-6">
        {/* Featured Article */}
        {featuredArticle && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <ArticleCard article={featuredArticle} featured lng={lng} />
          </motion.section>
        )}

        {/* Article Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <ArticleCard article={article} lng={lng} />
            </motion.div>
          ))}
        </section>

        {/* Download CTA Section */}
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 bg-primary text-white rounded-3xl p-10 text-center relative overflow-hidden"
        >
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">{t('blogPage.cta.download.title')}</h2>
                <p className="text-white/80 mb-8">{t('blogPage.cta.download.subtitle')}</p>
                <Link href={`/${lng}/download`} className="inline-block px-8 py-4 rounded-xl bg-action text-primary font-bold hover:bg-white transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
                    {t('blogPage.cta.download.button')}
                </Link>
            </div>
        </motion.section>
      </main>
    </div>
  );
}
