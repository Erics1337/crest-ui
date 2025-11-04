import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Navbar, NavbarInner, NavbarBrand, NavbarNav, NavbarItem, Footer, FooterInner, FooterNote } from "@crest-ui/ui/server";

export const metadata: Metadata = {
  title: "Crest UI Demo",
  description: "Demo app for Crest UI design system",
  icons: {
    icon: "/crest-logo.png",
    shortcut: "/crest-logo.png",
    apple: "/crest-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const logoSrc = `${basePath}/crest-logo.png`;
  return (
    <html lang="en">
      <body>
        <Navbar elevated>
          <NavbarInner>
            <NavbarBrand>
              <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                <img src={logoSrc} alt="Crest Code Creative logo" width={28} height={28} />
                <span>Crest</span>
              </Link>
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
