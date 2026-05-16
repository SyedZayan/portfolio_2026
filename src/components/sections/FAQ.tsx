"use html";
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Can you handle complete architecture setup, or do you only build components?",
    a: "I handle the entire engineering pipeline. This includes designing scalable relational database schemas, setting up row-level security authentication matrices, deploying optimized backend APIs, and engineering polished frontend interfaces.",
  },
  {
    q: "What is your typical software stack for an AI-powered SaaS product?",
    a: "For high-performance web systems, I use Next.js (App Router), TypeScript, and Tailwind CSS. The database layer is typically managed via Supabase or SQL Server. Computational workflows and custom machine learning modules are written using Python engines.",
  },
  {
    q: "How do you ensure enterprise-grade data security with AI integrations?",
    a: "Security is baked directly into the data model layer. I configure strict row-level security (RLS) tables, manage credentials securely via isolated environment variables, and structure custom endpoints to block code injection vulnerabilities completely.",
  },
  {
    q: "Do you offer post-launch operational support or source code handovers?",
    a: "100%. Once an application passes deployment audits, full administrative ownership and clean GitHub repository access are signed over directly to your team. I also offer dedicated operational agreements for continued maintenance updates.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-dark-bg border-t border-dark-border relative saas-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3 font-mono">
            // Frictional Mitigation
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Frequently Answered Questions
          </h2>
        </div>

        {/* Accordions Wrapper Grid */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div 
                key={idx}
                className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-dark-border/80"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-6 h-6 rounded-md bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? <Minus className="w-3 h-3 text-accent" /> : <Plus className="w-3 h-3" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-400 leading-relaxed border-t border-dark-border/30 bg-dark-bg/20">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}