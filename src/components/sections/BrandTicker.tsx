"use client";

import { motion } from "framer-motion";

const BRANDS = [
  { name: "BRICKETX GLOBAL", href: "https://www.bricketx.com/" },
  { name: "MINTRIX CONTRACTING", href: "https://www.mintrixcontracting.com/" },
  { name: "MAQ INVESTMENTS", href: "https://maqinvestments.ae/" },
  { name: "BRICKETX UAE", href: "https://www.bricketx.ae/" },
  { name: "MINTRIX TRADING", href: "https://www.mintrixtrading.com/" },
  { name: "MINTRIX WORLD", href: "https://www.mintrix.world/" },
];

export default function BrandTicker() {
  // Triple the array elements to guarantee a completely seamless infinite wrapping cycle without clipping gaps
  const tickerItems = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <div className="py-8 bg-dark-card/30 border-y border-dark-border overflow-hidden relative w-full">
      
      {/* Left/Right Absolute Glass Gradient Faders for High-End Layout Depth */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark-bg via-dark-bg/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark-bg via-dark-bg/40 to-transparent z-10 pointer-events-none" />

      {/* Infinite Horizontal Tracking Track */}
      <motion.div 
        className="flex gap-16 whitespace-nowrap min-w-full w-max"
        animate={{ x: [0, "-33.333%"] }}
        transition={{
          ease: "linear",
          duration: 30, // Calibrated slow pace for readable professional tracking
          repeat: Infinity
        }}
      >
        {tickerItems.map((brand, idx) => (
          <a
            key={idx}
            href={brand.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-xs font-mono font-bold tracking-[0.25em] text-zinc-500 hover:text-accent transition-all duration-300 transform hover:scale-105 group select-none cursor-pointer"
          >
            {/* Structural Monospace Connector Index Token */}
            <span className="text-zinc-700 font-normal transition-colors duration-300 group-hover:text-accent/40">
              //
            </span>
            
            {/* Clickable Identity Text String */}
            <span className="relative">
              {brand.name}
              {/* Subtle underlining wire frame that draws on link hover states */}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}