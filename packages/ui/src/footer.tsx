import * as React from "react";
import { cn } from "./lib/cn";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  as?: "footer" | "div";
  label?: string;
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, as = "footer", label = "Footer", ...props }, ref) => {
    const Comp: any = as;
    return (
      <Comp
        ref={ref}
        role="contentinfo"
        aria-label={label}
        className={cn(
          "w-full border-t border-sand-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60",
          className
        )}
        {...props}
      />
    );
  }
);
Footer.displayName = "Footer";

export const FooterInner = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mx-auto max-w-6xl px-4 py-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4", className)} {...props} />
  )
);
FooterInner.displayName = "FooterInner";

export const FooterCol = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("min-w-0 space-y-2", className)} {...props} />
  )
);
FooterCol.displayName = "FooterCol";

export const FooterNote = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-xs text-peak-950/60", className)} {...props} />
  )
);
FooterNote.displayName = "FooterNote";
