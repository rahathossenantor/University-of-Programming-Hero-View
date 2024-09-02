import { Button, Table } from "antd";
import { useGetAllSemesterRegistrationsQuery } from "../../../redux/features/admin/courseManagement.api";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Status",
        dataIndex: "status",
    },
    {
        title: "Start Date",
        dataIndex: "startDate",
    },
    {
        title: "End Date",
        dataIndex: "endDate",
    },
    {
        title: "Min Credit",
        dataIndex: "minCredit",
    },
    {
        title: "Max Credit",
        dataIndex: "maxCredit",
    },
    {
        title: "Actions",
        render: () => (
            <Button>Update</Button>
        ),
    },
];

const SemesterRagistrations = () => {
    const { data, isFetching } = useGetAllSemesterRegistrationsQuery([{ name: "sort", value: "createdAt" }]);

    const semesterRegistrations = data?.data?.map(({ _id, academicSemester, status, startDate, endDate, minCredit, maxCredit }) => ({
        key: _id,
        name: `${academicSemester.name}-${academicSemester.year}`,
        status,
        startDate: new Date(startDate).toISOString().slice(0, 10),
        endDate: new Date(endDate).toISOString().slice(0, 10),
        minCredit,
        maxCredit,
    }));

    return (
        <Table
            loading={isFetching}
            columns={columns}
            dataSource={semesterRegistrations}
        />
    );
};

export default SemesterRagistrations;
