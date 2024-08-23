import { Button, Col, Flex } from "antd";
import CustomField from "../../../components/ui/CustomField";
import CustomForm from "../../../components/ui/CustomForm";
import CustomSelect from "../../../components/ui/CustomSelect";

const CreateAcademicSemester = () => {
    const onSubmit = () => {};

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <CustomForm onSubmit={onSubmit}>
                    <div
                        style={{
                            width: "500px",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        <CustomField label="Name:" type="text" name="name" />
                        <CustomSelect label="Name:" />
                        <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                    </div>
                </CustomForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;
