import { Button, Col, Flex } from "antd";
import CustomForm from "../../../components/ui/CustomForm";
import CustomSelect from "../../../components/ui/CustomSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { monthOptions, semesterOptions, yearOptions } from "../../../constants/academicManagement.constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { toast } from "sonner";
import { useCreateAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";

const CreateAcademicSemester = () => {
    const [createAcademicSemester] = useCreateAcademicSemesterMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const academicSemester = {
            name: semesterOptions[Number(data?.name) - 1]?.label,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        };

        try {
            const res = await createAcademicSemester(academicSemester).unwrap();
            toast.success(res?.message);
        } catch (err: any) {
            toast.error(err?.data?.message);
        }
    };

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <CustomForm
                    onSubmit={onSubmit}
                    resolver={zodResolver(academicSemesterSchema)}
                >
                    <div
                        style={{
                            width: "500px",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        <CustomForm.Title>Create Academic Semester</CustomForm.Title>
                        <CustomSelect name="name" label="Semester:" options={semesterOptions} />
                        <CustomSelect name="year" label="Year:" options={yearOptions} />
                        <CustomSelect name="startMonth" label="Start Month:" options={monthOptions} />
                        <CustomSelect name="endMonth" label="End Month:" options={monthOptions} />
                        <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                    </div>
                </CustomForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;
