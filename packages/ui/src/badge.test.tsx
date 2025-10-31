import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

test("renders badge text and variant classes", () => {
  render(<Badge variant="success">Ready</Badge>);
  const el = screen.getByText(/ready/i);
  expect(el).toBeInTheDocument();
  expect(el.className).toContain("bg-green-600");
});
