import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./lib/cn";
const TooltipContext = React.createContext(null);
export const Tooltip = React.forwardRef(({ className, open, defaultOpen, onOpenChange, id, ...props }, ref) => {
    const [internal, setInternal] = React.useState(!!defaultOpen);
    const isControlled = open !== undefined;
    const current = isControlled ? !!open : internal;
    const setOpen = React.useCallback((v) => {
        if (!isControlled)
            setInternal(v);
        onOpenChange?.(v);
    }, [isControlled, onOpenChange]);
    const idBase = React.useId();
    const ctx = { open: current, setOpen, idBase: id ?? idBase };
    return (_jsx(TooltipContext.Provider, { value: ctx, children: _jsx("span", { ref: ref, className: cn("relative inline-block", className), ...props }) }));
});
Tooltip.displayName = "Tooltip";
export const TooltipTrigger = React.forwardRef(({ className, asChild, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }, ref) => {
    const ctx = React.useContext(TooltipContext);
    if (!ctx)
        throw new Error("TooltipTrigger must be used within Tooltip");
    const id = `${ctx.idBase}-content`;
    const handleOpen = () => ctx.setOpen(true);
    const handleClose = () => ctx.setOpen(false);
    return (_jsx("button", { ref: ref, type: "button", "aria-describedby": ctx.open ? id : undefined, onMouseEnter: (e) => {
            onMouseEnter?.(e);
            handleOpen();
        }, onMouseLeave: (e) => {
            onMouseLeave?.(e);
            handleClose();
        }, onFocus: (e) => {
            onFocus?.(e);
            handleOpen();
        }, onBlur: (e) => {
            onBlur?.(e);
            handleClose();
        }, className: className, ...props }));
});
TooltipTrigger.displayName = "TooltipTrigger";
export const TooltipContent = React.forwardRef(({ className, side = "top", style, ...props }, ref) => {
    const ctx = React.useContext(TooltipContext);
    if (!ctx)
        throw new Error("TooltipContent must be used within Tooltip");
    const id = `${ctx.idBase}-content`;
    const position = side === "top"
        ? "bottom-full left-1/2 -translate-x-1/2 mb-2"
        : side === "bottom"
            ? "top-full left-1/2 -translate-x-1/2 mt-2"
            : side === "left"
                ? "right-full top-1/2 -translate-y-1/2 mr-2"
                : "left-full top-1/2 -translate-y-1/2 ml-2";
    return (_jsx("div", { ref: ref, role: "tooltip", id: id, "data-state": ctx.open ? "open" : "closed", className: cn("pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-peak-950 px-2 py-1 text-xs text-white shadow-mid", ctx.open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-1", "transition duration-150 will-change-transform will-change-opacity", position, className), ...props }));
});
TooltipContent.displayName = "TooltipContent";
