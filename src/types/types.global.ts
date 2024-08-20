import { ReactNode } from "react";

export type TItem = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TItem[];
};
