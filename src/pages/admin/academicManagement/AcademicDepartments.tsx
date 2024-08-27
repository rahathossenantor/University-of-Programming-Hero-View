import { Table } from "antd";
import { useGetAllAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";

const columns = [
    {
        title: "Department",
        dataIndex: "name"
    },
];

const AcademicDepartments = () => {
    const { data, isFetching } = useGetAllAcademicDepartmentsQuery(undefined);

    const academicDepartments = data?.data?.data.map(({ _id, name }) => ({
        key: _id,
        name
    }));

    return (
        <Table
            loading={isFetching}
            columns={columns}
            dataSource={academicDepartments}
        />
    );
};

export default AcademicDepartments;
