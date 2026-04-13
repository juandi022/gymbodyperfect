/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#0a0a0a",
          darker: "#111111",
        },
        accent: {
          gold: "#ffb800",
        },
        gray: {
          primary: "#d1d1d1",
          secondary: "#888888",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        fadeTitle: "fadeTitle 1s ease forwards",
        fadeSubtitle: "fadeSubtitle 1.2s ease forwards",
        zoomIn: "zoomIn 1.2s ease forwards",
        slideUp: "slideUp 0.5s ease forwards",
        popIn: "popIn 0.5s ease forwards",
        softGlow: "softGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "from": { opacity: "0" },
          "to": { opacity: "1" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeTitle: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeSubtitle: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.6)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        softGlow: {
          "0%": { textShadow: "0 0 0px #ffb800" },
          "100%": { textShadow: "0 0 12px rgba(255,184,0,0.53)" },
        },
      },
    },
  },
  plugins: [],
}
