import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextArea } from "@crest-code/ui";

const meta: Meta<typeof TextArea> = {
  title: "Forms/TextArea",
  component: TextArea,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Basic: Story = {
  args: {
    placeholder: "Write your thoughts...",
    rows: 5,
  },
};
