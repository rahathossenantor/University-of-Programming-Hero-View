import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { TItem, TRole } from "../types/types.global";

type TSidebarItem = {
    key?: string;
    label: ReactNode;
    children?: TSidebarItem[];
} | undefined;

const sidebarItemsGenerator = (items: TItem[], role: TRole) => {
    const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
        if (item.name && item.path) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
            });
        }

        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map(child => {
                    if (child.name) {
                        return {
                            key: child.name,
                            label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
                        };
                    }
                })
            });
        }
        return acc;
    }, []);
    return sidebarItems;
};

export default sidebarItemsGenerator;
