"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "@/app/i18n/client";
import FloatingWidget, { WidgetType } from "./FloatingWidget";

export default function HeroScroll({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Détection automatique de la performance de la machine
  // Basé sur le nombre de cœurs CPU (deviceMemory est peu fiable et limité par la vie privée)
  const isLowPerformance =
    typeof navigator !== "undefined" &&
    navigator.hardwareConcurrency &&
    navigator.hardwareConcurrency <= 6;

  // Lissage du scroll avec paramètres adaptatifs selon la performance
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: isLowPerformance ? 250 : 200,
    damping: isLowPerformance ? 40 : 30,
    restDelta: 0.001,
  });

  // Phase 1: Les cercles partent de leur position initiale en spirale et s'alignent (0 -> 0.3)
  const circle1X = useTransform(scrollYProgressSpring, [0, 0.3], [-50, 0]);
  const circle1Y = useTransform(scrollYProgressSpring, [0, 0.3], [-50, 0]);

  const circle2X = useTransform(scrollYProgressSpring, [0, 0.3], [-15, 0]);
  const circle2Y = useTransform(scrollYProgressSpring, [0, 0.3], [-15, 0]);

  const circle3X = useTransform(scrollYProgressSpring, [0, 0.3], [25, 0]);
  const circle3Y = useTransform(scrollYProgressSpring, [0, 0.3], [25, 0]);

  // Phase 2: Zoom massif à travers les cercles (0.3 -> 0.8)
  const circle1Scale = useTransform(scrollYProgressSpring, [0.3, 0.8], [1, 60]);
  const circle2Scale = useTransform(scrollYProgressSpring, [0.3, 0.8], [1, 70]);
  const circle3Scale = useTransform(scrollYProgressSpring, [0.3, 0.8], [1, 80]);

  // Opacité des cercles pendant le zoom
  const circlesOpacity = useTransform(scrollYProgressSpring, [0.65, 0.8], [1, 0]);

  // Texte "Re:mind" qui remonte, rétrécit et disparaît
  const textY = useTransform(scrollYProgressSpring, [0, 0.25, 0.4], [0, -220, -220]);
  const textScale = useTransform(scrollYProgressSpring, [0.25, 0.45], [1, 0.2]);
  const textOpacity = useTransform(scrollYProgressSpring, [0.25, 0.45], [1, 0]);

  // Opacité des widgets - disparaissent dès le début du scroll
  const widgetsOpacity = useTransform(scrollYProgressSpring, [0, 0.15], [1, 0]);

  // Opacité des boutons de téléchargement - disparaissent avec le texte
  const buttonsOpacity = useTransform(scrollYProgressSpring, [0, 0.2], [1, 0]);

  // Phase 3: Contenu qui apparaît après la disparition du texte
  const contentOpacity = useTransform(scrollYProgressSpring, [0.45, 0.65], [0, 1]);
  // Scale uniquement sur machines performantes pour éviter le lag
  const contentScale = useTransform(
    scrollYProgressSpring,
    [0.45, 0.65],
    isLowPerformance ? [1, 1] : [0.60, 1]
  );

  // Données des widgets avec leurs positions (State pour l'interactivité)
  const [widgets, setWidgets] = useState<
    {
      type: WidgetType;
      title?: string;
      subtitle?: string;
      time?: string;
      icon?: string;
      checked?: boolean;
      top?: string;
      left?: string;
      right?: string;
      bottom?: string;
      mobileTop?: string;
      mobileLeft?: string;
      mobileRight?: string;
      delay: number;
      className?: string;
      expandUp?: boolean;
    }[]
  >([
    {
      type: "medication",
      title: t('components.heroScroll.widgets.doliprane.title'),
      subtitle: t('components.heroScroll.widgets.doliprane.subtitle'),
      time: "08:00",
      icon: "💊",
      top: "11%",
      left: "15%",
      mobileTop: "12%",
      mobileLeft: "5%",
      delay: 0,
    },
    {
      type: "calendar",
      title: t('components.heroScroll.widgets.nov21.title'),
      subtitle: t('components.heroScroll.widgets.nov21.subtitle'),
      time: t('components.heroScroll.widgets.nov21.time'),
      top: "11%",
      left: "68%",
      mobileTop: "12%",
      mobileRight: "5%",
      mobileLeft: "auto",
      delay: 0.3,
    },
    {
      type: "notification",
      title: t('components.heroScroll.widgets.water'),
      icon: "💧",
      top: "25%",
      right: "8%",
      delay: 0.6,
      className: "hidden xl:block", // Masqué sur les écrans < xl
    },
    {
      type: "reminder",
      title: t('components.heroScroll.widgets.doctor'),
      checked: false,
      top: "30%",
      left: "5%",
      mobileTop: "82%",
      mobileLeft: "5%",
      delay: 0.9,
    },
    {
      type: "medication",
      title: t('components.heroScroll.widgets.vitaminC.title'),
      subtitle: t('components.heroScroll.widgets.vitaminC.subtitle'),
      time: "12:00",
      icon: "🍊",
      top: "50%",
      right: "5%",
      mobileTop: "82%",
      mobileRight: "5%",
      mobileLeft: "auto",
      delay: 1.2,
    },
    {
      type: "reminder",
      title: t('components.heroScroll.widgets.rent'),
      checked: true,
      top: "60%",
      left: "8%",
      delay: 1.5,
      className: "hidden lg:block", // Masqué sur les écrans < lg
    },
    {
      type: "notification",
      title: t('components.heroScroll.widgets.prescription'),
      icon: "📝",
      bottom: "20%",
      left: "18%",
      delay: 1.8,
      className: "hidden xl:block", // Masqué sur les écrans < xl
      expandUp: true,
    },
    {
      type: "calendar",
      title: t('components.heroScroll.widgets.christmas.title'),
      subtitle: t('components.heroScroll.widgets.christmas.subtitle'),
      time: t('components.heroScroll.widgets.christmas.time'),
      top: "75%",
      right: "18%",
      delay: 2.1,
      className: "hidden lg:block", // Masqué sur mobile maintenant
    },
  ]);

  const handleWidgetToggle = (index: number) => {
    const newWidgets = [...widgets];
    newWidgets[index].checked = !newWidgets[index].checked;
    setWidgets(newWidgets);
  };

  // Version mobile - contenu linéaire sans animation de scroll
  if (isMobile) {
    return (
      <div className="w-full bg-background">
        {/* Section 1: Logo et texte avec widgets */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
          {/* Widgets flottants */}
          <div className="absolute inset-0 z-5 pointer-events-none">
            {widgets.map((item, index) => (
              <motion.div
                key={index}
                className={`absolute scale-75 origin-center pointer-events-auto ${
                  item.className || ""
                }`}
                style={{
                  top: item.mobileTop ?? item.top,
                  left: item.mobileLeft ?? item.left,
                  right: item.mobileRight ?? item.right,
                  bottom: item.bottom,
                  willChange: "transform, opacity",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: item.delay, ease: "easeOut" },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay,
                  },
                }}
              >
                <FloatingWidget
                  {...item}
                  lng={lng}
                  onToggle={() => handleWidgetToggle(index)}
                />
              </motion.div>
            ))}
          </div>

          {/* Logo et texte */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-6">
            {/* Conteneur des cercles - RESTE EN SPIRALE (état initial) avec proportions ajustées */}
            <div className="relative flex items-center justify-center w-[200px] h-[200px]">
              {/* Cercle 3 - Le plus grand - position spirale proportionnelle */}
              <div
                className="absolute w-[180px] h-[180px] rounded-full border-[6px] border-action"
                style={{ transform: "translate(17.86px, 17.86px)" }}
              />
              {/* Cercle 2 - Moyen - position spirale proportionnelle */}
              <div
                className="absolute w-[130px] h-[130px] rounded-full border-[5px] border-action"
                style={{ transform: "translate(-10.71px, -10.71px)" }}
              />
              {/* Cercle 1 - Le plus petit - position spirale proportionnelle */}
              <div
                className="absolute w-[80px] h-[80px] rounded-full border-[4px] border-action"
                style={{ transform: "translate(-35.71px, -35.71px)" }}
              />
            </div>

            <h2 className="text-5xl font-bold tracking-tight text-primary whitespace-nowrap">
              Re:mind
            </h2>

            {/* Boutons de téléchargement */}
            <div className="flex flex-col gap-4 items-center mt-4">
              <div className="relative group cursor-not-allowed">
                <div className="flex items-center gap-3 px-6 py-3 bg-background2 border-2 border-secondary rounded-xl hover:border-action transition-colors opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-secondary">
                      Disponible sur
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      App Store
                    </span>
                  </div>
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-action text-primary text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Bientôt disponible
                </div>
              </div>

              <div className="relative group cursor-not-allowed">
                <div className="flex items-center gap-3 px-6 py-3 bg-background2 border-2 border-secondary rounded-xl hover:border-action transition-colors opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-secondary">
                      Disponible sur
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      Google Play
                    </span>
                  </div>
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-action text-primary text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Bientôt disponible
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Contenu principal */}
        <section className="min-h-[60vh] flex items-center justify-center px-6 py-20 bg-background">
          <div className="flex flex-col items-center max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-4 text-primary">
              {t('components.heroScroll.content.title')}
            </h1>
            <p className="text-base text-secondary text-center mb-8 leading-relaxed">
              {t('components.heroScroll.content.description')}
            </p>
            <a
              href="#discover"
              className="px-8 py-3 rounded-full bg-action text-primary font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              {t('components.heroScroll.content.cta')}
            </a>
          </div>
        </section>
      </div>
    );
  }

  // Version desktop avec animation de scroll
  return (
    <div ref={containerRef} className="relative h-[300vh] w-full -mt-20">
      <div className="sticky top-16 h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        {/* Widgets flottants */}
        <motion.div
          style={{ opacity: widgetsOpacity, willChange: "opacity" }}
          className="absolute inset-0 z-5 pointer-events-none"
        >
          {widgets.map((item, index) => (
            <motion.div
              key={index}
              className={`absolute pointer-events-auto ${item.className || ""}`}
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                bottom: item.bottom,
                willChange: "transform, opacity",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: item.delay, ease: "easeOut" },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                },
              }}
            >
              <FloatingWidget
                {...item}
                lng={lng}
                onToggle={() => handleWidgetToggle(index)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Contenu qui apparaît DERRIÈRE les cercles */}
        <motion.div
          style={{
            opacity: contentOpacity,
            scale: contentScale,
            willChange: "opacity, transform",
          }}
          className="absolute z-0 flex flex-col items-center px-6 w-full transform-gpu backface-hidden"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-4 text-primary will-change-transform backface-hidden contain-paint">
            {t('components.heroScroll.content.title')}
          </h1>
          <p className="text-lg md:text-xl text-secondary text-center max-w-2xl mb-8 leading-relaxed backface-hidden">
            {t('components.heroScroll.content.description')}
          </p>
          <a
            href="#discover"
            className="px-10 py-4 rounded-full bg-action text-primary font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            {t('components.heroScroll.content.cta')}
          </a>
        </motion.div>

        {/* Les trois cercles du logo avec le texte */}
        <motion.div
          style={{ opacity: circlesOpacity, willChange: "opacity" }}
          className="absolute z-10 w-full h-full flex items-center justify-center pointer-events-none"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center w-[280px] h-[280px]">
              {/* Cercle 3 - Le plus grand (extérieur) - le plus loin */}
              <motion.div
                style={{
                  x: circle3X,
                  y: circle3Y,
                  scale: circle3Scale,
                  // boxShadow: `0 0 ${shadowIntensity.get()}px rgba(0, 0, 0, 1)`,
                }}
                className="absolute w-[240px] h-[240px] rounded-full border-[8px] border-action"
              />

              {/* Cercle 2 - Moyen - couche intermédiaire */}
              <motion.div
                style={{
                  x: circle2X,
                  y: circle2Y,
                  scale: circle2Scale,
                  // boxShadow: `0 0 ${shadowIntensity.get()}px rgba(0, 0, 0, 0.9)`,
                }}
                className="absolute w-[180px] h-[180px] rounded-full border-[7px] border-action"
              />

              {/* Cercle 1 - Le plus petit (intérieur) - le plus proche */}
              <motion.div
                style={{
                  x: circle1X,
                  y: circle1Y,
                  scale: circle1Scale,
                  // boxShadow: `0 0 ${shadowIntensity.get()}px rgba(0, 0, 0, 0.8)`,
                }}
                className="absolute w-[120px] h-[120px] rounded-full border-[6px] border-action"
              />
            </div>

            <motion.div
              style={{
                y: textY,
                scale: textScale,
                opacity: textOpacity,
              }}
              className="mt-8"
            >
              <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-primary whitespace-nowrap">
                Re:mind
              </h2>
            </motion.div>

            <motion.div
              style={{
                opacity: buttonsOpacity,
                y: textY,
                scale: textScale,
              }}
              className="flex flex-col sm:flex-row gap-4 items-center mt-8"
            >
              <div className="relative group cursor-not-allowed pointer-events-auto">
                <div className="flex items-center gap-3 px-6 py-3 bg-background2 border-2 border-secondary rounded-xl hover:border-action transition-colors opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-primary"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-secondary">
                      {t('components.heroScroll.appStore.available')}
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {t('components.heroScroll.appStore.store')}
                    </span>
                  </div>
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-action text-primary text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('components.heroScroll.appStore.soon')}
                </div>
              </div>

              <div className="relative group cursor-not-allowed pointer-events-auto">
                <div className="flex items-center gap-3 px-6 py-3 bg-background2 border-2 border-secondary rounded-xl hover:border-action transition-colors opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-primary"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-secondary">
                      {t('components.heroScroll.googlePlay.available')}
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {t('components.heroScroll.googlePlay.store')}
                    </span>
                  </div>
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-action text-primary text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('components.heroScroll.googlePlay.soon')}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

