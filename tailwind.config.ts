
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        chrome: {
          DEFAULT: "#D9D9D9",
          light: "#EFEFEF",
          dark: "#A0A0A0",
        },
        gold: {
          DEFAULT: "#FFC700",
          light: "#FFE066",
          dark: "#D4A700",
        },
        neon: {
          blue: "#00F8FF",
          pink: "#FF00C7",
        },
        dark: {
          DEFAULT: "#121212",
          lighter: "#1A1A1A",
          light: "#252525",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"], // Changed from Cormorant Garamond to Inter
        mono: ["JetBrains Mono", "monospace"],
        serif: ["Inter", "sans-serif"] // Changed from Cormorant Garamond to Inter
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "glow-slow": "glow 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(180deg, #121212 0%, #0A0A0A 100%)",
        "chrome-gradient": "linear-gradient(180deg, #EFEFEF 0%, #A0A0A0 100%)",
        "gold-gradient": "linear-gradient(180deg, #FFE066 0%, #D4A700 100%)",
        "glow-blue": "radial-gradient(circle, rgba(0,248,255,0.2) 0%, rgba(0,248,255,0) 70%)",
        "glow-pink": "radial-gradient(circle, rgba(255,0,199,0.2) 0%, rgba(255,0,199,0) 70%)",
      },
      boxShadow: {
        "chrome": "0 4px 20px -2px rgba(70, 70, 70, 0.2), inset 0 2px 12px rgba(255, 255, 255, 0.7)",
        "chrome-hover": "0 8px 30px -2px rgba(70, 70, 70, 0.4), inset 0 2px 12px rgba(255, 255, 255, 0.9)",
        "gold": "0 4px 20px -2px rgba(255, 199, 0, 0.3), inset 0 2px 12px rgba(255, 230, 102, 0.7)",
        "gold-hover": "0 8px 30px -2px rgba(255, 199, 0, 0.5), inset 0 2px 12px rgba(255, 230, 102, 0.9)",
        "neon-blue": "0 0 10px rgba(0, 248, 255, 0.5)",
        "neon-pink": "0 0 10px rgba(255, 0, 199, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
