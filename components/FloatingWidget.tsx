import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type WidgetType = "medication" | "calendar" | "reminder" | "notification";

interface FloatingWidgetProps {
  type: WidgetType;
  title?: string;
  subtitle?: string;
  time?: string;
  icon?: string;
  checked?: boolean;
  onToggle?: () => void;
  expandUp?: boolean;
  lng: string;
}

import { useTranslation } from "@/app/i18n/client";

export default function FloatingWidget({
  type,
  title,
  subtitle,
  time,
  icon,
  checked = false,
  onToggle,
  expandUp = false,
  lng,
}: FloatingWidgetProps) {
  const { t } = useTranslation(lng);
  const [showOptions, setShowOptions] = useState(false);

  // Base styles for all widgets - Glassmorphism effect
  const baseStyles =
    "bg-white/80 backdrop-blur-md border border-white/50 shadow-xl rounded-2xl p-4 flex items-center gap-3 select-none min-w-[180px] cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300";

  if (type === "medication") {
    return (
      <div
        className={`${baseStyles} ${checked ? "opacity-50 grayscale" : ""}`}
        onClick={onToggle}
      >
        <div className="w-10 h-10 rounded-full bg-action/20 flex items-center justify-center text-xl">
          {icon || "💊"}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-primary">
            {title || t('components.floatingWidget.defaultTitle')}
          </span>
          <span className="text-xs text-secondary">
            {subtitle || t('components.floatingWidget.defaultSubtitle')}
          </span>
        </div>
        {time && (
          <div className="ml-auto text-xs font-medium text-primary bg-primary/5 px-2 py-1 rounded-md">
            {time}
          </div>
        )}
      </div>
    );
  }

  if (type === "calendar") {
    return (
      <div
        className={`${
          checked
            ? "bg-action border-action shadow-action/20"
            : "bg-white/90 border-white/50"
        } backdrop-blur-md border shadow-xl rounded-2xl p-3 flex flex-col items-center min-w-[80px] text-center cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300`}
        onClick={onToggle}
      >
        <span
          className={`text-xs font-bold uppercase tracking-wider ${
            checked ? "text-primary/80" : "text-action"
          }`}
        >
          {subtitle || t('components.floatingWidget.defaultMonth')}
        </span>
        <span className="text-3xl font-black text-primary leading-none my-1">
          {title || t('components.floatingWidget.defaultDay')}
        </span>
        <span
          className={`text-[10px] ${
            checked ? "text-primary/80" : "text-secondary"
          }`}
        >
          {time || t('components.floatingWidget.defaultWeekday')}
        </span>
      </div>
    );
  }

  if (type === "reminder") {
    return (
      <div className={baseStyles} onClick={onToggle}>
        <div
          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
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
            className={`text-sm font-medium transition-all ${
              checked ? "text-secondary line-through" : "text-primary"
            }`}
          >
            {title || t('components.floatingWidget.defaultReminder')}
          </span>
        </div>
      </div>
    );
  }

  if (type === "notification") {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleOptionClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsAnimating(true);
      setShowOptions(false);
      
      // Wait for slide-out animation to complete, then trigger onToggle and slide back in
      setTimeout(() => {
        if (onToggle) onToggle();
        setIsAnimating(false);
      }, 400); // 300ms for slide out + 100ms buffer
    };

    return (
      <AnimatePresence mode="wait">
        {!isAnimating && (
          <motion.div
            key="notification"
            layout
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`bg-primary/90 backdrop-blur-md text-white shadow-2xl rounded-2xl p-3 flex ${
              expandUp ? "flex-col-reverse" : "flex-col"
            } gap-3 min-w-[200px] cursor-pointer hover:scale-105 hover:shadow-2xl transition-shadow duration-300 overflow-hidden ${
              checked ? "opacity-50 grayscale" : ""
            }`}
            onClick={() => (checked ? onToggle?.() : setShowOptions(!showOptions))}
          >
            <motion.div layout="position" className="flex items-center gap-3 w-full">
              <div className="w-8 h-8 rounded-full bg-action flex items-center justify-center text-primary text-sm shrink-0">
                {icon || "🔔"}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-action">{t('components.floatingWidget.appName')}</span>
                <span className="text-xs text-gray-200">
                  {title || t('components.floatingWidget.defaultNotification')}
                </span>
              </div>
            </motion.div>

            <AnimatePresence>
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-2 gap-2 w-full"
                >
                  <button
                    onClick={handleOptionClick}
                    className="text-[10px] bg-white/10 hover:bg-white/20 rounded-lg py-1.5 px-2 transition-colors text-center"
                  >
                    ⏰ {t('components.floatingWidget.actions.5min')}
                  </button>
                  <button
                    onClick={handleOptionClick}
                    className="text-[10px] bg-white/10 hover:bg-white/20 rounded-lg py-1.5 px-2 transition-colors text-center"
                  >
                    ⏰ {t('components.floatingWidget.actions.15min')}
                  </button>
                  <button
                    onClick={handleOptionClick}
                    className="text-[10px] bg-white/10 hover:bg-white/20 rounded-lg py-1.5 px-2 transition-colors text-center"
                  >
                    ⏰ {t('components.floatingWidget.actions.30min')}
                  </button>
                  <button
                    onClick={handleOptionClick}
                    className="text-[10px] bg-action hover:bg-action/90 text-primary font-bold rounded-lg py-1.5 px-2 transition-colors text-center"
                  >
                    ✅ {t('components.floatingWidget.actions.done')}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return null;
}
