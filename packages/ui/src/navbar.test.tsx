import React from "react";
import { render, screen } from "@testing-library/react";
import { Navbar, NavbarInner, NavbarBrand, NavbarNav, NavbarItem } from "./navbar";

test("renders navbar with brand and items", () => {
  render(
    <Navbar elevated>
      <NavbarInner>
        <NavbarBrand>Crest</NavbarBrand>
        <NavbarNav>
          <NavbarItem>Docs</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
        </NavbarNav>
      </NavbarInner>
    </Navbar>
  );

  const nav = screen.getByRole("navigation", { name: /primary/i });
  expect(nav).toBeInTheDocument();
  expect(screen.getByText(/crest/i)).toBeInTheDocument();
  expect(screen.getByText(/docs/i)).toBeInTheDocument();
  expect(screen.getByText(/blog/i)).toBeInTheDocument();
});
