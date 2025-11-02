"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./lib/cn";
const sizeMap = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-base",
};
function initialsFrom(name) {
    if (!name)
        return "";
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
    return (first + last).toUpperCase();
}
export const Avatar = React.forwardRef(({ className, src, alt, name, children, size = "md", ...props }, ref) => {
    const [error, setError] = React.useState(false);
    return (_jsx("span", { ref: ref, className: cn("inline-flex items-center justify-center overflow-hidden rounded-full bg-sand-200 text-peak-950", sizeMap[size], className), ...props, children: src && !error ? (
        // eslint-disable-next-line @next/next/no-img-element
        _jsx("img", { alt: alt || name || "", src: src, className: "h-full w-full object-cover", onError: () => setError(true) })) : (_jsx("span", { className: "select-none font-medium", children: children ?? initialsFrom(name) })) }));
});
Avatar.displayName = "Avatar";
