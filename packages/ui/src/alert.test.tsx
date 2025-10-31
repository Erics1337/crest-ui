import React from "react";
import { render, screen } from "@testing-library/react";
import { Alert, AlertTitle, AlertDescription } from "./alert";

test("renders alert with role and content", () => {
  render(
    <Alert variant="success">
      <div>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>All good</AlertDescription>
      </div>
    </Alert>
  );

  const region = screen.getByRole("alert");
  expect(region).toBeInTheDocument();
  expect(screen.getByText(/success/i)).toBeInTheDocument();
  expect(screen.getByText(/all good/i)).toBeInTheDocument();
});
