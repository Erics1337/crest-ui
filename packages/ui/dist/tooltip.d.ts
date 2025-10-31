import * as React from "react";
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    id?: string;
}
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLSpanElement>>;
export interface TooltipTriggerProps extends React.HTMLAttributes<HTMLElement> {
    asChild?: boolean;
}
export declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
    side?: "top" | "bottom" | "left" | "right";
}
export declare const TooltipContent: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLDivElement>>;
