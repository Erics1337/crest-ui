import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "@crest-ui/ui";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  render: () => (
    <Alert variant="info">
      <div>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>This is an informational alert.</AlertDescription>
      </div>
    </Alert>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-3">
      <Alert variant="success">
        <div>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Your changes were saved.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="warning">
        <div>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Please review your inputs.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="danger">
        <div>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="neutral">
        <div>
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>Neutral emphasis alert.</AlertDescription>
        </div>
      </Alert>
    </div>
  ),
};
