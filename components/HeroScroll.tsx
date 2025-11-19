"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Phase 1: Les cercles partent de leur position initiale en spirale et s'alignent (0 -> 0.3)
  const circle1X = useTransform(scrollYProgress, [0, 0.3], [-50, 0]);
  const circle1Y = useTransform(scrollYProgress, [0, 0.3], [-50, 0]);

  const circle2X = useTransform(scrollYProgress, [0, 0.3], [-15, 0]);
  const circle2Y = useTransform(scrollYProgress, [0, 0.3], [-15, 0]);

  const circle3X = useTransform(scrollYProgress, [0, 0.3], [25, 0]);
  const circle3Y = useTransform(scrollYProgress, [0, 0.3], [25, 0]);

  // Phase 2: Zoom massif à travers les cercles (0.3 -> 0.8)
  const circle1Scale = useTransform(scrollYProgress, [0.3, 0.8], [1, 60]);
  const circle2Scale = useTransform(scrollYProgress, [0.3, 0.8], [1, 70]);
  const circle3Scale = useTransform(scrollYProgress, [0.3, 0.8], [1, 80]);

  // Ombres très visibles qui n'apparaissent que pendant le zoom
  const shadowIntensity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [0, 100, 0]
  );

  // Opacité des cercles pendant le zoom
  const circlesOpacity = useTransform(scrollYProgress, [0.65, 0.8], [1, 0]);

  // Texte "Re:mind" qui remonte, rétrécit et disparaît
  const textY = useTransform(scrollYProgress, [0, 0.25, 0.4], [0, -220, -220]);
  const textScale = useTransform(scrollYProgress, [0.25, 0.45], [1, 0.2]);
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.45], [1, 0]);

  // Opacité des emojis - disparaissent dès le début du scroll
  const emojisOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Opacité des boutons de téléchargement - disparaissent avec le texte
  const buttonsOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Phase 3: Contenu qui apparaît après la disparition du texte
  const contentOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0.45, 0.7], [0.5, 1]);

  // Données des emojis avec leurs positions
  const emojis = [
    { emoji: "💊", top: "18%", left: "12%", delay: 0 },
    { emoji: "⏰", top: "15%", left: "42%", delay: 0.3 },
    { emoji: "🔔", top: "18%", right: "12%", delay: 0.6 },
    { emoji: "📅", top: "48%", left: "8%", delay: 0.9 },
    { emoji: "✅", top: "48%", right: "8%", delay: 1.2 },
    { emoji: "📝", top: "78%", left: "12%", delay: 1.5 },
    { emoji: "🚗", top: "82%", left: "42%", delay: 1.8 },
    { emoji: "💎", top: "78%", right: "12%", delay: 2.1 },
  ];

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full -mt-20">
      {/* Ajustez -mt-20 ou -mt-16 selon la hauteur de votre navbar */}
      <div className="sticky top-20 h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        {/* Ajustez top-20 ou top-16 selon la hauteur de votre navbar */}

        {/* Emojis flottants */}
        <motion.div
          style={{ opacity: emojisOpacity }}
          className="absolute inset-0 z-5 pointer-events-none"
        >
          {emojis.map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-4xl md:text-6xl"
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: item.delay },
                scale: { duration: 0.8, delay: item.delay },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                },
              }}
            >
              {item.emoji}
            </motion.div>
          ))}
        </motion.div>

        {/* Contenu qui apparaît DERRIÈRE les cercles (z-index inférieur) */}
        <motion.div
          style={{
            opacity: contentOpacity,
            scale: contentScale,
          }}
          className="absolute z-0 flex flex-col items-center px-6 w-full"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-4 text-primary">
            Votre esprit, libéré
          </h1>
          <p className="text-lg md:text-xl text-secondary text-center max-w-2xl mb-8 leading-relaxed">
            Gérez facilement vos rappels et vos traitements médicaux. Libérez
            votre esprit et restez productif.
          </p>
          <a
            href="#decouvrir"
            className="px-10 py-4 rounded-full bg-action text-primary font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Découvrir Re:mind
          </a>
        </motion.div>

        {/* Les trois cercles du logo avec le texte (z-index supérieur) */}
        <motion.div
          style={{ opacity: circlesOpacity }}
          className="absolute z-10 w-full h-full flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            {/* Conteneur des cercles */}
            <div className="relative flex items-center justify-center w-[280px] h-[280px]">
              {/* Cercle 3 - Le plus grand (extérieur) - le plus loin */}
              <motion.div
                style={{
                  x: circle3X,
                  y: circle3Y,
                  scale: circle3Scale,
                  boxShadow: `0 0 ${shadowIntensity.get()}px rgba(0, 0, 0, 1)`,
                }}
                className="absolute w-[240px] h-[240px] rounded-full border-[8px] border-action"
              />

              {/* Cercle 2 - Moyen - couche intermédiaire */}
              <motion.div
                style={{
                  x: circle2X,
                  y: circle2Y,
                  scale: circle2Scale,
                  boxShadow: `0 0 ${shadowIntensity.get()}px rgba(0, 0, 0, 0.9)`,
                }}
                className="absolute w-[180px] h-[180px] rounded-full border-[7px] border-action"
              />

              {/* Cercle 1 - Le plus petit (intérieur) - le plus proche */}
              <motion.div
                style={{
                  x: circle1X,
                  y: circle1Y,
                  scale: circle1Scale,
                  boxShadow: `0 0 ${shadowIntensity.get()}px rgba(0, 0, 0, 0.8)`,
                }}
                className="absolute w-[120px] h-[120px] rounded-full border-[6px] border-action"
              />
            </div>

            {/* Texte "Re:mind" qui remonte, rétrécit et disparaît */}
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

            {/* Boutons de téléchargement - EN DESSOUS du texte */}
            <motion.div
              style={{
                opacity: buttonsOpacity,
                y: textY,
                scale: textScale,
              }}
              className="flex flex-col sm:flex-row gap-4 items-center mt-8"
            >
              {/* Bouton App Store */}
              <div className="relative group cursor-not-allowed">
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

              {/* Bouton Google Play */}
              <div className="relative group cursor-not-allowed">
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
