import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";
import verifyToken from "../../utils/verifyToken";
import { logoutUser } from "../../redux/features/auth/authSlice";
import { TUser } from "../../types/types.global";

type TProtectedRouteProps = {
    children: ReactNode;
    role?: string;
};

const ProtectedRoute = ({ children, role }: TProtectedRouteProps ) => {
    const dispatch = useAppDispatch();
    const { token } = useAppSelector((state) => state.auth);

    if (!token) {
        return <Navigate to="/login" replace />;
    };

    const user = verifyToken(token);
    if (role !== undefined && role !== (user as TUser)?.role) {
        dispatch(logoutUser());
        return <Navigate to="/login" replace />;
    };

    return children;
};

export default ProtectedRoute;
