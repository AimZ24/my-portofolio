"use client";

import { useEffect } from "react";
import { X, ExternalLink, CheckSquare } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export interface ProjectData {
  id: string;
  title: string;
  category: "all" | "web" | "commerce" | "enterprise";
  categoryLabel: string;
  description: string;
  fullOverview: string;
  highlights: string[];
  architectureNotes: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  statusBadge: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border-3 border-black dark:border-white bg-[#fbf8f2] dark:bg-[#121316] shadow-[8px_8px_0px_0px_#000000] dark:shadow-[8px_8px_0px_0px_#ffffff]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-black text-white dark:bg-white dark:text-black border-b-2 border-black dark:border-white">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#fde047] border border-black dark:border-white inline-block" />
            <span className="font-mono text-xs font-black uppercase tracking-wider">
              INSPECTION // {project.id.toUpperCase()}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal (press Escape to close)"
            className="inline-flex items-center justify-center min-w-[36px] min-h-[36px] p-1 border-2 border-black dark:border-white bg-[#ef4444] text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-brutal-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2 border-b-2 border-black dark:border-white pb-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 border-2 border-black dark:border-white bg-[#fde047] text-black">
                {project.categoryLabel}
              </span>
              <span className="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400">
                STATUS: {project.statusBadge}
              </span>
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-sans font-black text-black dark:text-white">
              {project.title}
            </h2>
          </div>

          {/* Detailed overview */}
          <div className="space-y-4 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
            <p className="font-sans text-base">{project.fullOverview}</p>

            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-mono font-black uppercase tracking-wider text-black dark:text-white">
                Engineering Architecture
              </h3>
              <div className="p-3.5 border-2 border-black dark:border-white bg-white dark:bg-[#09090b] font-mono text-xs text-black dark:text-white leading-normal shadow-brutal-sm dark:shadow-brutal-dark-sm">
                {project.architectureNotes}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-mono font-black uppercase tracking-wider text-black dark:text-white">
                Verified Deliverables
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckSquare className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-medium text-black dark:text-zinc-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-mono font-black uppercase tracking-wider text-black dark:text-white">
                Verified Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono font-bold border-2 border-black dark:border-white bg-white dark:bg-[#09090b] text-black dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="pt-5 border-t-2 border-black dark:border-white flex flex-wrap gap-3 justify-end">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-mono font-bold text-xs uppercase tracking-wider shadow-brutal dark:shadow-brutal-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm dark:hover:shadow-brutal-dark-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
              >
                <span>Visit Live Deployment</span>
                <ExternalLink className="ml-2 w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 border-2 border-black dark:border-white bg-[#fde047] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-brutal dark:shadow-brutal-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm dark:hover:shadow-brutal-dark-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
              >
                <GithubIcon className="mr-2 w-3.5 h-3.5" />
                <span>Inspect Source</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 border-2 border-black dark:border-white bg-white dark:bg-[#09090b] text-black dark:text-white font-mono font-bold text-xs uppercase tracking-wider shadow-brutal dark:shadow-brutal-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm dark:hover:shadow-brutal-dark-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
            >
              Close View [Esc]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
