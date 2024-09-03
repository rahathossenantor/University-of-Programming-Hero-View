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
import CustomFormLayoutWrapper from "../components/layout/CustomFormLayoutWrapper";
import { customFormStyle } from "../styles/global.styles";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
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
            toast.success(res.message, { id: toastId, duration: 2000 });
            navigate(`/${user.role}/dashboard`);
        } catch (err: any) {
            toast.error(err?.data?.message, { id: toastId, duration: 2000 });
        };
    };

    return (
        <CustomFormLayoutWrapper>
            <CustomForm
                onSubmit={onSubmit}
            >
                <Row justify="center" align="middle">
                    <div
                        style={customFormStyle}
                    >
                        <CustomForm.Title>Login</CustomForm.Title>
                        <CustomField type="text" name="id" label="User ID" isRequired />
                        <CustomField type="password" name="password" label="User Password" isRequired />
                        <Button htmlType="submit" style={{ fontSize: "15px" }}>Login</Button>
                    </div>
                </Row>
            </CustomForm>
        </CustomFormLayoutWrapper>
    );
};

export default Login;
