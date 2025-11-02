"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "./lib/cn";
const ModalContext = React.createContext(null);
export const Modal = React.forwardRef(({ className, open, defaultOpen, onOpenChange, id, children, ...props }, ref) => {
    const [internal, setInternal] = React.useState(!!defaultOpen);
    const controlled = open !== undefined;
    const current = controlled ? !!open : internal;
    const setOpen = React.useCallback((v) => {
        if (!controlled)
            setInternal(v);
        onOpenChange?.(v);
    }, [controlled, onOpenChange]);
    const idBase = React.useId();
    const ctx = { open: current, setOpen, idBase: id ?? idBase };
    // Close on ESC
    React.useEffect(() => {
        if (!current)
            return;
        const onKey = (e) => {
            if (e.key === "Escape")
                setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [current, setOpen]);
    // Restore focus
    const lastFocusedRef = React.useRef(null);
    React.useEffect(() => {
        if (current) {
            lastFocusedRef.current = document.activeElement;
        }
        else if (lastFocusedRef.current) {
            lastFocusedRef.current.focus?.();
        }
    }, [current]);
    // Split children into triggers and content nodes
    const childArray = React.Children.toArray(children);
    const triggers = [];
    const content = [];
    childArray.forEach((child) => {
        if (React.isValidElement(child)) {
            const type = child.type;
            const name = type?.displayName || type?.name;
            if (name === "ModalTrigger") {
                triggers.push(child);
                return;
            }
        }
        content.push(child);
    });
    return (_jsxs(ModalContext.Provider, { value: ctx, children: [_jsxs("div", { ref: ref, className: className, ...props, children: [triggers, content.length > 0 ? (_jsx("div", { style: { display: "none" }, "aria-hidden": true, children: content })) : null] }), current ? _jsx(ModalPortal, { children: content }) : null] }));
});
Modal.displayName = "Modal";
function ModalPortal({ children }) {
    const ctx = React.useContext(ModalContext);
    if (!ctx)
        return null;
    const [present, setPresent] = React.useState(ctx.open);
    React.useEffect(() => {
        if (ctx.open) {
            setPresent(true);
            return;
        }
        const t = setTimeout(() => setPresent(false), 200); // match CSS duration
        return () => clearTimeout(t);
    }, [ctx.open]);
    if (!present)
        return null;
    const overlay = (_jsxs("div", { className: "fixed inset-0 z-50", children: [_jsx("div", { className: cn("fixed inset-0 bg-peak-950/40 backdrop-blur-sm", "transition-opacity duration-200", ctx.open ? "opacity-100" : "opacity-0"), "data-testid": "modal-overlay", onClick: () => ctx.setOpen(false) }), _jsx("div", { className: cn("fixed left-1/2 top-1/2 z-50 w-[min(90vw,480px)] -translate-x-1/2 -translate-y-1/2", "rounded-xl border border-sand-200 bg-white p-6 shadow-high", "transition duration-200", "data-[state=open]:opacity-100 data-[state=open]:scale-100 data-[state=open]:translate-y-0", "data-[state=closed]:opacity-0 data-[state=closed]:scale-95 data-[state=closed]:-translate-y-2", ctx.open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2"), "data-state": ctx.open ? "open" : "closed", children: _jsx(ModalContentInternal, { children: children }) })] }));
    return createPortal(overlay, document.body);
}
function ModalContentInternal({ children }) {
    const ctx = React.useContext(ModalContext);
    const titleId = `${ctx.idBase}-title`;
    const descId = `${ctx.idBase}-desc`;
    return (_jsx("div", { role: "dialog", "aria-modal": "true", "aria-labelledby": titleId, "aria-describedby": descId, children: children }));
}
export const ModalHeader = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("mb-4", className), ...props })));
ModalHeader.displayName = "ModalHeader";
export const ModalTitle = React.forwardRef(({ className, ...props }, ref) => {
    const ctx = React.useContext(ModalContext);
    return _jsx("h3", { id: `${ctx.idBase}-title`, ref: ref, className: cn("text-lg font-semibold", className), ...props });
});
ModalTitle.displayName = "ModalTitle";
export const ModalDescription = React.forwardRef(({ className, ...props }, ref) => {
    const ctx = React.useContext(ModalContext);
    return _jsx("p", { id: `${ctx.idBase}-desc`, ref: ref, className: cn("mt-1 text-sm text-peak-950/80", className), ...props });
});
ModalDescription.displayName = "ModalDescription";
export const ModalBody = React.forwardRef(({ className, ...props }, ref) => _jsx("div", { ref: ref, className: cn("mt-4", className), ...props }));
ModalBody.displayName = "ModalBody";
export const ModalFooter = React.forwardRef(({ className, ...props }, ref) => _jsx("div", { ref: ref, className: cn("mt-6 flex justify-end gap-3", className), ...props }));
ModalFooter.displayName = "ModalFooter";
export const ModalTrigger = React.forwardRef(({ onClick, ...props }, ref) => {
    const ctx = React.useContext(ModalContext);
    if (!ctx)
        throw new Error("ModalTrigger must be used within Modal");
    return (_jsx("button", { ref: ref, type: "button", onClick: (e) => {
            onClick?.(e);
            ctx.setOpen(true);
        }, ...props }));
});
ModalTrigger.displayName = "ModalTrigger";
export const ModalClose = React.forwardRef(({ onClick, ...props }, ref) => {
    const ctx = React.useContext(ModalContext);
    if (!ctx)
        throw new Error("ModalClose must be used within Modal");
    return (_jsx("button", { ref: ref, type: "button", onClick: (e) => {
            onClick?.(e);
            ctx.setOpen(false);
        }, ...props }));
});
ModalClose.displayName = "ModalClose";
