import { Layout, Menu } from "antd";
import { adminSidebarItems } from "../../routes/admin.routes";

const { Sider } = Layout;

const Sidebar = () => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={adminSidebarItems} />
        </Sider>
    );
};

export default Sidebar;
