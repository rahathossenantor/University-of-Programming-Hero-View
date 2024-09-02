import { Button } from "antd";
import CustomFormLayoutWrapper from "../../../components/layout/CustomFormLayoutWrapper";
import CustomForm from "../../../components/ui/CustomForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomSelect from "../../../components/ui/CustomSelect";
import { codeOptions, courseOptions, prefixOptions } from "../../../constants/courseManagement.constants";
import useCourseOptions from "../../../hooks/useCourseOptions";
import CustomField from "../../../components/ui/CustomField";

const CreateCourse = () => {
    const { coursesOptions: preReqCoursesOptions, isCoursesLoading } = useCourseOptions();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const preRequisiteCourses = data.preRequisiteCourses.map((course: string) => ({
            course
        }));
        const course = {
            ...data,
            code: Number(data.code),
            credits: Number(data.credits),
            preRequisiteCourses,
        };
    };

    return (
        <CustomFormLayoutWrapper>
            <CustomForm
                onSubmit={onSubmit}
            >
                <div
                    style={{
                        width: "500px",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    <CustomForm.Title>Create Course</CustomForm.Title>
                    <CustomSelect name="name" label="Name" options={courseOptions} isRequired />
                    <CustomSelect mode="multiple" name="preRequisiteCourses" label="Pre Requisite Courses" options={preReqCoursesOptions!} disabled={isCoursesLoading} isRequired />
                    <CustomSelect name="prefix" label="Prefix" options={prefixOptions} isRequired />
                    <CustomSelect name="code" label="Code" options={codeOptions} isRequired />
                    <CustomField type="number" name="credits" label="Credits" isRequired />
                    <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                </div>
            </CustomForm>
        </CustomFormLayoutWrapper>
    );
};

export default CreateCourse;
