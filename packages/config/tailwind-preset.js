import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const preset = {
  theme: {
    extend: {
      colors: {
        "crest-blue": {
          500: "rgb(var(--color-crest-blue-500) / <alpha-value>)",
          600: "rgb(var(--color-crest-blue-600) / <alpha-value>)"
        },
        sand: {
          200: "rgb(var(--color-sand-200) / <alpha-value>)"
        },
        mesa: {
          400: "rgb(var(--color-mesa-400) / <alpha-value>)"
        },
        peak: {
          950: "rgb(var(--color-peak-950) / <alpha-value>)"
        }
      },
      borderRadius: {
        md: "var(--radius-md, 12px)"
      },
      boxShadow: {
        low: "var(--shadow-low, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
        mid: "var(--shadow-mid, 0 4px 10px 0 rgb(0 0 0 / 0.08))",
        high: "var(--shadow-high, 0 10px 25px -5px rgb(0 0 0 / 0.1))"
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};

export default preset;
