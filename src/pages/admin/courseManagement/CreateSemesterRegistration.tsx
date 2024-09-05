import { Button } from "antd";
import CustomForm from "../../../components/ui/CustomForm";
import CustomSelect from "../../../components/ui/CustomSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import useAcademicSemesters from "../../../hooks/useAcademicSemesters";
import CustomDatePicker from "../../../components/ui/CustomDatePicker";
import CustomField from "../../../components/ui/CustomField";
import { useCreateSemesterRegistrationMutation } from "../../../redux/features/admin/courseManagement.api";
import { toast } from "sonner";
import CustomFormLayoutWrapper from "../../../components/layout/CustomFormLayoutWrapper";
import { customFormStyle } from "../../../styles/global.styles";

const defaultSemesterRegistrationFormValues = {
    maxCredit: 12,
    minCredit: 6,
    status: "UPCOMING",
};

const CreateSemesterRegistration = () => {
    const { academicSemesterOptions, isAcademicSemesterFetching } = useAcademicSemesters();
    const [createSemesterRegistration] = useCreateSemesterRegistrationMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Createing academic department...");
        const registeredSemester = {
            ...data,
            status: "UPCOMING",
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
                    style={customFormStyle}
                >
                    <CustomForm.Title>Semester Registration</CustomForm.Title>
                    <CustomSelect
                        name="academicSemester"
                        label="Select Academic Semester"
                        options={academicSemesterOptions!}
                        disabled={isAcademicSemesterFetching}
                        isRequired
                    />
                    <CustomDatePicker
                        name="startDate"
                        label="Start Date"
                        isRequired
                    />
                    <CustomDatePicker
                        name="endDate"
                        label="End Date"
                        isRequired
                    />
                    <CustomField
                        type="number"
                        name="minCredit"
                        label="Min Credit"
                        isRequired
                    />
                    <CustomField
                        type="number"
                        name="maxCredit"
                        label="Max Credit"
                        isRequired
                    />
                    <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                </div>
            </CustomForm>
        </CustomFormLayoutWrapper>
    );
};

export default CreateSemesterRegistration;
