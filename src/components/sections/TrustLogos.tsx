"use client";

import { motion } from "framer-motion";

const VERIFIED_PARTNERS = [
  { name: "BRICKETX FINANCIAL", domain: "FINTECH" },
  { name: "MINTRIX CONTRACTING", domain: "ENTERPRISE B2B" },
  { name: "MAQ INVESTMENTS", domain: "ASSET ENGINE" },
  { name: "BRICKETX UAE", domain: "REGIONAL INFRASTRUCTURE" },
];

export default function TrustLogos() {
  return (
    <section className="py-20 bg-dark-bg border-t border-dark-border relative overflow-hidden saas-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          className="text-[11px] font-mono font-bold tracking-[0.25em] text-zinc-400 uppercase block mb-12"
        >
          // VERIFIED SYSTEM DEPLOYMENTS & PARTNERSHIPS
        </motion.span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {VERIFIED_PARTNERS.map((partner, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ borderColor: "rgba(2, 185, 132, 0.2)", backgroundColor: "#09090B" }}
              key={idx}
              className="bg-dark-card/40 border border-dark-border/80 px-6 py-8 rounded-xl flex flex-col items-center justify-center premium-glow group transition-all duration-300 select-none"
            >
              <span className="text-sm font-black tracking-wider text-zinc-400 group-hover:text-white transition-colors duration-300 font-sans">
                {partner.name}
              </span>
              <span className="text-[9px] font-mono text-zinc-600 tracking-widest mt-1.5 block">
                {partner.domain}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}