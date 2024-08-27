import { Button, Col, Flex } from "antd";
import CustomForm from "../../../components/ui/CustomForm";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomSelect from "../../../components/ui/CustomSelect";

const CreateAcademicFaculty = () => {
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <CustomForm
                    onSubmit={() => {}}
                    resolver={zodResolver({})}
                >
                    <div
                        style={{
                            width: "500px",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        <CustomForm.Title>Create Academic Faculty</CustomForm.Title>
                        <CustomSelect name="name" label="Faculty:" options={[]} />
                        <Button htmlType="submit" style={{ fontSize: "15px" }}>Submit</Button>
                    </div>
                </CustomForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicFaculty;
