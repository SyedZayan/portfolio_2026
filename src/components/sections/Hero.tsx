"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Code2, Download, Briefcase, GraduationCap, Terminal } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.06, delayChildren: 0.02, ease: "easeOut" } 
  },
};

const maskVariants: Variants = {
  hidden: { y: "105%", opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } 
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-44 pb-24 md:pt-52 md:pb-36 flex flex-col justify-center overflow-hidden saas-grid">
      
      {/* Background Subtle Telemetry Beam Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Column: Premium Content Matrix with Standardized Vertical Spacing */}
        <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
          
          {/* Overhead Minimal Operational Tag */}
          <motion.div 
            variants={fadeUpVariants}
            className="flex items-center gap-2 text-xs font-mono font-bold text-accent tracking-[0.2em] uppercase"
          >
            <span>//</span>
            <span>Innovate. Develop. Scale. Fast.</span>
          </motion.div>

          {/* Mask-Revealed Display Heading Layout */}
          <div className="space-y-1.5 md:space-y-2">
            <div className="overflow-hidden py-0.5">
              <motion.h1 
                variants={maskVariants}
                className="text-5xl sm:text-7xl md:text-[80px] font-black tracking-tighter text-white uppercase leading-[0.92]"
              >
                Software
              </motion.h1>
            </div>
            <div className="overflow-hidden py-0.5">
              <motion.h1 
                variants={maskVariants}
                className="text-5xl sm:text-7xl md:text-[80px] font-black tracking-tighter uppercase leading-[0.92] inline-flex items-center"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-accent">
                  Developer
                </span>
                
                {/* Precision Asynchronous CMD Blinking Cursor Node */}
                <motion.span
                  animate={{ opacity: [1, 1, 0, 0, 1] }}
                  transition={{ 
                    duration: 0.9, 
                    repeat: Infinity, 
                    times: [0, 0.45, 0.46, 0.95, 1],
                    ease: "linear"
                  }}
                  className="text-accent ml-1 font-mono font-normal select-none inline-block normal-case"
                  style={{ color: "var(--color-accent, #02B984)" }}
                >
                  _
                </motion.span>
              </motion.h1>
            </div>
          </div>

          {/* Core Copy Narrative */}
          <motion.p 
            variants={fadeUpVariants}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl font-medium"
          >
            I engineer resilient web platforms, automated script systems, and cloud data infrastructures for commercial operations. From high-throughput <span className="text-white font-semibold">Next.js SaaS applications</span> to integrated relational database architectures, I turn operational friction into scalable software capital assets.
          </motion.p>

          {/* Primary Intake Form & Document Targets */}
          <motion.div 
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2"
          >
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-accent text-black font-extrabold text-sm uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-xl shadow-accent/5 w-full"
              >
                Launch System Scoping
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full sm:w-auto">
              <a
                href="/doc/Syed-Zayan-Ali.pdf"
                download="Syed_Zayan_Ali_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-dark-card border border-dark-border text-zinc-300 font-bold text-sm uppercase tracking-wider hover:border-accent/30 hover:text-white transition-all w-full font-mono"
              >
                Download Resume
                <Download className="w-3.5 h-3.5 text-accent" />
              </a>
            </motion.div>
          </motion.div>

          {/* Channels Row */}
          <motion.div 
            variants={fadeUpVariants}
            className="flex items-center gap-4 pt-6 border-t border-dark-border/40 max-w-xs"
          >
            <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-widest mr-2">// NETWORKS:</span>
            
            {/* GitHub Hub Target */}
            <a 
              href="https://github.com/SyedZayan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-zinc-400 hover:text-accent tracking-[0.2em] transition-all duration-300 transform hover:scale-[1.03] group cursor-pointer"
            >
              <svg className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="relative">
                GITHUB
                <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </span>
            </a>

            {/* LinkedIn Hub Target */}
            <a 
              href="https://www.linkedin.com/in/syed-zayanali/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-zinc-400 hover:text-accent tracking-[0.2em] transition-all duration-300 transform hover:scale-[1.03] group cursor-pointer"
            >
              <svg className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="relative">
                LINKEDIN
                <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Balanced Identity Card with Deeper Padding */}
        <motion.div 
          variants={fadeUpVariants}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full relative min-h-[620px]"
        >
          <div className="absolute inset-0 bg-radial-[rgba(2,185,132,0.02)_1px,transparent_1px] [background-size:20px_20px] pointer-events-none rounded-3xl" />
          
          <motion.div 
            whileHover={{ y: -5, rotate: 0.5 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full max-w-[390px] bg-dark-card border border-dark-border rounded-3xl p-5 md:p-6 premium-glow shadow-2xl flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:border-dark-border/80"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-dark-border/60 pb-4 mb-5 text-[10px] font-mono text-zinc-600">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>identity_telemetry.sys</span>
              </div>
              <span className="text-accent/80 flex items-center gap-1.5 font-bold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                </span>
                LIVE_INSTANCE
              </span>
            </div>

            {/* Profile Mask Frame */}
            <div className="relative w-full h-[290px] bg-gradient-to-b from-zinc-950 to-dark-bg border border-dark-border/40 rounded-2xl overflow-hidden shadow-inner mb-5">
              <Image 
                src="/Syed_Zayan_Ali.png" 
                alt="Syed Zayan Ali" 
                fill 
                className="object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-[1.015] transition-transform duration-700 ease-out" 
                sizes="(max-w-390px) 100vw, 390px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-95 pointer-events-none" />
            </div>

            {/* Telemetry Metrics Container */}
            <div className="space-y-4 flex-grow font-mono text-[11px]">
              
              {/* Engagement Status */}
              <div className="bg-dark-bg/60 border border-dark-border/60 rounded-xl p-4 flex gap-3 items-center relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-[2px] bg-accent/40" />
                <div className="w-7 h-7 rounded-lg bg-accent/5 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <span className="text-[9px] text-zinc-500 block font-bold uppercase tracking-wider">// PRESENT ROLE</span>
                  <span className="text-zinc-200 font-bold font-sans tracking-tight">Web Developer @ BricketX PK</span>
                </div>
              </div>

              {/* Academic Metrics Row */}
              <div className="bg-dark-bg/40 border border-dark-border/50 rounded-xl p-4 space-y-3.5">
                <div className="flex items-center gap-1.5 text-[9px] text-zinc-500 font-bold uppercase tracking-widest border-b border-dark-border/40 pb-2.5">
                  <GraduationCap className="w-3.5 h-3.5 text-accent" />
                  <span>// Academic Parameters</span>
                </div>

                <div className="space-y-3">
                  <div className="leading-tight">
                    <span className="text-zinc-300 font-bold font-sans tracking-tight block">Karachi University (UBIT)</span>
                    <span className="text-zinc-500 text-[10px]">BS Computer Science • <span className="text-zinc-400 font-semibold font-mono">2024 – 2028</span></span>
                  </div>
                  <div className="leading-tight border-t border-dark-border/20 pt-3">
                    <span className="text-zinc-300 font-bold font-sans tracking-tight block">Governor Sindh Initiative</span>
                    <span className="text-zinc-500 text-[10px]">Advanced Cloud & Web3 Architecture • <span className="text-accent font-semibold font-mono">Grade A</span></span>
                  </div>
                </div>
              </div>

            </div>

            {/* Terminal Status Line Footer */}
            <div className="bg-dark-bg/60 border border-dark-border/60 rounded-xl p-3 mt-5 flex justify-between items-center text-[9px] font-mono text-zinc-500 tracking-wider">
              <span>LOC: KARACHI, PK</span>
              <span className="text-zinc-400 font-bold">NEXT.JS • SUPABASE • CLOUD</span>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}