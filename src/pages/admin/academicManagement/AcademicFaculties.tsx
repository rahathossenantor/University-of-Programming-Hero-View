import { Table, TableColumnsType } from "antd";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicFacultyRes } from "../../../types/academicMangement.types";

type TTableDataType = Partial<TAcademicFacultyRes> & {
    key: React.Key;
};

const columns: TableColumnsType<TTableDataType> = [
    {
        title: "Faculty",
        dataIndex: "name"
    },
];

const AcademicFaculties = () => {
    const { data, isFetching } = useGetAllAcademicFacultiesQuery(undefined);

    const academicFaculties = data?.data?.data.map(({ _id, name }) => ({
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
