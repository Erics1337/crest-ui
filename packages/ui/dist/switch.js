import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./lib/cn";
export const Switch = React.forwardRef(({ className, checked, defaultChecked, onCheckedChange, onClick, ...props }, ref) => {
    const [internal, setInternal] = React.useState(!!defaultChecked);
    const isControlled = checked !== undefined;
    const value = isControlled ? !!checked : internal;
    const setChecked = (v) => {
        if (!isControlled)
            setInternal(v);
        onCheckedChange?.(v);
    };
    return (_jsx("button", { ref: ref, type: "button", role: "switch", "aria-checked": value, onClick: (e) => {
            onClick?.(e);
            setChecked(!value);
        }, className: cn("inline-flex h-6 w-10 items-center rounded-full border transition-colors", value
            ? "bg-crest-blue-500 border-crest-blue-500"
            : "bg-sand-200 border-sand-300", className), ...props, children: _jsx("span", { className: cn("ml-1 h-4 w-4 rounded-full bg-white shadow-low transition-transform", value ? "translate-x-4" : "translate-x-0") }) }));
});
Switch.displayName = "Switch";
