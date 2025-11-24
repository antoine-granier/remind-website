"use client";

import { useState, use } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/i18n/client";

type Duration = "monthly" | "yearly" | "lifetime";
type PlanLevel = "free" | "plus" | "pro";

type Feature = {
  hasFeature: boolean;
  label: string;
};

type Plan = {
  price: string;
  priceValue: number;
  originalPrice?: string | null;
  features: Feature[];
};

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-3.5 h-3.5 text-green-600"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function CrossIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-3.5 h-3.5 text-red-600"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function PlanCard({
  title,
  planLevel,
  duration,
  isPopular = false,
  plansData,
  lng
}: {
  title: string;
  planLevel: PlanLevel;
  duration: Duration;
  isPopular?: boolean;
  plansData: any;
  lng: string;
}) {
  const { t } = useTranslation(lng);
  const durationPlans = plansData[duration];
  
  if (!(planLevel in durationPlans)) {
    return null;
  }

  const plan = durationPlans[planLevel as keyof typeof durationPlans];

  if (!plan) {
    return null;
  }

  const getPriceLabel = () => {
    if (plan.price === t('pricingPage.plans.free')) return "";
    if (duration === "lifetime") return t('pricingPage.plans.uniquePayment');
    return duration === "monthly" ? t('pricingPage.plans.month') : t('pricingPage.plans.year');
  };

  const showOriginalPrice =
    duration === "yearly" && "originalPrice" in plan && plan.originalPrice && plan.price !== t('pricingPage.plans.free');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative bg-white/50 backdrop-blur-md border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 ${
        isPopular ? "border-action shadow-action/20 scale-105" : "border-white/60"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-action text-primary px-4 py-1 rounded-full text-sm font-bold">
          ⭐ {t('pricingPage.plans.popular')}
        </div>
      )}

      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>

      <div className="mb-6">
        {showOriginalPrice && "originalPrice" in plan && (
          <p className="text-lg text-secondary line-through opacity-60 mb-1">
            {plan.originalPrice}
          </p>
        )}
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-action">{plan.price}</span>
          {getPriceLabel() && (
            <span className="text-secondary">{getPriceLabel()}</span>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature: any, index: number) => (
          <li key={index} className="flex items-center gap-3">
            {feature.hasFeature ? <CheckIcon /> : <CrossIcon />}
            <span
              className={`text-sm ${
                feature.hasFeature ? "text-primary" : "text-secondary line-through opacity-50"
              }`}
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function PricingPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = use(params);
  const { t } = useTranslation(lng);
  const [selectedDuration, setSelectedDuration] = useState<Duration>("yearly");

  const PLANS = {
    monthly: {
      free: {
        price: t('pricingPage.plans.free'),
        priceValue: 0,
        features: [
          { hasFeature: true, label: t('pricingPage.features.2categories') },
          { hasFeature: true, label: t('pricingPage.features.1treatment') },
          { hasFeature: false, label: t('pricingPage.features.tollCustom') },
          { hasFeature: false, label: t('pricingPage.features.unlimitedCategories') },
          { hasFeature: false, label: t('pricingPage.features.unlimitedTreatments') },
        ],
      },
      plus: {
        price: "0,99€",
        priceValue: 0.99,
        features: [
          { hasFeature: true, label: t('pricingPage.features.unlimitedCategories') },
          { hasFeature: true, label: t('pricingPage.features.1treatment') },
          { hasFeature: true, label: t('pricingPage.features.tollFixed') },
          { hasFeature: false, label: t('pricingPage.features.tollCustom') },
          { hasFeature: false, label: t('pricingPage.features.unlimitedTreatments') },
        ],
      },
      pro: {
        price: "1,25€",
        priceValue: 1.25,
        features: [
          { hasFeature: true, label: t('pricingPage.features.unlimitedCategories') },
          { hasFeature: true, label: t('pricingPage.features.unlimitedTreatments') },
          { hasFeature: true, label: t('pricingPage.features.tollCustom') },
          { hasFeature: true, label: t('pricingPage.features.support') },
          { hasFeature: true, label: t('pricingPage.features.preview') },
        ],
      },
    },
    yearly: {
      free: {
        price: t('pricingPage.plans.free'),
        priceValue: 0,
        originalPrice: null,
        features: [
          { hasFeature: true, label: t('pricingPage.features.2categories') },
          { hasFeature: true, label: t('pricingPage.features.1treatment') },
          { hasFeature: false, label: t('pricingPage.features.tollCustom') },
          { hasFeature: false, label: t('pricingPage.features.unlimitedCategories') },
          { hasFeature: false, label: t('pricingPage.features.unlimitedTreatments') },
        ],
      },
      plus: {
        price: "9,99€",
        priceValue: 9.99,
        originalPrice: "11,88€",
        features: [
          { hasFeature: true, label: t('pricingPage.features.unlimitedCategories') },
          { hasFeature: true, label: t('pricingPage.features.1treatment') },
          { hasFeature: true, label: t('pricingPage.features.tollFixed') },
          { hasFeature: false, label: t('pricingPage.features.tollCustom') },
          { hasFeature: false, label: t('pricingPage.features.unlimitedTreatments') },
        ],
      },
      pro: {
        price: "12,50€",
        priceValue: 12.5,
        originalPrice: "15,00€",
        features: [
          { hasFeature: true, label: t('pricingPage.features.unlimitedCategories') },
          { hasFeature: true, label: t('pricingPage.features.unlimitedTreatments') },
          { hasFeature: true, label: t('pricingPage.features.tollCustom') },
          { hasFeature: true, label: t('pricingPage.features.support') },
          { hasFeature: true, label: t('pricingPage.features.preview') },
        ],
      },
    },
    lifetime: {
      free: {
        price: t('pricingPage.plans.free'),
        priceValue: 0,
        features: [
          { hasFeature: true, label: t('pricingPage.features.2categories') },
          { hasFeature: true, label: t('pricingPage.features.1treatment') },
          { hasFeature: false, label: t('pricingPage.features.tollCustom') },
          { hasFeature: false, label: t('pricingPage.features.unlimitedCategories') },
          { hasFeature: false, label: t('pricingPage.features.unlimitedTreatments') },
        ],
      },
      pro: {
        price: "29,99€",
        priceValue: 29.99,
        features: [
          { hasFeature: true, label: t('pricingPage.features.unlimitedCategories') },
          { hasFeature: true, label: t('pricingPage.features.unlimitedTreatments') },
          { hasFeature: true, label: t('pricingPage.features.tollCustom') },
          { hasFeature: true, label: t('pricingPage.features.support') },
          { hasFeature: true, label: t('pricingPage.features.preview') },
        ],
      },
    },
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-action/5 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-primary bg-action py-2 px-3 rounded-full mx-auto w-fit font-bold tracking-wider uppercase text-sm mb-4 block">
            {t('pricingPage.header.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('pricingPage.header.title')}
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            {t('pricingPage.header.subtitle')}
          </p>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Duration Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-background2 rounded-2xl p-1 gap-1">
            <button
              onClick={() => setSelectedDuration("monthly")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedDuration === "monthly"
                  ? "bg-action text-primary shadow-lg"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {t('pricingPage.duration.monthly')}
            </button>
            <button
              onClick={() => setSelectedDuration("yearly")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                selectedDuration === "yearly"
                  ? "bg-action text-primary shadow-lg"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {t('pricingPage.duration.yearly')}
              <span className="absolute -top-2 -right-2 bg-action text-primary text-xs font-bold px-2 py-0.5 rounded-full border-2 border-background">
                {t('pricingPage.duration.discount')}
              </span>
            </button>
            <button
              onClick={() => setSelectedDuration("lifetime")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedDuration === "lifetime"
                  ? "bg-action text-primary shadow-lg"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {t('pricingPage.duration.lifetime')}
            </button>
          </div>
        </motion.div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PlanCard
            title={t('pricingPage.plans.free')}
            planLevel="free"
            duration={selectedDuration}
            plansData={PLANS}
            lng={lng}
          />
          {selectedDuration !== "lifetime" && (
            <PlanCard
              title="Plus"
              planLevel="plus"
              duration={selectedDuration}
              isPopular={selectedDuration === "yearly"}
              plansData={PLANS}
              lng={lng}
            />
          )}
          <PlanCard
            title="Pro"
            planLevel="pro"
            duration={selectedDuration}
            isPopular={selectedDuration === "lifetime"}
            plansData={PLANS}
            lng={lng}
          />
        </div>

        {/* FAQ / Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-20"
        >
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {t('pricingPage.faq.title')}
          </h2>
          <div className="space-y-6">
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-6">
              <h3 className="font-bold text-primary mb-2">
                {t('pricingPage.faq.q1')}
              </h3>
              <p className="text-secondary">
                {t('pricingPage.faq.a1')}
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-6">
              <h3 className="font-bold text-primary mb-2">
                {t('pricingPage.faq.q2')}
              </h3>
              <p className="text-secondary">
                {t('pricingPage.faq.a2')}
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-6">
              <h3 className="font-bold text-primary mb-2">
                {t('pricingPage.faq.q3')}
              </h3>
              <p className="text-secondary">
                {t('pricingPage.faq.a3')}
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
