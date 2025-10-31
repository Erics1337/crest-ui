import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@crest-ui/ui";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Basic: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Library</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#" current>
          Data
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumbs>
  ),
};
