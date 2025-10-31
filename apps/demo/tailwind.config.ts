import type { Config } from "tailwindcss";
import preset from "@crest-ui/config/tailwind-preset";

export default {
  presets: [preset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
