import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import routesGenerator from "../utils/routesGenerator";
import sidebarItemsGenerator from "../utils/sidebarItemsGenerator";
import AcademicSemesters from "../pages/admin/academicManagement/AcademicSemesters";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";

const adminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard />
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
    },
    {
        name: "Academic Management",
        children: [
            {
                name: "A. Semesters",
                path: "academic-semesters",
                element: <AcademicSemesters />
            },
            {
                name: "Create A. Semester",
                path: "create-academic-semesters",
                element: <CreateAcademicSemester />
            },
        ]
    }
];
export const adminRoutes = routesGenerator(adminPaths);
export const adminSidebarItems = sidebarItemsGenerator(adminPaths, "admin");
