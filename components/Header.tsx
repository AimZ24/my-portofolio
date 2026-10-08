"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fbf8f2] dark:bg-[#09090b] border-b-2 border-black dark:border-white transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white p-0.5"
        >
          
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white border-2 border-black dark:border-white px-2 py-0.5 bg-white dark:bg-[#121316]">
            AimZ24
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-wider" aria-label="Main Navigation">
          <a
            href="#works"
            className="text-black dark:text-white px-2.5 py-1 border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#fde047] hover:text-black transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
          >
            [01] Works
          </a>
          <a
            href="#systems"
            className="text-black dark:text-white px-2.5 py-1 border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#fde047] hover:text-black transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
          >
            [02] Systems
          </a>
          <a
            href="#contact"
            className="text-black dark:text-white px-2.5 py-1 border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#fde047] hover:text-black transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
          >
            [03] Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/AimZ24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile AimZ24 (opens in new tab)"
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] px-2.5 py-2 border-2 border-black dark:border-white bg-white dark:bg-[#121316] text-black dark:text-white shadow-brutal-sm dark:shadow-brutal-dark-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <ThemeToggle />

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 border-2 border-black dark:border-white bg-white dark:bg-[#121316] text-black dark:text-white shadow-brutal-sm dark:shadow-brutal-dark-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-black dark:border-white bg-[#fbf8f2] dark:bg-[#09090b] px-4 py-4 space-y-2">
          <a
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-mono font-bold uppercase border-2 border-black dark:border-white bg-white dark:bg-[#121316] text-black dark:text-white shadow-brutal-sm dark:shadow-brutal-dark-sm hover:bg-[#fde047] hover:text-black"
          >
            [01] Selected Works
          </a>
          <a
            href="#systems"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-mono font-bold uppercase border-2 border-black dark:border-white bg-white dark:bg-[#121316] text-black dark:text-white shadow-brutal-sm dark:shadow-brutal-dark-sm hover:bg-[#fde047] hover:text-black"
          >
            [02] Engineering Systems
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-mono font-bold uppercase border-2 border-black dark:border-white bg-white dark:bg-[#121316] text-black dark:text-white shadow-brutal-sm dark:shadow-brutal-dark-sm hover:bg-[#fde047] hover:text-black"
          >
            [03] Contact Dispatch
          </a>
        </div>
      )}
    </header>
  );
}
