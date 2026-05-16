"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-dark-border pt-24 pb-8 relative overflow-hidden saas-grid">
      
      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-accent/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Brand Identity & Value Prop (Takes up 5 cols) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-black text-white tracking-tight uppercase">
                  Syed Zayan<span className="text-accent">.</span>
                </span>
              </Link>
              <p className="text-sm text-zinc-400 leading-relaxed font-medium max-w-sm mb-8">
                Engineering production digital networks, automated data systems, and high-performance SaaS applications for enterprise operations.
              </p>
            </div>
            
            {/* Live Status Indicator */}
            <div className="inline-flex items-center gap-3 bg-dark-card/40 border border-dark-border/60 px-4 py-2.5 rounded-xl w-max">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                System Status: <span className="text-zinc-300">Operational</span>
              </span>
            </div>
          </div>

          {/* Column 2: Internal Index Navigation */}
          <div className="md:col-span-4 lg:col-span-3 lg:col-start-7">
            <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-widest block mb-6">
              // Sitemap
            </span>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                  System Overview
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                  Architectural Capabilities
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                  Production Deployments
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Outbound Channels & Connect */}
          <div className="md:col-span-8 lg:col-span-3">
            <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-widest block mb-6">
              // Network & Contact
            </span>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://github.com/SyedZayan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-accent transition-colors group"
                >
                  GitHub Repository
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/syed-zayanali/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-accent transition-colors group"
                >
                  LinkedIn Profile
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors group mt-2"
                >
                  Initialize Scoping Sequence
                  <span className="block w-4 h-[1px] bg-zinc-600 group-hover:bg-white group-hover:w-6 transition-all duration-300 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata & Copyright Strip */}
        <div className="pt-8 border-t border-dark-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
            <span>© {currentYear} SYED ZAYAN ALI.</span>
            <span className="hidden sm:inline">ALL RIGHTS RESERVED.</span>
          </div>
          
          <div className="flex items-center gap-6 font-mono text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
            <span>LOC: KARACHI, PK</span>
            <span className="hidden sm:inline">ENG: NEXT.JS / TAILWIND</span>
          </div>
        </div>

      </div>
    </footer>
  );
}