import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@crest-ui/ui";

const meta: Meta<typeof Badge> = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Default" },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};
