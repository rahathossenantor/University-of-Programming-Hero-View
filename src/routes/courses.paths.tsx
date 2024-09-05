import Courses from "../pages/admin/courseManagement/Courses";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import CreateSemesterRegistration from "../pages/admin/courseManagement/CreateSemesterRegistration";
import OfferCourse from "../pages/admin/courseManagement/OfferCours";
import SemesterRagistrations from "../pages/admin/courseManagement/SemesterRagistrations";

export const courseManagementPaths = [
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
    {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />
    },
    {
        name: "Courses",
        path: "courses",
        element: <Courses />
    },
    {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />
    },
];
