import MyEnrolledCourses from "../pages/student/courses/MyEnrolledCourses";
import MyOfferedCourses from "../pages/student/courses/MyOfferedCourses";
import StudentDashboard from "../pages/student/StudentDashboard";
import routesGenerator from "../utils/routesGenerator";
import sidebarItemsGenerator from "../utils/sidebarItemsGenerator";

const studentPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <StudentDashboard />
    },
    {
        name: "Courses",
        children: [
            {
                name: "My Offered Courses",
                path: "my-offered-courses",
                element: <MyOfferedCourses />
            },
            {
                name: "My Enrolled Courses",
                path: "my-enrolled-courses",
                element: <MyEnrolledCourses />
            },
        ],
    },
];
export const studentRoutes = routesGenerator(studentPaths);
export const studentSidebarItems = sidebarItemsGenerator(studentPaths, "student");
