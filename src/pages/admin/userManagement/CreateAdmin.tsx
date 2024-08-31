import { Button, Col, Divider, Form, Input, Row } from "antd";
import CustomForm from "../../../components/ui/CustomForm";
import CustomField from "../../../components/ui/CustomField";
import CustomSelect from "../../../components/ui/CustomSelect";
import CustomDatePicker from "../../../components/ui/CustomDatePicker";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { bloodGroupOptions, designationOptions, genderOptions } from "../../../constants/userManagement.constants";

const defaultAdminFormValues = {
    name: {
        firstName: "Gias Uddin",
        middleName: "Ahamed",
        lastName: "Talukder"
    },
    // dateOfBirth: "1963-03-01",
    gender: "Male",
    bloodGroup: "O+",
    designation: "Professor",
    email: "giasuddin@gmail.com",
    contactNo: "+8801733774338",
    emergencyContactNo: "+8801733774338",
    presentAddress: "Adarsha Nagar, Middle Badda, Dhaka-1212, Bangladesh.",
    permanentAddress: "Char Afzal, Bibir Hat-3732, Ramagati, Lakshmipur, Bangladesh.",
};

const CreateAdmin = () => {
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
    };

    return (
        <Row>
            <Col span={24}>
                <CustomForm
                    onSubmit={onSubmit}
                    defaultValues={defaultAdminFormValues}
                >
                    <CustomForm.Title>Create Admin</CustomForm.Title>

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
                    <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                </CustomForm>
            </Col>
        </Row>
    );
};

export default CreateAdmin;
