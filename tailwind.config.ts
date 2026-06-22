import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050607",
          900: "#090c0d",
          850: "#0e1112",
          800: "#141819"
        },
        bronze: {
          100: "#f7e1bd",
          200: "#e7bf84",
          300: "#c89455",
          400: "#a9723d",
          500: "#7d4e2f"
        },
        ivory: "#f4ead8",
        mist: "#b8aa95",
        emeraldShadow: "#10211c"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        bronze: "0 0 44px rgba(200, 148, 85, 0.24)",
        soft: "0 24px 90px rgba(0, 0, 0, 0.48)"
      }
    }
  },
  plugins: []
};

export default config;
