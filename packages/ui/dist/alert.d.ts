import * as React from "react";
export type AlertVariant = "info" | "success" | "warning" | "danger" | "neutral";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
}
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
export declare const AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
export declare const AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
