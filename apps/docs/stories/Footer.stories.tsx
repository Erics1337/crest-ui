import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer, FooterInner, FooterCol, FooterNote } from "@crest-code/ui";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Basic: Story = {
  render: () => (
    <Footer>
      <FooterInner>
        <FooterCol>
          <h4 className="text-sm font-semibold">Product</h4>
          <a className="text-sm text-peak-950/80" href="#">Features</a>
          <a className="text-sm text-peak-950/80" href="#">Pricing</a>
        </FooterCol>
        <FooterCol>
          <h4 className="text-sm font-semibold">Company</h4>
          <a className="text-sm text-peak-950/80" href="#">About</a>
          <a className="text-sm text-peak-950/80" href="#">Careers</a>
        </FooterCol>
      </FooterInner>
      <div className="mx-auto max-w-6xl px-4 pb-6">
        <FooterNote>© {new Date().getFullYear()} Crest Code</FooterNote>
      </div>
    </Footer>
  ),
};
