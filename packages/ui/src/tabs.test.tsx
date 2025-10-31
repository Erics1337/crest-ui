import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

test("switches tabs and shows correct content", async () => {
  const user = userEvent.setup();
  render(
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account"><p>Account content</p></TabsContent>
      <TabsContent value="password"><p>Password content</p></TabsContent>
    </Tabs>
  );

  const account = screen.getByRole("tab", { name: /account/i });
  const password = screen.getByRole("tab", { name: /password/i });

  expect(account).toHaveAttribute("aria-selected", "true");
  expect(password).toHaveAttribute("aria-selected", "false");
  expect(screen.getByText(/account content/i)).toBeVisible();
  expect(screen.getByText(/password content/i)).not.toBeVisible();

  await user.click(password);

  expect(password).toHaveAttribute("aria-selected", "true");
  expect(account).toHaveAttribute("aria-selected", "false");
  expect(screen.getByText(/password content/i)).toBeVisible();
  expect(screen.getByText(/account content/i)).not.toBeVisible();
});

test("calls onValueChange when selection changes", async () => {
  const user = userEvent.setup();
  const onValueChange = vi.fn();

  render(
    <Tabs defaultValue="one" onValueChange={onValueChange}>
      <TabsList>
        <TabsTrigger value="one">One</TabsTrigger>
        <TabsTrigger value="two">Two</TabsTrigger>
      </TabsList>
      <TabsContent value="one"><p>One content</p></TabsContent>
      <TabsContent value="two"><p>Two content</p></TabsContent>
    </Tabs>
  );

  await user.click(screen.getByRole("tab", { name: /two/i }));
  expect(onValueChange).toHaveBeenCalledWith("two");
});
