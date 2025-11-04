import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@crest-code/ui";

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  args: {
    defaultChecked: true,
  },
};
