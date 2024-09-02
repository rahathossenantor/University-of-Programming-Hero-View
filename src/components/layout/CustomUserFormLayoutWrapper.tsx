import { Col, Row } from "antd";
import { ReactNode } from "react";

const CustomUserFormLayoutWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Row>
            <Col span={24}>
                <div
                    style={{
                        padding: "20px",
                        margin: "0 5px",
                        border: "1px solid lightgray",
                        borderRadius: "10px",
                        marginBottom: "20px"
                    }}
                >
                    {children}
                </div>
            </Col>
        </Row>
    );
};

export default CustomUserFormLayoutWrapper;
