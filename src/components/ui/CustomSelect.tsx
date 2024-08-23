import { Form, Select } from "antd";

const CustomSelect = ({ label }: { label: string }) => {
    return (
        <Form.Item label={label}>
            <Select
                defaultValue="lucy"
                style={{ width: "100%" }}
                options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                ]}
            />
        </Form.Item>
    );
};

export default CustomSelect;
