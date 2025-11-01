import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@crest-ui/ui";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  render: () => (
    <Select defaultValue="one">
      <option value="one">One</option>
      <option value="two">Two</option>
      <option value="three">Three</option>
    </Select>
  ),
};
