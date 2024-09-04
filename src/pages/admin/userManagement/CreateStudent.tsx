import { Button, Col, Divider, Form, Input, Row } from "antd";
import CustomForm from "../../../components/ui/CustomForm";
import CustomField from "../../../components/ui/CustomField";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import CustomSelect from "../../../components/ui/CustomSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/userManagement.constants";
import CustomDatePicker from "../../../components/ui/CustomDatePicker";
import { useCreateStudentMutation } from "../../../redux/features/admin/userManagement.api";
import { toast } from "sonner";
import uploadImage from "../../../utils/uploadImage";
import useAcademicSemesters from "../../../hooks/useAcademicSemesters";
import useAcademicDepartments from "../../../hooks/useAcademicDepartments";
import CustomUserFormLayoutWrapper from "../../../components/layout/CustomUserFormLayoutWrapper";

const CreateStudent = () => {
    const { academicDepartmentOptions, isAcademicDepartmentLoading } = useAcademicDepartments();
    const { academicSemesterOptions, isAcademicSemesterLoading } = useAcademicSemesters();
    const [createStudent] = useCreateStudentMutation();

    // upload data on the server (server image upload)
    // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    //     const toastId = toast.loading("Creating student...");

    //     const studentFormData = new FormData();
    //     const student = {
    //         password: "student",
    //         student: data
    //     };
    //     delete student.student.avatar;

    //     try {
    //         studentFormData.append("file", data?.avatar);
    //         studentFormData.append("data", JSON.stringify(student));
    //         const res = await createStudent(studentFormData).unwrap();
    //         toast.success(res?.message, { id: toastId, duration: 2000 });
    //     } catch (err: any) {
    //         toast.error(err?.message || err?.data?.message, { id: toastId });
    //     };
    // };

    // upload data on the server (client image upload)
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Creating student...");

        if (!data.name.middleName) {
            data.name.middleName = "";
        };
        const student = {
            password: "student",
            student: data
        };

        try {
            const imgUrl = await uploadImage(data?.avatar);
            if (imgUrl) {
                student.student.avatar = imgUrl;
            } else {
                delete student.student.avatar;
            }

            const res = await createStudent(student).unwrap();
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
                <CustomForm.Title>Create Student</CustomForm.Title>

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
                        <CustomSelect label="Academic Department" name="academicDepartment" options={academicDepartmentOptions!} disabled={isAcademicDepartmentLoading} isRequired />
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <CustomSelect label="Academic Semester" name="academicSemester" options={academicSemesterOptions!} disabled={isAcademicSemesterLoading} isRequired />
                    </Col>
                </Row>

                <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
            </CustomForm>
        </CustomUserFormLayoutWrapper>
    );
};

export default CreateStudent;
