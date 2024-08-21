import { ReactNode } from "react";

export type TItem = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TItem[];
};

export type TUser = {
    id: string;
    role: string;
    iat: number;
    exp: number;
};

export type TRole = "super-admin" | "admin" | "faculty" | "student";
