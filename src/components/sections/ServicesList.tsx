"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/data/content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05, ease: "easeOut" }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function ServicesList() {
  return (
    <section className="py-28 md:py-36 bg-dark-bg border-t border-dark-border relative overflow-hidden saas-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric Header Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3 font-mono">
              // Core Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase mb-6 leading-[0.95]">
              Engineering High-Performance Solutions
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-medium">
              I construct secure, end-to-end digital assets equipped with complex backends, internal dashboards, and intelligent computational layers designed to solve actual corporate operational challenges.
            </p>
          </div>
          
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 hover:text-accent transition-colors duration-300 group shrink-0 uppercase tracking-widest pb-2"
          >
            Explore Full Architecture
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Animated Services Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div 
                key={index} 
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-dark-card/40 border border-dark-border p-6 sm:p-8 rounded-3xl flex flex-col justify-between premium-glow relative group transition-colors duration-500 hover:border-dark-border/80 hover:bg-dark-card/80 overflow-hidden"
              >
                {/* Dynamic Accent Hover Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent/0 transition-all duration-500 group-hover:bg-accent/80" />

                <div>
                  {/* High-End Icon Enclosure */}
                  <div className="w-12 h-12 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center mb-8 shadow-inner transition-colors duration-500 group-hover:border-accent/30 group-hover:bg-accent/5">
                    <Icon className="w-5 h-5 text-zinc-500 transition-colors duration-500 group-hover:text-accent" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-tight uppercase transition-colors duration-300 group-hover:text-accent-muted">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-400 leading-relaxed mb-8 font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Isolated Telemetry Block: Corporate Benefit & Tech Stack */}
                <div className="mt-auto">
                  <div className="bg-dark-bg/60 border border-dark-border/50 rounded-2xl p-5 mb-5 relative overflow-hidden">
                    {/* Inner vertical accent for data blocks */}
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-accent/30" />
                    <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-widest block mb-2">
                      // Commercial Outcome
                    </span>
                    <p className="text-xs text-zinc-300 italic leading-relaxed font-medium">
                      {service.benefit}
                    </p>
                  </div>
                  
                  {/* Monospace Tech Tags Matrix */}
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <span 
                        key={t} 
                        className="text-[10px] bg-dark-bg text-zinc-400 border border-dark-border/80 px-2.5 py-1 rounded font-mono font-semibold tracking-wider transition-colors duration-300 group-hover:border-dark-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}