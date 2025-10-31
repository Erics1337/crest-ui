import * as React from "react";
import { cn } from "./lib/cn";

type TabsContextValue = {
  value: string | undefined;
  setValue: (v: string) => void;
  idBase: string;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  id?: string;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, value, defaultValue, onValueChange, id, ...props }, ref) => {
    const [internal, setInternal] = React.useState<string | undefined>(defaultValue);
    const isControlled = value !== undefined;
    const current = isControlled ? value : internal;

    const setValue = React.useCallback(
      (v: string) => {
        if (!isControlled) setInternal(v);
        onValueChange?.(v);
      },
      [isControlled, onValueChange]
    );

    const idBase = React.useId();
    const ctx: TabsContextValue = { value: current, setValue, idBase: id ?? idBase };

    return (
      <TabsContext.Provider value={ctx}>
        <div ref={ref} className={cn("w-full", className)} {...props} />
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = "Tabs";

export const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="tablist"
      className={cn(
        "inline-flex items-center gap-1 rounded-xl bg-sand-200 p-1 text-peak-950",
        className
      )}
      {...props}
    />
  )
);
TabsList.displayName = "TabsList";

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, ...props }, ref) => {
    const ctx = React.useContext(TabsContext);
    if (!ctx) throw new Error("TabsTrigger must be used within Tabs");

    const selected = ctx.value === value;
    const controls = `${ctx.idBase}-content-${value}`;
    const id = `${ctx.idBase}-trigger-${value}`;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        id={id}
        aria-selected={selected}
        aria-controls={controls}
        data-state={selected ? "active" : "inactive"}
        onClick={() => ctx.setValue(value)}
        className={cn(
          "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
          "data-[state=active]:bg-crest-blue-500 data-[state=active]:text-white",
          "data-[state=inactive]:text-peak-950/70 hover:data-[state=inactive]:bg-crest-blue-500/10",
          className
        )}
        {...props}
      />
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, ...props }, ref) => {
    const ctx = React.useContext(TabsContext);
    if (!ctx) throw new Error("TabsContent must be used within Tabs");

    const selected = ctx.value === value;
    const id = `${ctx.idBase}-content-${value}`;

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={id}
        aria-labelledby={`${ctx.idBase}-trigger-${value}`}
        hidden={!selected}
        className={cn(className)}
        {...props}
      />
    );
  }
);
TabsContent.displayName = "TabsContent";
