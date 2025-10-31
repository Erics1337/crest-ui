import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "./lib/cn";

type ModalContextValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
  idBase: string;
};

const ModalContext = React.createContext<ModalContextValue | null>(null);

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  id?: string;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, open, defaultOpen, onOpenChange, id, children, ...props }, ref) => {
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

    const idBase = React.useId();
    const ctx: ModalContextValue = { open: current, setOpen, idBase: id ?? idBase };

    // Close on ESC
    React.useEffect(() => {
      if (!current) return;
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [current, setOpen]);

    // Restore focus
    const lastFocusedRef = React.useRef<HTMLElement | null>(null);
    React.useEffect(() => {
      if (current) {
        lastFocusedRef.current = document.activeElement as HTMLElement | null;
      } else if (lastFocusedRef.current) {
        lastFocusedRef.current.focus?.();
      }
    }, [current]);

    // Split children into triggers and content nodes
    const childArray = React.Children.toArray(children) as React.ReactElement[];
    const triggers: React.ReactNode[] = [];
    const content: React.ReactNode[] = [];
    childArray.forEach((child) => {
      if (React.isValidElement(child)) {
        const type: any = child.type;
        const name = type?.displayName || type?.name;
        if (name === "ModalTrigger") {
          triggers.push(child);
          return;
        }
      }
      content.push(child);
    });

    return (
      <ModalContext.Provider value={ctx}>
        <div ref={ref} className={className} {...props}>
          {/* Render triggers visibly */}
          {triggers}
          {/* Keep content mounted but hidden outside of portal to avoid layout flashes */}
          {content.length > 0 ? (
            <div style={{ display: "none" }} aria-hidden>
              {content}
            </div>
          ) : null}
        </div>
        {current ? <ModalPortal>{content}</ModalPortal> : null}
      </ModalContext.Provider>
    );
  }
);
Modal.displayName = "Modal";

function ModalPortal({ children }: { children?: React.ReactNode }) {
  const ctx = React.useContext(ModalContext);
  if (!ctx) return null;
  const overlay = (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-peak-950/40 backdrop-blur-sm"
        data-testid="modal-overlay"
        onClick={() => ctx.setOpen(false)}
      />
      <div className="fixed left-1/2 top-1/2 z-50 w-[min(90vw,480px)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-sand-200 bg-white p-6 shadow-high">
        <ModalContentInternal>{children}</ModalContentInternal>
      </div>
    </div>
  );
  return createPortal(overlay, document.body);
}

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
}

function ModalContentInternal({ children }: { children?: React.ReactNode }) {
  const ctx = React.useContext(ModalContext)!;
  const titleId = `${ctx.idBase}-title`;
  const descId = `${ctx.idBase}-desc`;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descId}>
      {children}
    </div>
  );
}

export const ModalHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4", className)} {...props} />
  )
);
ModalHeader.displayName = "ModalHeader";

export const ModalTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    const ctx = React.useContext(ModalContext)!;
    return <h3 id={`${ctx.idBase}-title`} ref={ref} className={cn("text-lg font-semibold", className)} {...props} />;
  }
);
ModalTitle.displayName = "ModalTitle";

export const ModalDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const ctx = React.useContext(ModalContext)!;
    return <p id={`${ctx.idBase}-desc`} ref={ref} className={cn("mt-1 text-sm text-peak-950/80", className)} {...props} />;
  }
);
ModalDescription.displayName = "ModalDescription";

export const ModalBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("mt-4", className)} {...props} />
);
ModalBody.displayName = "ModalBody";

export const ModalFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("mt-6 flex justify-end gap-3", className)} {...props} />
);
ModalFooter.displayName = "ModalFooter";

export const ModalTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ onClick, ...props }, ref) => {
    const ctx = React.useContext(ModalContext);
    if (!ctx) throw new Error("ModalTrigger must be used within Modal");
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
ModalTrigger.displayName = "ModalTrigger";

export const ModalClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ onClick, ...props }, ref) => {
    const ctx = React.useContext(ModalContext);
    if (!ctx) throw new Error("ModalClose must be used within Modal");
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
ModalClose.displayName = "ModalClose";
