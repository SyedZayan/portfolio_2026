"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Terminal, CheckCircle, Database, LayoutTemplate, Briefcase } from "lucide-react";

// SEO-Optimized Engineering Capabilities
const EXPERIENCES = [
  "Architected 6+ production web applications for enterprise and regional businesses",
  "Engineered secure Cloud Identity (KYC) microservices via AWS workflows",
  "Implemented automated OCR data extraction and secure processing pipelines",
  "Integrated live financial APIs handling real-time market data and gold parameters",
  "Built automated corporate B2B routing systems via transactional middleware",
  "Designed highly performant Supabase relational database schemas and auth layers",
  "Created secure, role-based administrative dashboards for internal tracking",
  "Managed live Next.js Vercel deployments and Hostinger DNS cloud operations",
  "Executed large-scale web scraping scripts (extracting 120K+ structural records cleanly)",
  "Optimized core web vitals and cross-device rendering latency for SaaS portals"
];

// Targeted High-Ticket Corporate Deliverables
const SOLUTIONS_DELIVERED = [
  "FinTech Platforms",
  "KYC Verification Hubs",
  "Web Scraping Pipelines",
  "B2B Corporate Portals",
  "Internal SaaS Dashboards",
  "Automated Middleware",
  "Cloud API Integrations",
  "Relational Databases"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.08, delayChildren: 0.05, ease: "easeOut" } 
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

export default function AboutPage() {
  return (
    <main className="pt-40 pb-24 bg-dark-bg min-h-screen saas-grid selection:bg-accent/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Profile Pitch Section: Asymmetric Maxel Founder Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-32 items-center"
        >
          {/* Left Side: Premium Portrait Display Frame */}
          <motion.div 
            variants={fadeUpVariants}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            {/* Background alignment glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="w-full max-w-[420px] bg-dark-card border border-dark-border rounded-3xl p-4 premium-glow shadow-2xl relative group transition-all duration-500 hover:border-dark-border/80 z-10">
              
              {/* Window Chrome Header */}
              <div className="flex items-center justify-between border-b border-dark-border/60 pb-3 px-2 text-[10px] font-mono text-zinc-600">
                <div className="flex items-center gap-2">
                  <LayoutTemplate className="w-3.5 h-3.5 text-accent" />
                  <span>chief_architect.sys</span>
                </div>
                <span className="text-zinc-500 font-bold tracking-widest">KHI_PK</span>
              </div>

              {/* Portrait Image Mask */}
              <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-zinc-950 to-dark-bg border border-dark-border/40 rounded-2xl overflow-hidden shadow-inner mt-4">
                <Image 
                  src="/Syed_Zayan_Ali.png" 
                  alt="Syed Zayan Ali - Full Stack Developer" 
                  fill 
                  className="object-cover object-center opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]" 
                  sizes="(max-w-420px) 100vw, 420px"
                  priority
                />
                {/* Bottom elegant fade vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-90 pointer-events-none" />
                
                {/* Overlay Name Plate */}
                <div className="absolute bottom-4 left-4 right-4 bg-dark-bg/80 backdrop-blur-md border border-dark-border/60 p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-bold text-white tracking-tight uppercase">Syed Zayan Ali</h2>
                    <span className="text-[10px] font-mono text-zinc-400 block tracking-widest uppercase mt-0.5">Software Developer</span>
                  </div>
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
                    <Briefcase className="w-3.5 h-3.5 text-accent" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
          
          {/* Right Side: High-Conversion SEO Bio */}
          <motion.div variants={fadeUpVariants} className="lg:col-span-7">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-4 font-mono">
              // Core Operator Identity
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[64px] font-black text-white tracking-tighter uppercase mb-8 leading-[0.95]">
              Engineering <br />Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-accent">Products.</span>
            </h1>
            
            <div className="text-zinc-400 space-y-6 text-base sm:text-lg leading-relaxed font-medium">
              <p>
                I am a Computer Science Engineer (UBIT) and production-focused developer specializing in building end-to-end digital architectures—from secure <span className="text-white font-semibold">Next.js FinTech applications</span> to high-volume cloud data pipelines.
              </p>
              <p>
                My execution footprint spans modern frontend rendering engines, scalable Supabase relational database setups, secure AWS identity verifications, and custom Python middleware layers designed for enterprise automation.
              </p>
              <div className="text-zinc-300 border-l-2 border-accent pl-6 bg-dark-card/40 py-5 pr-5 rounded-r-2xl border-y border-r border-dark-border/40 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="italic text-sm sm:text-base leading-relaxed">
                  “I’ve shipped live commercial platforms for international businesses including BricketX Global, Mintrix World, and MAQ Investments—eliminating technical friction and replacing it with high-performance software capital.”
                </p>
              </div>
              <p className="text-sm sm:text-base text-zinc-500">
                My engineering philosophy is strict: I bypass code vanity and build secure, performance-tuned digital assets that directly solve heavy operational bottlenecks.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Client Solutions Grid Section */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-dark-border/60 pb-6 gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3 font-mono">
                // Commercial Outputs
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Architectures Shipped
              </h2>
            </div>
            <p className="text-sm text-zinc-500 font-mono font-bold tracking-widest uppercase">
              [ Verified Production Assets ]
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {SOLUTIONS_DELIVERED.map((solution, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-dark-card/60 border border-dark-border p-5 rounded-xl flex items-center gap-3.5 premium-glow transition-all duration-300 hover:border-accent/40 hover:bg-dark-card cursor-default group"
              >
                <div className="w-8 h-8 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center shrink-0 group-hover:border-accent/30 transition-colors">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-xs sm:text-sm text-zinc-300 font-bold tracking-tight uppercase group-hover:text-white transition-colors">{solution}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Experience Terminal Log */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3 font-mono">
              // Structural Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Technical Audit History
            </h2>
          </div>

          <div className="bg-gradient-to-br from-dark-card to-zinc-950 border border-dark-border rounded-2xl p-6 sm:p-8 font-mono premium-glow shadow-2xl relative overflow-hidden">
            {/* Terminal Window Chrome Headers */}
            <div className="flex items-center justify-between border-b border-dark-border/60 pb-5 mb-6 text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-accent" />
                <span>zayan_operator_logs.sh</span>
              </div>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                STATUS: OPTIMIZED
              </span>
            </div>

            {/* List Execution Logs */}
            <div className="space-y-4">
              {EXPERIENCES.map((log, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  key={idx} 
                  className="flex items-start gap-4 group text-[11px] sm:text-xs"
                >
                  <span className="text-accent font-bold select-none shrink-0 mt-0.5">{`>`}</span>
                  <p className="text-zinc-400 group-hover:text-zinc-200 transition-colors leading-relaxed tracking-wide">
                    {log}
                  </p>
                </motion.div>
              ))}
              {/* Blinking CMD end line */}
              <div className="flex items-start gap-4 mt-6 pt-4">
                <span className="text-accent font-bold select-none shrink-0">{`>`}</span>
                <motion.span
                  animate={{ opacity: [1, 1, 0, 0, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.45, 0.46, 0.95, 1], ease: "linear" }}
                  className="w-2.5 h-4 bg-accent inline-block"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}