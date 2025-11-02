import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-a11y"), getAbsolutePath("@storybook/addon-docs")]
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
