"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { CheckCircle2, Terminal, Layers, Radio, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    phase: "01",
    title: "Requirements Discovery & Architecture Scoping",
    icon: Terminal,
    description: "We deep-dive into your business workflows, pinpointing optimization bottlenecks. I outline user stories, analyze API inputs, and map out the entire structural scope before writing a single line of code.",
    deliverable: "Technical Architecture Blueprint & API Mapping Schema",
  },
  {
    phase: "02",
    title: "Database Modeling & Backend Setup",
    icon: Layers,
    description: "Architecting a secure relational database layer with structural indexing. I set up user permission tables, secure auth protocols, and backend pipeline environments using tools like Supabase or SQL Server.",
    deliverable: "Optimized Database Schema & Cloud Environment Set",
  },
  {
    phase: "03",
    title: "High-End Frontend Development",
    icon: Radio,
    description: "Building production-grade user interfaces with Next.js, TypeScript, and Tailwind CSS. Every panel, dashboard widget, and customer interaction flow is engineered to render cleanly across all device screen layouts.",
    deliverable: "Fully Responsive, High-Performance App Shell",
  },
  {
    phase: "04",
    title: "AI Pipeline & Third-Party Integration",
    icon: CheckCircle2,
    description: "This is where the application becomes intelligent. I construct predictive machine learning pipelines, link neural network arrays via Python microservices, or inject smart third-party API configurations cleanly.",
    deliverable: "Live Computational AI Layers & Middleware Relays",
  },
  {
    phase: "05",
    title: "Strict Stress-Testing & Vercel Deployment",
    icon: ShieldCheck,
    description: "Executing total system audits, runtime speed monitoring, and query performance tweaks. The finalized application is shipped securely over Vercel's global edge network, optimized for production scalability.",
    deliverable: "Live, Enterprise-Ready Software Application Assets",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function ExperienceProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-32 bg-dark-bg border-t border-dark-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Fixed Positioned Context Deck */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 z-10">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3 font-mono">
              // Execution Playbook
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase mb-6 leading-[0.95]">
              How I Turn Code Into Scalable Capital Assets
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-12 max-w-md font-medium">
              Shipping high-ticket applications requires absolute procedural precision. I eliminate engineering guesswork by executing an agile product development cycle.
            </p>

            {/* Interactive Selector Tabs with Sliding Layout Frame */}
            <div className="hidden lg:flex flex-col gap-1.5 relative border-l border-dark-border pl-4">
              {STEPS.map((step, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={step.phase}
                    onClick={() => setActiveStep(idx)}
                    className={`text-left text-xs font-mono font-bold uppercase py-2.5 px-3 rounded-lg relative transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                      isSelected ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {/* Sliding Accent Pillar */}
                    {isSelected && (
                      <motion.div 
                        layoutId="activeTabGlow"
                        className="absolute left-[-17px] top-0 w-[2px] h-full bg-accent shadow-[0_0_12px_rgba(2,185,132,0.6)] z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={`text-[10px] ${isSelected ? "text-accent" : "text-zinc-600"}`}>
                      PHASE {step.phase}
                    </span>
                    <span className="tracking-wide">{step.title.split(" & ")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Process Display Cards */}
          <motion.div 
            className="lg:col-span-7 space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <motion.div
                  key={step.phase}
                  variants={cardVariants}
                  onViewportEnter={() => setActiveStep(idx)}
                  viewport={{ margin: "-260px 0px -260px 0px" }}
                  className={`bg-dark-card border rounded-2xl p-6 sm:p-8 transition-all duration-500 premium-glow relative ${
                    isSelected 
                      ? "border-accent/30 bg-gradient-to-br from-dark-card to-zinc-950 shadow-xl" 
                      : "border-dark-border opacity-40 hover:opacity-70"
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                    
                    {/* Digital Node Counter */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-500 ${
                      isSelected 
                        ? "bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(2,185,132,0.1)]" 
                        : "bg-dark-bg border-dark-border text-zinc-500"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
                          isSelected ? "text-accent" : "text-zinc-600"
                        }`}>
                          System Phase {step.phase}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3.5 tracking-tight transition-colors duration-300 group-hover:text-accent">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-medium">
                        {step.description}
                      </p>
                      
                      {/* Expected Milestone Output Matrix Badge */}
                      <div className="bg-dark-bg/40 border border-dark-border/60 px-4 py-3 rounded-xl flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest block shrink-0">
                          // CRITICAL DELIVERABLE:
                        </span>
                        <span className="text-xs text-zinc-300 font-mono font-semibold tracking-tight">
                          {step.deliverable}
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}