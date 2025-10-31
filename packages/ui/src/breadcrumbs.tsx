import * as React from "react";
import { cn } from "./lib/cn";

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
}

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ className, label = "Breadcrumb", children, ...props }, ref) => (
    <nav ref={ref} aria-label={label} className={cn("w-full", className)} {...props}>
      <ol className="flex items-center gap-1 text-sm text-peak-950/70">{children}</ol>
    </nav>
  )
);
Breadcrumbs.displayName = "Breadcrumbs";

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1", className)} {...props} />
  )
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  current?: boolean;
}

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, current, ...props }, ref) => (
    <a
      ref={ref}
      aria-current={current ? "page" : undefined}
      className={cn(
        "rounded-md px-1.5 py-1 transition-colors",
        current ? "text-peak-950" : "hover:bg-sand-200 hover:text-peak-950",
        className
      )}
      {...props}
    />
  )
);
BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbSeparator = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children = "/", ...props }, ref) => (
    <span ref={ref} role="presentation" className={cn("select-none px-1", className)} {...props}>
      {children}
    </span>
  )
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
