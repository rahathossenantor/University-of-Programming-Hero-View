import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import Students from "../pages/admin/userManagement/Students";

export const userManagementPaths = [
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
