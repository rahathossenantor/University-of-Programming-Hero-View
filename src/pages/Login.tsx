/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/auth.api";
import { useAppDispatch } from "../redux/hooks";
import { loginUser } from "../redux/features/auth/authSlice";
import verifyToken from "../utils/verifyToken";

const Login = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: "A-0001",
            password: "admin"
        }
    });

    const [login, { error }] = useLoginMutation();
    console.log(error);

    const onSubmit = async (data: any) => {
        const res = await login(data).unwrap();
        const user = verifyToken(res.data.accessToken);
        dispatch(loginUser({
            user,
            token: res.data.accessToken
        }));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">User ID:</label>
                <input type="text" id="id" placeholder="Enter your ID" {...register("id")} />
            </div>
            <div>
                <label htmlFor="password">User Password:</label>
                <input type="text" id="password" placeholder="Enter your password" {...register("password")} />
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;
