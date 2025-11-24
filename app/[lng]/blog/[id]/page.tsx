"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

export default function ArticlePage({ params }: { params: Promise<{ lng: string; id: string }> }) {
  const { lng, id } = use(params);
  const { t } = useTranslation(lng);

  // Load article data from translations
  const articleData = t(`blogPage.articles.${id}`, { returnObjects: true }) as any;
  
  if (!articleData || !articleData.title) {
    notFound();
  }

  const article = {
    id: parseInt(id),
    title: articleData.title,
    excerpt: articleData.excerpt,
    category: articleData.category,
    date: articleData.date,
    readTime: articleData.readTime,
    image: articleData.image,
    content: articleData.content
  };

  const labels = t('blogPage.labels', { returnObjects: true }) as any;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          href={`/${lng}/blog`}
          className="inline-flex items-center gap-2 text-secondary group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          {labels.backToBlog}
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 text-sm font-medium text-secondary mb-6">
            <span className="bg-action text-primary px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            {article.excerpt}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 w-full h-64 bg-gradient-to-br from-action/20 to-primary/5 rounded-3xl flex items-center justify-center text-8xl"
        >
          {article.image}
        </motion.div>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          {/* Introduction */}
          <p className="text-lg text-primary leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-action first-letter:mr-1 first-letter:float-left">
            {article.content.intro}
          </p>

          {/* Sections */}
          {article.content.sections.map((section: any, index: number) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {section.heading}
              </h2>
              <p className="text-secondary leading-relaxed">{section.text}</p>
            </div>
          ))}

          {/* Key Takeaways */}
          <div className="bg-white/50 backdrop-blur-md border border-action/20 rounded-2xl p-6 my-12">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              {labels.keyTakeaways}
            </h3>
            <ul className="space-y-2">
              {article.content.keyTakeaways.map((point: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-secondary">
                  <span className="text-action mt-1 shrink-0">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">{labels.conclusion}</h2>
            <p className="text-secondary leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary text-white rounded-3xl p-8 text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            {labels.ctaTitle}
          </h3>
          <p className="text-white/80 mb-6">
            {labels.ctaSubtitle}
          </p>
          <Link
            href={`/${lng}`}
            className="inline-block px-8 py-4 rounded-xl bg-action text-primary font-bold hover:bg-white transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
          >
            {labels.ctaButton}
          </Link>
        </motion.div>
      </article>
    </div>
  );
}
