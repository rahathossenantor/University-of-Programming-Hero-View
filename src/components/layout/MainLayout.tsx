import { Button, Layout, } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logoutUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const { Header, Content } = Layout;

const MainLayout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        toast.success("Logout successful!", { duration: 2000 });
        navigate("/login");
    };

    return (
        <Layout
            style={{
                height: "100%"
            }}
        >
            <Sidebar />
            <Layout>
                <Header style={{ padding: 0, display: "flex", alignItems: "center", justifyContent: "end" }} ><Button onClick={handleLogout} style={{ marginRight: "15px" }}>Logout</Button></Header>
                <Content style={{ margin: "24px 16px 0" }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
