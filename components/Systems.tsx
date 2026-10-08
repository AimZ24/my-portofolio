"use client";

import { Terminal, Shield, Cpu, Database } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Cpu,
    category: "Commerce & POS Systems",
    title: "Transactional Integrity & Checkout Pipelines",
    description:
      "Engineered point of sale flows in Three-Kasir to ensure total order consistency. Prevents orphaned cart records, provides rapid price lookups, and calculates multi-item tax balances deterministically.",
    points: [
      "State isolation preventing cart drift during concurrent modifications",
      "Defensive validation checking catalog inventory before order confirmation",
      "High-contrast cashier interface tuned for fast keyboard and touch operation",
    ],
  },
  {
    icon: Shield,
    category: "Industrial Trade Logistics",
    title: "Document Governance & Regulatory Compliance",
    description:
      "Designed the export industry Document Management System to handle stringent international customs requirements. Coordinates shipping documentation, bills of lading, and multi-tier verification chains.",
    points: [
      "Role-based access controls separating clerks, verifiers, and customs officers",
      "Immutable document revision history tracking revisions across the shipping cycle",
      "Defensive field validations for harmonized tariff codes and multi-currency invoices",
    ],
  },
  {
    icon: Database,
    category: "Web Platforms & Architecture",
    title: "Edge Delivery, Performance & Semantic Layouts",
    description:
      "Built responsive production web solutions like Bisnara. Implements semantic HTML, accessible interactions meeting WCAG AA contrast rules, and server rendering for low time-to-first-byte.",
    points: [
      "Next.js App Router structure with optimized component code boundaries",
      "Responsive CSS with fluid typography avoiding device-specific breakage",
      "Motion-backed UI with fallbacks for prefers-reduced-motion environments",
    ],
  },
];

export function Systems() {
  return (
    <section id="systems" className="py-14 md:py-20 border-b-2 border-black dark:border-white bg-[#fbf8f2] dark:bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Title */}
        <div className="space-y-3 max-w-3xl">
          <span className="font-mono font-black text-xs uppercase tracking-wider px-2 py-0.5 bg-[#fde047] text-black border-2 border-black inline-block shadow-brutal-sm">
            [02] ARCHITECTURAL SPEC // ENGINEERING METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-black dark:text-white">
            How I Architect Software Systems.
          </h2>
          <p className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base leading-relaxed">
            Engineering competence is demonstrated through how systems handle edge cases, transactional integrity, and user constraints, rather than arbitrary percentage bars.
          </p>
        </div>

        {/* 3 Pillar Systems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="border-2 border-black dark:border-white bg-white dark:bg-[#121316] shadow-brutal-lg dark:shadow-brutal-dark-lg flex flex-col justify-between"
              >
                <div>
                  {/* Card Title Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-black text-white dark:bg-white dark:text-black border-b-2 border-black dark:border-white">
                    <span className="font-mono text-xs font-black uppercase tracking-wider">
                      PILLAR [0{idx + 1}]
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase px-1.5 py-0.5 bg-[#fde047] text-black border border-black">
                      ACTIVE
                    </span>
                  </div>

                  <div className="p-6 space-y-5">
                    <div className="w-11 h-11 border-2 border-black dark:border-white bg-[#fde047] text-black flex items-center justify-center shadow-brutal-sm">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold uppercase text-zinc-500 dark:text-zinc-400 block mb-1">
                        {cap.category}
                      </span>
                      <h3 className="text-xl font-sans font-black text-black dark:text-white">
                        {cap.title}
                      </h3>
                    </div>

                    <p className="text-zinc-800 dark:text-zinc-200 text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t-2 border-black dark:border-white mt-6 pt-4 bg-[#fbf8f2] dark:bg-[#09090b]">
                  <ul className="space-y-2 text-xs font-mono text-zinc-800 dark:text-zinc-200">
                    {cap.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="font-black text-amber-700 dark:text-amber-400 shrink-0">[&bull;]</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Stack Specifications */}
        <div className="border-2 border-black dark:border-white bg-white dark:bg-[#121316] shadow-brutal-lg dark:shadow-brutal-dark-lg">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-black text-white dark:bg-white dark:text-black border-b-2 border-black dark:border-white">
            <Terminal className="w-4 h-4" aria-hidden="true" />
            <h3 className="text-xs font-mono font-black uppercase tracking-wider">
              ACTIVE ENVIRONMENT SPECIFICATION
            </h3>
          </div>

          <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black dark:divide-white">
            <div className="pt-2 sm:pt-0 sm:pr-4">
              <span className="text-zinc-500 dark:text-zinc-400 uppercase font-bold block mb-1 text-[10px]">Core Languages</span>
              <p className="text-black dark:text-white font-bold">TypeScript, JavaScript, SQL</p>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4">
              <span className="text-zinc-500 dark:text-zinc-400 uppercase font-bold block mb-1 text-[10px]">Frameworks</span>
              <p className="text-black dark:text-white font-bold">Next.js App Router, React 19</p>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4">
              <span className="text-zinc-500 dark:text-zinc-400 uppercase font-bold block mb-1 text-[10px]">Styling & Layout</span>
              <p className="text-black dark:text-white font-bold">Tailwind CSS, Motion</p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-4">
              <span className="text-zinc-500 dark:text-zinc-400 uppercase font-bold block mb-1 text-[10px]">Infrastructure</span>
              <p className="text-black dark:text-white font-bold">Vercel, Git, GitHub AimZ24</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
