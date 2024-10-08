import { Table, TableColumnsType } from "antd";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";

const columns: TableColumnsType<any> = [
    {
        title: "Faculty",
        dataIndex: "name",
    },
];

const AcademicFaculties = () => {
    const { data, isFetching } = useGetAllAcademicFacultiesQuery(undefined);

    const academicFaculties = data?.data?.map(({ _id, name }) => ({
        key: _id,
        name
    }));

    return (
        <Table
            loading={isFetching}
            columns={columns}
            dataSource={academicFaculties}
        />
    );
};

export default AcademicFaculties;
