import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@crest-ui/ui";

const meta: Meta<typeof Input> = {
  title: "Primitives/Input",
  component: Input,
  args: { placeholder: "Enter text" },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { value: "Crest UI", onChange: () => {} },
};
