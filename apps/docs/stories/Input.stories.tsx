import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@crest-code/ui";

const meta: Meta<typeof Input> = {
  title: "Primitives/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "Enter text" },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { value: "Crest UI", onChange: () => {} },
};
