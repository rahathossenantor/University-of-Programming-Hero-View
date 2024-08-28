import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/auth.api";
import { useAppDispatch } from "../redux/hooks";
import { loginUser } from "../redux/features/auth/authSlice";
import verifyToken from "../utils/verifyToken";
import { TUser } from "../types/types.global";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CustomField from "../components/ui/CustomField";
import CustomForm from "../components/ui/CustomForm";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [login] = useLoginMutation();

    // submit handler
    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Loading...");
        try {
            const res = await login(data).unwrap();
            const user = verifyToken(res.data.accessToken) as TUser;
            dispatch(loginUser({
                user,
                token: res.data.accessToken
            }));
            toast.success(res.message, { id: toastId, duration: 2000 });
            navigate(`/${user.role}/dashboard`);
        } catch (err: any) {
            toast.error(err?.data?.message, { id: toastId, duration: 2000 });
        };
    };

    const defaultLoginFormValues = {
        id: "A-0001",
        password: "admin"
    };

    return (
        <CustomForm onSubmit={onSubmit} defaultValues={defaultLoginFormValues}>
            <Row justify="center" align="middle">
                <div
                    style={{
                        width: "400px",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                        marginTop: "20px"
                    }}
                >
                    <CustomForm.Title>Login</CustomForm.Title>
                    <CustomField type="text" name="id" label="User ID" isRequired />
                    <CustomField type="text" name="password" label="User Password" isRequired />
                    <Button htmlType="submit" style={{ fontSize: "15px" }}>Login</Button>
                </div>
            </Row>
        </CustomForm>
    );
};

export default Login;
