'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  icon: string;
}

export default function FAQItem({ question, answer, icon }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group bg-white/50 backdrop-blur-md border border-gray-100 rounded-2xl hover:shadow-sm transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-start gap-4"
      >
        <span className="text-2xl shrink-0">{icon}</span>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-primary pr-8">
            {question}
          </h3>
        </div>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-5 h-5 text-secondary shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-secondary px-6 pb-6 pl-18 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}
