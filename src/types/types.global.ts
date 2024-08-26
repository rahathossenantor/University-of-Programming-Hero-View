import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { ReactNode } from "react";

export type TErrorRes = {
    data: {
        success: boolean;
        message: string;
        stack: string | null;
    };
    status: number;
};

export type TMeta = {
    limit: number;
    page: number;
    totalDocs: number;
    totalPages: number;
};

export type TDataRes<T> = {
    success: boolean;
    message: string;
    data?: {
        data: T;
        meta?: TMeta;
    };
    error?: TErrorRes;
};

export type TDataResWithRedux<T> = TDataRes<T> & BaseQueryApi;

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
