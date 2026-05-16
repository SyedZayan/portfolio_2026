"use html";
"use client";

import { motion } from "framer-motion";

const BRANDS = [
  "BRICKETX GLOBAL",
  "MINTRIX CONTRACTING",
  "MAQ INVESTMENTS",
  "BRICKETX UAE",
  "MINTRIX TRADING",
  "MINTRIX WORLD",
];

export default function BrandTicker() {
  // Duplicate array list to ensure continuous infinite seam wrapping
  const tickerItems = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <div className="py-6 bg-dark-card/50 border-y border-dark-border overflow-hidden relative w-full select-none">
      {/* Left/Right Glass Faders for High-End Depth */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />

      <motion.div 
        className="flex gap-16 whitespace-nowrap min-w-full w-max"
        animate={{ x: [0, "-33.33%"] }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity
        }}
      >
        {tickerItems.map((brand, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.2em] text-zinc-600 hover:text-zinc-400 transition-colors duration-300"
          >
            <span>//</span>
            <span>{brand}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}