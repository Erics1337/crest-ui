import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "@crest-ui/ui";

const meta: Meta<typeof TextArea> = {
  title: "Forms/TextArea",
  component: TextArea,
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Basic: Story = {
  args: {
    placeholder: "Write your thoughts...",
    rows: 5,
  },
};
