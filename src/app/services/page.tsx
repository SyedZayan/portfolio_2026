"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cpu, Code2, Database, Zap, BarChart3, ArrowUpRight, Plus, Minus } from "lucide-react";
import Link from "next/link";

const DETAILED_SERVICES = [
  {
    id: "fintech",
    index: "01",
    icon: ShieldCheck,
    title: "Investment Platforms & FinTech Shells",
    tag: "FINTECH INTERFACES",
    summary: "Architecting secure web portals engineered for capital management, real-time asset tracking, and transactional compliance.",
    capabilities: [
      "Dynamic opportunity matrices and plan structuring",
      "Live global market data API streams (Gold/Currencies)",
      "Secure investor communication and routing hubs",
      "Robust data synchronization with zero pipeline latency"
    ],
    outcome: "Launches a compliant financial layout designed to convert traffic into institutional trust."
  },
  {
    id: "kyc",
    index: "02",
    icon: Cpu,
    title: "Automated Biometric KYC & Document Extraction",
    tag: "COMPUTER VISION & OCR",
    summary: "Integrating deep-learning workflows and cloud vision services to completely automate identity verification pipelines.",
    capabilities: [
      "AWS Rekognition integrations for real-time face matching",
      "Machine learning OCR text parsing for scanning IDs and docs",
      "Secure database handling with zero raw credential leakage",
      "Automated fallback routes for manual operator validation logs"
    ],
    outcome: "Slashes onboarding friction from minutes to seconds while securing applications against fraudulent access inputs."
  },
  {
    id: "fullstack",
    index: "03",
    icon: Code2,
    title: "Full-Stack Web Architectures (Next.js & Supabase)",
    tag: "CORE FRAMEWORK DEVELOPMENT",
    summary: "Architecting high-performance web solutions built for rapid edge delivery, enterprise indexing, and modular expansion.",
    capabilities: [
      "Next.js App Router optimization with absolute TypeScript safety",
      "Sleek interface layouts constructed using strict custom Tailwind CSS tokens",
      "Supabase serverless backends integrated with fine-tuned parameters",
      "Global server-side static page generation for instant load times"
    ],
    outcome: "Delivers a lightning-fast application footprint configured for major traffic operations and search engine optimization."
  },
  {
    id: "scraping",
    index: "04",
    icon: Database,
    title: "Large-Scale Data Scraping & Extraction Engines",
    tag: "AUTOMATED BIG DATA PIPELINES",
    summary: "Building robust, unthrottled data extraction script clusters that wash and organize vast tables of raw business intelligence records.",
    capabilities: [
      "Custom Python pipeline scraping networks handling 120K+ records cleanly",
      "Intelligent anti-bot, captcha, and rotation proxy bypass layers",
      "Automated scheduled triggers transforming unstructured rows into clean JSON tables",
      "SQL Server and PostgreSQL schema integration for structural lookup storage"
    ],
    outcome: "Empowers your business layout with competitive commercial databases scraped continuously with total process autonomy."
  },
  {
    id: "microservices",
    index: "05",
    icon: Zap,
    title: "Transactional Microservices & CRM Workflows",
    tag: "OPERATIONAL MIDDLEWARE",
    summary: "Wiring decoupled middleware relays that manage dynamic inbound funnels, support instances, and instant transactional loops.",
    capabilities: [
      "Resend mail API configurations mapping custom notification scripts",
      "Tawk.to customer support widgets for live user communication tracking",
      "Custom webhooks routing incoming operations directly to database tables",
      "Granular role-based user authentication permissions layout checks"
    ],
    outcome: "Automates repetitive manual administration tasks, driving hot business opportunities straight to your sales personnel."
  },
  {
    id: "bi",
    index: "06",
    icon: BarChart3,
    title: "Business Intelligence Panels & Admin Hubs",
    tag: "EXECUTIVE GLASS PANES",
    summary: "Designing comprehensive data visualization systems that let your internal management teams control applications securely.",
    capabilities: [
      "Custom analytics widgets monitoring system activity variables",
      "Full CMS access controls editing site copies, metrics, and parameters",
      "Secure administrative tables tracking high-volume transaction entries",
      "Low-latency relational database lookups for clean metric extraction"
    ],
    outcome: "Gives your operational units absolute monitoring control over multi-site applications from an isolated cockpit view."
  }
];

export default function ServicesPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0); // Default open first line for premium density

  return (
    <main className="pt-40 pb-24 bg-dark-bg min-h-screen saas-grid selection:bg-accent/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Elite Layout Title Section Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 border-b border-dark-border pb-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3 font-mono">
              // Solutions Architecture
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
              Capabilities <br />& Operations
            </h1>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-medium max-w-2xl">
              I deliver end-to-end digital engineering. By structuring specialized web interfaces alongside automated scraping systems and custom biometric pipelines, I transform operational bottlenecks into highly scalable software frameworks.
            </p>
          </div>
        </div>

        {/* Maxel-Inspired Asymmetric Interactive Row List */}
        <div className="mb-32 divide-y divide-dark-border border-y border-dark-border">
          {DETAILED_SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            const isHovered = hoveredIdx === idx;
            const isExpanded = expandedIdx === idx;

            return (
              <div
                key={srv.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="py-10 transition-colors duration-300 relative group cursor-pointer"
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
              >
                {/* Horizontal hover neon line glow anchor trace */}
                <div className="absolute left-0 top-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Column 1: Typographical Numbering & Icon */}
                  <div className="lg:col-span-2 flex items-center gap-6">
                    <span className={`text-sm font-mono font-bold tracking-widest transition-colors duration-300 ${
                      isExpanded || isHovered ? "text-accent" : "text-zinc-600"
                    }`}>
                      // {srv.index}
                    </span>
                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                      isExpanded || isHovered ? "bg-accent/10 border-accent text-accent" : "bg-dark-card border-dark-border text-zinc-500"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Column 2: Core Core Context Info Block */}
                  <div className="lg:col-span-5">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 tracking-widest block mb-2 uppercase">
                      {srv.tag}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3 transition-colors duration-300 group-hover:text-accent">
                      {srv.title}
                    </h2>
                    <p className="text-sm text-zinc-400 leading-relaxed font-medium pr-4">
                      {srv.summary}
                    </p>
                  </div>

                  {/* Column 3: Commercial Benefit Statement */}
                  <div className="lg:col-span-4 flex items-center">
                    <div className="bg-dark-card border border-dark-border/80 p-4 rounded-xl w-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-[2px] bg-accent/30" />
                      <span className="text-[9px] font-mono font-bold text-zinc-600 uppercase tracking-widest block mb-1">Commercial Outcome:</span>
                      <p className="text-xs text-zinc-300 font-medium italic leading-relaxed">
                        {srv.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Column 4: Interactive Micro Toggle Indicator Button */}
                  <div className="lg:col-span-1 flex justify-end items-center h-full pt-4 lg:pt-0">
                    <div className="w-8 h-8 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
                      {isExpanded ? <Minus className="w-3 h-3 text-accent" /> : <Plus className="w-3 h-3" />}
                    </div>
                  </div>

                </div>

                {/* Smooth Expandable Functional Specs Workspace Container */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 mt-8 border-t border-dark-border/40 bg-gradient-to-b from-dark-card/20 to-transparent p-6 rounded-xl">
                        <div className="lg:col-span-2 hidden lg:block" />
                        <div className="lg:col-span-10">
                          <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-4">
                            // Scope Parameters & Architecture Deliverables
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {srv.capabilities.map((cap, cIdx) => (
                              <div key={cIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-mono">
                                <span className="text-accent font-bold select-none">•</span>
                                <span className="leading-relaxed text-zinc-400">{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Enterprise Bottom Scoping Direct Call */}
        <div className="bg-gradient-to-r from-dark-card to-zinc-950 border border-dark-border rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden premium-glow shadow-2xl">
          <div className="max-w-xl relative z-10">
            <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
              Require a Custom Architectural Integration?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
              If your business operations call for isolated telemetry scraping scripts, specialized machine learning setups, or multi-tenant deployment rules, let&apos;s map out your parameters.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-full bg-accent text-black font-extrabold text-sm uppercase tracking-wider hover:bg-accent-hover transition-colors whitespace-nowrap shrink-0 group relative z-10"
          >
            Launch System Scoping
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </main>
  );
}