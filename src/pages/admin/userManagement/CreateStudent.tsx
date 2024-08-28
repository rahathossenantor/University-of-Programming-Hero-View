import { Button, Col, Divider, Row } from "antd";
import CustomForm from "../../../components/ui/CustomForm";
import CustomField from "../../../components/ui/CustomField";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomSelect from "../../../components/ui/CustomSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/userManagement.constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "../../../schemas/userManagement.schema";

const CreateStudent = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);

        // const formData = new FormData();
        // formData.append("data", JSON.stringify(data));
        // console.log(Object.fromEntries(formData));
    };

    return (
        <Row>
            <Col span={24}>
                <CustomForm
                    onSubmit={onSubmit}
                    resolver={zodResolver(studentSchema)}
                >
                    <CustomForm.Title>Create Studnt</CustomForm.Title>

                    <Divider>Personal Info</Divider>
                    <Row gutter={10}>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <CustomField type="text" label="First Name" name="name.firstName" isRequired />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <CustomField type="text" label="Middle Name" name="name.middleName" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <CustomField type="text" label="Last Name" name="name.lastName" isRequired />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <CustomSelect label="Gender" name="gender" options={genderOptions} isRequired />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <CustomSelect label="Blood Group" name="bloodGroup" options={bloodGroupOptions} isRequired />
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

                    <Divider>Parents Info</Divider>
                    <Row gutter={10}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Father's Name" name="parents.fatherName" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Father's Occupation" name="parents.fatherOccupation" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Father's Contact No" name="parents.fatherContactNo" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Mother's Name" name="parents.motherName" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Mother's Occupation" name="parents.motherOccupation" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Mother's Contact No" name="parents.motherContactNo" isRequired />
                        </Col>
                    </Row>

                    <Divider>Guardian Info</Divider>
                    <Row gutter={10}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Guardian's Name" name="guardian.name" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Guardian's Occupation" name="guardian.occupation" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Guardian's Contact No" name="guardian.contactNo" isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomField type="text" label="Guardian's Address" name="guardian.address" isRequired />
                        </Col>
                    </Row>

                    <Divider>Academic Info</Divider>
                    <Row gutter={10}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomSelect label="Academic Semester" name="academicSemester" options={[]} isRequired />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomSelect label="Academic Department" name="academicDepartment" options={[]} isRequired />
                        </Col>
                    </Row>

                    <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                </CustomForm>
            </Col>
        </Row>
    );
};

export default CreateStudent;
