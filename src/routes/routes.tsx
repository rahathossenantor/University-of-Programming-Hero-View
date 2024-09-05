import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./admin.routes";
import { facultyRoutes } from "./faculty.routes";
import { studentRoutes } from "./student.routes";
import RedirectUser from "../pages/RedirectUser";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import ChangePassword from "../pages/ChangePassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RedirectUser />,
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute role="admin">
                <App />
            </ProtectedRoute>
        ),
        children: adminRoutes,
    },
    {
        path: "/faculty",
        element: (
            <ProtectedRoute role="faculty">
                <App />
            </ProtectedRoute>
        ),
        children: facultyRoutes,
    },
    {
        path: "/student",
        element: (
            <ProtectedRoute role="student">
                <App />
            </ProtectedRoute>
        ),
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
    {
        path: "/change-password",
        element: <ChangePassword />
    },
]);

export default router;
