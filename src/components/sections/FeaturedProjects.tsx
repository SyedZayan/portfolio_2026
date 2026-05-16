"use client";

import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/content";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  return (
    <section className="py-32 bg-dark-bg border-t border-dark-border relative saas-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Refined Reveal Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3 font-mono">
              // Selected Deployments
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
              Case Studies
            </h2>
          </div>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-accent mt-4 md:mt-0 transition-colors group"
          >
            Explore All Enterprise Works
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Project Alternating Layout Rows */}
        <div className="space-y-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative group"
              >
                
                {/* Visual Image Mockup Column */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <motion.div 
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative bg-dark-card border border-dark-border p-2 rounded-2xl premium-glow shadow-2xl overflow-hidden aspect-[16/10] transition-colors duration-500 group-hover:border-dark-border/80"
                  >
                    {/* Top Browser Bar Utility Decoration */}
                    <div className="flex gap-1.5 px-3 py-2 border-b border-dark-border/40 bg-dark-bg/40 rounded-t-xl">
                      <div className="w-2 h-2 rounded-full bg-zinc-800" />
                      <div className="w-2 h-2 rounded-full bg-zinc-800" />
                      <div className="w-2 h-2 rounded-full bg-zinc-800" />
                    </div>

                    {/* Image Render Layer */}
                    <div className="relative w-full h-full overflow-hidden rounded-b-xl bg-zinc-950">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover object-top opacity-60 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                        sizes="(max-w-7xl) 50vw, 100vw"
                        priority={index === 0}
                      />
                      {/* Premium subtle layout gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80 pointer-events-none" />
                    </div>
                  </motion.div>
                </div>

                {/* Technical Pitch Narrative Column */}
                <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"}`}>
                  <div className="mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-accent bg-accent/5 border border-accent/20 px-3 py-1 rounded-md uppercase">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6 leading-tight transition-colors duration-300 group-hover:text-accent-muted">
                    {project.name}
                  </h3>

                  {/* Operational Metrics Sub-grid */}
                  <div className="space-y-6 border-l border-dark-border pl-6 mb-8 relative">
                    {/* Active dynamic accent vertical timeline trace line */}
                    <div className="absolute top-0 left-0 h-0 w-[1px] bg-accent transition-all duration-700 group-hover:h-full" />
                    
                    <div>
                      <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-1">// The Challenge</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed font-medium">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-1">// Engineered Solution</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed font-medium">{project.solution}</p>
                    </div>
                    <div className="bg-dark-card border border-dark-border/60 p-4 rounded-xl relative overflow-hidden">
                      <h4 className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase mb-1">// Business Impact Metric</h4>
                      <p className="text-xs sm:text-sm text-zinc-200 font-semibold leading-relaxed">{project.result}</p>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[11px] font-mono bg-dark-card text-zinc-400 border border-dark-border/80 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Target External Redirection Redirects */}
                  <div>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group/link font-mono"
                    >
                      <FolderGit2 className="w-4 h-4 text-accent" />
                      Examine Live Production
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all text-accent" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}