"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./lib/cn";
const TabsContext = React.createContext(null);
export const Tabs = React.forwardRef(({ className, value, defaultValue, onValueChange, id, ...props }, ref) => {
    const [internal, setInternal] = React.useState(defaultValue);
    const isControlled = value !== undefined;
    const current = isControlled ? value : internal;
    const setValue = React.useCallback((v) => {
        if (!isControlled)
            setInternal(v);
        onValueChange?.(v);
    }, [isControlled, onValueChange]);
    const idBase = React.useId();
    const ctx = { value: current, setValue, idBase: id ?? idBase };
    return (_jsx(TabsContext.Provider, { value: ctx, children: _jsx("div", { ref: ref, className: cn("w-full", className), ...props }) }));
});
Tabs.displayName = "Tabs";
export const TabsList = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, role: "tablist", className: cn("inline-flex items-center gap-1 rounded-xl bg-sand-200 p-1 text-peak-950", className), ...props })));
TabsList.displayName = "TabsList";
export const TabsTrigger = React.forwardRef(({ className, value, ...props }, ref) => {
    const ctx = React.useContext(TabsContext);
    if (!ctx)
        throw new Error("TabsTrigger must be used within Tabs");
    const selected = ctx.value === value;
    const controls = `${ctx.idBase}-content-${value}`;
    const id = `${ctx.idBase}-trigger-${value}`;
    return (_jsx("button", { ref: ref, type: "button", role: "tab", id: id, "aria-selected": selected, "aria-controls": controls, "data-state": selected ? "active" : "inactive", onClick: () => ctx.setValue(value), className: cn("px-3 py-1.5 rounded-lg text-sm font-medium transition-colors", "data-[state=active]:bg-crest-blue-500 data-[state=active]:text-white", "data-[state=inactive]:text-peak-950/70 hover:data-[state=inactive]:bg-crest-blue-500/10", className), ...props }));
});
TabsTrigger.displayName = "TabsTrigger";
export const TabsContent = React.forwardRef(({ className, value, ...props }, ref) => {
    const ctx = React.useContext(TabsContext);
    if (!ctx)
        throw new Error("TabsContent must be used within Tabs");
    const selected = ctx.value === value;
    const id = `${ctx.idBase}-content-${value}`;
    return (_jsx("div", { ref: ref, role: "tabpanel", id: id, "aria-labelledby": `${ctx.idBase}-trigger-${value}`, hidden: !selected, className: cn(className), ...props }));
});
TabsContent.displayName = "TabsContent";
