import React from "react";
import { render, screen } from "@testing-library/react";
import { Breadcrumbs, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "./breadcrumbs";

test("renders breadcrumb trail with current page semantics", () => {
  render(
    <Breadcrumbs>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Library</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#" current>
          Data
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumbs>
  );

  const nav = screen.getByRole("navigation", { name: /breadcrumb/i });
  expect(nav).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /library/i })).toBeInTheDocument();
  const current = screen.getByRole("link", { name: /data/i });
  expect(current).toHaveAttribute("aria-current", "page");
});
