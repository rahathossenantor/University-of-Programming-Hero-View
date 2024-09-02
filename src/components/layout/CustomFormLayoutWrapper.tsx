import { Col, Flex } from "antd";
import { ReactNode } from "react";

const CustomFormLayoutWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Flex justify="center" align="center">
            <Col lg={{ span: 6 }} span={24}>
                {children}
            </Col>
        </Flex>
    );
};

export default CustomFormLayoutWrapper;
