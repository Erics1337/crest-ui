import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip, TooltipTrigger, TooltipContent, Button } from "@crest-ui/ui";

const meta: Meta<typeof Tooltip> = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger className="px-3 py-1.5 rounded-lg bg-sand-200">Hover me</TooltipTrigger>
      <TooltipContent>Helpful information</TooltipContent>
    </Tooltip>
  ),
};
