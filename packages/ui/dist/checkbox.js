import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./lib/cn";
export const Checkbox = React.forwardRef(({ className, label, id, ...props }, ref) => {
    const inputId = id || React.useId();
    return (_jsxs("label", { htmlFor: inputId, className: cn("inline-flex items-center gap-2 cursor-pointer", className), children: [_jsx("input", { ref: ref, id: inputId, type: "checkbox", className: cn("h-4 w-4 rounded-md border border-sand-300 text-crest-blue-500", "focus:outline-none focus:ring-2 focus:ring-crest-blue-500/40 focus:border-crest-blue-500"), ...props }), label ? _jsx("span", { className: "text-sm text-peak-950", children: label }) : null] }));
});
Checkbox.displayName = "Checkbox";
