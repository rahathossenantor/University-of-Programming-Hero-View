import { Button, Col, Flex } from "antd";
import CustomForm from "../../../components/ui/CustomForm";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomSelect from "../../../components/ui/CustomSelect";
import { academicFacultySchema } from "../../../schemas/academicManagement.schema";
import { facultyOptions } from "../../../constants/academicManagement.constants";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useCreateAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";

const CreateAcademicFaculty = () => {
    const [createAcademicFaculty] = useCreateAcademicFacultyMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Createing academic faculty...");

        try {
            const res = await createAcademicFaculty(data).unwrap();
            toast.success(res?.message, { id: toastId });
        } catch (err: any) {
            toast.error(err?.data?.message, { id: toastId });
        }
    };

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <CustomForm
                    onSubmit={onSubmit}
                    resolver={zodResolver(academicFacultySchema)}
                >
                    <div
                        style={{
                            width: "500px",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        <CustomForm.Title>Create Academic Faculty</CustomForm.Title>
                        <CustomSelect name="name" label="Faculty" options={facultyOptions} />
                        <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                    </div>
                </CustomForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicFaculty;
