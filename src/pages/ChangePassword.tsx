import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomFormLayoutWrapper from "../components/layout/CustomFormLayoutWrapper";
import CustomForm from "../components/ui/CustomForm";
import { customFormStyle } from "../styles/global.styles";
import { Button, Row } from "antd";
import CustomField from "../components/ui/CustomField";
import { useChangePasswordMutation } from "../redux/features/auth/auth.api";
import { toast } from "sonner";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/features/auth/authSlice";

const ChangePassword = () => {
    const [changePassword] = useChangePasswordMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Changing password...");
        try {
            const res = await changePassword(data).unwrap();
            if (res?.success) {
                toast.success(res.message, { id: toastId, duration: 2000 });
                dispatch(logoutUser());
                navigate("/login");
            };
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
                        <CustomForm.Title>Change Password</CustomForm.Title>
                        <CustomField
                            type="text"
                            name="oldPassword"
                            label="Old Password"
                            isRequired
                        />
                        <CustomField
                            type="text"
                            label="New Password"
                            name="newPassword"
                            isRequired
                        />
                        <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                    </div>
                </Row>
            </CustomForm>
        </CustomFormLayoutWrapper>
    );
};

export default ChangePassword;
