import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./lib/cn";
export const Button = React.forwardRef(({ className, variant = "primary", size = "md", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
        primary: "bg-crest-blue-500 text-white hover:bg-crest-blue-600 focus:ring-crest-blue-500",
        secondary: "bg-sand-200 text-peak-950 hover:bg-crest-blue-500/10 focus:ring-crest-blue-500",
        ghost: "bg-transparent hover:bg-crest-blue-500/10 text-peak-950",
    };
    const sizes = {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
    };
    return (_jsx("button", { ref: ref, className: cn(base, variants[variant], sizes[size], className), ...props }));
});
Button.displayName = "Button";
