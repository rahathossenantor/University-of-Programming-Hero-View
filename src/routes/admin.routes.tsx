import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import routesGenerator from "../utils/routesGenerator";
import sidebarItemsGenerator from "../utils/sidebarItemsGenerator";
import AcademicSemesters from "../pages/admin/academicManagement/AcademicSemesters";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import AcademicFaculties from "../pages/admin/academicManagement/AcademicFaculties";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import AcademicDepartments from "../pages/admin/academicManagement/AcademicDepartments";
import Students from "../pages/admin/userManagement/Students";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import CreateSemesterRegistration from "../pages/admin/courseManagement/CreateSemesterRegistration";
import SemesterRagistrations from "../pages/admin/courseManagement/SemesterRagistrations";

const userManagementPaths = [
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
        {
            path: "students/student-details/:id",
            element: <StudentDetails />
        },
        {
            name: "Students",
            path: "students",
            element: <Students />
        },
    ];

const academicManagementPaths = [
    {
        name: "Create A. Semester",
        path: "create-academic-semesters",
        element: <CreateAcademicSemester />
    },
    {
        name: "A. Semesters",
        path: "academic-semesters",
        element: <AcademicSemesters />
    },
    {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />
    },
    {
        name: "A. Faculties",
        path: "academic-faculties",
        element: <AcademicFaculties />
    },
    {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />
    },
    {
        name: "A. Departments",
        path: "academic-departments",
        element: <AcademicDepartments />
    },
];

const courseManagementPaths = [
    {
        name: "Create S. Registration",
        path: "create-semester-registration",
        element: <CreateSemesterRegistration />
    },
    {
        name: "S. Registrations",
        path: "semester-registrations",
        element: <SemesterRagistrations />
    },
];

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
