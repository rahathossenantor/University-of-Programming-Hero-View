import { Button, Pagination, Space, Table, TableColumnsType } from "antd";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Students = () => {
    const [page, setPage] = useState(1);
    const { data, isFetching } = useGetAllStudentsQuery([
        { name: "page", value: page },
        { name: "sort", value: "id" },
    ]);

    const students = data?.data?.map(({ _id, id, avatar, fullName, gender, dateOfBirth, email }) => ({
        key: _id,
        avatar,
        role: id,
        name: fullName,
        gender,
        dateOfBirth: moment(new Date(dateOfBirth)).format("DD MMMM, YYYY"),
        email,
    }));
    const metaData = data?.meta;

    const columns: TableColumnsType<any> = [
        {
            title: "Image",
            render: (student) => (
                <img src={student.avatar} alt="avatar" style={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover" }} />
            ),
            width: "1%",
        },
        {
            title: "Role",
            dataIndex: "role",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Gender",
            dataIndex: "gender",
        },
        {
            title: "Date of birth",
            dataIndex: "dateOfBirth",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Actions",
            render: (student) => (
                <Space>
                    <Link to={`student-details/${student?.key}`}>
                        <Button>Details</Button>
                    </Link>
                    <Button>Update</Button>
                    <Button>Block</Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table
                style={{ overflowY: "scroll" }}
                loading={isFetching}
                columns={columns}
                dataSource={students}
                pagination={false}
            />
            <Pagination
                current={page}
                onChange={(pg) => setPage(pg)}
                pageSize={metaData?.limit}
                total={metaData?.totalDocs}
            />
        </>
    );
};

export default Students;
