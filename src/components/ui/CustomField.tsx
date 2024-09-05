import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TCustomFieldProps = {
    type: string;
    name: string;
    label: string;
    isRequired?: boolean;
};

const CustomField = ({ type, name, label, isRequired = false }: TCustomFieldProps) => {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) =>
                <Form.Item label={`${label}: ${isRequired ? "*" : ""}`}>
                    <Input
                        {...field}
                        type={type}
                        required={isRequired}
                        id={name}
                        size="large"
                        style={{ fontFamily: "Poppins" }}
                    />
                    {error && <small style={{ color: "red" }}>{error.message}</small>}
                </Form.Item>
            }
        />
    );
};

export default CustomField;
