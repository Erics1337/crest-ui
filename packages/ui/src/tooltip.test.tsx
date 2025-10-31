import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";

test("shows and hides on hover", async () => {
  const user = userEvent.setup();
  render(
    <Tooltip>
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>Tip</TooltipContent>
    </Tooltip>
  );

  const trigger = screen.getByRole("button", { name: /hover/i });
  const content = screen.getByRole("tooltip");

  expect(content.className).toContain("opacity-0");
  await user.hover(trigger);
  expect(content.className).toContain("opacity-100");
  await user.unhover(trigger);
  expect(content.className).toContain("opacity-0");
});

test("shows on focus and hides on blur", async () => {
  const user = userEvent.setup();
  render(
    <Tooltip>
      <TooltipTrigger>Focus me</TooltipTrigger>
      <TooltipContent>Focus Tip</TooltipContent>
    </Tooltip>
  );

  const trigger = screen.getByRole("button", { name: /focus me/i });
  const content = screen.getByRole("tooltip");

  expect(content.className).toContain("opacity-0");
  await user.tab(); // focus first tabbable element
  expect(document.activeElement).toBe(trigger);
  expect(content.className).toContain("opacity-100");
  await user.tab(); // move focus away
  expect(content.className).toContain("opacity-0");
});
