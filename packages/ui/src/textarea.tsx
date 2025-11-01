import * as React from "react";
import { cn } from "./lib/cn";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, rows = 4, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        "w-full rounded-xl border border-sand-300 bg-white px-3 py-2 text-sm text-peak-950 placeholder:text-peak-950/40",
        "focus:outline-none focus:ring-2 focus:ring-crest-blue-500/40 focus:border-crest-blue-500",
        className
      )}
      {...props}
    />
  )
);
TextArea.displayName = "TextArea";
