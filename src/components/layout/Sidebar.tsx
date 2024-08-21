import { Layout, Menu } from "antd";
import { TRole } from "../../types/types.global";
import { adminSidebarItems } from "../../routes/admin.routes";
import { facultySidebarItems } from "../../routes/faculty.routes";
import { studentSidebarItems } from "../../routes/student.routes";

const { Sider } = Layout;

const userRoles = {
    SUPER_ADMIN: "super-admin",
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
};

const Sidebar = () => {
    // implement sidebar items based on role
    const role: TRole = "admin";
    let sidebarItems;
    switch (role) {
        case userRoles.ADMIN:
            sidebarItems = adminSidebarItems;
            break;
        case userRoles.FACULTY:
            sidebarItems = facultySidebarItems;
            break;
        case userRoles.STUDENT:
            sidebarItems = studentSidebarItems;
            break;
    
        default:
            break;
    };

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
        >
            <div
                className="demo-logo-vertical"
                style={{
                    color: "white",
                    height: "calc(4rem - 5px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1>University</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;
