/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        // Main headings
        display: ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["3.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h2: ["2.50rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["2.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        h4: ["1.875rem", { lineHeight: "1.4", letterSpacing: "0" }],
        h5: ["1.5rem", { lineHeight: "1.4", letterSpacing: "0" }],
        h6: ["1.25rem", { lineHeight: "1.5", letterSpacing: "0" }],

        // Body text
        "body-lg": ["1.5rem", { lineHeight: "1.6", letterSpacing: "0" }], // Increased from 1.125rem
        testimonial: ["1.75rem", { lineHeight: "1.6", letterSpacing: "0" }], // New size for testimonials
        "testimonial-name": [
          "1.7rem",
          { lineHeight: "1.4", letterSpacing: "0" },
        ], // New size for names
        "testimonial-title": [
          "1.125rem",
          { lineHeight: "1.5", letterSpacing: "0" },
        ], // New size for titles
        body: ["1rem", { lineHeight: "1.6", letterSpacing: "0" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0" }],

        // Special text
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        overline: [
          "0.75rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          },
        ],
      },
      fontWeight: {
        display: "700",
        h1: "700",
        h2: "700",
        h3: "600",
        h4: "600",
        h5: "600",
        h6: "600",
        body: "400",
        "body-bold": "600",
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        about: {
          primary: "#6B46C1",
          secondary: "#4C1D95",
          accent: "#C4B5FD",
          light: "#EDE9FE",
          dark: "#2D1B69",
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "very-subtle-gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "very-subtle-gradient": "very-subtle-gradient 15s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        gradient: "gradient 6s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
