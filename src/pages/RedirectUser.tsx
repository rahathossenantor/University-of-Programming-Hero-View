import { Button } from "antd";
import { useAppSelector } from "../redux/hooks";
import { TUser } from "../types/types.global";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RedirectUser = () => {
    const navigate = useNavigate();
    const { user, token } = useAppSelector((state) => state.auth);
    const role = (user! as TUser)?.role;

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }

        if (user) {
            navigate(`/${role}/dashboard`);
        }
    }, [navigate, user, token, role]);

    return (
        <div>
            <h2>{role}</h2>
            <Button>Go to ur dashboard</Button>
        </div>
    );
};

export default RedirectUser;
