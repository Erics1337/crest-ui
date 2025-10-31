import * as React from "react";
export type BadgeVariant = "default" | "success" | "warning" | "danger" | "neutral" | "outline";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
