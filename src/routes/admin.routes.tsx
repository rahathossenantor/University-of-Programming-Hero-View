import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import Dashboard from "../pages/admin/Dashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import routesGenerator from "../utils/routesGenerator";
import sidebarItemsGenerator from "../utils/sidebarItemsGenerator";

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
export const adminSidebarItems = sidebarItemsGenerator(adminPaths, "admin");
