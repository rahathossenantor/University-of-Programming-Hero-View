import { Button } from "antd";
import CustomForm from "../../../components/ui/CustomForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomSelect from "../../../components/ui/CustomSelect";
import { academicDepartmentSchema } from "../../../schemas/academicManagement.schema";
import { useCreateAcademicDepartmentMutation } from "../../../redux/features/admin/academicManagement.api";
import { departmentOptions } from "../../../constants/academicManagement.constants";
import { toast } from "sonner";
import useAcademicFacultyOptions from "../../../hooks/useAcademicFacultyOptions";
import CustomFormLayoutWrapper from "../../../components/layout/CustomFormLayoutWrapper";

const CreateAcademicDepartment = () => {
    const { academicFacultyOptions, isAcademicFacultyLoading } = useAcademicFacultyOptions();
    const [createAcademicDepartment] = useCreateAcademicDepartmentMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Createing academic department...");

        try {
            const res = await createAcademicDepartment(data).unwrap();
            toast.success(res?.message, { id: toastId });
        } catch (err: any) {
            toast.error(err?.data?.message, { id: toastId });
        };
    };

    return (
        <CustomFormLayoutWrapper>
            <CustomForm
                onSubmit={onSubmit}
                resolver={zodResolver(academicDepartmentSchema)}
            >
                <div
                    style={{
                        width: "500px",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    <CustomForm.Title>Create Academic Department</CustomForm.Title>
                    <CustomSelect name="name" label="Department" options={departmentOptions} isRequired />
                    <CustomSelect name="academicFaculty" label="Faculty" options={academicFacultyOptions!} disabled={isAcademicFacultyLoading} isRequired />
                    <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                </div>
            </CustomForm>
        </CustomFormLayoutWrapper>
    );
};

export default CreateAcademicDepartment;
