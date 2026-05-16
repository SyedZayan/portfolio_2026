"use html";
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-32 bg-dark-bg border-t border-dark-border relative saas-grid overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark-card border border-dark-border rounded-3xl p-8 sm:p-16 premium-glow"
        >
          <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-4 font-mono">
            // Capitalize Infrastructure Growth
          </span>
          
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight uppercase mb-6 max-w-3xl mx-auto leading-tight">
            Have an idea for a SaaS, dashboard, or AI app?
          </h2>
          
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s map out your functional scope, configure your data flows, and ship an optimized solution configured for client adoption.
          </p>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-accent text-black font-extrabold text-base hover:bg-accent-hover transition-colors shadow-xl shadow-accent/10 group"
            >
              Let&apos;s Build It
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}