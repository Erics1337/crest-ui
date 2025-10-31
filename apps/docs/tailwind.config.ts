import type { Config } from "tailwindcss";
import preset from "@crest-ui/config/tailwind-preset";

export default {
  presets: [preset],
  content: [
    "./**/*.{ts,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx,mdx}"
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
