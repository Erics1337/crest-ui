import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./input";

test("updates value on type", async () => {
  const user = userEvent.setup();
  render(<Input placeholder="Name" />);

  const el = screen.getByPlaceholderText("Name") as HTMLInputElement;
  await user.type(el, "Crest");
  expect(el).toHaveValue("Crest");
});
