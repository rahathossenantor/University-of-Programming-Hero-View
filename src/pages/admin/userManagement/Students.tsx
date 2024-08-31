import { Button, Space, Table, TableColumnsType } from "antd";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";

const Students = () => {
    const { data, isFetching } = useGetAllStudentsQuery(undefined);

    const students = data?.data?.map(({ _id, id, avatar, fullName, gender, dateOfBirth, email, parents }) => ({
        key: _id,
        avatar,
        role: id,
        name: fullName,
        gender,
        dateOfBirth: new Date(dateOfBirth).toISOString().slice(0, 10),
        email,
        father: parents.fatherName,
    }));

    const columns: TableColumnsType<any> = [
        {
            title: "Image",
            render: (_, record) => (
                <img src={record.avatar} alt="avatar" style={{ width: 50, height: 50, borderRadius: "50%" }} />
            ),
            width: "1%",
        },
        {
            title: "Role",
            dataIndex: "role",
            width: "1%",
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
            title: "Father's name",
            dataIndex: "father",
        },
        {
            title: "Actions",
            render: (_, record) => (
                <Space>
                    <Button onClick={() => console.log(record.key)}>Details</Button>
                    <Button onClick={() => console.log(record.key)}>Update</Button>
                    <Button onClick={() => console.log(record.key)}>Block</Button>
                </Space>
            ),
            width: "1%",
        },
    ];

    return (
        <Table
            style={{ overflowY: "scroll" }}
            loading={isFetching}
            columns={columns}
            dataSource={students}
        />
    );
};

export default Students;
