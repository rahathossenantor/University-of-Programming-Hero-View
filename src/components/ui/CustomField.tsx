import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TCustomFieldProps = {
    type: string;
    name: string;
    label: string;
};

const CustomField = ({ type, name, label }: TCustomFieldProps) => {
    return (
        <Controller
            name={name}
            render={({ field }) =>
                <Form.Item label={label}>
                    <Input
                        {...field}
                        type={type}
                        id={name}
                        size="large"
                        style={{ fontSize: "15px" }}
                    />
                </Form.Item>
            }
        />
    );
};

export default CustomField;
