"use client";

import { ArrowUp } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-2 border-black dark:border-white bg-[#fbf8f2] dark:bg-[#09090b] py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b-2 border-black dark:border-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">

              <span className="font-sans font-black text-xl tracking-tight text-black dark:text-white">
                Yusuf Rochman Hakim
              </span>
            </div>
            <p className="text-xs font-mono uppercase font-bold text-zinc-600 dark:text-zinc-400">
              AimZ24 // Software Developer // Next.js &bull; TypeScript &bull; Tailwind &bull; Motion
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <a
              href="https://github.com/AimZ24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 border-2 border-black dark:border-white bg-white dark:bg-[#121316] text-black dark:text-white font-bold uppercase shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://bisnara.web.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 border-2 border-black dark:border-white bg-white dark:bg-[#121316] text-black dark:text-white font-bold uppercase shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              Bisnara
            </a>

            <a
              href="https://github.com/AimZ24/Three-Kasir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 border-2 border-black dark:border-white bg-white dark:bg-[#121316] text-black dark:text-white font-bold uppercase shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              Three-Kasir
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 border-2 border-black dark:border-white bg-[#fde047] text-black font-mono font-black uppercase text-xs shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
              <span>TOP</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400">
          <p>&copy; {new Date().getFullYear()} YUSUF ROCHMAN HAKIM. ENGINEERED WITH NEXT.JS 16 &bull; MOTION &bull; TAILWIND CSS.</p>
          
        </div>
      </div>
    </footer>
  );
}
