import type { Meta, StoryObj } from "@storybook/react-vite";
import { Drawer, DrawerTrigger, DrawerHeader, DrawerTitle, DrawerDescription, DrawerBody, DrawerFooter, DrawerClose, Button } from "@crest-code/ui";

const meta: Meta<typeof Drawer> = {
  title: "Overlays/Drawer",
  component: Drawer,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Right: Story = {
  render: () => (
    <Drawer side="right">
      <DrawerTrigger className="rounded-lg bg-crest-blue-500 px-3 py-1.5 text-white">Open drawer</DrawerTrigger>
      <div>
        <DrawerHeader>
          <DrawerTitle>Panel</DrawerTitle>
          <DrawerDescription>Settings and details</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>Content</DrawerBody>
        <DrawerFooter>
          <DrawerClose className="rounded-lg bg-sand-200 px-3 py-1.5">Close</DrawerClose>
          <Button variant="primary">Save</Button>
        </DrawerFooter>
      </div>
    </Drawer>
  ),
};
