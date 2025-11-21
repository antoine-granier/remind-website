"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

const PLANS = {
  monthly: {
    free: {
      price: "Gratuit",
      priceValue: 0,
      features: [
        { hasFeature: true, label: "Accès à 2 catégories de rappels" },
        { hasFeature: true, label: "1 traitement médical" },
        { hasFeature: false, label: "Délai de rappel péage personnalisable" },
        { hasFeature: false, label: "Catégories de rappels illimitées" },
        { hasFeature: false, label: "Traitements médicaux illimités" },
      ],
    },
    plus: {
      price: "0,99€",
      priceValue: 0.99,
      features: [
        { hasFeature: true, label: "Catégories de rappels illimitées" },
        { hasFeature: true, label: "1 traitement médical" },
        { hasFeature: true, label: "Délai de rappel péage fixe" },
        { hasFeature: false, label: "Délai de rappel péage personnalisable" },
        { hasFeature: false, label: "Traitements médicaux illimités" },
      ],
    },
    pro: {
      price: "1,25€",
      priceValue: 1.25,
      features: [
        { hasFeature: true, label: "Catégories de rappels illimitées" },
        { hasFeature: true, label: "Traitements médicaux illimités" },
        { hasFeature: true, label: "Délai de rappel péage personnalisable" },
        { hasFeature: true, label: "Support prioritaire" },
        { hasFeature: true, label: "Fonctionnalités en avant-première" },
      ],
    },
  },
  yearly: {
    free: {
      price: "Gratuit",
      priceValue: 0,
      originalPrice: null,
      features: [
        { hasFeature: true, label: "Accès à 2 catégories de rappels" },
        { hasFeature: true, label: "1 traitement médical" },
        { hasFeature: false, label: "Délai de rappel péage personnalisable" },
        { hasFeature: false, label: "Catégories de rappels illimitées" },
        { hasFeature: false, label: "Traitements médicaux illimités" },
      ],
    },
    plus: {
      price: "9,99€",
      priceValue: 9.99,
      originalPrice: "11,88€",
      features: [
        { hasFeature: true, label: "Catégories de rappels illimitées" },
        { hasFeature: true, label: "1 traitement médical" },
        { hasFeature: true, label: "Délai de rappel péage fixe" },
        { hasFeature: false, label: "Délai de rappel péage personnalisable" },
        { hasFeature: false, label: "Traitements médicaux illimités" },
      ],
    },
    pro: {
      price: "12,50€",
      priceValue: 12.5,
      originalPrice: "15,00€",
      features: [
        { hasFeature: true, label: "Catégories de rappels illimitées" },
        { hasFeature: true, label: "Traitements médicaux illimités" },
        { hasFeature: true, label: "Délai de rappel péage personnalisable" },
        { hasFeature: true, label: "Support prioritaire" },
        { hasFeature: true, label: "Fonctionnalités en avant-première" },
      ],
    },
  },
  lifetime: {
    free: {
      price: "Gratuit",
      priceValue: 0,
      features: [
        { hasFeature: true, label: "Accès à 2 catégories de rappels" },
        { hasFeature: true, label: "1 traitement médical" },
        { hasFeature: false, label: "Délai de rappel péage personnalisable" },
        { hasFeature: false, label: "Catégories de rappels illimitées" },
        { hasFeature: false, label: "Traitements médicaux illimités" },
      ],
    },
    pro: {
      price: "29,99€",
      priceValue: 29.99,
      features: [
        { hasFeature: true, label: "Catégories de rappels illimitées" },
        { hasFeature: true, label: "Traitements médicaux illimités" },
        { hasFeature: true, label: "Délai de rappel péage personnalisable" },
        { hasFeature: true, label: "Support prioritaire" },
        { hasFeature: true, label: "Fonctionnalités en avant-première" },
      ],
    },
  },
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
}: {
  title: string;
  planLevel: PlanLevel;
  duration: Duration;
  isPopular?: boolean;
}) {
  const durationPlans = PLANS[duration];
  
  if (!(planLevel in durationPlans)) {
    return null;
  }

  const plan = durationPlans[planLevel as keyof typeof durationPlans];

  if (!plan) {
    return null;
  }

  const getPriceLabel = () => {
    if (plan.price === "Gratuit") return "";
    if (duration === "lifetime") return "Paiement unique";
    return duration === "monthly" ? "/mois" : "/an";
  };

  const showOriginalPrice =
    duration === "yearly" && "originalPrice" in plan && plan.originalPrice && plan.price !== "Gratuit";

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
          ⭐ Populaire
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
        {plan.features.map((feature, index) => (
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

export default function PricingPage() {
  const [selectedDuration, setSelectedDuration] = useState<Duration>("yearly");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-action/5 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-primary bg-action py-2 px-3 rounded-full mx-auto w-fit font-bold tracking-wider uppercase text-sm mb-4 block">
            Tarifs
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Un plan pour chaque besoin
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Choisissez le plan qui vous convient. Changez ou annulez à tout moment.
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
              Mensuel
            </button>
            <button
              onClick={() => setSelectedDuration("yearly")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                selectedDuration === "yearly"
                  ? "bg-action text-primary shadow-lg"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Annuel
              <span className="absolute -top-2 -right-2 bg-action text-primary text-xs font-bold px-2 py-0.5 rounded-full border-2 border-background">
                -17%
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
              Lifetime
            </button>
          </div>
        </motion.div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PlanCard
            title="Gratuit"
            planLevel="free"
            duration={selectedDuration}
          />
          {selectedDuration !== "lifetime" && (
            <PlanCard
              title="Plus"
              planLevel="plus"
              duration={selectedDuration}
              isPopular={selectedDuration === "yearly"}
            />
          )}
          <PlanCard
            title="Pro"
            planLevel="pro"
            duration={selectedDuration}
            isPopular={selectedDuration === "lifetime"}
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
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-6">
              <h3 className="font-bold text-primary mb-2">
                Puis-je changer de plan à tout moment ?
              </h3>
              <p className="text-secondary">
                Oui, vous pouvez upgrader, downgrader ou annuler votre abonnement à tout moment depuis les paramètres de l'application.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-6">
              <h3 className="font-bold text-primary mb-2">
                Que se passe-t-il si j'annule mon abonnement ?
              </h3>
              <p className="text-secondary">
                Vous conservez l'accès aux fonctionnalités premium jusqu'à la fin de votre période de facturation, puis votre compte repasse automatiquement au plan gratuit.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-6">
              <h3 className="font-bold text-primary mb-2">
                Le plan Lifetime est-il vraiment à vie ?
              </h3>
              <p className="text-secondary">
                Oui ! Un seul paiement vous donne accès à toutes les fonctionnalités Pro pour toujours, sans aucun abonnement récurrent.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
