"use client";

import { useState } from "react";
import { ExternalLink, Layers, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { ProjectModal, ProjectData } from "./ProjectModal";

const PROJECTS: ProjectData[] = [
  {
    id: "bisnara",
    title: "Bisnara",
    category: "web",
    categoryLabel: "Editorial Media Platform",
    description:
    "A digital business and economics publication built to present Indonesian industry, trade, and economic stories in a clear editorial format.",
    fullOverview:
    "Bisnara is a digital media platform focused on business, economics, industry, and international trade in Indonesia. The website was designed around a straightforward editorial experience — making important stories easy to discover, comfortable to read, and structured to feel like a serious publication rather than a typical content website.",
    highlights: [
    "Editorial-first interface designed for business and economic news",
    "Structured content experience across news, articles, and topic categories",
    "Responsive reading experience built around clarity, hierarchy, and speed",
    ],
    architectureNotes:
    "Designed as a production-ready editorial platform with a focus on content structure, discoverability, and a consistent reading experience across desktop and mobile.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://bisnara.web.id",
    statusBadge: "Live Production",
  },
  {
    id: "three-kasir",
    title: "Three-Kasir Point of Sale",
    category: "commerce",
    categoryLabel: "Commerce & Checkout",
    description:
      "Cashier and retail transaction engine designed for fast order calculations, catalog indexing, and checkout integrity.",
    fullOverview:
      "Three-Kasir is a dedicated POS cashier software built for operational speed in retail environments. It handles item selections, immediate basket recalculation, tax breakdowns, receipt summaries, and inventory accountability.",
    highlights: [
      "Immediate cart state mutations with defensive transaction validation",
      "Fast product catalog search and price tier lookups",
      "Clean UI focused on high contrast readability for checkout operators",
    ],
    architectureNotes:
      "Deterministic state management for transactional data, modular catalog components, offline-ready calculation logic.",
    techStack: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/AimZ24/Three-Kasir",
    statusBadge: "Open Source Repository",
  },
{
    id: "export-dms",
    title: "Export DMS",
    category: "enterprise",
    categoryLabel: "Export & Import Operations",
    description:
    "Document management system designed to organize and manage export-import documents throughout the shipment process.",
    fullOverview:
    "Export DMS is a document management platform built for export-import operations, bringing important trade documents into one structured workspace. The system helps users organize documents such as commercial invoices, packing lists, shipping documents, and supporting files while keeping each document connected to its related shipment and operational process.",
    highlights: [
    "Centralized management for export-import documents and shipment records",
    "Structured document organization based on shipments and operational stages",
    "Document status and workflow tracking for ongoing export processes",
    ],
    architectureNotes:
    "Designed around structured shipment records, document relationships, user access, and operational workflows to keep export documentation organized and traceable.",
    techStack: ["TypeScript", "Next.js", "Node.js", "SQL Database", "Tailwind CSS"],
    statusBadge: "Enterprise Case Study",
},

];

type CategoryFilter = "all" | "web" | "commerce" | "enterprise";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="py-14 md:py-20 border-b-2 border-black dark:border-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-black dark:border-white">
          <div className="space-y-2">
            <span className="font-mono font-black text-xs uppercase tracking-wider px-2 py-0.5 bg-[#fde047] text-black border-2 border-black inline-block shadow-brutal-sm">
              [01] SELECTED WORKS // REPOSITORY AUDIT
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-black dark:text-white">
              Verified Software Deployments.
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {[
              { id: "all", label: "ALL [3]" },
              { id: "web", label: "WEB PLATFORM" },
              { id: "commerce", label: "POS / COMMERCE" },
              { id: "enterprise", label: "EXPORT DMS" },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                  className={`min-h-[42px] px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border-2 border-black dark:border-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white ${
                    isActive
                      ? "bg-[#fde047] text-black shadow-none translate-x-[2px] translate-y-[2px]"
                      : "bg-white dark:bg-[#121316] text-black dark:text-white shadow-brutal-sm dark:shadow-brutal-dark-sm hover:translate-x-[1px] hover:translate-y-[1px]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty state check */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center border-2 border-dashed border-black dark:border-white bg-white dark:bg-[#121316] space-y-4 shadow-brutal dark:shadow-brutal-dark">
            <Layers className="w-10 h-10 mx-auto text-black dark:text-white" aria-hidden="true" />
            <p className="text-black dark:text-white font-mono font-bold text-sm">
              ZERO PROJECTS MATCH ACTIVE FILTER
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold uppercase border-2 border-black dark:border-white bg-[#fde047] text-black shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              Reset to All Projects
            </button>
          </div>
        ) : (
          /* Asymmetric Neo-Brutalist Layout */
          <div className="space-y-8">
            {/* Flagship Card (Bisnara) */}
            {filteredProjects.some((p) => p.id === "bisnara") && (
              <article className="border-2 border-black dark:border-white bg-white dark:bg-[#121316] shadow-brutal-lg dark:shadow-brutal-dark-lg">
                {/* Header ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-2.5 bg-black text-white dark:bg-white dark:text-black border-b-2 border-black dark:border-white">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 bg-emerald-400 border border-black inline-block" />
                    <span className="font-mono text-xs font-black uppercase tracking-wider">
                      PRIMARY WEB PLATFORM // bisnara.web.id
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider bg-[#fde047] text-black px-2 py-0.5 border border-black">
                    Live Production
                  </span>
                </div>

                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-sans font-black text-black dark:text-white tracking-tight">
                      Bisnara Web Platform Ecosystem
                    </h3>

                    <p className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base leading-relaxed">
                      Production web platform engineered for rapid content delivery, responsive layouts, and structured information architecture. Built with Next.js and Tailwind CSS for cross-device responsiveness with zero hydration latency.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Next.js", "TypeScript", "Tailwind CSS", "Vercel"].map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-mono font-bold border-2 border-black dark:border-white bg-[#fbf8f2] dark:bg-[#09090b] text-black dark:text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-between gap-4 h-full pt-4 lg:pt-0 lg:border-l-2 lg:border-black lg:dark:border-white lg:pl-6">
                    <div className="p-3 border-2 border-black dark:border-white bg-[#fbf8f2] dark:bg-[#09090b] font-mono text-xs space-y-1 text-black dark:text-white">
                      <p className="font-bold">TARGET: Production Live</p>
                      <p>PROTOCOL: HTTPS Edge Cached</p>
                      <p>INFRA: Vercel CDN</p>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-2">
                      <a
                        href="https://bisnara.web.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black shadow-brutal dark:shadow-brutal-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm dark:hover:shadow-brutal-dark-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
                      >
                        <span>Visit Deployment</span>
                        <ArrowUpRight className="ml-1.5 w-4 h-4" aria-hidden="true" />
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProject(
                            PROJECTS.find((p) => p.id === "bisnara") || null
                          )
                        }
                        className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider border-2 border-black dark:border-white bg-[#fde047] text-black shadow-brutal dark:shadow-brutal-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm dark:hover:shadow-brutal-dark-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
                      >
                        Inspect Architecture
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Split Grid for Three-Kasir and Export DMS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects
                .filter((p) => p.id !== "bisnara")
                .map((project) => (
                  <article
                    key={project.id}
                    className="border-2 border-black dark:border-white bg-white dark:bg-[#121316] shadow-brutal-lg dark:shadow-brutal-dark-lg flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header Strip */}
                      <div className="flex items-center justify-between gap-2 px-4 py-2.5 bg-black text-white dark:bg-white dark:text-black border-b-2 border-black dark:border-white">
                        <span className="font-mono text-xs font-black uppercase tracking-wider truncate">
                          {project.id === "three-kasir" ? "POS ENGINE // TRANSACTION LEDGER" : "LOGISTICS // CUSTOMS MANIFEST"}
                        </span>
                        <span className="font-mono text-[10px] font-bold uppercase px-1.5 py-0.5 bg-[#fde047] text-black border border-black shrink-0">
                          {project.category.toUpperCase()}
                        </span>
                      </div>

                      <div className="p-6 space-y-4">
                        <h3 className="text-xl sm:text-2xl font-sans font-black text-black dark:text-white">
                          {project.title}
                        </h3>

                        <p className="text-zinc-800 dark:text-zinc-200 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.techStack.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-xs font-mono font-bold border-2 border-black dark:border-white bg-[#fbf8f2] dark:bg-[#09090b] text-black dark:text-white"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t-2 border-black dark:border-white mt-6 pt-4 flex flex-wrap gap-2.5 bg-[#fbf8f2] dark:bg-[#09090b]">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center min-h-[42px] px-3.5 py-2 text-xs font-mono font-bold uppercase border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black shadow-brutal-sm dark:shadow-brutal-dark-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
                        >
                          <GithubIcon className="mr-1.5 w-3.5 h-3.5" />
                          <span>View Code</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center justify-center min-h-[42px] px-3.5 py-2 text-xs font-mono font-bold uppercase border-2 border-black dark:border-white bg-[#fde047] text-black shadow-brutal-sm dark:shadow-brutal-dark-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
                      >
                        Inspect Architecture
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal Inspector */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
