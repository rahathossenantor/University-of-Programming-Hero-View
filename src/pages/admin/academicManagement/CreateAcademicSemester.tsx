import { Button } from "antd";
import CustomForm from "../../../components/ui/CustomForm";
import CustomSelect from "../../../components/ui/CustomSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { monthOptions, semesterOptions, yearOptions } from "../../../constants/academicManagement.constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { toast } from "sonner";
import { useCreateAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import CustomFormLayoutWrapper from "../../../components/layout/CustomFormLayoutWrapper";
import { customFormStyle } from "../../../styles/global.styles";

const CreateAcademicSemester = () => {
    const [createAcademicSemester] = useCreateAcademicSemesterMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Createing academic semester...");
        const academicSemester = {
            name: semesterOptions[Number(data?.name) - 1]?.label,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        };

        try {
            const res = await createAcademicSemester(academicSemester).unwrap();
            toast.success(res?.message, { id: toastId });
        } catch (err: any) {
            toast.error(err?.data?.message, { id: toastId });
        };
    };

    return (
        <CustomFormLayoutWrapper>
            <CustomForm
                onSubmit={onSubmit}
                resolver={zodResolver(academicSemesterSchema)}
            >
                <div
                    style={customFormStyle}
                >
                    <CustomForm.Title>Create Academic Semester</CustomForm.Title>
                    <CustomSelect name="name" label="Semester" options={semesterOptions} isRequired />
                    <CustomSelect name="year" label="Year" options={yearOptions} isRequired />
                    <CustomSelect name="startMonth" label="Start Month" options={monthOptions} isRequired />
                    <CustomSelect name="endMonth" label="End Month" options={monthOptions} isRequired />
                    <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                </div>
            </CustomForm>
        </CustomFormLayoutWrapper>
    );
};

export default CreateAcademicSemester;
