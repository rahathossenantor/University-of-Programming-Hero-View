import { Button, Dropdown, MenuProps, Table, Tag } from "antd";
import { useUpdateSemesterRegistrationStatusMutation } from "../../../redux/features/admin/courseManagement.api";
import useSemesterRagistrations from "../../../hooks/useSemesterRagistrations";
import moment from "moment";
import { useState } from "react";
import { toast } from "sonner";

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
    const { semesterRegistrations: data, isSemesterRegistrationFetching } = useSemesterRagistrations([{ name: "sort", value: "createdAt" }]);
    const [updateSemesterRegistrationStatus] = useUpdateSemesterRegistrationStatusMutation();

    const semesterRegistrations = data?.data?.map(({ _id, academicSemester, status, startDate, endDate, minCredit, maxCredit }) => ({
        key: _id,
        name: `${academicSemester.name}-${academicSemester.year}`,
        status,
        startDate: moment(new Date(startDate)).format("DD MMMM, YYYY"),
        endDate: moment(new Date(endDate)).format("DD MMMM, YYYY"),
        minCredit,
        maxCredit,
    }));

    const handleSemesterRegistrationStatusChange = async (event: { key: string }) => {
        const toastId = toast.loading("Updating semester registration status...");
        const data = {
            id: semesterRegistrationId,
            data: {
                status: event.key,
            },
        };

        try {
            const res = await updateSemesterRegistrationStatus(data).unwrap();
            toast.success(res?.message, { id: toastId });
        } catch (err: any) {
            toast.error(err?.data?.message, { id: toastId });
        };
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
                let isDisabled = false;
                if (semesterRegistration.status === "ENDED") {
                    isDisabled = true;
                }

                return (
                    <Dropdown menu={menuProps} trigger={["click"]}>
                        <Button
                            disabled={isDisabled}
                            onClick={() => setSemesterRegistrationId(semesterRegistration.key)}
                        >Update Status</Button>
                    </Dropdown>
                );
            },
        },
    ];

    return (
        <Table
            loading={isSemesterRegistrationFetching}
            columns={columns}
            dataSource={semesterRegistrations}
        />
    );
};

export default SemesterRagistrations;
