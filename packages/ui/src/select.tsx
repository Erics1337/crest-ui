import * as React from "react";
import { cn } from "./lib/cn";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "w-full appearance-none rounded-xl border border-sand-300 bg-white px-3 py-2 pr-8 text-sm text-peak-950",
        "bg-[right_0.65rem_center] bg-no-repeat",
        "[background-image:linear-gradient(45deg,transparent_50%,currentColor_50%),linear-gradient(135deg,currentColor_50%,transparent_50%),linear-gradient(to_right,transparent,transparent)]",
        "[background-position:calc(100%-15px)_calc(1em+2px),calc(100%-10px)_calc(1em+2px),calc(100%-2.5em)_0.5em]",
        "[background-size:5px_5px,5px_5px,1px_1.5em]",
        "focus:outline-none focus:ring-2 focus:ring-crest-blue-500/40 focus:border-crest-blue-500",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
);
Select.displayName = "Select";
