import type { Preview } from "@storybook/react-vite";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      options: {
        light: { name: "light", value: "#ffffff" },
        sand: { name: "sand", value: "rgb(var(--color-sand-200))" }
      }
    }
  },

  initialGlobals: {
    backgrounds: {
      value: "light"
    }
  }
};

export default preview;
