import { Divider } from "antd";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const LinkElement = ({ children, link, customStyles }: { children: ReactNode, link: string, customStyles?: React.CSSProperties }) => {
    return (
        <div style={{
            border: "1px solid lightgray",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            textAlign: "center",
            ...customStyles
        }}>
            <Link to={link}>{children}</Link>
        </div>
    );
};

const SectionWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {children}
        </div>
    );
};

const SectionHeader = ({ children }: { children: ReactNode }) => {
    return (
        <h3 style={{
            textAlign: "center",
            fontSize: "25px",
        }}>{children}</h3>
    );
};

const AdminDashboard = () => {
    return (
        <div>
            <SectionHeader>Manage Users</SectionHeader>
            <SectionWrapper>
                <LinkElement link="/admin/create-admin/">Create admin</LinkElement>
                <LinkElement link="/admin/create-faculty">Create faculty</LinkElement>
                <LinkElement link="/admin/create-student">Create student</LinkElement>
                <LinkElement link="/admin/students">See all students</LinkElement>
            </SectionWrapper>
            <Divider />

            <SectionHeader>Manage Academics</SectionHeader>
            <SectionWrapper>
                <LinkElement link="/admin/create-academic-department">Create academic department</LinkElement>
                <LinkElement link="/admin/create-academic-faculty">Create academic faculty</LinkElement>
                <LinkElement link="/admin/create-academic-semester">Create academic semester</LinkElement>
                <LinkElement link="/admin/academic-departments">See all academic departments</LinkElement>
                <LinkElement link="/admin/academic-faculties">See all academic faculties</LinkElement>
                <LinkElement link="/admin/academic-semesters">See all academic semesters</LinkElement>
            </SectionWrapper>
            <Divider />

            <SectionHeader>Manage Courses</SectionHeader>
            <SectionWrapper>
                <LinkElement link="/admin/create-semester-registration">Create semester registration</LinkElement>
                <LinkElement link="/admin/semester-registrations">See all semester registrations</LinkElement>
            </SectionWrapper>
        </div >
    );
};

export default AdminDashboard;
