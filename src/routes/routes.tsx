import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./admin.routes";
import { facultyRoutes } from "./faculty.routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
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
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
]);

export default router;
