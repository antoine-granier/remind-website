"use client";

import Image from "next/image";

interface IPhoneMockupProps {
  src: string;
  alt: string;
}

export default function IPhoneMockup({ src, alt }: IPhoneMockupProps) {
  return (
    <div className="relative mx-auto w-fit">
      {/* iPhone 17 Pro Frame - Titane avec bordures ultra-fines */}
      <div className="relative border-[8px] border-[#5e5e5e] bg-[#3a3a3a] rounded-[3.5rem] h-[640px] w-[310px] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        {/* Dynamic Island - Design iPhone 17 */}
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-[#202020] rounded-[2rem] z-10 shadow-inner"></div>

        {/* Screen Content - Always-On Display */}
        <div className="relative h-full w-full overflow-hidden rounded-[3rem] bg-black">
          <Image src={src} alt={alt} fill className="object-cover" priority />
        </div>

        {/* Reflet d'écran réaliste */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>

        {/* Volume Buttons - Titane */}
        <div className="absolute -left-[11px] top-[120px] w-[3px] h-[36px] bg-[#5e5e5e] rounded-l-lg shadow-sm"></div>
        <div className="absolute -left-[11px] top-[165px] w-[3px] h-[36px] bg-[#5e5e5e] rounded-l-lg shadow-sm"></div>

        {/* Action Button */}
        <div className="absolute -left-[11px] top-[215px] w-[3px] h-[24px] bg-[#5e5e5e] rounded-l-lg shadow-sm"></div>

        {/* Power Button */}
        <div className="absolute -right-[11px] top-[145px] w-[3px] h-[70px] bg-[#5e5e5e] rounded-r-lg shadow-sm"></div>

        {/* Camera Control Button - Nouveauté iPhone 17 */}
        <div className="absolute -right-[11px] top-[240px] w-[3px] h-[28px] bg-[#5e5e5e] rounded-r-lg shadow-sm"></div>
      </div>

      {/* Ombre portée réaliste */}
      <div className="absolute inset-0 -z-10 blur-2xl opacity-30 bg-gradient-to-b from-gray-600 to-gray-800 rounded-[3.5rem] scale-95"></div>
    </div>
  );
}
