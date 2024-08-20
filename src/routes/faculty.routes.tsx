import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import routesGenerator from "../utils/routesGenerator";
import sidebarItemsGenerator from "../utils/sidebarItemsGenerator";

const facultyPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <FacultyDashboard />
    },
];
export const facultyRoutes = routesGenerator(facultyPaths);
export const facultySidebarItems = sidebarItemsGenerator(facultyPaths, "faculty");
