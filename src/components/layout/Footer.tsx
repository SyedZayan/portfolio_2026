"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Matrix */}
        <div className="flex items-center gap-2 font-bold tracking-wider text-sm text-zinc-500">
          <span className="text-white">ZAYAN</span>
          <span className="text-accent">.AI</span>
          <span className="font-mono text-[10px] text-zinc-600 font-normal ml-2">// © {currentYear} ALL RIGHTS RESERVED</span>
        </div>

        {/* Global Network Anchors */}
        <div className="flex items-center gap-6 text-xs font-mono font-bold tracking-wide">
        <a 
            href="https://github.com/SyedZayan" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-white transition-colors"
        >
            GITHUB
        </a>
        <a 
            href="https://www.linkedin.com/in/syed-zayanali/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-white transition-colors"
        >
            LINKEDIN
        </a>
        </div>
      </div>
    </footer>
  );
}