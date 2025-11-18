"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Détecte si c'est un appareil tactile
    const detectTouchDevice = () => {
      return (
        window.matchMedia("(pointer:coarse)").matches ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      );
    };

    const hasTouch = detectTouchDevice();
    setIsTouchDevice(hasTouch);

    // Si c'est un appareil tactile, ne pas charger les event listeners
    if (hasTouch) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInteractive =
        target.closest("a, button, input, textarea, [role='button']") !== null;
      setIsHovering(isInteractive);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  // Ne pas afficher sur appareils tactiles
  if (isTouchDevice) {
    return null;
  }

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{
        x: { duration: 0 },
        y: { duration: 0 },
        scale: { duration: 0.3, ease: "easeOut" },
        opacity: { duration: 0.3, ease: "easeOut" },
      }}
      className="fixed w-12 h-12 rounded-full border-4 border-primary pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      {/* Texte qui tourne sur la bordure */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className="absolute"
      >
        <defs>
          <path
            id="circlePath"
            d="M 24, 24 m -20, 0 a 20,20 0 0,1 40,0 a 20,20 0 0,1 -40,0"
            fill="none"
          />
        </defs>
        <text fill="#c9f158" fontSize="5" fontWeight="bold" letterSpacing="2">
          <textPath href="#circlePath" startOffset="0%" textAnchor="start">
            RE:MIND · RE:MIND · RE:MIND · RE:MIND ·
          </textPath>
        </text>
      </motion.svg>

      {/* Point central */}
      <div className="w-1 h-1 rounded-full bg-primary z-10" />
    </motion.div>
  );
}
