import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemesterRes } from "../../../types/academicMangement.types";
import { useState } from "react";
import { TQueryParam } from "../../../types/types.global";
import { semesterYearFilterOptions } from "../../../constants/academicManagement.constants";

type TTableDataType = Partial<TAcademicSemesterRes> & {
    key: React.Key;
};

const columns: TableColumnsType<TTableDataType> = [
    {
        title: "Semester",
        dataIndex: "name",
        filters: [
            {
                text: "Autumn",
                value: "Autumn"
            },
            {
                text: "Summer",
                value: "Summer"
            },
            {
                text: "Fall",
                value: "Fall"
            },
        ]
    },
    {
        title: "Year",
        dataIndex: "year",
        filters: semesterYearFilterOptions
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

const AcademicSemesters = () => {
    const [queryParams, setQueryParams] = useState<TQueryParam[]>([]);
    const { data, isFetching } = useGetAllAcademicSemestersQuery(queryParams);

    const academicSemesters = data?.data?.data.map(({ _id, name, year, startMonth, endMonth }) => ({
        key: _id,
        name,
        year,
        startMonth,
        endMonth,
    }));

    const onChange: TableProps<TTableDataType>["onChange"] = (_pagination, filters, _sorter, extra) => {
        const params: TQueryParam[] = [];

        if (extra.action === "filter") {
            filters.name?.forEach(value => params.push({
                name: "name",
                value
            }));

            filters.year?.forEach(value => params.push({
                name: "year",
                value
            }));

            setQueryParams(params);
        }
    };

    return (
        <Table
            loading={isFetching}
            columns={columns}
            dataSource={academicSemesters}
            onChange={onChange}
            showSorterTooltip={{ target: "sorter-icon" }}
        />
    );
};

export default AcademicSemesters;
