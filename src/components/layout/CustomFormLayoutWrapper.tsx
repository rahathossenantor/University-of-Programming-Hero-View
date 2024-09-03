import { Col, Flex } from "antd";
import { ReactNode } from "react";

const CustomFormLayoutWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Flex justify="center" align="center">
            <Col xxl={{ span: 6 }} xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 12 }} span={24}>
                {children}
            </Col>
        </Flex>
    );
};

export default CustomFormLayoutWrapper;
