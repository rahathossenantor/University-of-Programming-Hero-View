import { Layout, Menu } from "antd";
import { TUser } from "../../types/types.global";
import { adminSidebarItems } from "../../routes/admin.routes";
import { facultySidebarItems } from "../../routes/faculty.routes";
import { studentSidebarItems } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { Navigate } from "react-router-dom";
import verifyToken from "../../utils/verifyToken";

const { Sider } = Layout;

const userRoles = {
    SUPER_ADMIN: "super-admin",
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
};

const Sidebar = () => {
    // implement sidebar items based on role
    const { token } = useAppSelector((state) => state.auth);

    if (!token) {
        return <Navigate to="/login" replace />;
    };

    const user = verifyToken(token);
    const role = (user! as TUser).role;
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
            style={{
                height: "100vh",
                position: "sticky",
                top: 0,
                zIndex: 10,
            }}
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={sidebarItems as (ItemType<MenuItemType>[] | undefined)} />
        </Sider>
    );
};

export default Sidebar;
