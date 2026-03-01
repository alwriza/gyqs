import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#262626",
        foreground: "#ffffff",
        "accent-pink": "#EFD9E6",
        "accent-purple": "#9095C9",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(90deg, #EFD9E6 0%, #9095C9 50%, #EFD9E6 100%)",
        "gradient-accent-vertical":
          "linear-gradient(180deg, #EFD9E6 0%, #9095C9 50%, #EFD9E6 100%)",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(144, 149, 201, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(144, 149, 201, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
