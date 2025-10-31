import * as React from "react";
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    elevated?: boolean;
    as?: "header" | "nav";
    label?: string;
}
export declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
export declare const NavbarInner: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const NavbarBrand: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const NavbarNav: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLUListElement> & React.RefAttributes<HTMLUListElement>>;
export declare const NavbarItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLLIElement> & React.RefAttributes<HTMLLIElement>>;
