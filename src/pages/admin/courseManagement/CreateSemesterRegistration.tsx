import { Button } from "antd";
import CustomForm from "../../../components/ui/CustomForm";
import CustomSelect from "../../../components/ui/CustomSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import useAcademicSemesterOptions from "../../../hooks/useAcademicSemesterOptions";
import { statusOptions } from "../../../constants/courseManagement.constants";
import CustomDatePicker from "../../../components/ui/CustomDatePicker";
import CustomField from "../../../components/ui/CustomField";
import { useCreateSemesterRegistrationMutation } from "../../../redux/features/admin/courseManagement.api";
import { toast } from "sonner";
import CustomFormLayoutWrapper from "../../../components/layout/CustomFormLayoutWrapper";

const defaultSemesterRegistrationFormValues = {
    maxCredit: 12,
    minCredit: 6,
    status: "UPCOMING",
};

const CreateSemesterRegistration = () => {
    const { academicSemesterOptions, isAcademicSemesterLoading } = useAcademicSemesterOptions();
    const [createSemesterRegistration] = useCreateSemesterRegistrationMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Createing academic department...");
        const registeredSemester = {
            ...data,
            minCredit: Number(data.minCredit),
            maxCredit: Number(data.maxCredit),
        };

        try {
            const res = await createSemesterRegistration(registeredSemester).unwrap();
            toast.success(res?.message, { id: toastId });
        } catch (err: any) {
            toast.error(err?.data?.message, { id: toastId });
        };
    };

    return (
        <CustomFormLayoutWrapper>
            <CustomForm
                onSubmit={onSubmit}
                defaultValues={defaultSemesterRegistrationFormValues}
            >
                <div
                    style={{
                        width: "500px",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    <CustomForm.Title>Semester Registration</CustomForm.Title>
                    <CustomSelect name="academicSemester" label="Academic Semester" options={academicSemesterOptions!} disabled={isAcademicSemesterLoading} isRequired />
                    <CustomSelect name="status" label="Status" options={statusOptions} isRequired />
                    <CustomDatePicker name="startDate" label="Start Date" isRequired />
                    <CustomDatePicker name="endDate" label="End Date" isRequired />
                    <CustomField type="number" name="minCredit" label="Min Credit" isRequired />
                    <CustomField type="number" name="maxCredit" label="Max Credit" isRequired />
                    <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                </div>
            </CustomForm>
        </CustomFormLayoutWrapper>
    );
};

export default CreateSemesterRegistration;
