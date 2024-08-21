/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/auth.api";
import { useAppDispatch } from "../redux/hooks";
import { loginUser } from "../redux/features/auth/authSlice";
import verifyToken from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { TUser } from "../types/types.global";
import { toast } from "sonner";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: "A-0001",
            password: "admin"
        }
    });

    const [login] = useLoginMutation();

    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Loading...");
        try {
            const res = await login(data).unwrap();
            const user = verifyToken(res.data.accessToken) as TUser;
            dispatch(loginUser({
                user,
                token: res.data.accessToken
            }));
            toast.success("Login successful!", { id: toastId, duration: 2000 });
            navigate(`/${user.role}/dashboard`);
        } catch (err: any) {
            toast.error(err.message, { id: toastId, duration: 2000 });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    <label htmlFor="id">User ID:</label>
                    <input type="text" id="id" placeholder="Enter your ID" {...register("id")} />
                </div>
                <div>
                    <label htmlFor="password">User Password:</label>
                    <input type="text" id="password" placeholder="Enter your password" {...register("password")} />
                </div>
                <Button htmlType="submit">Login</Button>
            </div>
        </form>
    );
};

export default Login;
