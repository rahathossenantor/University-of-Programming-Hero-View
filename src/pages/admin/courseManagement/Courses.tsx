import { Button, Modal, Table, Tag } from "antd";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";
import { useState } from "react";
import CustomForm from "../../../components/ui/CustomForm";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement.api";
import CustomSelect from "../../../components/ui/CustomSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";

type TCourseTableItem = {
    key: string;
    name: string;
    prefix: string;
    code: string;
};

const Courses = () => {
    const { data, isFetching } = useGetAllCoursesQuery([{ name: "sort", value: "createdAt" }]);

    const courses = data?.data?.map(({ _id, name, prefix, code }) => ({
        key: _id,
        name,
        prefix,
        code,
    }));

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Prefix",
            dataIndex: "prefix",
            render: (prefix: string) => (
                <Tag>{prefix}</Tag>
            ),
        },
        {
            title: "Code",
            dataIndex: "code",
            render: (code: string) => (
                <Tag>{code}</Tag>
            ),
        },
        {
            title: "Actions",
            render: (course: TCourseTableItem) => (<AssignFaculties course={course} />),
        },
    ];

    return (
        <Table
            loading={isFetching}
            columns={columns}
            dataSource={courses}
        />
    );
};

const AssignFaculties = ({ course }: { course: TCourseTableItem }) => {
    const { data, isLoading } = useGetAllFacultiesQuery(undefined);
    const facultyOptions = data?.data?.map(({ _id, fullName }) => ({
        label: fullName,
        value: _id,
    }));

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
        const courseId = course.key;
        console.log(courseId);
        console.log(data);
    };

    return (
        <>
            <Button onClick={showModal}>
                Assign Faculties
            </Button>
            <Modal title="Assign Faculties" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <CustomForm onSubmit={handleSubmit}>
                    <CustomSelect mode="multiple" name="faculties" label="Select Faculties" disabled={isLoading} options={facultyOptions!} isRequired />
                    <div style={{ display: "flex", justifyContent: "flex-end" }}><Button htmlType="submit" style={{ fontSize: "15px" }}>Assign</Button></div>
                </CustomForm>
            </Modal>
        </>
    );
};

export default Courses;
