"use html";
"use client";

import { motion } from "framer-motion";
import { Terminal, CheckCircle, Code, ShieldCheck, Cpu } from "lucide-react";

const EXPERIENCES = [
  "Developed 6+ production websites for UAE/Pakistan businesses",
  "Built custom KYC system using AWS face verification arrays",
  "Implemented ML-driven OCR document extraction workflows",
  "Integrated live financial APIs (gold rates / real-time market data grids)",
  "Built automated corporate mailing systems via transactional routers",
  "Worked deeply with Supabase backend relational database architectures",
  "Created secure high-end administrative dashboards with granular panels",
  "Designed clean, performant relational database schemas and migration workflows",
  "Managed live product deployments and enterprise cloud production operations",
  "Executed Machine Learning experimentation and research implementation pipelines",
  "Architected large-scale web scraping script networks (extracting 120K+ records cleanly)"
];

const SOLUTIONS_DELIVERED = [
  "Investment platforms",
  "KYC verification systems",
  "Web scraping automation",
  "Business dashboards",
  "ERP systems",
  "Machine learning prototypes",
  "API integrations",
  "Research systems"
];

export default function AboutPage() {
  return (
    <main className="pt-40 pb-24 bg-dark-bg min-h-screen saas-grid selection:bg-accent/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Profile Pitch Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-28 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3 font-mono">
              // Core Operator Identity
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase mb-6 leading-none">
              Engineering <br />Real Working <br />Products.
            </h1>
          </div>
          
          <div className="lg:col-span-7 text-zinc-400 space-y-6 text-base sm:text-lg leading-relaxed">
            <p>
              I’m <span className="text-white font-semibold">Syed Zayan Ali</span>, a Computer Science student and production-focused developer specializing in building end-to-end digital architectures—from high-stakes investment grids to high-volume web scraping automated arrays.
            </p>
            <p>
              My execution footprint spans full-stack web applications, custom Python middleware pipelines, predictive machine learning models, and complex administrative control environments.
            </p>
            <p className="text-zinc-300 border-l-2 border-accent pl-6 italic bg-dark-card/40 py-4 pr-4 rounded-r-xl border-y border-r border-dark-border/40">
              “I’ve shipped live corporate platforms for international businesses including BricketX, Mintrix World, and MAQ Investments—handling everything from structural frontend rendering engines to biometric verification microservices.”
            </p>
            <p className="text-sm sm:text-base text-zinc-500">
              My engineering focus is straightforward: I eliminate code vanity and build secure, performance-tuned assets that solve actual, friction-heavy business operations.
            </p>
          </div>
        </div>

        {/* Client Solutions Grid Section */}
        <div className="mb-28">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-2 font-mono">
              // Proven Capability Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Client Solutions Shipped
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SOLUTIONS_DELIVERED.map((solution, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, borderColor: "rgba(226, 184, 87, 0.3)" }}
                className="bg-dark-card border border-dark-border p-5 rounded-xl flex items-center gap-3 premium-glow cursor-default transition-all duration-300"
              >
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-zinc-200 font-medium tracking-tight">{solution}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Experience Terminal Log */}
        <div>
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-2 font-mono">
              // Audited Competency Log
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Technical Verification History
            </h2>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8 font-mono premium-glow shadow-2xl">
            {/* Terminal Window Chrome Headers */}
            <div className="flex items-center justify-between border-b border-dark-border/60 pb-4 mb-6 text-xs text-zinc-600">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>zayan_operator_logs.sh</span>
              </div>
              <span className="hidden sm:inline">SYSTEM STATUS: OPTIMIZED</span>
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
                  className="flex items-start gap-3 group text-xs sm:text-sm"
                >
                  <span className="text-accent font-bold select-none shrink-0">{`>`}</span>
                  <p className="text-zinc-400 group-hover:text-zinc-200 transition-colors leading-relaxed">
                    {log}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}