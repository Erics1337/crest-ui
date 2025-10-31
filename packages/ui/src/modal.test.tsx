import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal, ModalHeader, ModalTitle, ModalDescription } from "./modal";

const getDialog = () => screen.queryByRole("dialog");

test("renders dialog when open and closes on overlay click", async () => {
  const user = userEvent.setup();
  render(
    <Modal defaultOpen>
      <div>
        <ModalHeader>
          <ModalTitle>Title</ModalTitle>
          <ModalDescription>Description</ModalDescription>
        </ModalHeader>
      </div>
    </Modal>
  );

  expect(getDialog()).toBeInTheDocument();
  const overlay = screen.getByTestId("modal-overlay");
  await user.click(overlay);
  expect(getDialog()).not.toBeInTheDocument();
});

test("closes on Escape key", async () => {
  const user = userEvent.setup();
  render(
    <Modal defaultOpen>
      <div>
        <ModalHeader>
          <ModalTitle>Esc Title</ModalTitle>
          <ModalDescription>Esc Description</ModalDescription>
        </ModalHeader>
      </div>
    </Modal>
  );

  expect(getDialog()).toBeInTheDocument();
  await user.keyboard("{Escape}");
  expect(getDialog()).not.toBeInTheDocument();
});
