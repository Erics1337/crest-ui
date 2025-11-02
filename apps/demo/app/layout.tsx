import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Navbar, NavbarInner, NavbarBrand, NavbarNav, NavbarItem, Footer, FooterInner, FooterNote } from "@crest-ui/ui/server";

export const metadata: Metadata = {
  title: "Crest UI Demo",
  description: "Demo app for Crest UI design system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar elevated>
          <NavbarInner>
            <NavbarBrand>
              <Link href="/" className="hover:opacity-80">Crest</Link>
            </NavbarBrand>
            <NavbarNav>
              <NavbarItem>
                <Link href="/showcase" className="hover:underline">Showcase</Link>
              </NavbarItem>
            </NavbarNav>
          </NavbarInner>
        </Navbar>
        {children}
        <Footer>
          <FooterInner />
          <div className="mx-auto max-w-6xl px-4 pb-8">
            <FooterNote>© {new Date().getFullYear()} Crest Code Creative</FooterNote>
          </div>
        </Footer>
      </body>
    </html>
  );
}
