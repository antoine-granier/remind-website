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

  // Phase 3: Contenu qui apparaît après la disparition du texte
  const contentOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0.45, 0.7], [0.5, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-background">
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

              {/* Texte "Re:mind" qui remonte, rétrécit et disparaît */}
              <motion.div
                style={{
                  y: textY,
                  scale: textScale,
                  opacity: textOpacity,
                }}
                className="absolute top-[300px]"
              >
                <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-primary whitespace-nowrap">
                  Re:mind
                </h2>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
