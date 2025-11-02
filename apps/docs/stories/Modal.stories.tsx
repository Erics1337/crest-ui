import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Modal,
  ModalTrigger,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  ModalClose,
  Button,
} from "@crest-ui/ui";

const meta: Meta<typeof Modal> = {
  title: "Overlays/Modal",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => (
    <Modal>
      <ModalTrigger className="rounded-lg bg-crest-blue-500 px-3 py-1.5 text-white">Open modal</ModalTrigger>
      <div>
        <ModalHeader>
          <ModalTitle>Confirm Action</ModalTitle>
          <ModalDescription>This action cannot be undone.</ModalDescription>
        </ModalHeader>
        <ModalBody>
          <p className="text-sm text-peak-950/80">Are you sure you want to proceed?</p>
        </ModalBody>
        <ModalFooter>
          <ModalClose className="rounded-lg bg-sand-200 px-3 py-1.5">Cancel</ModalClose>
          <Button variant="primary">Confirm</Button>
        </ModalFooter>
      </div>
    </Modal>
  ),
};
