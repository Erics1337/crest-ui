import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer, FooterInner, FooterCol, FooterNote } from "./footer";

test("renders footer with columns and note", () => {
  render(
    <Footer>
      <FooterInner>
        <FooterCol>
          <h4>Product</h4>
          <a href="#">Features</a>
        </FooterCol>
      </FooterInner>
      <div>
        <FooterNote>© 2025</FooterNote>
      </div>
    </Footer>
  );

  const contentinfo = screen.getByRole("contentinfo", { name: /footer/i });
  expect(contentinfo).toBeInTheDocument();
  expect(screen.getByText(/product/i)).toBeInTheDocument();
  expect(screen.getByText(/© 2025/i)).toBeInTheDocument();
});
