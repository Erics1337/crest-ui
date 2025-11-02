import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@crest-ui/ui";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  render: () => <Checkbox label="I agree" defaultChecked />,
};
