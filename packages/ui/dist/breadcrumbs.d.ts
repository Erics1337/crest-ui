import * as React from "react";
export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
    label?: string;
}
export declare const Breadcrumbs: React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLElement>>;
export declare const BreadcrumbItem: React.ForwardRefExoticComponent<React.LiHTMLAttributes<HTMLLIElement> & React.RefAttributes<HTMLLIElement>>;
export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    current?: boolean;
}
export declare const BreadcrumbLink: React.ForwardRefExoticComponent<BreadcrumbLinkProps & React.RefAttributes<HTMLAnchorElement>>;
export declare const BreadcrumbSeparator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
