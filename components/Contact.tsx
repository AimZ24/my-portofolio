"use client";

import { useState } from "react";
import { Mail, Check, Copy, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "web-platform",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("imaim3024@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Form validation
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Message must be at least 10 characters long.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key:
            process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
            "61d94929-ee6b-4565-9ac8-e7a4e5eaeea8",
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
          subject: `[YRH Portfolio Dispatch] New Inquiry from ${formData.name}`,
          from_name: `${formData.name} via Portfolio`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to dispatch message via Web3Forms.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred while connecting to Web3Forms dispatch gateway.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      projectType: "web-platform",
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section id="contact" className="py-14 md:py-20 border-b-2 border-black dark:border-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3 max-w-2xl">
          <span className="font-mono font-black text-xs uppercase tracking-wider px-2 py-0.5 bg-[#fde047] text-black border-2 border-black inline-block shadow-brutal-sm">
            [03] DIRECT DISPATCH // COMMUNICATION CONSOLE
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-black dark:text-white">
            Initiate An Engineering Inquiry.
          </h2>
          <p className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base leading-relaxed">
            Reach out regarding web engineering contracts, transaction software consulting, or full-time software engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Contact Details & Direct links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-2 border-black dark:border-white bg-white dark:bg-[#121316] shadow-brutal-lg dark:shadow-brutal-dark-lg">
              <div className="px-4 py-2.5 bg-black text-white dark:bg-white dark:text-black border-b-2 border-black dark:border-white flex items-center justify-between">
                <span className="font-mono text-xs font-black uppercase tracking-wider">
                  VERIFIED CHANNELS // DIRECT REACH
                </span>
                <Mail className="w-4 h-4" aria-hidden="true" />
              </div>

              <div className="p-6 space-y-5 text-sm divide-y-2 divide-black dark:divide-white">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono uppercase font-bold text-zinc-500 dark:text-zinc-400 block">
                    Direct Email Address
                  </span>
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <a
                      href="mailto:imaim3024@gmail.com"
                      className="font-mono font-bold text-amber-700 dark:text-amber-400 hover:underline break-all"
                    >
                      imaim3024@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address to clipboard"
                      className="px-2.5 py-1 text-xs font-mono font-bold uppercase border-2 border-black dark:border-white bg-[#fde047] text-black shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all shrink-0"
                    >
                      {copiedEmail ? "COPIED" : "COPY"}
                    </button>
                  </div>
                  {copiedEmail && (
                    <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 block pt-1">
                      [OK] Address copied to clipboard.
                    </span>
                  )}
                </div>

                <div className="pt-4 space-y-1.5">
                  <span className="text-xs font-mono uppercase font-bold text-zinc-500 dark:text-zinc-400 block">
                    GitHub Code Repositories
                  </span>
                  <a
                    href="https://github.com/AimZ24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono font-bold text-black dark:text-white hover:text-amber-700 dark:hover:text-amber-400 pt-1"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>github.com/AimZ24</span>
                  </a>
                </div>

                <div className="pt-4 space-y-1.5">
                  <span className="text-xs font-mono uppercase font-bold text-zinc-500 dark:text-zinc-400 block">
                    Live Production Web Reference
                  </span>
                  <a
                    href="https://bisnara.web.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-black dark:text-white hover:text-amber-700 dark:hover:text-amber-400 pt-1 block"
                  >
                    bisnara.web.id
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 border-2 border-black dark:border-white bg-[#fde047] text-black shadow-brutal font-mono text-xs space-y-1">
              <p className="font-black uppercase tracking-wider">RESPONSE WINDOW GUARANTEE</p>
              <p className="font-medium">Direct inquiries are triaged and answered within 24 business hours.</p>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="border-2 border-black dark:border-white bg-white dark:bg-[#121316] shadow-brutal-lg dark:shadow-brutal-dark-lg">
              <div className="px-4 py-2.5 bg-black text-white dark:bg-white dark:text-black border-b-2 border-black dark:border-white flex items-center justify-between">
                <span className="font-mono text-xs font-black uppercase tracking-wider">
                  DISPATCH CONSOLE // TRANSMIT
                </span>
                <span className="w-2.5 h-2.5 bg-emerald-400 border border-black inline-block animate-pulse" />
              </div>

              <div className="p-6 sm:p-8">
                {status === "success" ? (
                  /* Success state */
                  <div className="space-y-5 py-6 text-center">
                    <div className="w-12 h-12 mx-auto border-2 border-black bg-emerald-400 text-black flex items-center justify-center shadow-brutal-sm">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-sans font-black text-black dark:text-white">
                      Transmission Confirmed
                    </h3>
                    <p className="text-zinc-800 dark:text-zinc-200 text-sm max-w-md mx-auto leading-relaxed font-sans">
                      Thank you, <strong className="font-bold">{formData.name}</strong>. Your dispatch regarding {formData.projectType.replace("-", " ")} has been compiled and routed to Yusuf Rochman Hakim. Direct reply will follow at {formData.email}.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="min-h-[44px] px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider border-2 border-black dark:border-white bg-[#fde047] text-black shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all"
                      >
                        Transmit Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Active form / Loading / Error states */
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="sender-name"
                          className="block text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white"
                        >
                          Your Name <span className="text-amber-700 dark:text-amber-400">*</span>
                        </label>
                        <input
                          id="sender-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          disabled={status === "loading"}
                          placeholder="e.g. Alex Morgan"
                          className="w-full min-h-[44px] px-3.5 py-2 border-2 border-black dark:border-white bg-[#fbf8f2] dark:bg-[#09090b] text-black dark:text-white font-mono text-sm focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none disabled:opacity-60"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="sender-email"
                          className="block text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white"
                        >
                          Email Address <span className="text-amber-700 dark:text-amber-400">*</span>
                        </label>
                        <input
                          id="sender-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={status === "loading"}
                          placeholder="name@domain.com"
                          className="w-full min-h-[44px] px-3.5 py-2 border-2 border-black dark:border-white bg-[#fbf8f2] dark:bg-[#09090b] text-black dark:text-white font-mono text-sm focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none disabled:opacity-60"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="project-type"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white"
                      >
                        Inquiry Scope
                      </label>
                      <select
                        id="project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        disabled={status === "loading"}
                        className="w-full min-h-[44px] px-3.5 py-2 border-2 border-black dark:border-white bg-[#fbf8f2] dark:bg-[#09090b] text-black dark:text-white font-mono text-xs focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none disabled:opacity-60"
                      >
                        <option value="web-platform">Web Platform Architecture (Bisnara scale)</option>
                        <option value="pos-commerce">Point of Sale / Retail Engine (Three-Kasir scale)</option>
                        <option value="export-dms">Enterprise Document System / Trade Logistics</option>
                        <option value="general-inquiry">Engineering Consultation / Full-Time Hire</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message-text"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white"
                      >
                        Technical Requirements Outline <span className="text-amber-700 dark:text-amber-400">*</span>
                      </label>
                      <textarea
                        id="message-text"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        disabled={status === "loading"}
                        placeholder="Detail system specifications, scope, or timeline..."
                        className="w-full px-3.5 py-2.5 border-2 border-black dark:border-white bg-[#fbf8f2] dark:bg-[#09090b] text-black dark:text-white font-mono text-sm focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none disabled:opacity-60"
                      />
                    </div>

                    {/* Error feedback */}
                    {status === "error" && (
                      <div
                        role="alert"
                        className="flex items-center gap-2 p-3 border-2 border-red-600 bg-red-100 dark:bg-red-950 text-red-900 dark:text-red-200 text-xs font-mono font-bold"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-600" aria-hidden="true" />
                        <span>[ERROR] {errorMessage}</span>
                      </div>
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 border-2 border-black dark:border-white bg-[#fde047] text-black font-mono font-black text-xs uppercase tracking-wider shadow-brutal dark:shadow-brutal-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm dark:hover:shadow-brutal-dark-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                          <span>TRANSMITTING DISPATCH...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" aria-hidden="true" />
                          <span>TRANSMIT DISPATCH</span>
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
