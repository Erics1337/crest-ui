import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crest UI Demo",
  description: "Demo app for Crest UI design system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
