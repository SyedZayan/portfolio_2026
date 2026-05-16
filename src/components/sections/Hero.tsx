"use client";

import Link from "next/link";
import { ArrowUpRight, Code2, ShieldAlert } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.08, delayChildren: 0.05 } 
  },
};

const maskVariants: Variants = {
  hidden: { y: "100%" },
  visible: { 
    y: 0, 
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-40 pb-16 flex flex-col justify-center overflow-hidden saas-grid">
      
      {/* Ambient Engine Pulses */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Column: Authoritative Value Copy */}
        <div className="lg:col-span-7 text-left">
          <div className="mb-8">
            <div className="overflow-hidden py-1">
              <motion.h1 
                variants={maskVariants}
                className="text-4xl sm:text-6xl md:text-[76px] font-black tracking-tighter text-white uppercase leading-[0.95]"
              >
                Software Developer
              </motion.h1>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h1 
                variants={maskVariants}
                className="text-4xl sm:text-6xl md:text-[76px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-accent uppercase leading-[0.95]"
              >
                Web, Automation & AI
              </motion.h1>
            </div>
          </div>

          <motion.p 
            variants={fadeUpVariants}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl font-medium mb-10"
          >
            I engineer production digital networks for regional and global operations. From <span className="text-white font-semibold">Next.js FinTech systems</span> to <span className="text-white font-semibold">AWS biometric verification loops</span>, I bridge complex business workflows into high-performance software assets.
          </motion.p>

          <motion.div 
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-black font-extrabold text-sm uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-xl shadow-accent/5 w-full sm:w-auto"
              >
                Launch System Scoping
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-dark-card/40 border border-dark-border text-zinc-300 font-semibold text-sm hover:bg-dark-border transition-colors w-full sm:w-auto"
            >
              Examine Deployments
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Premium Personal / Abstract Technical Display Grid */}
        <motion.div 
          variants={fadeUpVariants}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full relative h-[450px]"
        >
          {/* Subtle background tech matrix overlay */}
          <div className="absolute inset-0 bg-radial-[rgba(2,185,132,0.04)_1px,transparent_1px] [background-size:20px_20px] pointer-events-none rounded-3xl" />
          
          <motion.div 
            whileHover={{ y: -8, rotate: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-[380px] h-full bg-dark-card border border-dark-border rounded-3xl p-3 premium-glow shadow-2xl relative flex flex-col justify-between overflow-hidden"
          >
            {/* Top Decorative Interface Line */}
            <div className="flex items-center justify-between border-b border-dark-border/60 pb-3 px-2 text-[10px] font-mono text-zinc-600">
              <div className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-accent" />
                <span>operator_identity.sys</span>
              </div>
              <span className="text-accent/60">● CORE_ONLINE</span>
            </div>

            {/* Image Frame Content Area */}
            <div className="relative w-full h-[320px] bg-gradient-to-b from-zinc-950 to-dark-bg border border-dark-border/50 rounded-2xl overflow-hidden flex items-center justify-center group">
              {/* NOTE: Drop your clean professional profile picture or mockup asset inside this tag */}
              {/* <Image src="/your-profile.jpg" alt="Syed Zayan Ali" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" /> */}
              
              {/* Modern placeholders while asset loads */}
              <div className="text-center p-6 space-y-3 z-10">
                <div className="w-16 h-16 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center mx-auto shadow-inner">
                  <ShieldAlert className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-mono tracking-tight">SYED ZAYAN ALI</h3>
                  <p className="text-[10px] font-mono text-zinc-500 mt-1 uppercase tracking-widest">Full-Stack Systems Engineer</p>
                </div>
              </div>
              
              {/* Bottom glass reflection gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Technical Status Row */}
            <div className="bg-dark-bg/60 border border-dark-border/60 rounded-xl p-3 flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span>LOC: KHI, PK</span>
              <span className="text-zinc-400 font-bold">NEXT.JS • SUPABASE • PYTHON</span>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}