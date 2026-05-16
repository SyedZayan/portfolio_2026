"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  {
    text: "Engineered our investment onboarding sequence with absolute architectural reliability and data safety.",
    client: "BricketX Project Lead"
  },
  {
    text: "The custom scraping pipeline extracted thousands of records smoothly with zero pipeline lag loops.",
    client: "Mintrix Data Analytics"
  },
  {
    text: "Transformed cold user funnels into tracked, secure operational database structures cleanly.",
    client: "MAQ Investments Executive"
  },
  {
    text: "Clean components, fast rendering benchmarks, and absolute process transparency from day one.",
    client: "Glovix Operations Hub"
  }
];

export default function TestimonialStrip() {
  return (
    <div className="bg-dark-bg border-y border-dark-border relative overflow-hidden py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 lg:divide-x divide-dark-border/60">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              key={idx}
              className="pt-6 md:pt-0 lg:pl-6 first:pl-0 flex flex-col justify-between"
            >
              <div>
                {/* 5 Star Precision Rating Graphic */}
                <div className="flex gap-0.5 text-accent mb-3.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xs">★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed mb-4">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold text-zinc-600 tracking-wider block uppercase">
                // {rev.client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}