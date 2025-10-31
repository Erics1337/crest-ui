import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "@crest-ui/ui";

const meta: Meta<typeof Card> = {
  title: "Surfaces/Card",
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Mountain Pass</CardTitle>
        <CardDescription>Calm surfaces with gentle elevation.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-peak-950/80">
          Cards provide a soft container with rounded corners and shadow tokens.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Action</Button>
        <Button variant="ghost">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};
