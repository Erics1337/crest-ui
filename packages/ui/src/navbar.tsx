import * as React from "react";
import { cn } from "./lib/cn";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  elevated?: boolean;
  as?: "header" | "nav";
  label?: string;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, elevated, as = "nav", label = "Primary", ...props }, ref) => {
    const Comp: any = as;
    return (
      <Comp
        ref={ref}
        role="navigation"
        aria-label={label}
        className={cn(
          "w-full sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60",
          "border-b border-sand-200",
          elevated ? "shadow-low" : "shadow-none",
          className
        )}
        {...props}
      />
    );
  }
);
Navbar.displayName = "Navbar";

export const NavbarInner = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mx-auto flex h-14 max-w-6xl items-center gap-3 px-4", className)} {...props} />
  )
);
NavbarInner.displayName = "NavbarInner";

export const NavbarBrand = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mr-auto font-semibold", className)} {...props} />
  )
);
NavbarBrand.displayName = "NavbarBrand";

export const NavbarNav = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex items-center gap-3", className)} {...props} />
  )
);
NavbarNav.displayName = "NavbarNav";

export const NavbarItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("text-sm text-peak-950/80", className)} {...props} />
  )
);
NavbarItem.displayName = "NavbarItem";
