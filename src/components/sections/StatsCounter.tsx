"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function CounterNumber({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <span className="font-sans font-black text-white text-4xl sm:text-5xl tracking-tighter">
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const stats = [
    { target: 6, suffix: "+", label: "PRODUCTION ARCHITECTURES DEPLOYED" },
    { target: 120000, suffix: "+", label: "DATA RECORDS EXTRACTED CLEANLY" },
    { target: 100, suffix: "%", label: "AUTOMATED KYC VALIDATION MATCH RATE" },
    { target: 12, suffix: "HR", label: "MAXIMUM SPECIFICATION RESPONSE TIME" },
  ];

  return (
    <section className="py-16 bg-dark-bg border-b border-dark-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
              key={idx}
              className="flex flex-col border-l border-dark-border/80 pl-6 relative group"
            >
              {/* Dynamic decorative hover line bar */}
              <div className="absolute left-0 top-0 w-[1px] h-0 bg-accent transition-all duration-500 group-hover:h-full" />
              
              <CounterNumber value={stat.target} suffix={stat.suffix} />
              <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase mt-2 block leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}