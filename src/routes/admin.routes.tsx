import { NavLink } from "react-router-dom";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import Dashboard from "../pages/admin/Dashboard";
import { ReactNode } from "react";
import CreateAdmin from "../pages/admin/CreateAdmin";
import routesGenerator from "../utils/routesGenerator";

type TSidebarItem = {
    key: string;
    label: ReactNode;
    children?: TSidebarItem[];
};

const adminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <Dashboard />
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin />
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty />
            },
            {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent />
            },
        ]
    }
];

export const adminRoutes = routesGenerator(adminPaths);

export const adminSidebarItems: TSidebarItem[] = adminPaths.reduce((acc: TSidebarItem[], item) => {
    if (item.name && item.path) {
        acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        });
    }

    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map(child => ({
                key: child.name,
                label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
            }))
        });
    }
    return acc;
}, []);
