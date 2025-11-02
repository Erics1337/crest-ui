import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@crest-ui/ui";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {
  args: { name: "Jane Doe" },
};

export const Image: Story = {
  args: { src: "https://i.pravatar.cc/100?img=5", alt: "Jane" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" name="Jane Doe" />
      <Avatar size="md" name="Jane Doe" />
      <Avatar size="lg" name="Jane Doe" />
    </div>
  ),
};
