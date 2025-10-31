import * as React from "react";
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    as?: "footer" | "div";
    label?: string;
}
export declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;
export declare const FooterInner: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const FooterCol: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const FooterNote: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
