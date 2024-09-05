import { Button } from "antd";
import CustomForm from "../../../components/ui/CustomForm";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomSelect from "../../../components/ui/CustomSelect";
import { academicFacultySchema } from "../../../schemas/academicManagement.schema";
import { facultyOptions } from "../../../constants/academicManagement.constants";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useCreateAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import CustomFormLayoutWrapper from "../../../components/layout/CustomFormLayoutWrapper";
import { customFormStyle } from "../../../styles/global.styles";

const CreateAcademicFaculty = () => {
    const [createAcademicFaculty] = useCreateAcademicFacultyMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Createing academic faculty...");

        try {
            const res = await createAcademicFaculty(data).unwrap();
            toast.success(res?.message, { id: toastId });
        } catch (err: any) {
            toast.error(err?.data?.message, { id: toastId });
        };
    };

    return (
        <CustomFormLayoutWrapper>
            <CustomForm
                onSubmit={onSubmit}
                resolver={zodResolver(academicFacultySchema)}
            >
                <div
                    style={customFormStyle}
                >
                    <CustomForm.Title>Create Academic Faculty</CustomForm.Title>
                    <CustomSelect
                        label="Select Faculty"
                        name="name"
                        options={facultyOptions}
                        isRequired
                    />
                    <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                </div>
            </CustomForm>
        </CustomFormLayoutWrapper>
    );
};

export default CreateAcademicFaculty;
