import React from "react";

interface EnrichedBentoCardProps {
  title: string;
  icon: string;
  desc: string;
  features: string[];
  stats: string;
  statsLabel: string;
  size?: "small" | "medium" | "large";
}

export default function EnrichedBentoCard({
  title,
  icon,
  desc,
  features,
  stats,
  statsLabel,
  size = "medium",
}: EnrichedBentoCardProps) {
  const heightClass =
    size === "large"
      ? "h-80 md:h-96"
      : size === "small"
      ? "h-80 md:h-96"
      : "h-80";

  return (
    <div
      className={`group ${heightClass} bg-background2 border-2 border-gray-200 rounded-3xl p-6 md:p-8 hover:border-action/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative`}
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Background icon watermark */}
      <div className="absolute top-0 right-0 text-[180px] opacity-[0.03] transform rotate-12 translate-x-12 -translate-y-12 pointer-events-none">
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl md:text-6xl transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {title}
              </h3>
              <p className="text-sm text-secondary">{desc}</p>
            </div>
          </div>
        </div>

        {/* Features list */}
        <div className="flex-1 mb-6">
          <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-3">
            Exemples d'utilisation
          </p>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-white/50 border border-gray-200 text-primary text-xs font-medium rounded-full hover:border-action/40 hover:bg-white transition-colors"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Stats footer */}
        <div className="flex items-end justify-between">
          <div>
            <div className="text-3xl md:text-4xl font-black text-action mb-1">
              {stats}
            </div>
            <p className="text-xs text-secondary">{statsLabel}</p>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-action transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}
