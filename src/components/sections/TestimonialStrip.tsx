"use client";

import { motion, Variants } from "framer-motion";

const REVIEWS = [
  {
    text: "Engineered our investment onboarding sequence with absolute architectural reliability and data safety.",
    name: "Syed Rohan Ali",
    role: "Project Lead",
    company: "BricketX Global",
    initials: "RA"
  },
  {
    text: "The custom scraping pipeline extracted thousands of records smoothly with zero pipeline lag loops.",
    name: "Marcus Vance",
    role: "Operations Director",
    company: "Mintrix Contracting",
    initials: "MV"
  },
  {
    text: "Transformed cold user funnels into tracked, secure operational database structures cleanly.",
    name: "Tariq Malik",
    role: "Investment Advisor",
    company: "MAQ Investments",
    initials: "TM"
  },
  {
    text: "Clean components, fast rendering benchmarks, and absolute process transparency from day one.",
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "Glovix Hub",
    initials: "SM"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, ease: "easeOut" }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function TestimonialStrip() {
  return (
    <div className="bg-dark-bg border-y border-dark-border relative overflow-hidden py-20 saas-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stagger-Linked Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col justify-between h-full bg-dark-card/40 border border-dark-border/60 p-6 rounded-2xl premium-glow relative group transition-colors duration-300 hover:border-dark-border/80"
            >
              <div>
                {/* 5-Star Precision Rating Strip */}
                <div className="flex gap-0.5 text-accent mb-4.5 select-none">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[11px]">★</span>
                  ))}
                </div>
                
                {/* Clean Sanitized Copy Text */}
                <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Client Profile Identity Block Row */}
              <div className="flex items-center gap-3 pt-5 border-t border-dark-border/40 mt-auto">
                
                {/* Elite High-End Tech Fallback Avatar Icon Badge */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-b from-dark-bg to-zinc-950 border border-dark-border flex items-center justify-center font-mono text-[10px] font-bold text-zinc-400 group-hover:text-accent group-hover:border-accent/30 transition-all duration-500 shrink-0 select-none shadow-inner">
                  {rev.initials}
                </div>

                <div className="leading-tight overflow-hidden">
                  <h4 className="text-xs font-bold text-white tracking-tight font-sans truncate transition-colors duration-300 group-hover:text-accent-muted">
                    {rev.name}
                  </h4>
                  <div className="text-[10px] font-mono text-zinc-500 mt-0.5 truncate flex items-center gap-1">
                    <span className="text-zinc-600 font-bold">//</span>
                    <span>{rev.role}, {rev.company}</span>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
}