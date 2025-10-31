import * as React from "react";
import { cn } from "./lib/cn";

export type AlertVariant = "info" | "success" | "warning" | "danger" | "neutral";

const variantClasses: Record<AlertVariant, { container: string; title?: string; description?: string }> = {
  info: {
    container: "bg-crest-blue-500/10 border-crest-blue-500/30 text-peak-950",
  },
  success: {
    container: "bg-green-600/10 border-green-600/30 text-peak-950",
  },
  warning: {
    container: "bg-yellow-500/10 border-yellow-500/30 text-peak-950",
  },
  danger: {
    container: "bg-red-600/10 border-red-600/30 text-peak-950",
  },
  neutral: {
    container: "bg-sand-200 border-sand-300 text-peak-950",
  },
};

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", role = "alert", ...props }, ref) => (
    <div
      ref={ref}
      role={role}
      className={cn(
        "rounded-xl border p-4 flex items-start gap-3",
        variantClasses[variant].container,
        className
      )}
      {...props}
    />
  )
);
Alert.displayName = "Alert";

export const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h4 ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
  )
);
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-peak-950/80", className)} {...props} />
  )
);
AlertDescription.displayName = "AlertDescription";
