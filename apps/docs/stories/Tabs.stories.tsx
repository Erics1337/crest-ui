import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@crest-ui/ui";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  render: () => (
    <Tabs defaultValue="account" className="max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <div className="mt-3 rounded-xl border border-sand-200 p-4">
        <TabsContent value="account">
          <p className="text-sm text-peak-950/80">Manage your account preferences.</p>
        </TabsContent>
        <TabsContent value="password">
          <p className="text-sm text-peak-950/80">Update your password securely.</p>
        </TabsContent>
      </div>
    </Tabs>
  ),
};
