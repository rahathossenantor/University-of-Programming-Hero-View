import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./admin.routes";
import { facultyRoutes } from "./faculty.routes";
import { studentRoutes } from "./student.routes";
import RedirectUser from "../pages/RedirectUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RedirectUser />,
    },
    {
        path: "/admin",
        element: <App />,
        children: adminRoutes,
    },
    {
        path: "/faculty",
        element: <App />,
        children: facultyRoutes,
    },
    {
        path: "/student",
        element: <App />,
        children: studentRoutes,
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
]);

export default router;
