"use html";
"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "Frontend Architecture",
    index: "// 01",
    skills: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Responsive Interface Logic"],
  },
  {
    category: "Backend & Cloud Layer",
    index: "// 02",
    skills: ["Supabase Realtime", "PostgreSQL", "RESTful API Processing", "NextJS Route Handlers", "Database Migration"],
  },
  {
    category: "Data Processing & AI Pipeline",
    index: "// 03",
    skills: ["Python Scripting", "Machine Learning Engines", "Deep Learning Architectures", "SQL Server Matrix"],
  },
  {
    category: "Operational Environments",
    index: "// 04",
    skills: ["Git / GitHub Engine", "Vercel Deploy Networks", "Business Intelligence Dashboards", "Admin Operations Panel"],
  },
];

export default function Skills() {
  return (
    <section className="py-28 bg-dark-bg border-t border-dark-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mb-20 max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3 font-mono">
            // Full-Stack Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            The Technology Matrix
          </h2>
        </div>

        {/* Structured Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-dark-card border border-dark-border p-8 rounded-2xl relative premium-glow"
            >
              <div className="flex justify-between items-center mb-6 border-b border-dark-border/60 pb-4">
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  {group.category}
                </h3>
                <span className="text-xs font-mono text-accent font-bold">
                  {group.index}
                </span>
              </div>

              {/* Individual Skill Capsules */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-dark-bg/80 text-zinc-300 border border-dark-border/80 px-3 py-1.5 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}