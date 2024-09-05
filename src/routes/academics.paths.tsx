import AcademicDepartments from "../pages/admin/academicManagement/AcademicDepartments";
import AcademicFaculties from "../pages/admin/academicManagement/AcademicFaculties";
import AcademicSemesters from "../pages/admin/academicManagement/AcademicSemesters";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";

export const academicManagementPaths = [
    {
        name: "Create A. Semester",
        path: "create-academic-semester",
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
