/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          "purple-dark": "#5D4A82",
          "purple-light": "#856BAE",
        },
      },
      animation: {
        "logo-entrance":
          "logo-entrance 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        sparkle: "sparkle 1000ms forwards",
        "spin-slow": "spin 4s linear infinite",
      },
      keyframes: {
        "logo-entrance": {
          "0%": {
            transform: "scale(0.5) rotate(-10deg)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1) rotate(0deg)",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        sparkle: {
          "0%": {
            transform: "scale(0) translateY(0)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1) translateY(-20px)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0) translateY(-40px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
