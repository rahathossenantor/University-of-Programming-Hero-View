import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomFormLayoutWrapper from "../../../components/layout/CustomFormLayoutWrapper";
import CustomForm from "../../../components/ui/CustomForm";
import useSemesterRagistrations from "../../../hooks/useSemesterRagistrations";
import CustomSelectWithWatch from "../../../components/ui/CustomSelectWithWatch";
import { Button } from "antd";
import { customFormStyle } from "../../../styles/global.styles";
import useCourses from "../../../hooks/useCourses";
import { useState } from "react";
import { useCreateOfferedCourseMutation, useGetFacultiesWithCourseQuery } from "../../../redux/features/admin/courseManagement.api";
import CustomSelect from "../../../components/ui/CustomSelect";
import { useGetFacultyQuery } from "../../../redux/features/admin/userManagement.api";
import CustomField from "../../../components/ui/CustomField";
import { dayOptions, sectionOptions } from "../../../constants/courseManagement.constants";
import CustomTimePicker from "../../../components/ui/CustomTimePicker";
import { toast } from "sonner";

const OfferCourse = () => {
    const [courseId, setCourseId] = useState("");
    const [facultyId, setFacultyId] = useState("");

    const { semesterRegistrationOptions, isSemesterRegistrationFetching } = useSemesterRagistrations([
        { name: "sort", value: "createdAt" },
        { name: "status", value: "ONGOING" },
    ]);
    const { coursesOptions, isCoursesFetching } = useCourses();
    const { data: facultiesWithCourse, isFetching: isFacultyFetching } = useGetFacultiesWithCourseQuery(
        courseId,
        { skip: !courseId }
    );
    const { data: faculty } = useGetFacultyQuery(
        facultyId,
        { skip: !facultyId }
    );
    const [createOfferedCourse] = useCreateOfferedCourseMutation();

    const facultyOptions = facultiesWithCourse?.data?.faculties?.map((faculty: any) => ({
        label: faculty.fullName,
        value: faculty._id,
    }));

    const academics: any = {};
    if (faculty) {
        academics.academicDepartment = faculty?.data?.academicDepartment?._id;
        academics.academicFaculty = faculty?.data?.academicFaculty?._id;
    };

    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Createing offered course...");
        const generateTime = (time: any) => (`${time.$H < 10 ? "0" : ""}${time.$H}:${time.$m < 10 ? "0" : ""}${time.$m}`);

        const offeredCourse = {
            ...academics,
            ...data,
            startTime: generateTime(data.startTime),
            endTime: generateTime(data.endTime),
            section: Number(data.section),
            maxCapacity: Number(data.maxCapacity),
        };

        try {
            const res = await createOfferedCourse(offeredCourse).unwrap();
            toast.success(res?.message, { id: toastId });
        } catch (err: any) {
            toast.error(err?.data?.message, { id: toastId });
        };
    };

    return (
        <CustomFormLayoutWrapper>
            <CustomForm onSubmit={handleSubmit}>
                <div style={customFormStyle}>
                    <CustomForm.Title>Offer Course</CustomForm.Title>
                    <CustomSelect
                        label="Select Semester Registration"
                        name="semesterRegistration"
                        options={semesterRegistrationOptions!}
                        disabled={isSemesterRegistrationFetching}
                        isRequired
                    />
                    <CustomSelectWithWatch
                        label="Select Course"
                        name="course"
                        options={coursesOptions!}
                        disabled={isCoursesFetching}
                        onSelect={setCourseId}
                        isRequired
                    />
                    <CustomSelectWithWatch
                        label="Select Faculty"
                        name="faculty"
                        options={facultyOptions!}
                        disabled={!courseId || isFacultyFetching}
                        onSelect={setFacultyId}
                        isRequired
                    />
                    <CustomSelect
                        label="Select days"
                        mode="multiple"
                        name="days"
                        options={dayOptions}
                        isRequired
                    />
                    <CustomTimePicker
                        label="Select Start Time"
                        name="startTime"
                        isRequired
                    />
                    <CustomTimePicker
                        label="Select End Time"
                        name="endTime"
                        isRequired
                    />
                    <CustomSelect
                        label="Select Section"
                        name="section"
                        options={sectionOptions}
                        isRequired
                    />
                    <CustomField
                        label="Max Capacity"
                        type="number"
                        name="maxCapacity"
                        isRequired
                    />
                    <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                </div>
            </CustomForm>
        </CustomFormLayoutWrapper>
    );
};

export default OfferCourse;
