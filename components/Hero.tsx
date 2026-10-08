"use client";

import { motion } from "motion/react";
import { ArrowDown, Mail, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export function Hero() {
  return (
    <section id="top" className="relative pt-10 pb-16 md:pt-16 md:pb-20 border-b-2 border-black dark:border-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero title grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight leading-[1.04] text-black dark:text-white">
              Building Reliable Web Platforms,{" "}
              <span className="font-serif italic font-normal text-amber-700 dark:text-amber-400 underline decoration-4 decoration-black dark:decoration-white">
                Transaction Engines
              </span>
              , and Export Systems.
            </h1>

            <p className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200 font-sans leading-relaxed max-w-2xl">
              I am <strong className="font-black text-black dark:text-white underline decoration-2 decoration-amber-500">Yusuf Rochman Hakim</strong> (AimZ24). I build pragmatic full-stack architectures: live web platforms like Bisnara, high-integrity retail point-of-sale systems, and industrial customs export documentation pipelines.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#works"
                className="inline-flex items-center justify-center min-h-[46px] px-5 py-2.5 border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-mono font-bold text-xs uppercase tracking-wider shadow-brutal dark:shadow-brutal-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm dark:hover:shadow-brutal-dark-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
              >
                <span>[01] Inspect Works</span>
                <ArrowDown className="ml-2 w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-[46px] px-5 py-2.5 border-2 border-black dark:border-white bg-[#fde047] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-brutal dark:shadow-brutal-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm dark:hover:shadow-brutal-dark-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
              >
                <Mail className="mr-2 w-4 h-4" aria-hidden="true" />
                <span>[02] Contact Console</span>
              </a>

              <a
                href="https://github.com/AimZ24"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[46px] px-4 py-2.5 border-2 border-black dark:border-white bg-white dark:bg-[#121316] text-black dark:text-white font-mono font-bold text-xs uppercase tracking-wider shadow-brutal dark:shadow-brutal-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm dark:hover:shadow-brutal-dark-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
              >
                <GithubIcon className="mr-2 w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>

          {/* Neo-brutalist dossier panel */}
          <div className="lg:col-span-4 border-2 border-black dark:border-white bg-white dark:bg-[#121316] shadow-brutal-lg dark:shadow-brutal-dark-lg">
            <div className="flex items-center justify-between px-4 py-2.5 bg-black text-white dark:bg-white dark:text-black border-b-2 border-black dark:border-white">
              <span className="font-mono text-xs font-black uppercase tracking-wider">
                DOSSIER SPEC // AimZ24
              </span>
              <FolderGit2 className="w-4 h-4" aria-hidden="true" />
            </div>

            <div className="divide-y-2 divide-black dark:divide-white text-xs font-mono">
              <div className="p-3.5 space-y-1">
                <span className="text-zinc-500 dark:text-zinc-400 uppercase font-bold block text-[10px]">
                  Primary Domain
                </span>
                <span className="font-bold text-black dark:text-white text-sm block">
                  Full Stack & Transaction Logic
                </span>
              </div>

              <div className="p-3.5 space-y-1">
                <span className="text-zinc-500 dark:text-zinc-400 uppercase font-bold block text-[10px]">
                  Production Toolchain
                </span>
                <span className="text-black dark:text-white block font-medium">
                  Next.js, TypeScript, Tailwind, Node.js, SQL
                </span>
              </div>

              <div className="p-3.5 space-y-1">
                <span className="text-zinc-500 dark:text-zinc-400 uppercase font-bold block text-[10px]">
                  Verified Deployments
                </span>
                <span className="text-black dark:text-white block font-medium">
                  Bisnara Ecosystem, Three-Kasir POS, Export DMS
                </span>
              </div>

              <div className="p-3.5 bg-[#fbf8f2] dark:bg-[#09090b] flex items-center justify-between">
                <span className="text-zinc-500 dark:text-zinc-400 uppercase font-bold text-[10px]">
                  Repository
                </span>
                <span className="font-bold text-amber-700 dark:text-amber-400">
                  github.com/AimZ24
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Spec Ticker Bar */}
      <div className="mt-12 border-t-2 border-black dark:border-white bg-[#fde047] dark:bg-[#18181b] text-black dark:text-white py-2 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold uppercase tracking-wider">
          <span>SPEC: NEXT.JS 16 APP ROUTER</span>
          <span>INTEGRITY: ACID POS TRANSACTIONS</span>
          <span>COMPLIANCE: EXPORT CUSTOMS DMS</span>
          <span>EDGE: VERCEL DEPLOYMENT</span>
        </div>
      </div>
    </section>
  );
}
