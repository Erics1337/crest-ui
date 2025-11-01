import * as React from "react";
import { cn } from "./lib/cn";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const inputId = id || React.useId();
    return (
      <label htmlFor={inputId} className={cn("inline-flex items-center gap-2 cursor-pointer", className)}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className={cn(
            "h-4 w-4 rounded-md border border-sand-300 text-crest-blue-500",
            "focus:outline-none focus:ring-2 focus:ring-crest-blue-500/40 focus:border-crest-blue-500"
          )}
          {...props}
        />
        {label ? <span className="text-sm text-peak-950">{label}</span> : null}
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";
