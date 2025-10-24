import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#C78065",
          light: "#F5E2D5",
          dark: "#8B4B36"
        }
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 45px -15px rgba(199, 128, 101, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
