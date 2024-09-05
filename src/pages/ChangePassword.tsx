import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomFormLayoutWrapper from "../components/layout/CustomFormLayoutWrapper";
import CustomForm from "../components/ui/CustomForm";
import { customFormStyle } from "../styles/global.styles";
import { Button, Row } from "antd";
import CustomField from "../components/ui/CustomField";

const ChangePassword = () => {
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
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
