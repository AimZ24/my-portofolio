import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #09090b",
        "brutal-lg": "6px 6px 0px 0px #09090b",
        "brutal-sm": "2px 2px 0px 0px #09090b",
        "brutal-dark": "4px 4px 0px 0px #f4f4f5",
        "brutal-dark-lg": "6px 6px 0px 0px #f4f4f5",
        "brutal-dark-sm": "2px 2px 0px 0px #f4f4f5",
      },
      colors: {
        brutal: {
          bg: "#fbf8f2",
          card: "#ffffff",
          ink: "#09090b",
          chalk: "#f4f4f5",
          darkbg: "#09090b",
          darkcard: "#121316",
          yellow: "#fde047",
          amber: "#b45309",
          "amber-dark": "#f59e0b",
          emerald: "#047857",
          "emerald-dark": "#10b981",
        },
        paper: {
          50: "#faf9f6",
          100: "#f8f7f4",
          200: "#f0eee7",
          300: "#e4e2dc",
          400: "#d1cfc7",
          900: "#18181b",
        },
        obsidian: {
          950: "#090a0d",
          900: "#0d0f12",
          850: "#111419",
          800: "#161a22",
          700: "#222734",
          600: "#31384a",
          100: "#f4f4f5",
        },
        copper: {
          300: "#f6a272",
          400: "#ea7e3f",
          500: "#d36522",
          600: "#a8490a",
          700: "#863a08",
        },
      },
    },
  },
  plugins: [],
};

export default config;
