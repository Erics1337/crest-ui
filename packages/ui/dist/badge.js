import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./lib/cn";
const variantClasses = {
    default: "bg-crest-blue-500 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-500 text-peak-950",
    danger: "bg-red-600 text-white",
    neutral: "bg-sand-200 text-peak-950",
    outline: "border border-sand-300 text-peak-950",
};
export const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => (_jsx("span", { ref: ref, className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", variantClasses[variant], className), ...props })));
Badge.displayName = "Badge";
