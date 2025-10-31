import * as React from "react";
import { cn } from "./lib/cn";

type TooltipContextValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
  idBase: string;
};

const TooltipContext = React.createContext<TooltipContextValue | null>(null);

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  id?: string;
}

export const Tooltip = React.forwardRef<HTMLSpanElement, TooltipProps>(
  ({ className, open, defaultOpen, onOpenChange, id, ...props }, ref) => {
    const [internal, setInternal] = React.useState<boolean>(!!defaultOpen);
    const isControlled = open !== undefined;
    const current = isControlled ? !!open : internal;

    const setOpen = React.useCallback(
      (v: boolean) => {
        if (!isControlled) setInternal(v);
        onOpenChange?.(v);
      },
      [isControlled, onOpenChange]
    );

    const idBase = React.useId();
    const ctx: TooltipContextValue = { open: current, setOpen, idBase: id ?? idBase };

    return (
      <TooltipContext.Provider value={ctx}>
        <span ref={ref} className={cn("relative inline-block", className)} {...props} />
      </TooltipContext.Provider>
    );
  }
);
Tooltip.displayName = "Tooltip";

export interface TooltipTriggerProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  ({ className, asChild, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }, ref) => {
    const ctx = React.useContext(TooltipContext);
    if (!ctx) throw new Error("TooltipTrigger must be used within Tooltip");

    const id = `${ctx.idBase}-content`;
    const handleOpen = () => ctx.setOpen(true);
    const handleClose = () => ctx.setOpen(false);

    return (
      <button
        ref={ref}
        type="button"
        aria-describedby={ctx.open ? id : undefined}
        onMouseEnter={(e) => {
          onMouseEnter?.(e);
          handleOpen();
        }}
        onMouseLeave={(e) => {
          onMouseLeave?.(e);
          handleClose();
        }}
        onFocus={(e) => {
          onFocus?.(e);
          handleOpen();
        }}
        onBlur={(e) => {
          onBlur?.(e);
          handleClose();
        }}
        className={className}
        {...props}
      />
    );
  }
);
TooltipTrigger.displayName = "TooltipTrigger";

export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "top" | "bottom" | "left" | "right";
}

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, side = "top", style, ...props }, ref) => {
    const ctx = React.useContext(TooltipContext);
    if (!ctx) throw new Error("TooltipContent must be used within Tooltip");

    const id = `${ctx.idBase}-content`;

    const position =
      side === "top"
        ? "bottom-full left-1/2 -translate-x-1/2 mb-2"
        : side === "bottom"
        ? "top-full left-1/2 -translate-x-1/2 mt-2"
        : side === "left"
        ? "right-full top-1/2 -translate-y-1/2 mr-2"
        : "left-full top-1/2 -translate-y-1/2 ml-2";

    return (
      <div
        ref={ref}
        role="tooltip"
        id={id}
        aria-hidden={ctx.open ? undefined : true}
        data-state={ctx.open ? "open" : "closed"}
        className={cn(
          "pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-peak-950 px-2 py-1 text-xs text-white shadow-mid",
          ctx.open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-1",
          "transition duration-150 will-change-transform will-change-opacity",
          position,
          className
        )}
        {...props}
      />
    );
  }
);
TooltipContent.displayName = "TooltipContent";
