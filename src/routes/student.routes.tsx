import StudentDashboard from "../pages/student/StudentDashboard";
import routesGenerator from "../utils/routesGenerator";
import sidebarItemsGenerator from "../utils/sidebarItemsGenerator";

const studentPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <StudentDashboard />
    },
];
export const studentRoutes = routesGenerator(studentPaths);
export const studentSidebarItems = sidebarItemsGenerator(studentPaths, "student");
