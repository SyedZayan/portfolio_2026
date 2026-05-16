"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, Send, ShieldAlert } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", projectType: "SaaS MVP", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated API Endpoint action payload delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", projectType: "SaaS MVP", message: "" });
    }, 1500);
  };

  return (
    <main className="pt-40 pb-24 bg-dark-bg min-h-screen saas-grid selection:bg-accent/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Core Positioning Matrix */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3 font-mono">
              // Inbound Pipeline
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase mb-6 leading-none">
              Let&apos;s Scope <br />Your Product
            </h1>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-10 max-w-md">
              Seeking reliable architecture, complex AI pipelines, or high-throughput dashboards? Drop your operational specifications here, or book an engineering call directly.
            </p>

            {/* Direct Connect Options */}
            <div className="space-y-4">
              {/* LinkedIn Vector Anchor */}
              <a 
                href="https://www.linkedin.com/in/syed-zayanali/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-dark-card border border-dark-border p-4 rounded-xl group hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 group-hover:text-accent transition-colors">
                  <svg 
                    className="w-4 h-4" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 block tracking-wider">// Professional Grid</span>
                  <span className="text-sm text-zinc-300 font-semibold group-hover:text-white transition-colors">LinkedIn Profile</span>
                </div>
              </a>

              {/* GitHub Vector Anchor */}
              <a 
                href="https://github.com/SyedZayan" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-dark-card border border-dark-border p-4 rounded-xl group hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 group-hover:text-accent transition-colors">
                  <svg 
                    className="w-4 h-4" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 block tracking-wider">// Repository Source</span>
                  <span className="text-sm text-zinc-300 font-semibold group-hover:text-white transition-colors">SyedZayan Blueprint</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: High-Conversion Intake Form Component */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-dark-card border border-dark-border rounded-3xl p-6 sm:p-10 premium-glow"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase text-gray-500 block mb-2 tracking-wider">Identity Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alexander Vance"
                      className="w-full bg-dark-bg text-white text-sm border border-dark-border px-4 py-3.5 rounded-xl focus:outline-none focus:border-accent/50 transition-colors placeholder:text-zinc-700"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase text-gray-500 block mb-2 tracking-wider">Corporate Email *</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="vance@enterprise.com"
                      className="w-full bg-dark-bg text-white text-sm border border-dark-border px-4 py-3.5 rounded-xl focus:outline-none focus:border-accent/50 transition-colors placeholder:text-zinc-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono font-bold uppercase text-gray-500 block mb-2 tracking-wider">Target Domain Ecosystem</label>
                  <select 
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full bg-dark-bg text-white text-sm border border-dark-border px-4 py-3.5 rounded-xl focus:outline-none focus:border-accent/50 transition-colors cursor-pointer"
                  >
                    <option value="SaaS MVP">Full-Stack SaaS MVP Development</option>
                    <option value="AI Integration">Computational AI Feature Integration</option>
                    <option value="BI Dashboard">Business Intelligence / Data Dashboard</option>
                    <option value="API Automation">API Systems & Workflow Automation</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-mono font-bold uppercase text-gray-500 block mb-2 tracking-wider">Functional Scope Specifications *</label>
                  <textarea 
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Outline your application logic, core data sources, or key parameters..."
                    className="w-full bg-dark-bg text-white text-sm border border-dark-border px-4 py-3.5 rounded-xl focus:outline-none focus:border-accent/50 transition-colors placeholder:text-zinc-700 resize-none"
                  />
                </div>

                {/* Status Callout Banner Notifications */}
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="p-4 bg-accent/5 border border-accent/20 rounded-xl flex items-center gap-3 text-xs text-accent font-medium"
                  >
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    Specifications transmitted successfully. Expect an analytical follow-up within 12 operational hours.
                  </motion.div>
                )}

                {/* Trigger Control */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-accent text-black font-extrabold text-sm uppercase tracking-wider hover:bg-accent-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent/5 cursor-pointer"
                >
                  {isSubmitting ? "TRANSMITTING..." : "TRANSMIT SPECIFICATIONS"}
                  <Send className="w-3.5 h-3.5" />
                </button>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </main>
  );
}