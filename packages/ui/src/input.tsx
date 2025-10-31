import * as React from "react";
import { cn } from "./lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-xl border border-peak-950/10 bg-white px-3 py-2 text-sm text-peak-950 shadow-low placeholder:text-peak-950/50 focus:outline-none focus:ring-2 focus:ring-crest-blue-500",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
