import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

type TDataType = {
    key: React.Key;
    name: string;
    year: string;
    startMonth: string;
    endMonth: string;
};

const columns: TableColumnsType<TDataType> = [
    {
        title: "Semester",
        dataIndex: "name",
    },
    {
        title: "Year",
        dataIndex: "year",
    },
    {
        title: "Start Month",
        dataIndex: "startMonth",
    },
    {
        title: "End Month",
        dataIndex: "endMonth",
    },
];

const onChange: TableProps<TDataType>["onChange"] = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
};

const AcademicSemesters = () => {
    const { data } = useGetAllAcademicSemestersQuery(undefined);
    
    const academicSemesters = data?.data?.data.map(({ _id, name, year, startMonth, endMonth }) => ({
        key: _id,
        name,
        year,
        startMonth,
        endMonth,
    }))

    return (
        <Table
            columns={columns}
            dataSource={academicSemesters}
            onChange={onChange}
            showSorterTooltip={{ target: "sorter-icon" }}
        />
    );
};

export default AcademicSemesters;
