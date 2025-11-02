import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navbar, NavbarInner, NavbarBrand, NavbarNav, NavbarItem } from "@crest-ui/ui";

const meta: Meta<typeof Navbar> = {
  title: "Navigation/Navbar",
  component: Navbar,
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Basic: Story = {
  render: () => (
    <Navbar elevated>
      <NavbarInner>
        <NavbarBrand>Crest</NavbarBrand>
        <NavbarNav>
          <NavbarItem>Docs</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarNav>
      </NavbarInner>
    </Navbar>
  ),
};
