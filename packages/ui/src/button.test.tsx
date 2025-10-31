import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

test("renders label and handles click", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();

  render(<Button onClick={onClick}>Press</Button>);
  const btn = screen.getByRole("button", { name: /press/i });

  await user.click(btn);
  expect(onClick).toHaveBeenCalledTimes(1);
});
