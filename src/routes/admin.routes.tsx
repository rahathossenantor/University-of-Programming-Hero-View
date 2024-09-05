import AdminDashboard from "../pages/admin/AdminDashboard";
import routesGenerator from "../utils/routesGenerator";
import sidebarItemsGenerator from "../utils/sidebarItemsGenerator";
import { userManagementPaths } from "./users.paths";
import { academicManagementPaths } from "./academics.paths";
import { courseManagementPaths } from "./courses.paths";

const adminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard />
    },
    {
        name: "User Management",
        children: userManagementPaths,
    },
    {
        name: "Academic Management",
        children: academicManagementPaths,
    },
    {
        name: "Course Management",
        children: courseManagementPaths,
    },
];
export const adminRoutes = routesGenerator(adminPaths);
export const adminSidebarItems = sidebarItemsGenerator(adminPaths, "admin");
