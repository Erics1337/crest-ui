import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "./lib/cn";

type DrawerContextValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
  idBase: string;
};

const DrawerContext = React.createContext<DrawerContextValue | null>(null);

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  id?: string;
  side?: "left" | "right" | "top" | "bottom";
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ className, open, defaultOpen, onOpenChange, id, children, side = "right", ...props }, ref) => {
    const [internal, setInternal] = React.useState<boolean>(!!defaultOpen);
    const controlled = open !== undefined;
    const current = controlled ? !!open : internal;

    const setOpen = React.useCallback(
      (v: boolean) => {
        if (!controlled) setInternal(v);
        onOpenChange?.(v);
      },
      [controlled, onOpenChange]
    );

    // ESC close
    React.useEffect(() => {
      if (!current) return;
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [current, setOpen]);

    const idBase = React.useId();
    const ctx: DrawerContextValue = { open: current, setOpen, idBase: id ?? idBase };

    // separate triggers from content (same approach as Modal)
    const childArray = React.Children.toArray(children) as React.ReactElement[];
    const triggers: React.ReactNode[] = [];
    const content: React.ReactNode[] = [];
    childArray.forEach((child) => {
      if (React.isValidElement(child)) {
        const type: any = child.type;
        const name = type?.displayName || type?.name;
        if (name === "DrawerTrigger") {
          triggers.push(child);
          return;
        }
      }
      content.push(child);
    });

    return (
      <DrawerContext.Provider value={ctx}>
        <div ref={ref} className={className} {...props}>
          {triggers}
          {content.length ? (
            <div style={{ display: "none" }} aria-hidden>
              {content}
            </div>
          ) : null}
        </div>
        <DrawerPortal side={side}>{content}</DrawerPortal>
      </DrawerContext.Provider>
    );
  }
);
Drawer.displayName = "Drawer";

function DrawerPortal({ children, side }: { children?: React.ReactNode; side: DrawerProps["side"] }) {
  const ctx = React.useContext(DrawerContext);
  if (!ctx) return null;
  const [present, setPresent] = React.useState<boolean>(ctx.open);

  React.useEffect(() => {
    if (ctx.open) {
      setPresent(true);
      return;
    }
    const t = setTimeout(() => setPresent(false), 200);
    return () => clearTimeout(t);
  }, [ctx.open]);

  if (!present) return null;

  // position classes per side
  const basePanel = "fixed bg-white shadow-high border border-sand-200";
  const panelPos =
    side === "left"
      ? "left-0 top-0 h-full w-[min(90vw,360px)]"
      : side === "right"
      ? "right-0 top-0 h-full w-[min(90vw,360px)]"
      : side === "top"
      ? "left-0 top-0 w-full h-[min(80vh,420px)]"
      : "left-0 bottom-0 w-full h-[min(80vh,420px)]";

  const openTrans =
    side === "left"
      ? "translate-x-0"
      : side === "right"
      ? "translate-x-0"
      : side === "top"
      ? "translate-y-0"
      : "-translate-y-0";

  const closedTrans =
    side === "left"
      ? "-translate-x-full"
      : side === "right"
      ? "translate-x-full"
      : side === "top"
      ? "-translate-y-full"
      : "translate-y-full";

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        className={cn(
          "fixed inset-0 bg-peak-950/40 backdrop-blur-sm transition-opacity duration-200",
          ctx.open ? "opacity-100" : "opacity-0"
        )}
        onClick={() => ctx.setOpen(false)}
        aria-hidden
      />
      <div
        data-state={ctx.open ? "open" : "closed"}
        className={cn(
          basePanel,
          panelPos,
          "bg-white transition-transform duration-200",
          ctx.open ? openTrans : closedTrans
        )}
      >
        <DrawerContentInternal>{children}</DrawerContentInternal>
      </div>
    </div>,
    document.body
  );
}

function DrawerContentInternal({ children }: { children?: React.ReactNode }) {
  const ctx = React.useContext(DrawerContext)!;
  const titleId = `${ctx.idBase}-title`;
  const descId = `${ctx.idBase}-desc`;
  return (
    <div role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descId} className="p-6">
      {children}
    </div>
  );
}

export const DrawerHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("mb-4", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

export const DrawerTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    const ctx = React.useContext(DrawerContext)!;
    return <h3 id={`${ctx.idBase}-title`} ref={ref} className={cn("text-lg font-semibold", className)} {...props} />;
  }
);
DrawerTitle.displayName = "DrawerTitle";

export const DrawerDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const ctx = React.useContext(DrawerContext)!;
    return <p id={`${ctx.idBase}-desc`} ref={ref} className={cn("mt-1 text-sm text-peak-950/80", className)} {...props} />;
  }
);
DrawerDescription.displayName = "DrawerDescription";

export const DrawerBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("mt-4", className)} {...props} />
);
DrawerBody.displayName = "DrawerBody";

export const DrawerFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("mt-6 flex justify-end gap-3", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

export const DrawerTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ onClick, ...props }, ref) => {
    const ctx = React.useContext(DrawerContext);
    if (!ctx) throw new Error("DrawerTrigger must be used within Drawer");
    return (
      <button
        ref={ref}
        type="button"
        onClick={(e) => {
          onClick?.(e);
          ctx.setOpen(true);
        }}
        {...props}
      />
    );
  }
);
DrawerTrigger.displayName = "DrawerTrigger";

export const DrawerClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ onClick, ...props }, ref) => {
    const ctx = React.useContext(DrawerContext);
    if (!ctx) throw new Error("DrawerClose must be used within Drawer");
    return (
      <button
        ref={ref}
        type="button"
        onClick={(e) => {
          onClick?.(e);
          ctx.setOpen(false);
        }}
        {...props}
      />
    );
  }
);
DrawerClose.displayName = "DrawerClose";
