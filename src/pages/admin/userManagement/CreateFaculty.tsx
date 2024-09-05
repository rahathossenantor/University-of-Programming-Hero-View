import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/ui/CustomForm";
import CustomField from "../../../components/ui/CustomField";
import CustomSelect from "../../../components/ui/CustomSelect";
import { bloodGroupOptions, designationOptions, genderOptions } from "../../../constants/userManagement.constants";
import CustomDatePicker from "../../../components/ui/CustomDatePicker";
import { useCreateFacultyMutation } from "../../../redux/features/admin/userManagement.api";
import { toast } from "sonner";
import uploadImage from "../../../utils/uploadImage";
import useAcademicDepartments from "../../../hooks/useAcademicDepartments";
import CustomUserFormLayoutWrapper from "../../../components/layout/CustomUserFormLayoutWrapper";

const CreateFaculty = () => {
    const { academicDepartmentOptions, isAcademicDepartmentLoading } = useAcademicDepartments();
    const [createFaculty] = useCreateFacultyMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Creating faculty...");

        if (!data.name.middleName) {
            data.name.middleName = "";
        };
        const faculty = {
            password: "faculty",
            faculty: data
        };

        try {
            const imgUrl = await uploadImage(data?.avatar);
            if (imgUrl) {
                faculty.faculty.avatar = imgUrl;
            } else {
                delete faculty.faculty.avatar;
            };

            const res = await createFaculty(faculty).unwrap();
            console.log(res);
            toast.success(res?.message, { id: toastId, duration: 2000 });
        } catch (err: any) {
            toast.error(err?.message || err?.data?.message, { id: toastId });
        };
    };

    return (
        <CustomUserFormLayoutWrapper>
            <CustomForm
                onSubmit={onSubmit}
            >
                <CustomForm.Title>Create Faculty</CustomForm.Title>

                <Divider>Personal Info</Divider>
                <Row gutter={10}>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomField
                            type="text"
                            label="First Name"
                            name="name.firstName"
                            isRequired
                        />
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomField
                            type="text"
                            label="Middle Name"
                            name="name.middleName"
                        />
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomField
                            type="text"
                            label="Last Name"
                            name="name.lastName"
                            isRequired
                        />
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomSelect
                            label="Select Gender"
                            name="gender"
                            options={genderOptions}
                            isRequired
                        />
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomSelect
                            label="Select Blood Group"
                            name="bloodGroup"
                            options={bloodGroupOptions}
                        />
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomSelect
                            label="Select Designation"
                            name="designation"
                            options={designationOptions}
                        />
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomDatePicker
                            label="Select Date of Birth"
                            name="dateOfBirth"
                            isRequired
                        />
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Controller
                            name="avatar"
                            render={({ field: { onChange, value, ...field } }) => (
                                <Form.Item label="Picture:">
                                    <Input
                                        {...field}
                                        value={value?.fileName}
                                        type="file"
                                        id="avatar"
                                        size="large"
                                        style={{ fontFamily: "Poppins" }}
                                        onChange={(e) => onChange(e.target.files?.[0])}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                </Row>

                <Divider>Contact Info</Divider>
                <Row gutter={10}>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomField
                            type="email"
                            label="Email"
                            name="email"
                            isRequired
                        />
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomField
                            type="text"
                            label="Contact No"
                            name="contactNo"
                            isRequired
                        />
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomField
                            type="text"
                            label="Emergency Contact No"
                            name="emergencyContactNo"
                            isRequired
                        />
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomField
                            type="text"
                            label="Present Address"
                            name="presentAddress"
                        />
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomField
                            type="text"
                            label="Permanent Address"
                            name="permanentAddress"
                            isRequired
                        />
                    </Col>
                </Row>
                <Divider>Academic Info</Divider>
                <Row gutter={10}>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomSelect
                            label="Select Academic Department"
                            name="academicDepartment"
                            options={academicDepartmentOptions!}
                            disabled={isAcademicDepartmentLoading}
                            isRequired
                        />
                    </Col>
                </Row>
                <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
            </CustomForm>
        </CustomUserFormLayoutWrapper>
    );
};

export default CreateFaculty;
