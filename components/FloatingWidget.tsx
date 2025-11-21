import React from "react";

export type WidgetType = "medication" | "calendar" | "reminder" | "notification";

interface FloatingWidgetProps {
  type: WidgetType;
  title?: string;
  subtitle?: string;
  time?: string;
  icon?: string;
  checked?: boolean;
}

export default function FloatingWidget({
  type,
  title,
  subtitle,
  time,
  icon,
  checked = false,
}: FloatingWidgetProps) {
  // Base styles for all widgets - Glassmorphism effect
  const baseStyles =
    "bg-white/80 backdrop-blur-md border border-white/50 shadow-xl rounded-2xl p-4 flex items-center gap-3 select-none pointer-events-none min-w-[180px]";

  if (type === "medication") {
    return (
      <div className={baseStyles}>
        <div className="w-10 h-10 rounded-full bg-action/20 flex items-center justify-center text-xl">
          {icon || "💊"}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-primary">{title || "Vitamine D"}</span>
          <span className="text-xs text-secondary">{subtitle || "1 comprimé"}</span>
        </div>
        {time && (
          <div className="ml-auto text-xs font-medium text-action bg-primary/5 px-2 py-1 rounded-md">
            {time}
          </div>
        )}
      </div>
    );
  }

  if (type === "calendar") {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-white/50 shadow-xl rounded-2xl p-3 flex flex-col items-center min-w-[80px] text-center">
        <span className="text-xs font-bold text-action uppercase tracking-wider">
          {subtitle || "NOV"}
        </span>
        <span className="text-3xl font-black text-primary leading-none my-1">
          {title || "21"}
        </span>
        <span className="text-[10px] text-secondary">{time || "Jeudi"}</span>
      </div>
    );
  }

  if (type === "reminder") {
    return (
      <div className={baseStyles}>
        <div
          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${
            checked ? "bg-action border-action" : "border-secondary/40"
          }`}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3.5 h-3.5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="flex flex-col">
          <span
            className={`text-sm font-medium ${
              checked ? "text-secondary line-through" : "text-primary"
            }`}
          >
            {title || "Faire les courses"}
          </span>
        </div>
      </div>
    );
  }

  if (type === "notification") {
    return (
      <div className="bg-primary/90 backdrop-blur-md text-white shadow-2xl rounded-2xl p-3 flex items-center gap-3 min-w-[200px]">
        <div className="w-8 h-8 rounded-full bg-action flex items-center justify-center text-primary text-sm">
          {icon || "🔔"}
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-action">Re:mind</span>
          <span className="text-xs text-gray-200">{title || "C'est l'heure !"}</span>
        </div>
      </div>
    );
  }

  return null;
}
