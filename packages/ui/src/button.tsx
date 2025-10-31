import * as React from "react";
import { cn } from "./lib/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

type Variant = NonNullable<ButtonProps["variant"]>;
type Size = NonNullable<ButtonProps["size"]>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }: ButtonProps, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants: Record<Variant, string> = {
      primary:
        "bg-crest-blue-500 text-white hover:bg-crest-blue-600 focus:ring-crest-blue-500",
      secondary:
        "bg-sand-200 text-peak-950 hover:bg-crest-blue-500/10 focus:ring-crest-blue-500",
      ghost: "bg-transparent hover:bg-crest-blue-500/10 text-peak-950",
    } as const;
    const sizes: Record<Size, string> = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-12 px-6 text-lg",
    } as const;

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
