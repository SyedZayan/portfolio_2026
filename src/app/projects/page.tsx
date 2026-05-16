"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, FolderGit2, Database, ShieldCheck, Cpu, Code2 } from "lucide-react";

// Complete database of your 6 shipped production applications
const ALL_PROJECTS = [
  {
    id: "bricketx-global",
    name: "BricketX Global Investment Platform",
    category: "FINTECH & AI",
    problem: "An international asset investment group required a secure mechanism to manage multi-tenant investor onboarding, display real-time tracking metrics, and execute legally binding biometric identity verification securely.",
    solution: "Engineered full stack infrastructure syncing Next.js and serverless databases. Deployed AWS Rekognition face verification loops for user-ID matching, OCR text engines to scan document parameters, live gold pricing API grids, and automated transactional alerts via Resend.",
    techStack: ["Next.js", "TypeScript", "Supabase", "AWS Rekognition", "OCR APIs", "Resend", "Tawk.to"],
    result: "Deployed a secure, production-grade investor ecosystem with entirely automated KYC verification sequences and real-time market syncing logs.",
    link: "https://www.bricketx.com/",
    imageType: ShieldCheck
  },
  {
    id: "bricketx-uae",
    name: "BricketX UAE Regional Deployment",
    category: "FINTECH & AI",
    problem: "Scaling the established investment pipeline architecture to tightly fit specific localized opportunity modules, strict regional schemas, and content configurations for the UAE market.",
    solution: "Optimized a high-performance content matrix, constructed dynamic localized opportunity modules, integrated secure client lead generation capturing forms, and deployed optimized edge network architecture.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Form Integration", "SEO Tuning"],
    result: "Delivered an authoritative, edge-optimized web asset fully prepared for heavy local marketing acquisition campaigns.",
    link: "https://www.bricketx.ae/",
    imageType: Code2
  },
  {
    id: "maq-investments",
    name: "MAQ Investments Corporate Platform",
    category: "CORPORATE HUBS",
    problem: "A high-end investment company required an elite digital platform to present structured asset plans and safely log high-net-worth investor inquiry workflows.",
    solution: "Developed a clean, responsive layout network containing multi-tier dynamic pages for tracking plans, unified customer inquiry paths, and automated data routing parameters.",
    techStack: ["Next.js", "TypeScript", "Dynamic Routing", "Inquiry Routing", "Vercel"],
    result: "Provides an authoritative, low-latency platform that seamlessly converts cold traffic into structured backend database opportunities.",
    link: "https://maqinvestments.ae/",
    imageType: Database
  },
  {
    id: "mintrix-contracting",
    name: "Mintrix Contracting Operations Hub",
    category: "CORPORATE HUBS",
    problem: "An industrial engineering contractor needed to scale their corporate footprint to showcase massive historical project grids and funnel custom commercial B2B contract bids.",
    solution: "Designed a clean, modular responsive web frontend containing service architecture catalogs, dynamic filterable project display grids, and secure corporate inquiry routing handlers.",
    techStack: ["React", "Next.js", "TailwindCSS", "Edge Deployment", "B2B Funnels"],
    result: "Unified disparate business units into a scannable, fully responsive network that accelerates high-ticket corporate bidding cycles.",
    link: "https://www.mintrixcontracting.com/",
    imageType: Code2
  },
  {
    id: "mintrix-trading",
    name: "Mintrix Trading B2B Portal",
    category: "AUTOMATION & API",
    problem: "A commodity trading firm required a visual platform to handle international presentation layers, outline service modules, and automate backend inbound form routing.",
    solution: "Configured a sleek trading company layout, wired automated backend form processors, optimized semantic search layout tags, and built clean asynchronous contact pipelines.",
    techStack: ["Next.js", "TailwindCSS", "Form Automation", "SEO Optimization"],
    result: "Streamlined operational digital asset facilitating automated B2B lead generation pipelines with absolute zero processing lag.",
    link: "https://www.mintrixtrading.com/",
    imageType: Cpu
  },
  {
    id: "mintrix-world",
    name: "Mintrix World Enterprise Shell",
    category: "AUTOMATION & API",
    problem: "A holding organization required a unified corporate footprint equipped with clean, lightweight layouts and CMS-ready component scaling structures.",
    solution: "Engineered a high-performance modern frontend shell framework, structured optimized content layers, and deployed an intuitive secure business communication mesh.",
    techStack: ["Next.js", "TypeScript", "CMS-Ready Architecture", "Edge Optimization"],
    result: "Implemented a highly scalable digital asset performing at peak performance metrics across all international tracking screens.",
    link: "https://www.mintrix.world/",
    imageType: Database
  }
];

const CATEGORIES = ["ALL WORKS", "FINTECH & AI", "AUTOMATION & API", "CORPORATE HUBS"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL WORKS");

  const filteredProjects = ALL_PROJECTS.filter((proj) => 
    activeFilter === "ALL WORKS" ? true : proj.category === activeFilter
  );

  return (
    <main className="pt-40 pb-24 bg-dark-bg min-h-screen saas-grid selection:bg-accent/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Context Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-3 font-mono">
            // Engineering Case Studies
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase mb-6 leading-none">
            Production Deployments
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-medium">
            Explore the technical parameters, system integrations, and business impact metrics behind applications shipped for regional and global businesses.
          </p>
        </div>

        {/* Maxel-Inspired Premium Category Navigation Bar */}
        <div className="flex flex-wrap gap-2 border-b border-dark-border/60 pb-6 mb-16">
          {CATEGORIES.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-mono font-bold tracking-wider uppercase px-5 py-2.5 rounded-lg border transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? "bg-accent text-black border-accent shadow-lg shadow-accent/5" 
                    : "bg-dark-card border-dark-border text-zinc-500 hover:text-zinc-300 hover:border-dark-border/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filter-Linked Case Study Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const StructuralIcon = project.imageType;
              
              return (
                <motion.div
                  layout
                  variants={cardVariants}
                  key={project.id}
                  className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between premium-glow relative group hover:border-dark-border/80 transition-all duration-300"
                >
                  <div>
                    {/* Top System Header */}
                    <div className="flex items-center justify-between border-b border-dark-border/50 pb-4 mb-5">
                      <span className="text-[10px] font-mono font-bold text-accent tracking-widest bg-accent/5 border border-accent/10 px-2.5 py-1 rounded-md">
                        {project.category}
                      </span>
                      <StructuralIcon className="w-4 h-4 text-zinc-600 group-hover:text-accent transition-colors duration-300" />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-5 group-hover:text-accent-muted transition-colors">
                      {project.name}
                    </h2>

                    {/* Operational Metric Core Breakdown */}
                    <div className="space-y-4 border-l border-dark-border/60 pl-4 mb-6 text-xs leading-relaxed">
                      <div>
                        <span className="font-mono text-zinc-500 font-bold block mb-0.5 uppercase tracking-wider">// Challenge Parameters</span>
                        <p className="text-zinc-400 font-medium">{project.problem}</p>
                      </div>
                      <div>
                        <span className="font-mono text-zinc-500 font-bold block mb-0.5 uppercase tracking-wider">// Engineered System</span>
                        <p className="text-zinc-400 font-medium">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Payload section */}
                  <div className="mt-4">
                    {/* Real Quantifiable Impact Banner */}
                    <div className="bg-dark-bg/60 border border-dark-border/50 p-3.5 rounded-xl mb-6">
                      <span className="text-[9px] font-mono font-bold text-accent uppercase tracking-widest block mb-1">// Production Result:</span>
                      <p className="text-xs text-zinc-200 font-semibold italic">{project.result}</p>
                    </div>

                    {/* Tech Badges Row */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono bg-dark-bg text-zinc-500 border border-dark-border/60 px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Live Outbound Tab Triggers */}
                    <div className="pt-4 border-t border-dark-border/40 flex justify-end">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group/link font-mono"
                      >
                        <FolderGit2 className="w-4 h-4 text-accent" />
                        Explore Live Network
                        <ArrowUpRight className="w-3.5 h-3.5 text-accent opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}