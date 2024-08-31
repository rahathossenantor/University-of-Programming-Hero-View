import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/ui/CustomForm";
import CustomField from "../../../components/ui/CustomField";
import CustomSelect from "../../../components/ui/CustomSelect";
import { bloodGroupOptions, designationOptions, genderOptions } from "../../../constants/userManagement.constants";
import CustomDatePicker from "../../../components/ui/CustomDatePicker";
import { useGetAllAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";

const defaultFacultyFormValues = {
    name: {
        firstName: "Muntasir",
        middleName: "Ahmed",
        lastName: "Talukdar"
    },
    // dateOfBirth: "2014-05-12",
    gender: "Male",
    bloodGroup: "O-",
    designation: "Assistant Professor",
    email: "muntasir.ahmed@gmail.com",
    contactNo: "+8801986523489",
    emergencyContactNo: "+8801986523489",
    presentAddress: "Shiddhirganj, Narayanganj, Bangladesh.",
    permanentAddress: "Mirsharai, Chattogram, Bangladesh.",
};

const CreateFaculty = () => {
    const { data: academicDepartments, isLoading: isAcademicDepartmentLoading } = useGetAllAcademicDepartmentsQuery(undefined);
    const academicDepartmentOptions = academicDepartments?.data?.map(academicDepartment => ({
        label: academicDepartment.name,
        value: academicDepartment._id,
    }));

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    };

    return (
        <Row>
            <Col span={24}>
                <CustomForm
                    onSubmit={onSubmit}
                    defaultValues={defaultFacultyFormValues}
                >
                    <CustomForm.Title>Create Faculty</CustomForm.Title>

                    <Divider>Personal Info</Divider>
                    <Row gutter={10}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="First Name" name="name.firstName" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Middle Name" name="name.middleName" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Last Name" name="name.lastName" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomSelect label="Gender" name="gender" options={genderOptions} isRequired={true} />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomSelect label="Blood Group" name="bloodGroup" options={bloodGroupOptions} />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomSelect label="Designation" name="designation" options={designationOptions} />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomDatePicker label="Date of Birth" name="dateOfBirth" isRequired={true} />
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
                            <CustomField type="email" label="Email" name="email" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Contact No" name="contactNo" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Emergency Contact No" name="emergencyContactNo" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Present Address" name="presentAddress" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Permanent Address" name="permanentAddress" isRequired />
                        </Col>
                    </Row>
                    <Divider>Academic Info</Divider>
                    <Row gutter={10}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomSelect label="Academic Department" name="academicDepartment" options={academicDepartmentOptions!} disabled={isAcademicDepartmentLoading} isRequired />
                        </Col>
                    </Row>
                    <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                </CustomForm>
            </Col>
        </Row>
    );
};

export default CreateFaculty;
