import { Button, Dropdown, MenuProps, Table, Tag } from "antd";
import { useGetAllSemesterRegistrationsQuery } from "../../../redux/features/admin/courseManagement.api";
import moment from "moment";
import { useState } from "react";

const items: MenuProps["items"] = [
    {
        label: "Ongoing",
        key: "ONGOING",
    },
    {
        label: "Ended",
        key: "ENDED",
    },
];

const SemesterRagistrations = () => {
    const [semesterRegistrationId, setSemesterRegistrationId] = useState("");

    const { data, isFetching } = useGetAllSemesterRegistrationsQuery([{ name: "sort", value: "createdAt" }]);

    const semesterRegistrations = data?.data?.map(({ _id, academicSemester, status, startDate, endDate, minCredit, maxCredit }) => ({
        key: _id,
        name: `${academicSemester.name}-${academicSemester.year}`,
        status,
        startDate: moment(new Date(startDate)).format("DD MMMM, YYYY"),
        endDate: moment(new Date(endDate)).format("DD MMMM, YYYY"),
        minCredit,
        maxCredit,
    }));

    const handleSemesterRegistrationStatusChange = (event: { key: string }) => {
        const data = {
            id: semesterRegistrationId,
            data: {
                status: event.key,
            },
        };
        console.log(data);
    };
    const menuProps = {
        items,
        onClick: handleSemesterRegistrationStatusChange,
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (status: string) => {
                let color: string = "";
                if (status === "UPCOMING") {
                    color = "blue";
                } else if (status === "ONGOING") {
                    color = "green";
                } else if (status === "ENDED") {
                    color = "red";
                }

                return <Tag color={color}>{status}</Tag>
            },
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
            render: (semesterRegistration: any) => {
                return (
                    <Dropdown menu={menuProps} trigger={["click"]}>
                        <Button
                            onClick={() => setSemesterRegistrationId(semesterRegistration.key)}
                        >Update Status</Button>
                    </Dropdown>
                );
            },
        },
    ];

    return (
        <Table
            loading={isFetching}
            columns={columns}
            dataSource={semesterRegistrations}
        />
    );
};

export default SemesterRagistrations;
