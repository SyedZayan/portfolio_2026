"use client";

import { SERVICES } from "@/data/content";

export default function ServicesList() {
  return (
    <section className="py-24 bg-dark-bg border-t border-dark-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            // Core Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-6">
            Engineering High-Performance Business Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            I don&apos;t just build interfaces. I construct secure, end-to-end digital assets equipped with complex backends, internal dashboards, and intelligent computational layers designed to solve actual corporate operational challenges.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-dark-card border border-dark-border p-8 rounded-2xl flex flex-col justify-between premium-glow hover:border-dark-border/80 transition-all duration-300"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Corporate Benefit Focus */}
                <div className="pt-4 border-t border-dark-border/40">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                    Business Outcome:
                  </span>
                  <p className="text-xs text-accent/90 italic leading-relaxed">
                    {service.benefit}
                  </p>
                  
                  {/* Mini Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {service.tech.map((t) => (
                      <span key={t} className="text-[10px] bg-dark-bg text-gray-400 border border-dark-border px-2 py-0.5 rounded-md font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}